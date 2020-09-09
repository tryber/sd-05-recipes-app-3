import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function Login() {
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const { email, setEmail, setPassword } = useContext(RecipeContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPassword(e.target.value);
  };

  const checkEmail = (emailTested) => {
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (regexEmail.test(emailTested) === true) {
      setCheckedEmail(true);
    }
  };
  // ref for regex: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail .

  const checkPassword = (passwordTested) => {
    if (passwordTested.length > 6) {
      setCheckedPassword(true);
    }
  };

  const storage = () => {
    // still no fetch here.
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('email', JSON.stringify({ email }));
  };

  return (
    <div data-testid="">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        name="email"
        onChange={(e) => handleEmailChange(e)}
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        name="password"
        onChange={(e) => handlePasswordChange(e)}
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={!(checkedEmail && checkedPassword)}
          onClick={() => storage()}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
