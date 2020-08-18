import Header from './header'
import Footer from './footer'

const index = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
