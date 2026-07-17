import React from 'react';
import axios from 'axios';

class LegacyDataViewer extends React.Component {
  state = {
    data: [],
    loading: true,
    error: null,
    filter: 'all',
    sort: 'date',
    page: 1,
  };

  componentDidMount() {
    axios.get('/api/data').then(res => this.setState({ data: res.data, loading: false }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <DataActions
          onExport={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onRefresh={() => {}}
          onSave={() => {}}
          onLoad={() => {}}
          onDelete={() => {}}
          onSettings={() => {}}
        />
        <button onClick={() => console.log('click')}>Click</button>
        <input onChange={() => console.log('change')} />
      </div>
    );
  }
}

function DataActions(props: any) { return <div>DataActions</div>; }
export default LegacyDataViewer;