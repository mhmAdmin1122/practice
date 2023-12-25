import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Logout;
