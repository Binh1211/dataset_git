import React, { useState } from 'react';

export const ManyStates5 = () => {
  const [user, setUser] = useState({ id: 1, name: 'Alice' });
  const [posts, setPosts] = useState<{ title: string }[]>([]);
  const [comments, setComments] = useState<string[]>([]);
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [views, setViews] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  return <div>{user.name}{posts.length}{comments.length}{likes}{shares}{views}{isPublished}{tags.length}{category}{errorMsg}</div>;
};