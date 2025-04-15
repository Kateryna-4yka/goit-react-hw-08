import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: loadFromLocalStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ text: action.payload, completed: false });
      saveToLocalStorage(state.items);
    },
    toggleTask: (state, action) => {
      const task = state.items[action.payload];
      if (task) {
        task.completed = !task.completed;
        saveToLocalStorage(state.items);
      }
    },
    deleteTask: (state, action) => {
      state.items.splice(action.payload, 1);
      saveToLocalStorage(state.items);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
