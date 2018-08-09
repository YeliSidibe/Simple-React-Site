import React from 'react';
import {Link} from 'react-router';
export default class Home extends React.Component {
  render() {
    return (
      <main role="main">      
          <div className="container">
              <h1>MobIt Admin</h1>
              <p>React, Redux and react router ultra responsive</p>
              <Link to="about" className="btn btn-primary btn-lg">Learn More About MobIt</Link>
          </div>
      </main>
    );
  }
}
