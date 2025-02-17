import React from 'react';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const isLongEnough = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

//   const criteriaMet = [isLongEnough, hasUpperCase, hasNumber, hasSpecialChar].filter(Boolean).length;

//   let strengthLabel = '';
//   let barColor = '';
//   if (password.length === 0) {
//     strengthLabel = '';
//     barColor = '#ccc';
//   } else if (criteriaMet < 3) {
//     strengthLabel = 'Slabé';
//     barColor = 'red';
//   } else if (criteriaMet === 3) {
//     strengthLabel = 'Střední';
//     barColor = 'orange';
//   } else if (criteriaMet === 4) {
//     strengthLabel = 'Silné';
//     barColor = 'green';
//   }

  return (
    <div>
      {/* {password && (
        <>
          <div style={{ marginBottom: '5px' }}>
            <strong>Hodnocení: {strengthLabel}</strong>
          </div>
          <div
            style={{
              background: '#eee',
              height: '10px',
              width: '100%',
              borderRadius: '5px',
              marginBottom: '10px'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(criteriaMet / 4) * 100}%`,
                background: barColor,
                borderRadius: '5px'
              }}
            ></div>
          </div>
        </>
      )} */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ color: isLongEnough ? 'green' : 'red' }}>
          {isLongEnough ? '✓' : '✗'} Minimálně 8 znaků
        </li>
        <li style={{ color: hasUpperCase ? 'green' : 'red' }}>
          {hasUpperCase ? '✓' : '✗'} Alespoň jedno velké písmeno
        </li>
        <li style={{ color: hasNumber ? 'green' : 'red' }}>
          {hasNumber ? '✓' : '✗'} Alespoň jedno číslo
        </li>
        <li style={{ color: hasSpecialChar ? 'green' : 'red' }}>
          {hasSpecialChar ? '✓' : '✗'} Alespoň jeden speciální znak (!@#$%^&*)
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrength;
