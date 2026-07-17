import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TagEditor() {
  // 5 useState (không bắt, vì ≤5)
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('all');

  // API call → bắt mixed
  useEffect(() => {
    axios.get('/api/tags', { params: { search, sort, filter } })
      .then(res => setTags(res.data));
  }, [search, sort, filter]);

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <TagActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onExport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onMerge={() => {}}
        onSplit={() => {}}
      />
      {/* Chỉ 2 inline functions → không bắt inline-overuse */}
      <button onClick={() => setSearch('')}>Clear</button>
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

function TagActions(props: any) { return <div>TagActions</div>; }
export default TagEditor;