import React, { useState } from 'react';

export const ManyStates17 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={phone} onChange={e => setPhone(e.target.value)} />
      <input value={address} onChange={e => setAddress(e.target.value)} />
      <input value={city} onChange={e => setCity(e.target.value)} />
      <input value={zip} onChange={e => setZip(e.target.value)} />
    </form>
  );
};