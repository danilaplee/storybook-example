import React from 'react';
import ReactDom from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import * as reactStrap from 'react-bootstrap';

import { Button, Welcome } from '@storybook/react/demo';

import { BrowserRouter as Router } from 'react-router-dom';

const lib = require('../dist/lib.js');

const { UsersTable } = lib;

require('../dist/lib.css');

const users = [
  {
    id: 14,
    englishName: 'Hello World',
    englishPosition: 'Adam West',
    russianName: 'Hello World',
    russianPosition: 'Adam West',
    tamtam: null,
    email: null,
    phone: '11111111111111',
    avatarUrl: '',
    isMember: true
  },
  {
    id: 13,
    englishName: 'new1',
    englishPosition: 'new11',
    russianName: 'new1',
    russianPosition: 'new1',
    tamtam: null,
    email: null,
    phone: '22223333333333',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-f3b64fc0-8dd6-11e9-8742-e1c0a227e48e/f3b64fc0-8dd6-11e9-8742-e1c0a227e48e-2019-04-25%2023.33.10.jpg',
    isMember: true
  },
  {
    id: 12,
    englishName: 'Vannessa',
    englishPosition: 'newm',
    russianName: 'newm',
    russianPosition: 'newm',
    tamtam: null,
    email: null,
    phone: '22222222222',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-2cb6da20-8dc7-11e9-8fb6-410410f818a4/2cb6da20-8dc7-11e9-8fb6-410410f818a4-Favicon%20bapp.png',
    isMember: true
  }
];

storiesOf('UsersTable', module)
  .add('isFetching', () => <UsersTable isFetching={true} users={[]} />)
  .add('withUsers', () => (
    <Router>
      <UsersTable isFetching={false} users={users} />
    </Router>
  ))
  .add('canDelete', () => (
    <Router>
      <UsersTable canDelete={true} users={users} showMinimal={true} />
    </Router>
  ));
