import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('CardComponent')
  .add('CardWithText', () => {
    return <Card>Text</Card>;
  })
  .add('CardWithImage', () => {
    return (
      <Card>
        <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
        <p>Pictures</p>
      </Card>
    );
  });
