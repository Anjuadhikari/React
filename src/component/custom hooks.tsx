import React from 'react';
import useToggle from './useToggle'; // Import your custom hook

export default function CustomHooks() {
  const [value, toggleValue] = useToggle(true) as [boolean, () => void]; // Use it here

  return (
    <div>
      <h1>Custom Hooks</h1>
      <button onClick={toggleValue}>Toggle</button>
      {value && <h1>Heading</h1>}
    </div>
  );
}
