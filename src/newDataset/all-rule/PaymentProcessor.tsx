import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentProcessor() {
  const [payments, setPayments] = useState<any[]>([]);
  const [status, setStatus] = useState('pending');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/payments', { params: { status, search, sort, page } })
      .then(res => { setPayments(res.data.items); setTotal(res.data.total); });
  }, [status, search, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <PaymentActions
        onApprove={() => {}}
        onReject={() => {}}
        onRefund={() => {}}
        onExport={handleExport}
        onPrint={handlePrint}
        onShare={() => {}}
        onSettings={() => {}}
        onHelp={() => {}}
      />
      <button onClick={() => setStatus('completed')}>Completed</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="date">Date</option>
      </select>
    </div>
  );
}

function PaymentActions(props: any) { return <div>PaymentActions</div>; }
export default PaymentProcessor;