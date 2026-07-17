import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserManager() {
  const [users, setUsers] = useState<any[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/users', { params: { search, roleFilter, sort, page } })
      .then(res => { setUsers(res.data.items); setTotal(res.data.total); });
  }, [search, roleFilter, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <UserActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onExport={handleExport}
        onImport={() => {}}
        onPrint={handlePrint}
        onShare={() => {}}
        onBlock={() => {}}
      />
      <button onClick={() => setSearch('')}>Clear</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setRoleFilter(e.target.value)}>
        <option value="all">All</option>
      </select>
    </div>
  );
}

function UserActions(props: any) { return <div>UserActions</div>; }
export default UserManager;