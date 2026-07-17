import React, { useContext, useReducer } from 'react';

const AppContext = React.createContext({ theme: 'light', dispatch: (action: any) => {} });

interface Props {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  views: number;
  isPinned: boolean;
}

export const ManyProps12 = ({ id, title, body, author, date, tags, likes, comments, shares, views, isPinned }: Props) => {
  const { theme } = useContext(AppContext);
  return <div style={{ color: theme === 'light' ? '#000' : '#fff' }}>{title}</div>;
};

export const Usage12 = () => (
  <ManyProps12
    id="1"
    title="Post"
    body="Content"
    author="John"
    date="2024-01-01"
    tags={['a', 'b']}
    likes={10}
    comments={5}
    shares={2}
    views={100}
    isPinned={true}
  />
);