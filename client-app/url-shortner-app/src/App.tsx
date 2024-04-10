import * as React from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;

