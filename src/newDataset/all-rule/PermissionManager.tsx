import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PermissionManager() {
  // 6 useState → bắt
  const [permissions, setPermissions] = useState<any[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name');

  // API call → bắt mixed
  useEffect(() => {
    axios.get('/api/permissions').then(res => setPermissions(res.data));
  }, []);

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      {/* Không có component con với nhiều props → không bị too-many-props */}
      <button onClick={() => setSearch('')}>Clear</button>
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default PermissionManager;