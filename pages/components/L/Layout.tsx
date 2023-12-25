import React from "react";
import Navbar from "../N/Navbar";
import Footer from "../F/Footer";

const Layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
