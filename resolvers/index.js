import findIndex from 'lodash/findIndex';
import uniqueId from 'lodash/uniqueId';
import { getCountries } from '../connectors/countries';
import todos from '../data/todos';

export default {
  Query: {
    countries() {
      return getCountries();
    },
    todos() {
      return todos;
    }
  },
  Mutation: {
    createTodo(root, { title, task }) {
      const todo = {
        id: uniqueId('client_task_'),
        title,
        task,
        done: false,
      };
      todos.push(todo);
      return todo;
    },
    checkTodo(root, { title }) {
      const index = findIndex(todos, { title });
      if (index === -1) {
        return null;
      }
      todos[index] = {
        ...todos[index],
        done: true,
      };
      return todos[index];
    },
  },
};
