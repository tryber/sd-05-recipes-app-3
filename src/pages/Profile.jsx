import React from 'react';
import Footer from './components/Footer';
import { render } from '@testing-library/react';

function Profile() {
  render() {
    return (
      <div>
        Profile Page
      </div>
      <Footer />
    );
  }
}

render() {
  return (
    <Footer />
  );
}

export default Profile;
