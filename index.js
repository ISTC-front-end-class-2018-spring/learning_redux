const {store} = require('./js/store');
const {addTodo} = require('./js/actions/add_todo');
const {increaseCounter} = require('./js/actions/increase_counter');


const myF = () => {
  console.log('HEY');
}

console.log(store.getState());
store.dispatch(addTodo('Eat'));
store.dispatch(increaseCounter(store.getState().counter));
console.log(store.getState());
