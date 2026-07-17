import React, { useState } from 'react';

function TaskBoard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('medium');
  const [sort, setSort] = useState('dueDate');
  const [page, setPage] = useState(1);

  const fetchTasks = () => {
    fetch(`/api/tasks?status=${statusFilter}&assignee=${assignee}&priority=${priority}&sort=${sort}&page=${page}`)
      .then(res => res.json())
      .then(setTasks);
  };

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <TaskActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onMove={() => {}}
        onCopy={() => {}}
        onArchive={() => {}}
        onRestore={() => {}}
        onExport={() => {}}
      />
      <button onClick={() => fetchTasks()}>Refresh</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="all">All</option>
      </select>
      <input onChange={(e) => setAssignee(e.target.value)} />
    </div>
  );
}

function TaskActions(props: any) { return <div>TaskActions</div>; }
export default TaskBoard;