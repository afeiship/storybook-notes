import React from 'react';
import Button from './components/button';

export default class extends React.Component {
  render() {
    return (
      <div className="hello">
        <h1>Hello world!</h1>
        <p>It works!</p>
        <Button>TEST button</Button>
      </div>
    );
  }
}
