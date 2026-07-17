import React from 'react';
import axios from 'axios';

class LegacyInventoryManager extends React.Component {
  state = {
    items: [],
    loading: true,
    error: null,
    search: '',
    category: 'all',
    page: 1,
  };

  componentDidMount() {
    axios.get('/api/inventory').then(res => this.setState({ items: res.data, loading: false }));
  }

  render() {
    return (
      <div>
        {/* Nesting 6 cấp → bắt complex-jsx */}
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        {/* 8 props → bắt too-many-props */}
        <LegacyInventoryActions
          onAdd={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
          onRestock={() => {}}
          onSell={() => {}}
          onReturn={() => {}}
          onPrint={() => {}}
          onExport={() => {}}
        />
        {/* Chỉ 2 inline → không bắt inline-overuse */}
        <button onClick={() => console.log('click')}>Click</button>
        <input onChange={() => console.log('change')} />
      </div>
    );
  }
}

function LegacyInventoryActions(props: any) { return <div>LegacyInventoryActions</div>; }
export default LegacyInventoryManager;