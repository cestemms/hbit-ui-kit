import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaBell } from 'react-icons/fa';

import {TopMenu}  from '../src';

storiesOf('TopMenu', module)
  .add('Default', () => <TopMenu>Default</TopMenu>)
  .add('Active', () => <TopMenu active>Active</TopMenu>)
  .add('WithIcon', () => <TopMenu icon={<FaBell/>}>With Icon</TopMenu>);




