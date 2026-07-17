import React from 'react';

class ClassBasedReport extends React.Component {
  state = { data: [], period: 'weekly', loading: false, error: null };

  componentDidMount() {
    fetch('/api/report?period=weekly')
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <ReportActions
          onExport={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onRefresh={() => {}}
          onSave={() => {}}
          onLoad={() => {}}
          onDelete={() => {}}
          onSettings={() => {}}
        />
        <button onClick={() => {}}>Refresh</button>
      </div>
    );
  }
}

function ReportActions(props: any) { return <div>ReportActions</div>; }
export default ClassBasedReport;