import React from 'react';
import Button from '.';
import '@/assets/styles.global.css';

export default { title: 'Button' };
export const ButtonWithText = () => {
  return <Button>My Text</Button>;
};

export const ButtonWithClassName = () => {
  return <Button className="is-active">My Button with className</Button>;
};
