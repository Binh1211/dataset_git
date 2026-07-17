import React, { memo } from 'react';

interface Props {
  name: string;
  age: number;
  city?: string;
  country?: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  position: string;
  salary: number;
  bonus: number;
  department: string;
}

function ManyProps10Component({
  name,
  age,
  city = 'Unknown',
  country = 'Unknown',
  email,
  phone,
  website,
  company,
  position,
  salary,
  bonus,
  department,
}: Props) {
  return (
    <div>
      {name} - {age} - {city}
    </div>
  );
}

const ManyProps10 = memo(ManyProps10Component);
export default ManyProps10;

export const Usage10 = () => (
  <ManyProps10
    name="Alice"
    age={25}
    city="London"
    country="UK"
    email="alice@example.com"
    phone="123"
    website="example.com"
    company="Acme"
    position="Developer"
    salary={50000}
    bonus={5000}
    department="Engineering"
  />
);