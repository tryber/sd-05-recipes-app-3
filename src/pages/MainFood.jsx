import React from 'react';
import { render } from '@testing-library/react';
import Footer from './components/Footer';

function MainFood() {
  render() {
    return (
      <div>
        MainFood Page
      </div>
      <Footer />
    );
  }
}

export default MainFood;
