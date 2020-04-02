import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  // Template strings ``
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const [state, setState] = useState(defaultState);
  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
