import React, { memo } from 'react';

interface Props {
  name: string;
  age: number;
  city: string;
  country: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  position: string;
  salary: number;
  bonus: number;
  department: string;
}

const ManyProps10 = memo(({ name, age, city, country, email, phone, website, company, position, salary, bonus, department }: Props) => {
  return (
    <div>
      {name} - {age} - {city}
    </div>
  );
});
ManyProps10.defaultProps = {
  city: 'Unknown',
  country: 'Unknown',
};
export default ManyProps10;