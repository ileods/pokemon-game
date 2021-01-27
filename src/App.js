import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
        <Header
          title= "meow"
          descr
        />

        <Layout
          id
          title
          descr
          urlBg = './components/img/bg.jpg'
          colorBg
        />

        <Layout 
          id
          title
          descr
          urlBg 
          colorBg = 'red'
        />

        <Layout 
          id
          title
          descr
          urlBg = './components/img/bg.jpg'
          colorBg
        />

        <Footer />
    </>
  );
}

export default App;