import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoleManager() {
  // 5 useState (không bắt)
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('all');

  // API call → bắt
  useEffect(() => {
    axios.get('/api/roles', { params: { search, sort, filter } })
      .then(res => setRoles(res.data));
  }, [search, sort, filter]);

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <RoleActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onClone={() => {}}
        onExport={() => {}}
        onImport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
      />
      <button onClick={() => setSearch('')}>Clear</button>
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

function RoleActions(props: any) { return <div>RoleActions</div>; }
export default RoleManager;