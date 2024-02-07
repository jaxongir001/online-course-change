import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    // Save data to localStorage
    const userData = {
      email: email,
      password: password
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    // Navigate to desired page
    navigate("/"); // Replace "/dashboard" with the actual path you want to navigate to
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="w-[45%]">
          <h2 className="">Students Testimonials</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>

          <div>
            <p>
              The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
            </p>
          </div>
        </div>
        <form className=" bg-white w-[45%] p-5 rounded-lg" onSubmit={handleFormSubmit}>
          <h2 className="text-center text-4xl">Login </h2>
          <p className="text-center w-[560px] mt-4">Welcome back! Please log in to access your account.</p>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="flex flex-col py-2">
            <label className="font-semibold flex flex-col">Email
              <input placeholder="Enter your Email" className="border rounded p-2 will-change-auto" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold flex flex-col" >Password
              <input placeholder="Enter your Password" className="border rounded p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className="ml-auto mt-2">Forgot Password?</button>
          </div>
          <div>
            <p><input type="checkbox" />
              Remember Me
            </p>
            <Link to="login"> <li className="list-none "><img src="" alt="" /> </li> </Link>
          </div>
          <button className="bg-orange-500 p-3 text-white rounded-md mt-4 w-full ">Login</button>
          <p className="flex justify-center gap-1">Don’t have an account?  <NavLink to='/signup'>  Sign Up</NavLink>

            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.50005 19.5L19.5 6.49996M19.5 6.49996V18.98M19.5 6.49996H7.02005" stroke="#262626" />
            </svg>
          </p>
        </form>

      </div>
    </div>
  )
}
