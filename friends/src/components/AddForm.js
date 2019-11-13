import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const AddForm = () => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      axiosWithAuth().post('/api/friends', friend);
      setFriend({
        ...friend,
        name: '',
        age: '',
        email: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        value={friend.name}
        placeholder="Friend's Name"
        onChange={handleChange}
      />
      <input
        type='text'
        name='age'
        value={friend.age}
        placeholder="Friend's Age"
        onChange={handleChange}
      />
      <input
        type='text'
        name='email'
        value={friend.email}
        placeholder="Friend's email"
        onChange={handleChange}
      />
      <button type='submit'>Add Friend!</button>
    </form>
  );
};

export default AddForm;
