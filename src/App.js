import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg from "./components/img/bg.jpg";

const App = () => {
  return (
    <>
        <Header
          title= "meow"
          descr
        />

        <Layout
          id ='1'
          title = 'Layout 1'
          descr = 'description layout 1'
          urlBg = {bg}
          colorBg 
        />

        <Layout 
          id ='2'
          title = 'Layout 2'
          descr = 'description layout 2'
          urlBg 
          colorBg = '#ffb8e0'
        />

        <Layout 
          id = '3'
          title = 'Layout 3'
          descr = 'description layout 3'
          urlBg = {bg}
          colorBg 
        />

        <Footer />
    </>
  );
}

export default App;