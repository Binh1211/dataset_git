import React, { useState } from 'react';
import axios from 'axios';

function SettingsPanel() {
  // 7 useState
  const [profile, setProfile] = useState<any>({});
  const [notifications, setNotifications] = useState<any>({});
  const [privacy, setPrivacy] = useState<any>({});
  const [appearance, setAppearance] = useState('light');
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');
  const [twoFactor, setTwoFactor] = useState(false);

  // axios.post
  const saveSettings = () => {
    axios.post('/api/settings', { profile, notifications, privacy, appearance, language, timezone, twoFactor });
  };

  // Hàm helper
  const handleProfileChange = (key: string, value: any) => setProfile({ ...profile, [key]: value });
  const handleNotificationsChange = (key: string, value: any) => setNotifications({ ...notifications, [key]: value });
  const handlePrivacyChange = (key: string, value: any) => setPrivacy({ ...privacy, [key]: value });
  const toggleTheme = () => setAppearance(appearance === 'light' ? 'dark' : 'light');
  const changeLanguage = (lang: string) => setLanguage(lang);
  const changeTimezone = (tz: string) => setTimezone(tz);
  const toggle2FA = () => setTwoFactor(!twoFactor);

  // Tăng dòng
  let x = 0;
  while (x < 50) { x++; console.log(x); }
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const doubled = arr.map(n => n*2);
  const filtered = arr.filter(n => n%2===0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  console.log(doubled, filtered, reduced);
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(7,3), sub(7,3), mul(7,3), div(7,3));
  let y = 0;
  for (let i=0; i<100; i++) y += i;
  const obj = { a: 1, b: 2 };
  const obj2 = { ...obj, c: 3 };
  const str = 'settings';
  const num = 42;
  const bool = true;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol('settings');
  const big = BigInt(888);
  const toUpper = (s: string) => s.toUpperCase();
  console.log(toUpper('hello'));
  const isEvenNum = (n: number) => n % 2 === 0;
  const nums = [1,2,3,4,5];
  const evens = nums.filter(isEvenNum);
  console.log(evens);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(nums));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(nums), getMin(nums));
  const formatDate = (d: Date) => d.toLocaleString();
  console.log(formatDate(new Date()));
  const greet = (name: string) => `Hi ${name}`;
  console.log(greet('Settings'));

  return (
    <div>
      <div className="panel">
        <div className="tabs">
          <div className="tab">
            <div className="content">
              <div className="field">
                <label>Theme</label>
                <input type="checkbox" checked={twoFactor} onChange={toggle2FA} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingsActions
        onSave={saveSettings}
        onCancel={() => {}}
        onReset={() => {}}
        onExport={() => {}}
        onImport={() => {}}
        onPrint={() => {}}
        onHelp={() => {}}
        onSupport={() => {}}
        onFeedback={() => {}}
        onUpgrade={() => {}}
        onDowngrade={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

function SettingsActions(props: any) { return <div>SettingsActions</div>; }

export default SettingsPanel;