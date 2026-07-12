import React from 'react';

interface User {
  id: number;
  name: string;
}
interface Props {
  user: User;
  posts: string[];
  onAdd: (post: string) => void;
  onDelete: (id: number) => void;
  loading: boolean;
  error?: string;
  refetch: () => void;
}

export const FewProps4 = ({ user, posts, onAdd, onDelete, loading, error, refetch }: Props) => {
  return (
    <div>
      <h1>{user.name}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};