import Client from "./ApiBase";

// api call method example
export async function getAllUsers() {
  const users = await Client.get("users");
  return users.data;
}

// api call method example with params
export async function getUserById(id) {
  const user = await Client.get(`users/${id}`);
  return user.data;
}
