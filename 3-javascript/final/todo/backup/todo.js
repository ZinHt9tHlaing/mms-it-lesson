// data, state

const tasks = [];

// CRUD
// Create
export const addTask = (taskName) => {
  tasks.push({
    id: Date.now(),
    taskName,
  });
};

// Read
export const getTasks = () => {
  return tasks;
};

// တစ်ခုချင်းယူ
export const getTask = (id) => {
  return tasks.find((task) => task.id === id);
};

// Delete
export const removeTask = (id) => {
  const currentIndex = tasks.findIndex((task) => task.id === id);
  tasks.splice(currentIndex, 1);
};
