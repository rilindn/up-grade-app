import Client from "./ApiBase";

export async function login(data) {
  try {
    const result = await Client.post("login", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function logout() {
  try {
    const result = await Client.post("logout");
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getLoggedUser() {
  try {
    const result = await Client.get("loggedUser");
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getAllStudents() {
  const users = await Client.get("student");
  return users.data;
}

export async function getNotAssignedStudents(search) {
  const searchValue = search || "";
  const users = await Client.get(`student/non-assigned?search=${searchValue}`);
  return users.data;
}

export async function paginationStudents(page, search) {
  const searchValue = search || "";
  const users = await Client.get(
    `student/filter?page=${page}&search=${searchValue}`
  );
  return users.data;
}

export async function getStudentById(id) {
  const user = await Client.get(`student/${id}`);
  return user.data;
}

export async function registerStudent(data) {
  try {
    const result = await Client.post("student", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateStudent(id, data) {
  try {
    const result = await Client.put(`student/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteStudent(id) {
  const user = await Client.delete(`student/${id}`);
  return user.data;
}

export async function registerStaff(data) {
  try {
    const result = await Client.post("staff", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function registerAdmin(data) {
  try {
    const result = await Client.post("admin", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getStudentsByGender() {
  const gender = await Client.get("student/gender");
  return gender.data;
}

//Classes methods

export async function getAllClasses() {
  const classes = await Client.get("class");
  return classes.data;
}

export async function addClass(data) {
  try {
    const result = await Client.post("class", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function addClassParallel(data, id) {
  try {
    const result = await Client.post(`class/add-parallel/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateClass(id, data) {
  try {
    const result = await Client.put(`class/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteClass(id) {
  const classroom = await Client.delete(`class/${id}`);
  return classroom.data;
}

//Subject method

export async function getAllSubjects(search) {
  const searchValue = search || "";
  const subjects = await Client.get(`subject?search=${searchValue}`);
  return subjects.data;
}

export async function addSubject(data) {
  try {
    const result = await Client.post("subject", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateSubject(id, data) {
  try {
    const result = await Client.put(`subject/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteSubject(id) {
  const subject = await Client.delete(`subject/${id}`);
  return subject.data;
}

//Teacher methods

export async function getAllStaff() {
  const staff = await Client.get(`staff`);
  return staff.data;
}

export async function paginationStaff(page, search) {
  const searchValue = search || "";
  const staff = await Client.get(
    `staff/filter?page=${page}&search=${searchValue}`
  );
  return staff.data;
}

export async function updateStaff(id, data) {
  try {
    const result = await Client.put(`staff/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteStaff(id) {
  const staff = await Client.delete(`staff/${id}`);
  return staff.data;
}

//Admin methods

export async function getAllAdmins() {
  const admins = await Client.get("admin");
  return admins.data;
}

export async function updateAdmin(id, data) {
  try {
    const result = await Client.put(`admin/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteAdmin(id) {
  const admins = await Client.delete(`admin/${id}`);
  return admins.data;
}

//Courses methods

export async function getAllCourses(search) {
  const searchValue = search || "";
  const courses = await Client.get(`course?search=${searchValue}`);
  return courses.data;
}

export async function getParallelNonAssignedCourses(parallelId) {
  const courses = await Client.get(`course/non-assigned/${parallelId}`);
  return courses.data;
}

export async function addCourse(data) {
  try {
    const result = await Client.post("course", { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateCourse(id, data) {
  try {
    const result = await Client.put(`course/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteCourse(id) {
  const staff = await Client.delete(`course/${id}`);
  return staff.data;
}

// Parallels

export async function getAllParallels(search) {
  const searchValue = search || "";
  const parallels = await Client.get(`parallel?search=${searchValue}`);
  return parallels.data;
}

export async function getParallel(id) {
  const parallel = await Client.get(`parallel/${id}`);
  return parallel.data;
}

export async function getParallelStudents(id) {
  const students = await Client.get(`parallel/students/${id}`);
  return students.data;
}

export async function getParallelCourses(id) {
  const courses = await Client.get(`parallel/courses/${id}`);
  return courses.data;
}

export async function getNonAssignedParallels() {
  const parallels = await Client.get(`parallel/non-assigned`);
  return parallels.data;
}

export async function getTeacherParallelCourses(parallelId, teacherId) {
  const parallels = await Client.get(
    `parallel/teacher/${parallelId}/${teacherId}`
  );
  return parallels.data;
}

export async function getTeacherParallels(teacherId) {
  const parallels = await Client.get(`parallel/teacher/${teacherId}`);
  return parallels.data;
}

export async function newParallel(data) {
  try {
    const result = await Client.post(`parallel`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateParallel(id, data) {
  try {
    const result = await Client.put(`parallel/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function addClassStudent(data, id) {
  try {
    const result = await Client.post(`parallel/add-student/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function addClassCourse(data, id) {
  try {
    const result = await Client.post(`parallel/add-course/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteStudentParallel(data) {
  try {
    const result = await Client.post(`parallel/delete-student`, {
      ...data,
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteParallelCourse(data) {
  try {
    const result = await Client.post(`parallel/delete-course`, {
      ...data,
    });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteParallel(id) {
  const parallel = await Client.delete(`parallel/${id}`);
  return parallel.data;
}

// grades

export async function getStudentGrades(studentId) {
  const grades = await Client.get(`grades/${studentId}`);
  return grades.data;
}

export async function getStudentsGPA(studentId) {
  const gpa = await Client.get(`grades/gpa/${studentId}`);
  return gpa.data;
}

export async function getStudentGradesByCourse(studentId, courseId) {
  const grades = await Client.get(`grades/${studentId}/${courseId}`);
  return grades.data;
}

export async function editStudentGrades(id, data) {
  try {
    const result = await Client.put(`grades/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// preferences

export async function editAvatarColor(id, data) {
  try {
    const result = await Client.put(`user/avatar/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function editPassword(id, data) {
  try {
    const result = await Client.put(`user/password/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function editLanguage(id, data) {
  try {
    const result = await Client.put(`user/lang/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// schedule

export async function getParallelsSchedule(parallelId) {
  const schedule = await Client.get(`schedule/${parallelId}`);
  return schedule.data;
}

export async function getStudentSchedule(id) {
  const schedule = await Client.get(`schedule/student/${id}`);
  return schedule.data;
}

export async function getTeacherSchedule(id) {
  const schedule = await Client.get(`schedule/teacher/${id}`);
  return schedule.data;
}

export async function setParallelsSchedule(data) {
  try {
    const result = await Client.post(`schedule`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function addScheduleHour(data) {
  try {
    const result = await Client.post(`schedule/add-hour`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function updateScheduleHour(data) {
  try {
    const result = await Client.put(`schedule/update-hour`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function deleteScheduleHour(data) {
  try {
    const result = await Client.put(`schedule/delete-hour`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}
