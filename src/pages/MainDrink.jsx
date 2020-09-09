import React from 'react';
import Footer from './components/Footer';
import { render } from '@testing-library/react';

function MainDrink() {
  render() {
    return (
      <div>
        MainDrink Page
      </div>
      <Footer />
    );
  }
}

export default MainDrink;
