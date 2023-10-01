import { Link } from 'react-router-dom';
import LogoMain from "../assets/logomain.png"
import Google from "../assets/google.png"
import Facebook from "../assets/fb.png"
import Line from "../assets/or.png"

export default function Login() {
  return (
    <center>
    <div className="container">
      <div className="login">
        <h2 className="text-2xl font-bold mb-4">Log in or Sign up</h2>
        <p className="text-gray-500 text-sm mb-8">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        <div className="social">
          <div className="socialBtn">
            <button className="flex items-center gap-2 bg-white border border-black rounded-md px-28 py-2 cursor-pointer mb-4">
              <img src={Google} alt="Google Logo" width={20} height={20} />
              Continue with Google
            </button>
            <button className="flex items-center gap-2 bg-white border border-black rounded-md px-28 py-2 cursor-pointer">
              <img src={Facebook} alt="Facebook Logo" width={20} height={20} />
              Continue with Facebook
            </button>
          </div>
          <img src={Line} alt="Line" width={400} height={50} className="mt-10 mb-10"/>
        </div>
        <form >
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-28 py-2 rounded-md border border-gray-300 mb-4"
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="px-28 py-2 rounded-md border border-gray-300 mb-4"
          />
        </form>
        <button
            type="submit"
            className="rounded-md py-2 mt-4 cursor-pointer mb-12 bg-primary-500 px-28 text-[#ffffff]"
          >
            Sign Up
          </button>
      </div>
    </div>
    </center>
  );
}
