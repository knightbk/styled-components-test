import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  div {
    font-size: 14px;
  }
  .App-header {
    font-size: 20px;
  }
  a {
  color: red;
  }
`;

function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppContainer>
  );
}

export default App;
