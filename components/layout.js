import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

const Layout = ({cartItems ,  children }) => {
    return (
      <>

        <Navbar/>
  

        <main>{children}</main>
  

        <Footer />
      </>
    );
  };
  
  export default Layout;