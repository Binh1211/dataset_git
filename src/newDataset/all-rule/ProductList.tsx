import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  // 6 useState → too-many-states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  // axios.get → mixed-responsibility
  useEffect(() => {
    setLoading(true);
    axios.get('/api/products', { params: { search, sortBy, filter, page } })
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false));
  }, [search, sortBy, filter, page]);

  // Hàm xử lý
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleSort = (key: string) => setSortBy(key);
  const handleFilter = (key: string) => setFilter(key);
  const handlePageChange = (newPage: number) => setPage(newPage);

  // Các hàm và biến giả tăng dòng
  let total = 0;
  for (let i = 0; i < 100; i++) total += i;
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const doubled = arr.map(n => n*2);
  const filtered = arr.filter(n => n%2===0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  console.log(doubled, filtered, reduced);
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(10,5), sub(10,5), mul(10,5), div(10,5));
  let x = 0;
  while (x < 20) { x++; console.log(x); }
  const obj = { a: 1, b: 2 };
  const obj2 = { ...obj, c: 3 };
  const str = 'hello';
  const num = 42;
  const bool = true;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol('test');
  const big = BigInt(123);
  const parseNumber = (s: string) => parseInt(s, 10);
  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
  console.log(formatCurrency(19.99));
  const isActive = (product: any) => product.stock > 0;
  const inStock = products.filter(isActive);
  console.log(inStock);
  const sortByName = (a: any, b: any) => a.name.localeCompare(b.name);
  const sortByPrice = (a: any, b: any) => a.price - b.price;
  const sortedProducts = [...products].sort(sortByName);
  console.log(sortedProducts);
  const getTotalPrice = (items: any[]) => items.reduce((acc, p) => acc + p.price, 0);
  console.log(getTotalPrice(products));
  const message = `Found ${products.length} products`;
  console.log(message);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <div className="filters">
        <input type="text" value={search} onChange={handleSearch} placeholder="Search..." />
        <select onChange={e => handleSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        <select onChange={e => handleFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
        </select>
      </div>
      <div className="list">
        {/* Nesting sâu 6 cấp */}
        <div className="items">
          <div className="item">
            <div className="content">
              <div className="details">
                <div className="name">
                  <span>Product 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="details">
                <div className="name">
                  <span>Product 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onClone={() => {}}
        onExport={() => {}}
        onImport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onArchive={() => {}}
        onRestore={() => {}}
        onMove={() => {}}
        onCopy={() => {}}
      />
    </div>
  );
}

function ProductActions(props: any) { return <div>Product Actions</div>; }

export default ProductList;