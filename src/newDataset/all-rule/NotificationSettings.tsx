import React, { useState } from 'react';
import axios from 'axios';

function NotificationSettings() {
  // 6 useState → bắt
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);
  const [frequency, setFrequency] = useState('daily');
  const [digest, setDigest] = useState('morning');
  const [sound, setSound] = useState(true);

  // API call → bắt mixed
  const saveSettings = () => {
    axios.post('/api/notifications/settings', { email, sms, push, frequency, digest, sound });
  };

  return (
    <div>
      {/* Không có nesting sâu → không bị complex-jsx */}
      <div><div>Nesting chỉ 2 cấp</div></div>
      {/* 8 props → bắt too-many-props */}
      <NotificationActions
        onSave={saveSettings}
        onCancel={() => {}}
        onReset={() => {}}
        onExport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onHelp={() => {}}
        onSupport={() => {}}
      />
      <input onChange={(e) => setEmail(e.target.checked)} type="checkbox" />
    </div>
  );
}

function NotificationActions(props: any) { return <div>NotificationActions</div>; }
export default NotificationSettings;