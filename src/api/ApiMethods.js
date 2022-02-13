import Client from "./ApiBase";

export async function login(data) {
  try {
    const result = await Client.post("login", { ...data });
    console.log(result);
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

export async function getStudentById(id) {
  const user = await Client.get(`student/${id}`);
  return user.data;
}

export async function deleteStudent(id) {
  const user = await Client.delete(`student/${id}`);
  return user.data;
}
