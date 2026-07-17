import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NotificationCenter() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unread, setUnread] = useState(0);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/notifications', { params: { filter, sort, page } })
      .then(res => { setNotifications(res.data.items); setTotal(res.data.total); });
  }, [filter, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <NotificationActions
        onMarkRead={() => {}}
        onMarkUnread={() => {}}
        onDelete={() => {}}
        onExport={handleExport}
        onPrint={handlePrint}
        onShare={() => {}}
        onSettings={() => {}}
        onClear={() => {}}
      />
      <button onClick={() => setFilter('unread')}>Unread</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setFilter(e.target.value)} />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

function NotificationActions(props: any) { return <div>NotificationActions</div>; }
export default NotificationCenter;