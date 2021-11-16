import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './src/store/Counter';
import reducer from './src/store/reducer';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
