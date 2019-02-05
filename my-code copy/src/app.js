import React from 'react';
import ReactDOM from 'react-dom';
import MainBox from './components/MainBox';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <main>
        <MainBox />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
