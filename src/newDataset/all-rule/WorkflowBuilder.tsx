import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkflowBuilder() {
  // 6 useState → bắt
  const [steps, setSteps] = useState<any[]>([]);
  const [triggers, setTriggers] = useState<any[]>([]);
  const [actions, setActions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');

  // API call → bắt
  useEffect(() => {
    axios.get('/api/workflows').then(res => setSteps(res.data));
  }, []);

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <WorkflowActions
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

function WorkflowActions(props: any) { return <div>WorkflowActions</div>; }
export default WorkflowBuilder;