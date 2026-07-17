import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ThemeCustomizer() {
  const [theme, setTheme] = useState<any>({});
  const [colors, setColors] = useState<string[]>([]);
  const [fonts, setFonts] = useState<string[]>([]);
  const [layout, setLayout] = useState('grid');
  const [style, setStyle] = useState('modern');
  const [version, setVersion] = useState(1);

  useEffect(() => {
    axios.get('/api/theme/default').then(res => setTheme(res.data));
    axios.get('/api/theme/colors').then(res => setColors(res.data));
    axios.get('/api/theme/fonts').then(res => setFonts(res.data));
  }, []);

  const handleExport = () => console.log('export');
  const handlePrint = () => window.print();

  return (
    <div>
      <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
      <ThemeActions
        onSave={() => {}}
        onReset={() => {}}
        onExport={handleExport}
        onPrint={handlePrint}
        onShare={() => {}}
        onSettings={() => {}}
        onHelp={() => {}}
        onFeedback={() => {}}
      />
      <button onClick={() => setLayout('list')}>List</button>
      <button onClick={() => setStyle('classic')}>Classic</button>
      <input onChange={(e) => setLayout(e.target.value)} />
      <select onChange={(e) => setStyle(e.target.value)}>
        <option value="modern">Modern</option>
      </select>
    </div>
  );
}

function ThemeActions(props: any) { return <div>ThemeActions</div>; }
export default ThemeCustomizer;