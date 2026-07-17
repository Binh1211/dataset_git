import React, { useState, useEffect } from 'react';

interface Props {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  city: string;
  country: string;
  postalCode: string;
}

export const ManyProps1 = ({ id, name, age, email }: Props) => {
  const [user, setUser] = useState({ id, name, age });
  useEffect(() => {
    document.title = `${name} - ${id}`;
  }, [name, id]);
  return <div>{user.name}</div>;
};

// Usage with >7 props
export const Usage1 = () => (
  <ManyProps1
    id="1"
    name="John"
    age={30}
    email="john@example.com"
    phone="1234567890"
    city="New York"
    country="USA"
    postalCode="10001"
  />
);

