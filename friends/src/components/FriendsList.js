import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddForm from './AddForm';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.error(err));
  });

  return (
    <div>
      <AddForm />
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
