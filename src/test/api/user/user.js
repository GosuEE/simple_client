import instance from "../core/axios";

async function getUser() {
  const response = await instance.get(`/api/user`);
  return response;
}

async function submitUser(user) {
  const response = await instance.post("/api/user", user);
  return response;
}

async function updateUser(user) {
  const response = await instance.patch("/api/user", user);
  return response;
}

async function deleteUser(id) {
  const response = await instance.delete("/api/user", {data:{id: id*1}});
  return response;
}

export const userAPI = {
  getUser,
  submitUser,
  updateUser,
  deleteUser,
};
