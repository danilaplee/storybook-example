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
    id: 3,
    englishName: 'Anton Tsar',
    englishPosition: 'QA Director. QA Executive Officer',
    russianName: 'Антон Царь',
    russianPosition: 'Тостер',
    phone: '79676474764',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-f43ba2d0-8b59-11e9-908c-31b2bccb7676/f43ba2d0-8b59-11e9-908c-31b2bccb7676-f4c23bd0-8080-11e9-9609-e349b77dd534-photo_2019-05-24_19-51-25.jpg',
    isMember: false
  },
  {
    id: 5,
    englishName: 'danila',
    englishPosition: 'Corporate Development and Human Resources Director',
    russianName: 'danila',
    russianPosition: 'dev',
    phone: '79260349022',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-f4cc9830-8b59-11e9-9b82-e504e5afe89f/f4cc9830-8b59-11e9-9b82-e504e5afe89f-eae29cd0-5f6b-11e9-91a3-3b9e5d31fd15-Screenshot%25202019-04-12%2520at%252013.39.42.png',
    isMember: false
  },
  {
    id: 8,
    englishName: 'Ivan',
    englishPosition: 'iOS',
    russianName: 'Иван',
    russianPosition: 'йОС',
    phone: '79652849095',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-f5332230-8b59-11e9-a675-b9aa79e113ab/f5332230-8b59-11e9-a675-b9aa79e113ab-462e2a20-808f-11e9-9609-e349b77dd534-userpic.png',
    isMember: false
  },
  {
    id: 10,
    englishName: 'Mikhail Gramenitskiy',
    englishPosition: 'Developer',
    russianName: 'Михаил Граменицкий',
    russianPosition: 'Разработчик',
    phone: '79253582239',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-f5641d40-8b59-11e9-9b82-e504e5afe89f/f5641d40-8b59-11e9-9b82-e504e5afe89f-66a0d9e0-5ff3-11e9-9661-25e36b4a9cb8-s1200.png',
    isMember: false
  },
  {
    id: 5,
    englishName: 'Anton Tsaregorodtsev',
    englishPosition: 'QA Principal Department in Fortnite Technologies LTD',
    russianName: 'Антон Царегородцев',
    russianPosition: 'Тестировщик',
    tamtam: '',
    email: '',
    phone: '77777777',
    avatarUrl:
      'https://test.boardapp.cometrica.ru/api/images/avatar-prefix-n01-5ab92390-6a88-11e9-8d50-a709f84033e1/5ab92390-6a88-11e9-8d50-a709f84033e1-IMG_7709.JPG',
    isMember: true
  },
  {
    id: 11,
    englishName: 'bapp',
    englishPosition: 'ct1',
    russianName: 'бапп',
    russianPosition: 'ст1',
    tamtam: null,
    email: null,
    phone: '0000000000000',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-938e7c00-8d66-11e9-8476-d9e1a3e46c01/938e7c00-8d66-11e9-8476-d9e1a3e46c01-Favicon%20bapp.png',
    isMember: true
  },
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
    id: 15,
    englishName: 'hiv',
    englishPosition: 'hhh',
    russianName: 'hiv',
    russianPosition: 'hhhh',
    tamtam: null,
    email: null,
    phone: '76575765765757',
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
    englishName: 'newm',
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

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

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
