import React from 'react';
import axios from 'axios';

class LegacyReportViewer extends React.Component {
  state = {
    report: null,
    loading: true,
    error: null,
    period: 'monthly',
  };

  componentDidMount() {
    axios.get('/api/report').then(res => this.setState({ report: res.data, loading: false }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <LegacyReportActions
          onGenerate={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onExport={() => {}}
          onSettings={() => {}}
          onHelp={() => {}}
          onSave={() => {}}
          onDelete={() => {}}
        />
        {/* 4 inline functions → class vẫn bắt inline-overuse */}
        <button onClick={() => console.log('weekly')}>Weekly</button>
        <button onClick={() => console.log('monthly')}>Monthly</button>
        <input onChange={() => console.log('change')} />
        <div onMouseEnter={() => console.log('enter')}>Hover</div>
      </div>
    );
  }
}

function LegacyReportActions(props: any) { return <div>LegacyReportActions</div>; }
export default LegacyReportViewer;