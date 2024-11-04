import React from "react";
import { FcGoogle } from "react-icons/fc";
import loopeVideo from "../assets/loopevid.mp4";
import logo from "../assets/loopelogo.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log(response);
      const accessToken = response.access_token;
      if (accessToken) {
        try {
          const res = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const profile = await res.json();
          console.log(profile);
        } catch (error) {
          console.error(error);
        }
      }
    },
  });

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={loopeVideo}
          type="video/mp4"
          autoPlay
          loop
          controls={false}
          muted
        ></video>
        <div className="absolute flex flex-col justify-center items-end top-0 right-0 bottom-0 left-0 bg-blackOverlay">
          {/* <img src={logo} /> */}
          <p className="text-gray-100 text-8xl font-sans mr-80">
            lo
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block rounded-full">
              <span className="relative text-white">o</span>
            </span>
            pe
          </p>
          <span className="mr-80 text-yellow-500 mt-4">
            Create. Share. Loope
          </span>
          <div className="shadow-2xl">
            {/* <GoogleLogin
              style={{
                backgroundColor: "#4285f4",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                width: "10px !important",
              }}
              onSuccess={successMessage}
              onError={errorMessage}
            /> */}
            <button
              onClick={() => login()}
              className="flex justify-center items-center p-3 mr-80 mt-6 bg-mainColor rounded-lg cursor-pointer outline-none"
              type="button"
            >
              <FcGoogle className="mr-4" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
