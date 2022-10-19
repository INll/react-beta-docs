import { useReducer } from 'react';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'edited',
      id: nextId++,
      text: text,
    });
  }
}