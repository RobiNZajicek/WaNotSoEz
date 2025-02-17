import React, { useState } from 'react';

interface PasswordInputProps {
  setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(prev => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type={visible ? 'text' : 'password'}
        placeholder="Zadejte heslo"
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          boxSizing: 'border-box',
          marginBottom: '5px'
        }}
      />
      <button onClick={toggleVisibility}>
        {visible ? 'Skrýt heslo' : 'Zobrazit heslo'}
      </button>
    </div>
  );
};

export default PasswordInput;
