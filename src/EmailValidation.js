import React, { useState } from 'react';

function EmailValidation() {
  const [email, setEmail] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      alert(`Valid email address: ${email}`);
    } else {
      alert('Invalid email address. Please enter a valid email.');
    }
  };

  return (
    <div>
      <h2>Email Validation Form</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={validateEmail}>Submit</button>
    </div>
  );
}

export default EmailValidation;