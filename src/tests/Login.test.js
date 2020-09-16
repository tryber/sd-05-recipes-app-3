import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

afterEach(cleanup);

test('A página deve conter um titulo h1 Login', () => {
  const { getByText } = render(<Login />);
  const textLogin = getByText('Login');
  expect(textLogin).toBeInTheDocument();
  expect(document.querySelector('h1')).toBeInTheDocument();
  expect(textLogin.tagName).toBe('H1');
});

test('A página deve conter dois inputs para email e senha', () => {
  const { getByPlaceholderText } = render(<Login />);
  const inputEmail = getByPlaceholderText('Email');
  const inputSenha = getByPlaceholderText('Senha');
  expect(inputEmail).toBeInTheDocument();
  expect(inputSenha).toBeInTheDocument();
});

test('A página deve conter um button Entrar', () => {
  const { getByText } = render(<Login />);
  const entrar = getByText('Entrar');
  expect(entrar).toBeInTheDocument();
  expect(document.querySelector('button')).toBeInTheDocument();
  expect(entrar.tagName).toBe('button');
});

test('Ao clickar no Entrar, redireciona para MainFood', () => {
  const { getByText } = render(<Login />);
  const buttonEntrar = getByText('Entrar');
  fireEvent.click(buttonEntrar);
  expect(getByText('Comidas')).toBeInTheDocument();
  // will fail until fixing our header title depending on food or drink
});
