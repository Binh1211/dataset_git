import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [plan, setPlan] = useState('basic');
  const [status, setStatus] = useState('active');
  const [sort, setSort] = useState('startDate');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/subscriptions', { params: { plan, status, sort, page } })
      .then(res => { setSubscriptions(res.data.items); setTotal(res.data.total); });
  }, [plan, status, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <SubscriptionActions
        onUpgrade={() => {}}
        onDowngrade={() => {}}
        onCancel={() => {}}
        onExport={handleExport}
        onPrint={handlePrint}
        onShare={() => {}}
        onSettings={() => {}}
        onHelp={() => {}}
      />
      <button onClick={() => setPlan('premium')}>Premium</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setPlan(e.target.value)} />
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="active">Active</option>
      </select>
    </div>
  );
}

function SubscriptionActions(props: any) { return <div>SubscriptionActions</div>; }
export default SubscriptionManager;