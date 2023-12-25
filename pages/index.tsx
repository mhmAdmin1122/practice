import { useSession } from "next-auth/react";
import LandingPage from "./page/landing";
import Home from "./components/H/Home";

export default function Component() {
  const { data: session } = useSession();
  return <>{session ? <Home /> : <LandingPage />}</>;
}
