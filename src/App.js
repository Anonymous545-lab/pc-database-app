import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const data = [
    ["1", "10.29.235.11"],
    ["2", "10.29.235.55"],
    ["3", "10.29.235.20"],
    ["4", "10.29.235.7"],
    ["5", "10.29.235.54"],
    ["6", "10.29.235.83"],
    ["7", "10.29.235.56"],
    ["8", "10.29.235.32"],
    ["9", "10.29.235.21"],
    ["10", "10.29.235.15"],
    ["11", "10.29.235.16"],
    ["12", "10.29.235.6"],
    ["13", "10.29.235.8"],
    ["14", "10.29.235.4"],
    ["15", "10.29.235.62"],
    ["16", "10.29.235.12"],
    ["17", "10.29.235.31"],
    ["18", "10.29.235.49"],
    ["19", "10.29.235.22"],
    ["20", "10.29.235.33"],
    ["21", "10.29.235.9"],
    ["22", "10.29.235.37"],
    ["23", "10.29.235.41"],
    ["24", "10.29.235.45"],
    ["25", "10.29.235.35"],
    ["26", "10.29.235.27"],
    ["27", "10.29.235.46"],
    ["28", "10.29.235.14"]
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const tableRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const row = document.querySelector(`tr[data-pc-number="${searchTerm}"]`);
      if (row) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [searchTerm]);

  return (
    <div className="app-container">
      <h1>PC Database</h1>
      <input
        type="text"
        onKeyDown={handleSearch}
        placeholder="Search by PC Number and press Enter"
        className="search-input"
      />
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>PC Number</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} data-pc-number={row[0]}>
              <td>{row[0]}</td>
              <td className={row[0] === searchTerm ? 'highlighted' : ''}>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
