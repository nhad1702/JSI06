import React from 'react';
import UserItem from './UserItem';
import { Grid } from '@nextui-org/react';
import { Users } from '../mockData';

const UserContain = () => {
  return [
    <Grid.Container gap={2}>
      {Users.map((userObject) => {
        return [<Grid xs={4} key={userObject.id}>
          <UserItem userData={userObject} />
        </Grid>
        ];
      })}
    </Grid.Container>
  ]
}

export default UserContain;