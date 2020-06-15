import React from 'react';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './App.css';
import Header from './components/Header';
import Community from './components/Community';
import ScreenMockups from './components/ScreenMockups';
import GrowTogther from './components/GrowTogther';
import Flow from './components/Flow';
import Users from './components/Users';
import Build from './components/Build';

const App = () => {
  return (
    <>
      <Header />
      <Community />
      <ScreenMockups />
      <GrowTogther />
      <Flow />
      <Users />
      <Build />
    </>
  );
};

export default App;
