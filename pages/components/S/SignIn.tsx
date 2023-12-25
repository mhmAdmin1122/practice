import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <div>
      <button
        onClick={() => signIn('google')}
        className="flex items-center w-fit px-[16px] py-[8px] rounded-md gap-2 text-[#fff] bg-[#00ff]"
      >
        <FaGoogle />
        <h2>Sign In with Google</h2>
      </button>
    </div>
  );
};

export default SignIn;
