import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaBell } from 'react-icons/fa';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Outlined', () => <Button outlined>Outlined</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('Rounded', () => <Button rounded>Rounded</Button>)
  .add('NewBackColor', () => <Button backgroundColor="#888" color="#555">Background</Button>)
  .add('Transparent', () => <Button transparent icon={<FaBell/>}/>);




