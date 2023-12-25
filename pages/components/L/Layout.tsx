import React from "react";
import Navbar from "../N/Navbar";
import Footer from "../F/Footer";
import { signOut, useSession } from "next-auth/react";
import SignIn from "../S/SignIn";
import Logout from "./Logout";

const Layout = ({ children }: any) => {
  const { data: session } = useSession();
  return (
    <main>
      <Navbar>{session ? <Logout /> : <SignIn />}</Navbar>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
