import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Header.css';

function OngoingRecipe({ img, nome, categoria, ingredientes}) {
const [allChecked, setAllChecked] = useState(false)
return (
<div className="header">
<Header title="Receita em progresso" />
{/* <img/> */}
<h3>nome da receita vinda como props da pag de detalhes</h3>
<p>categoria ou se a bebida é alcoólica ou não</p>
{/*provavelmente um map no ingredientes? <input type="checkbox" /> */}
{allChecked && <Link to="/receitas-feitas">Concluir Receita</Link>}
<Footer />
</div>
);
}

export default OngoingRecipe;
 