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
    englishName: 'Adam West',
    englishPosition: 'Mayor',
    phone: '11111111111111',
    avatarUrl: '',
    isMember: true
  },
  {
    id: 13,
    englishName: 'PC Principal',
    englishPosition: 'Principal',
    phone: '22223333333333',
    avatarUrl:
      'https://test.boardapp.cometrica.ru/api/images/avatar-prefix-n01-0280f410-a4a7-11e9-b6be-d16c47595f9b/0280f410-a4a7-11e9-b6be-d16c47595f9b-Pc%2Bprincipal%2Bbrah%2Bjust%2Bout%2Bof%2Bcuriosity%2Bwhat%2Bare%2Byour_c20788_5720727%5B2%5D.jpg',
    isMember: false
  },
  {
    id: 12,
    englishName: 'Pikachu',
    englishPosition: 'pokemon',
    phone: '22222222222',
    avatarUrl:
      'https://test.boardapp.cometrica.ru/api/images/avatar-prefix-n01-f7e68270-a7e1-11e9-8ee7-074937da2554/f7e68270-a7e1-11e9-8ee7-074937da2554-Pokemon1.png',
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
