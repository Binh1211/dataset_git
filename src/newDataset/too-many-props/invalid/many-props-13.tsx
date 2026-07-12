import React, { useEffect, useState } from 'react';

interface Props {
  url: string;
  method: 'GET' | 'POST';
  headers: Record<string, string>;
  body: any;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  timeout: number;
  retries: number;
  retryDelay: number;
  showLoader: boolean;
}

export const ManyProps13 = ({ url, method, headers, body, onSuccess, onError, timeout, retries, retryDelay, showLoader }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { method, headers, body });
        const data = await res.json();
        if (mounted) onSuccess(data);
      } catch (err) {
        if (mounted) onError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, [url, method, headers, body, onSuccess, onError]);
  return <div>{showLoader && loading && <p>Loading...</p>}</div>;
};