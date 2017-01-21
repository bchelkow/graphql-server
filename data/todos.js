import _ from 'lodash';

function createTodos(count) {
  return _.chain(count)
    .range()
    .map((element) => ({
      id: _.uniqueId('server_task_'),
      title: `task-${element}`,
      task: `task-${element} description`,
      done: element % 2 === 0,
    }))
    .value();
}

export default createTodos(20);
