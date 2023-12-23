import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        Signed in as {session?.user?.name} <br />
        <Image src={`${session?.user?.image}`} alt="user-avatar" width={80} height={80} className="rounded-full" />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn('google')}
        className="signin"
      >
        <FaGoogle />
        <p>Sign in</p>
      </button>
    </>
  );
}
