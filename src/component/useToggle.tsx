import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(val => !val); // Flip true/false
  };

  return [value, toggleValue]; // Return state and function
}
