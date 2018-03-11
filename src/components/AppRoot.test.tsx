import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './AppRoot';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name='foo' counter={1} handleIncrement={()=>{}} handleDecrement={()=>{}} handleUpdateName={()=>{}} />, div);
});
