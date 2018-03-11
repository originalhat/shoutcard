import {
  incrementCounter,
  decrementCounter,
  updateName
} from './AppActions';

test('#incrementCounter', () => {
  expect(incrementCounter()).toEqual({type: 'INCREMENT_COUNTER'});
});

test('#decrementCounter', () => {
  expect(decrementCounter()).toEqual({type: 'DECREMENT_COUNTER'});
});

test("#updateName", () => {
  expect(updateName({name: 'Bill Burr'})).toEqual({type: 'UPDATE_NAME', name: 'Bill Burr'})
});