import React, { useState, useEffect } from 'react';

function UserDashboard({ userId }: { userId: string }) {
  // 6 useState → too-many-states
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState('overview');

  // API call → mixed-responsibility
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => setError(err.message));
    fetch('/api/posts').then(res => res.json()).then(setPosts);
    fetch('/api/comments').then(res => res.json()).then(setComments);
  }, [userId]);

  const handleRefresh = () => {
    fetch(`/api/users/${userId}`).then(res => res.json()).then(setUser);
  };
  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      {/* Nesting 6 cấp → complex-jsx */}
      <div className="dashboard">
        <div className="header">
          <div className="title">
            <div className="inner">
              <div className="text">
                <span>Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 8 props → too-many-props */}
      <DashboardActions
        onRefresh={handleRefresh}
        onExport={handleExport}
        onPrint={handlePrint}
        onShare={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onArchive={() => {}}
        onRestore={() => {}}
      />
      {/* 4 inline functions → inline-function-overuse */}
      <button onClick={() => setView('overview')}>Overview</button>
      <button onClick={() => setView('details')}>Details</button>
      <input onChange={(e) => setView(e.target.value)} />
      <div onMouseEnter={() => console.log('enter')}>Hover</div>
    </div>
  );
}

function DashboardActions(props: any) { return <div>Actions</div>; }
export default UserDashboard;