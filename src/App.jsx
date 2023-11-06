import { Outlet } from "react-router-dom";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
