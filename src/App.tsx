import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import PasswordStrength from './components/PasswordStrength';

function App() {
  const [password, setPassword] = useState('');

  return (
    <div style={{ margin: '20px', maxWidth: '400px' }}>
      <h1>Hodnocení síly hesla</h1>
      <PasswordInput setPassword={setPassword} />
      <PasswordStrength password={password} />
    </div>
  );
}

export default App;
