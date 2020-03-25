import Nav from "./nav";
import Footer from "./footer";

export default ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);
