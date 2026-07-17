import React from 'react';
import axios from 'axios';

class LegacyUserManager extends React.Component {
  // Nhiều state nhưng class không bắt
  state = {
    users: [],
    loading: true,
    error: null,
    search: '',
    sort: 'name',
    page: 1,
  };

  // API call trong lifecycle → không bắt mixed
  componentDidMount() {
    axios.get('/api/users').then(res => this.setState({ users: res.data, loading: false }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <LegacyUserActions
          onAdd={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
          onExport={() => {}}
          onImport={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onSettings={() => {}}
        />
        {/* Chỉ 1 inline → không bắt inline */}
        <button onClick={() => console.log('click')}>Click</button>
      </div>
    );
  }
}

function LegacyUserActions(props: any) { return <div>LegacyUserActions</div>; }
export default LegacyUserManager;