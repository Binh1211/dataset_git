import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryControl() {
  const [items, setItems] = useState<any[]>([]);
  const [stock, setStock] = useState<Record<string, number>>({});
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('/api/inventory', { params: { search, category, sort, page } })
      .then(res => setItems(res.data));
  }, [search, category, sort, page]);

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <InventoryActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onRestock={() => {}}
        onSell={() => {}}
        onReturn={() => {}}
        onPrint={() => {}}
        onExport={() => {}}
      />
      <button onClick={() => setPage(page+1)}>Next</button>
      <button onClick={() => setPage(page-1)}>Prev</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
      </select>
    </div>
  );
}

function InventoryActions(props: any) { return <div>InventoryActions</div>; }
export default InventoryControl;