import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withMarkdownNotes } from '@storybook/addon-notes';

import { BrowserRouter as Router } from 'react-router-dom';

import { UsersTable } from 'storybook-example';

require('storybook-example/dist/lib.css');

const users = [
  {
    id: 14,
    englishName: 'Hello World',
    englishPosition: 'Adam West',
    phone: '11111111111111',
    avatarUrl: '',
    isMember: true
  },
  {
    id: 13,
    englishName: 'new1',
    englishPosition: 'new11',
    phone: '22223333333333',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-f3b64fc0-8dd6-11e9-8742-e1c0a227e48e/f3b64fc0-8dd6-11e9-8742-e1c0a227e48e-2019-04-25%2023.33.10.jpg',
    isMember: false
  },
  {
    id: 12,
    englishName: 'Vannessa',
    englishPosition: 'newm',
    phone: '22222222222',
    avatarUrl:
      'http://localhost:3000/api/images/avatar-prefix-n01-2cb6da20-8dc7-11e9-8fb6-410410f818a4/2cb6da20-8dc7-11e9-8fb6-410410f818a4-Favicon%20bapp.png',
    isMember: true
  }
];

storiesOf('UsersTable', module)
  .add('isFetching', () => <UsersTable isFetching={true} users={[]} />, {
    notes: {
      markdown: `
  ## isFetching
  ~~~~ 
  import { UsersTable } from 'storybook-example'; 

  const users = []

  <UsersTable 
    isFetching={true} 
    users={users}
  /> 
  ~~~~ 
  `
    }
  })
  .add(
    'withUsers',
    () => (
      <Router>
        <UsersTable isFetching={false} users={users} />
      </Router>
    ),
    {
      notes: {
        markdown: `
  ## withUsers
  ~~~~ 
  import { UsersTable } from 'storybook-example'; 

  const users = ${JSON.stringify(users, null, 2)}

  <UsersTable 
    isFetching={false} 
    users={users}
  /> 
  ~~~~ 
  `
      }
    }
  )
  .add(
    'canDelete',
    () => (
      <Router>
        <UsersTable canDelete={true} users={users} showMinimal={true} />
      </Router>
    ),
    {
      notes: {
        markdown: `
  ## canDelete
  ~~~~ 
  import { UsersTable } from 'storybook-example'; 

  const users = ${JSON.stringify(users, null, 2)}
  
  <UsersTable 
     canDelete={true} 
     users={users} 
     showMinimal={true} 
  />
  ~~~~ 
  `
      }
    }
  );
