// todo -> add setter to get value

// react imports
import React, { useState } from 'react';

export default function TimeInput() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) < 24)) {
      setHours(value);
    }
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) < 60)) {
      setMinutes(value);
    }
  };

  const getTimeValue = () => {
    const paddedHours = hours.padStart(2, '0');
    const paddedMinutes = minutes.padStart(2, '0');
    return `${paddedHours}:${paddedMinutes}`;
  };

  return (
    <div className="mt-10 bg-white rounded-lg text-center px-8 py-5 cursor-pointer">
      <p className="font-Nunito text-black text-button">Wann startet der Raid?</p>
      <div className="flex justify-center mt-2 space-x-2">
        <input
          type="number"
          value={hours}
          onChange={handleHoursChange}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="HH"
          className="w-12 p-2 border border-gray-300 rounded-md text-center font-Nunito text-text focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          min="0"
          max="23"
        />
        <span>:</span>
        <input
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="MM"
          className="w-12 p-2 border border-gray-300 rounded-md text-center font-Nunito text-text focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          min="0"
          max="59"
        />
      </div>
      <p className="mt-3 text-center">Ausgewählte Zeit: {getTimeValue()}</p>
    </div>
  );
}