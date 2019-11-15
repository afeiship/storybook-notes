import React from 'react';
import Button from '.';
import { action } from '@storybook/addon-actions';
import '@/assets/styles.global.css';

export default { title: 'Button' };
export const ButtonWithText = () => {
  return <Button onClick={action('clicked')}>My Text</Button>;
};

export const ButtonWithClassName = () => {
  return <Button className="is-active">My Button with className</Button>;
};
