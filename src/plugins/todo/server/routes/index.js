module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/finds",
    handler: "todo.find",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/finds/:id",
    handler: "todo.findOne",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "todo.create",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/update/:id",
    handler: "todo.update",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/toggel/:id",
    handler: "todo.toggel",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "todo.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
];
