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

export async function getAllSubjects() {
  const subjects = await Client.get("subject");
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
  const staff = await Client.get("staff");
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
