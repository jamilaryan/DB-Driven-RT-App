import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase/';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

// localstorage disabled on TodoApi.jsx
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      id: text[0],
      lastname: text[1],
      firstname: text[2],
      address: text[3],
      phone: text[4],
      email: text[5],
      plan: text[6],
      description: text[7],
      doc: text[8],
      recording: text[9],
      // completed: false,
      createdAt: moment().unix(),
      // completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
    // id: todos[0],
    // name: todos[1],
    // sirname: todos[2],
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
