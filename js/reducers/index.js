const initialState = {
  todos: [],
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.payload]};
    case 'INCREASE':
      return {...state, counter: action.payload}
    default:
      return state;
  }
};

module.exports = {
  rootReducer
}