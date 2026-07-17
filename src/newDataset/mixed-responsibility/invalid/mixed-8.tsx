import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Mixed8 = ({ userId }: { userId: number }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.put(`/api/users/${userId}`, { age: 30 }).then(res => setProfile(res.data));
  }, [userId]);

  return <div>{profile ? 'Updated' : 'Updating'}</div>;
};