import React, { useState } from 'react';

export const ManyStates3 = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);
  const [city, setCity] = useState('NYC');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('US');
  return <div>{name}{age}{city}{email}{phone}{address}{zip}{country}</div>;
};