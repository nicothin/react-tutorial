import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'link',
  onClick: () => {},
}

class App extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log('Клик был');
  }

  render() {
    return (
      <div>
        <MyLink onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
