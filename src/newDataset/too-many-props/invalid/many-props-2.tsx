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