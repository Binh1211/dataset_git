import React, { useState } from 'react';
import axios from 'axios';

function ProfileSettings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const saveSettings = () => {
    axios.post('/api/settings', { name, email, bio, notifications, theme, language });
  };

  // Tăng dòng

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <SettingsActions
        onSave={() => {}}
        onCancel={() => {}}
        onReset={() => {}}
        onExport={() => {}}
        onImport={() => {}}
        onPrint={() => {}}
        onHelp={() => {}}
        onSupport={() => {}}
      />
      <button onClick={() => saveSettings()}>Save</button>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

function SettingsActions(props: any) { return <div>SettingsActions</div>; }
export default ProfileSettings;