import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { LOAD_USERS } from '../graphql/Queries';

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {users.map((val) => {
        return <h1 key={val.id}>{val.firstName}</h1>;
      })}
    </div>
  );
}

export default GetUsers;