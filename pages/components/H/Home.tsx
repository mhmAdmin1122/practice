import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Layout from "../L/Layout";
import { cursorTo } from "readline";

const Home = () => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);

  return (
    <Layout>
      Signed in as {session?.user?.email} <br />
      Signed in as {session?.user?.name} <br />
      <Image
        src={`${session?.user?.image}`}
        alt="user-avatar"
        width={80}
        height={80}
        className="rounded-full"
      />
      <button
        onClick={() => {
          setShow(current => !current);
        }}
      >
        Click Me
      </button>
      <p>{show ? Date() : ""}</p>
    </Layout>
  );
};

export default Home;
