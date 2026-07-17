import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchEngine() {
  const [results, setResults] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/search', { params: { query, category, sort, page } })
      .then(res => { setResults(res.data.items); setTotal(res.data.total); });
  }, [query, category, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <SearchActions
        onSave={() => {}}
        onDelete={() => {}}
        onExport={handleExport}
        onPrint={handlePrint}
        onShare={() => {}}
        onSettings={() => {}}
        onHelp={() => {}}
        onFeedback={() => {}}
      />
      <button onClick={() => setQuery('')}>Clear</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setQuery(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
      </select>
    </div>
  );
}

function SearchActions(props: any) { return <div>SearchActions</div>; }
export default SearchEngine;