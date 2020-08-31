import React from 'react';
import './App.css';
import WeakestLink from "./WeakestLink/WeakestLink";

class App extends React.Component {
  render() {
    return (
        <div className="app-menu">
          <div className="weakest-link">
            <WeakestLink />
          </div>
        </div>
    )
  }
}

export default App;
