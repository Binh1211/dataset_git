import React, { useState, useEffect } from 'react';

export const ManyStates11 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // fetch data
  }, [page, pageSize]);
  return <div>{data.length}{loading}{error}{page}{pageSize}{total}</div>;
};