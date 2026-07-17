import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCatalog() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get('/api/products', { params: { filter, sort, page } })
      .then(res => { setProducts(res.data.items); setTotalPages(res.data.totalPages); });
  }, [filter, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <CatalogActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onClone={() => {}}
        onExport={handleExport}
        onImport={() => {}}
        onPrint={handlePrint}
        onShare={() => {}}
      />
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setFilter(e.target.value)} />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="name">Name</option>
      </select>
      <div onMouseLeave={() => console.log('leave')}>Leave</div>
    </div>
  );
}

function CatalogActions(props: any) { return <div>CatalogActions</div>; }
export default ProductCatalog;