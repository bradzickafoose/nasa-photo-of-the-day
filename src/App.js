import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useAxios } from './utils/useAxios';

function App() {
  const [loading, setLoading] = useState(true);
  const [response, isLoading, error, setNewValue] = useAxios('');

  const changeDate = (date) => {
    setNewValue(date);
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading) {
    return (
      <>
        <Header />
        <h3 className="loading">Loading...</h3>
      </>
    );
  }

  return (
    <>
      <Header changeDate={changeDate} resDate={response.date} />
      <Main {...response} />
      <Footer copyright={response.copyright} />
    </>
  );
}

export default App;
