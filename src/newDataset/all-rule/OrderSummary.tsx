import React, { useState } from 'react';

function OrderSummary({ orderId }: { orderId: string }) {
  // 6 useState
  const [order, setOrder] = useState<any>(null);
  const [status, setStatus] = useState('pending');
  const [tracking, setTracking] = useState('');
  const [notes, setNotes] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // fetch
  const updateStatus = () => {
    fetch(`/api/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  };

  // Hàm helper
  const toggleDetails = () => setShowDetails(!showDetails);
  const toggleEditing = () => setIsEditing(!isEditing);
  const handleStatusChange = (newStatus: string) => setStatus(newStatus);
  const handleTrackingChange = (e: React.ChangeEvent<HTMLInputElement>) => setTracking(e.target.value);
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value);

  // Tăng dòng
  let sum = 0;
  for (let i=0; i<150; i++) sum += i;
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const doubled = arr.map(n => n*2);
  const filtered = arr.filter(n => n%2===0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  console.log(doubled, filtered, reduced);
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(100, 25), sub(100, 25), mul(100, 25), div(100, 25));
  let x = 0;
  while (x < 20) { x++; console.log(x); }
  const obj = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj, d: 4 };
  const str = 'order';
  const num = 999;
  const bool = false;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol('order');
  const big = BigInt(456);
  const toLower = (s: string) => s.toLowerCase();
  console.log(toLower('HELLO'));
  const isEvenNum = (n: number) => n % 2 === 0;
  const nums = [1,2,3,4,5,6];
  const evens = nums.filter(isEvenNum);
  console.log(evens);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(nums));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(nums), getMin(nums));
  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
  console.log(formatCurrency(123.45));
  const greet = (name: string) => `Hello ${name}`;
  console.log(greet('Order'));

  return (
    <div>
      <div className="summary">
        <div className="header">
          <div className="title">
            <div className="inner">
              <span>Order #{orderId}</span>
            </div>
          </div>
        </div>
        <div className="status">
          <select value={status} onChange={e => handleStatusChange(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
          <button onClick={updateStatus}>Update</button>
        </div>
      </div>
      <OrderActions
        onCancel={() => {}}
        onReturn={() => {}}
        onRefund={() => {}}
        onPrint={() => {}}
        onEmail={() => {}}
        onDownload={() => {}}
        onShare={() => {}}
        onReview={() => {}}
        onSupport={() => {}}
        onFeedback={() => {}}
        onReorder={() => {}}
        onSave={() => {}}
      />
    </div>
  );
}

function OrderActions(props: any) { return <div>OrderActions</div>; }

export default OrderSummary;