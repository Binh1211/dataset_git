import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MediaGallery() {
  const [media, setMedia] = useState<any[]>([]);
  const [albums, setAlbums] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/media', { params: { filter, sort, page } })
      .then(res => { setMedia(res.data.items); setTotal(res.data.total); });
  }, [filter, sort, page]);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <MediaActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onExport={handleExport}
        onImport={() => {}}
        onPrint={handlePrint}
        onShare={() => {}}
        onArchive={() => {}}
      />
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <input onChange={(e) => setFilter(e.target.value)} />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="date">Date</option>
      </select>
    </div>
  );
}

function MediaActions(props: any) { return <div>MediaActions</div>; }
export default MediaGallery;