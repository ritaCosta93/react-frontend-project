import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Rita Costa',
      image:
        'https://randompicturegenerator.com/img/people-generator/g5d8c66cb0f69f011ab5315c6e3b29c5250a2c59f03c9fb0136a638b1bb9b2d20172975768ce3425bde4d664b712ace74_640.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
