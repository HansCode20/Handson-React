import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  // const name = "HAM";
  // const isSingle = false;

  // const renderStatus = (status) => {
  //   if (status) {
  //     return <p>Saya sudah menikah</p>;
  //   } else {
  //     return <p>Saya belum menikah</p>;
  //   }
  // };

  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
      {/* {<h1>HELLO REACT {name}</h1>
      {isSingle ? <p>Saya sudah menikah</p> : <p>Saya belum menikah</p>}
      {renderStatus(isSingle)}} */}
    </div>
  );
};

export default App;
