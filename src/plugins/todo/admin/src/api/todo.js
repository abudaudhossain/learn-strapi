import { request } from "@strapi/helper-plugin";

const todoRequest = {
  getAllTodos: async () => {
    return await request("/todo/finds", {
      method: "GET",
    });
  },
  getTodoById: async (id) => {
    return await request(`/todo/finds/${id}`, {
      method: "GET",
    });
  },

  createTodo: async (data) => {
    return await request("/todo/create", {
      method: "POST",
      body: { data: data },
    });
  },

  update: async (id, data) => {
    return await request(`/todo/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },
  toggele: async (id) => {
    return await request(`/todo/toggel/${id}`, {
      method: "PUT",
    });
  },
  delete: async (id) => {
    return await request(`/todo/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default todoRequest;
