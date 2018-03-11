import {rootReducer} from './AppReducers';
import {incrementCounter, decrementCounter, updateName} from '../actions/AppActions';

describe('AppReducers', () => {
  test('returns the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({"name": "", "counter": 0})
  });

  test('returns the next state for incrementCounter', () => {
    expect(rootReducer({counter: 0}, incrementCounter())).toEqual({counter: 1, name: ''});
  });

  test('returns the next state for decrementCounter', () => {
    expect(rootReducer({counter: 0}, decrementCounter())).toEqual({counter: -1, name: ''});
  });

  test('returns the next state for updateName', () => {
    expect(rootReducer(undefined, updateName({
      name: 'Bill Burr'
    }))).toEqual({
      name: 'Bill Burr',
      counter: 0
    })
  });
});