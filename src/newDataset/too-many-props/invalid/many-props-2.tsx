import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

interface Props {
  title: string;
  subtitle: string;
  body: string;
  imageUrl: string;
  alt: string;
  author: string;
  date: string;
  likes: number;
  shares: number;
  comments: number;
  isPublished: boolean;
}

export const ManyProps2 = ({ title, subtitle, body, imageUrl, alt, author, date, likes, shares, comments, isPublished }: Props) => {
  const theme = useContext(ThemeContext);
  return <div style={{ color: theme === 'light' ? '#000' : '#fff' }}>{title}</div>;
};

export const Usage2 = () => (
  <ManyProps2
    title="Hello"
    subtitle="World"
    body="Content"
    imageUrl="img.jpg"
    alt="alt"
    author="John"
    date="2024-01-01"
    likes={10}
    shares={5}
    comments={3}
    isPublished={true}
  />
);