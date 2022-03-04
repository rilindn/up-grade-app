<template>
  <Wrapper>
    <div class="stats">
      <StatisticsSection>
        <router-link to="Students">
          <Statistics
            icon="fad fa-user-graduate"
            :statistic="students"
            field="Students"
          />
        </router-link>
        <router-link to="Teachers">
          <Statistics
            icon="fad fa-chalkboard-teacher"
            :statistic="staff"
            field="Teachers"
          />
        </router-link>
        <router-link to="Classes">
          <Statistics
            icon="fad fa-users-class"
            :statistic="classes"
            field="Classes"
          />
        </router-link>
        <router-link to="Parallels">
          <Statistics
            icon="fas fa-project-diagram"
            :statistic="parallels"
            field="Parallels"
          />
        </router-link>
      </StatisticsSection>
    </div>
    <Chart>
      <SingeChart>
        <h2 class="display-5">Users stat</h2>
        <em>New students registered in past 6 months.</em>
        <AreaChart :chartData="chartData" />
      </SingeChart>
      <GendersChart
        :gendersCount="gendersCount"
        :gendersChartData="gendersChartData"
      />
    </Chart>
  </Wrapper>
</template>
<script>
import Statistics from "@/components/admin/statistics";
import {
  Wrapper,
  StatisticsSection,
  Chart,
  SingleChart,
} from "./Dashboard.styles";
import AreaChart from "@/components/charts/Area";
import {
  getAllStaff,
  getAllStudents,
  getAllClasses,
  getAllParallels,
  getStudentsByGender,
} from "../../api/ApiMethods";

import GendersChart from "@/components/admin/GendersChart";

export default {
  components: {
    Wrapper,
    Statistics,
    StatisticsSection,
    AreaChart,
    GendersChart,
    Chart,
    SingleChart,
  },
  data() {
    return {
      staff: 0,
      students: 0,
      classes: 0,
      parallels: 0,
      gendersCount: {},
      gendersChartData: [],
      chartData: [
        { Month: "Jan", Nr: 1000, avg: 500, inc: 300 },
        { Month: "Feb", Nr: 2000, avg: 900, inc: 400 },
        { Month: "Apr", Nr: 400, avg: 400, inc: 500 },
        { Month: "Mar", Nr: 3100, avg: 1300, inc: 700 },
        { Month: "May", Nr: 200, avg: 100, inc: 200 },
        { Month: "Jun", Nr: 600, avg: 400, inc: 300 },
        { Month: "Jul", Nr: 500, avg: 90, inc: 100 },
      ],
    };
  },
  async beforeCreate() {
    const staff = await getAllStaff();
    this.staff = staff.length;
    const students = await getAllStudents();
    this.students = students.length;
    const classes = await getAllClasses();
    this.classes = classes.length;
    const parallels = await getAllParallels();
    this.parallels = parallels.length;
    const gendersCount = await getStudentsByGender();
    this.gendersCount = gendersCount;
    this.gendersChartData = [
      { Gender: "Male", Nr: gendersCount.male, avg: 900, inc: 400 },
      {
        Gender: "Female",
        Nr: gendersCount.female,
        avg: 500,
        inc: 300,
      },
    ];
  },
};
</script>
