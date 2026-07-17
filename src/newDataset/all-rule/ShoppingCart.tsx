import React, { useState } from 'react';

function ShoppingCart() {
  // 7 useState
  const [items, setItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [shipping, setShipping] = useState('standard');
  const [payment, setPayment] = useState('credit');
  const [confirmed, setConfirmed] = useState(false);

  // fetch (mixed)
  const applyCoupon = () => {
    fetch('/api/apply-coupon', { method: 'POST', body: JSON.stringify({ coupon }) })
      .then(res => res.json())
      .then(data => setDiscount(data.discount));
  };

  // Các hàm helper
  const addItem = (product: any) => setItems([...items, product]);
  const removeItem = (id: string) => setItems(items.filter(item => item.id !== id));
  const updateQuantity = (id: string, qty: number) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };
  const calculateTotal = () => items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const applyShipping = (base: number) => shipping === 'express' ? base + 10 : base;
  const finalTotal = applyShipping(calculateTotal()) - discount;
  const handleCheckout = () => setConfirmed(true);
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => setCoupon(e.target.value);

  // Tăng dòng
  let sum = 0;
  for (let i=0; i<50; i++) sum += i;
  const arr = [1,2,3,4,5];
  arr.forEach(n => console.log(n));
  const double = (n: number) => n * 2;
  const arrDoubled = arr.map(double);
  console.log(arrDoubled);
  const isEven = (n: number) => n % 2 === 0;
  const evens = arr.filter(isEven);
  console.log(evens);
  const totalSum = arr.reduce((acc, n) => acc + n, 0);
  console.log(totalSum);
  const greet = (name: string) => `Hello ${name}`;
  console.log(greet('World'));
  const factorial = (n: number): number => n <= 1 ? 1 : n * factorial(n-1);
  console.log(factorial(5));
  const fibonacci = (n: number): number => n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2);
  console.log(fibonacci(10));
  const random = Math.random();
  console.log(random);
  const now = new Date();
  console.log(now.toISOString());
  const isPositive = (n: number) => n > 0;
  console.log(isPositive(5), isPositive(-1));
  const max = Math.max(1,2,3,4,5);
  const min = Math.min(1,2,3,4,5);
  console.log(max, min);

  return (
    <div>
      <div className="cart">
        <div className="items">
          <div className="item">
            <div className="details">
              <div className="info">
                <div className="name">
                  <span>Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coupon">
          <input value={coupon} onChange={handleCouponChange} placeholder="Coupon code" />
          <button onClick={applyCoupon}>Apply</button>
        </div>
        <div className="summary">
          <div>Total: ${finalTotal}</div>
        </div>
      </div>
      <CartActions
        onCheckout={handleCheckout}
        onClear={() => setItems([])}
        onUpdate={() => {}}
        onRemove={() => {}}
        onAdd={() => {}}
        onSave={() => {}}
        onLoad={() => {}}
        onPrint={() => {}}
        onEmail={() => {}}
        onShare={() => {}}
        onFeedback={() => {}}
        onSupport={() => {}}
      />
    </div>
  );
}

function CartActions(props: any) { return <div>CartActions</div>; }

export default ShoppingCart;