import React, { useState } from 'react';

function OrderManagement() {
  const [orders, setOrders] = useState<any[]>([]);
  const [status, setStatus] = useState('pending');
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);

  const fetchOrders = () => {
    fetch(`/api/orders?status=${status}&search=${search}&sort=${sortBy}&page=${page}`)
      .then(res => res.json())
      .then(setOrders);
  };

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <OrderActions
        onApprove={() => {}}
        onReject={() => {}}
        onShip={() => {}}
        onCancel={() => {}}
        onRefund={() => {}}
        onPrint={() => {}}
        onEmail={() => {}}
        onExport={() => {}}
      />
      <button onClick={() => fetchOrders()}>Refresh</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

function OrderActions(props: any) { return <div>OrderActions</div>; }
export default OrderManagement;