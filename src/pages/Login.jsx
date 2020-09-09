import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

// function handleEmailChange(e) {
//   const { setUser } = useContext(RecipeContext);
//   setUser({ userData: { email: e.target.value } });
//   checkForm();
// }

// function handlePasswordChange(e) {
//   const { setUser } = useContext(RecipeContext);
//   setUser({ userData: { password: e.target.value } });
//   checkForm();
// }

// function checkForm() {
// const { email, password, setChecked } = useContext(RecipeContext);
// if ((password.length > 6) && (/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email) === true)) {
// setChecked(true);
// }
// }
// problema: useContext recusado quando nao for dentro de componente

function provokeApis(emailInput) {
  // 1. fetch Tokens
  // apifood
  // apidrink
  // make both in services and after token
  // 2. diverse storage operations
  // localStorage.setItem('mealsToken', ...)
  // localStorage.setItem('cocktailsToken', ...)
  // localStorage.setItem('email', email do input)
}

function Login() {
  const { setUser, checked } = useContext(RecipeContext);
  return (
    <div data-testid="">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        name="email"
        // onChange={(e) => handleEmailChange(e) }
        onChange={(e) => setUser({ userData: { email: e.target.value } })}
        // problema para ambos onChange: também chamar o checkForm
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        name="password"
        // onChange={(e) => handlePasswordChange(e) }
        onChange={(e) => setUser({ userData: { password: e.target.value } })}
      />
      <Link to="/comidas">
        <button type="button" data-testid="login-submit-btn" disabled={!checked} onClick={() => provokeApis()}>
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
