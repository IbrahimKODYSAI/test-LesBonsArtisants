// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
// == Composant
const App = () => (
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <Home />
    </main>
    <footer>
      footer
    </footer>
  </div>
);

// == Export
export default App;
