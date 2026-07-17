import React from 'react';
import axios from 'axios';

class LegacyNotificationCenter extends React.Component {
  state = {
    notifications: [],
    unread: 0,
    loading: true,
    filter: 'all',
    sort: 'newest',
    page: 1,
  };

  componentDidMount() {
    axios.get('/api/notifications').then(res => this.setState({ notifications: res.data, loading: false }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <LegacyNotificationActions
          onMarkRead={() => {}}
          onMarkUnread={() => {}}
          onDelete={() => {}}
          onExport={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onSettings={() => {}}
          onClear={() => {}}
        />
        {/* Chỉ 1 inline → không bắt inline-overuse */}
        <button onClick={() => {}}>Refresh</button>
      </div>
    );
  }
}

function LegacyNotificationActions(props: any) { return <div>LegacyNotificationActions</div>; }
export default LegacyNotificationCenter;