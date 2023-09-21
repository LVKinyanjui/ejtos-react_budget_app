import React, { useState } from 'react';

function CurrencyDropdown() {
  const [selectedCurrency, setSelectedCurrency] = useState('dollar');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="currencySelect">Select a Currency:</label>
      <select
        id="currencySelect"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="dollar">Dollar ($)</option>
        <option value="pound">Pound (£)</option>
        <option value="euro">Euro (€)</option>
        <option value="rupee">Rupee (₹)</option>
      </select>
    </div>
  );
}

export default CurrencyDropdown;
