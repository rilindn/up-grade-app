const basicItems = [
  {
    name: "sidebar.home",
    icon: "fa fa-home",
    path: "/",
  },
  {
    name: "sidebar.about",
    icon: "fa fa-book",
    path: "/about",
  },
 
];

const studentItems = [
  {
    name: "sidebar.schedule",
    icon: "fas fa-calendar-day",
    path: "/schedule",
  },
  {
    name: "sidebar.gradesBoard",
    icon: "fas fa-book-open",
    path: "/grades-board",
  },
];

const teacherItems = [
  {
    name: "sidebar.schedule",
    icon: "fas fa-calendar-day",
    path: "/teacher-schedule",
  },
  {
    name: "sidebar.myClasses",
    icon: "fas fa-users-class",
    path: "/teacher-classes",
  },
];

const adminItems = [
  {
    name: "sidebar.dashboard",
    icon: "fad fa-user-chart",
    path: "/admin",
  },
  {
    name: "Teachers",
    icon: "fas fa-chalkboard-teacher",
    path: "/teachers",
  },
  {
    name: "Students",
    icon: "fas fa-user-graduate",
    path: "/students",
  },
  {
    name: "sidebar.classes",
    icon: "fas fa-users-class",
    path: "/classes",
  },
  {
    name: "sidebar.subjectsBoard",
    icon: "fas fa-book-open",
    path: "/subjects-board",
  },
];



export { basicItems, studentItems, adminItems, teacherItems };
