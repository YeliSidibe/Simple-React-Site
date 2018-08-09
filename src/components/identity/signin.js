import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';

export class signin extends Component {

  render() {
    return (
      <div>
        Log In Page
      </div>
    );
  }
}

signin.propTypes = {
    
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(signin);
