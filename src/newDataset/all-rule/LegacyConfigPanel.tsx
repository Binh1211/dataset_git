import React from 'react';
import axios from 'axios';

class LegacyConfigPanel extends React.Component {
  state = {
    config: {},
    theme: 'light',
    language: 'en',
    notifications: true,
    loading: false,
  };

  componentDidMount() {
    axios.get('/api/config').then(res => this.setState({ config: res.data }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <ConfigActions
          onSave={() => {}}
          onReset={() => {}}
          onExport={() => {}}
          onImport={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onHelp={() => {}}
          onSupport={() => {}}
        />
        <button onClick={() => {}}>Save</button>
      </div>
    );
  }
}

function ConfigActions(props: any) { return <div>ConfigActions</div>; }
export default LegacyConfigPanel;