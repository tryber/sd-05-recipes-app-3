import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

// ref for regex: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

function Login() {
  const { setUser, email, password, checked, setChecked } = useContext(RecipeContext);
  
  useEffect(() => {
    checkForm(email, password);
  }, [email, password]);
  
  const checkForm = (emailTested, passwordTested) => {
    if (passwordTested.length > 6 && /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emailTested) === true) {
      setChecked(true);
    }
  }
  
  // const provokeApis = () => {
    // 1. fetch Tokens (make both functions in service file)
    // apifood
    // apidrink
    // 2. diverse storage operations
    // localStorage.setItem('mealsToken', 1);
    // localStorage.setItem('cocktailsToken', 1);
    // localStorage.setItem('email', JSON.stringify({ email }));
  // }

  return (
    <div data-testid="">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        name="email"
        onChange={(e) => setUser({ userData: { email: e.target.value } })}
        // problem: provoke also checkForm. Solution: didUpdate via useEffect
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        name="password"
        onChange={(e) => setUser({ userData: { password: e.target.value } })}
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={!checked}
          // onClick={() => provokeApis()}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
