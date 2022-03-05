const basicItems = [];

const studentItems = [
  {
    name: "Home",
    icon: "fas fa-book-open",
    path: "/student",
  },
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
  {
    name: "sidebar.attendanceRemarks",
    icon: "fas fa-pen",
    path: "/attendance",
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

const superAdminItems = [
  {
    name: "Admins",
    icon: "fas fa-user",
    path: "/admins",
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
    name: "sidebar.parallels",
    icon: "fas fa-project-diagram",
    path: "/parallels",
  },
  {
    name: "sidebar.subjectsBoard",
    icon: "fas fa-book-open",
    path: "/subjects-board",
  },
  {
    name: "sidebar.courses",
    icon: "fas fa-tasks",
    path: "/courses",
  },
];
export { basicItems, studentItems, superAdminItems, adminItems, teacherItems };
