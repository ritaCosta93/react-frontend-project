import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Rita Costa',
      image:
        'https://randompicturegenerator.com/img/people-generator/g46638da7d9fae46cb50dc26d959a149ef956bff7e1189235e2bee80fbf56290364961e0f0d07154835a0c90054d9462d_640.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
