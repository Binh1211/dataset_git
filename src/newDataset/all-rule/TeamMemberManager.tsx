import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamMemberManager() {
  // 5 useState (không bắt)
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('all');

  // API call → bắt
  useEffect(() => {
    axios.get('/api/team', { params: { search, sort, filter } })
      .then(res => setMembers(res.data));
  }, [search, sort, filter]);

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <TeamActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onExport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onInvite={() => {}}
        onRemove={() => {}}
      />
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

function TeamActions(props: any) { return <div>TeamActions</div>; }
export default TeamMemberManager;