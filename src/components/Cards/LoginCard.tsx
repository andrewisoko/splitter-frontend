import React from "react";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";


const LoginCard = () => {

  const navigate = useNavigate()
  const { login } = useAuth();

  const[loginValues,setLoginValues] = useState({
    email:"",
    password:"",
  })

    
  const handleLoginValues = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = event.target 
    setLoginValues(prev => ({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!loginValues.email.includes("@")){
      alert("Invalid Email")
      return;
    }

    try {

      const response = await api.post("auth/login",{
      email:loginValues.email,
      password:loginValues.password
      });

      login(response.data.access_token); 
      navigate('/home');

    } catch (error) {
      console.log(`error: ${error}`)
    }
  }

    return(
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome back.
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          New to SplitBill?{" "}
          <a href="http://localhost:3000/signup"
            type="button"
            className="text-blue-800 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} action="/login" method="post" className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your email address
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500"
              placeholder="you@example.com"
              value={loginValues.email}
              onChange={handleLoginValues}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500"
              placeholder="Enter your password"
              value={loginValues.password}
               onChange={handleLoginValues}
            />
          </div>

          {/* Main button */}
          <button
            type="submit"
            className="w-full rounded-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2.5 text-sm mt-2 transition-colors"
          >
            Log in
          </button>
        </form>

        {/* Trouble logging in */}
        <button
          type="button"
          className="mt-3 w-full text-xs text-center text-gray-700 underline"
        >
          Trouble logging in?
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-3 text-xs text-gray-500">Or log in with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="space-y-4">
          <button
            type="button"
            className="w-full border border-gray-300 rounded-full py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Google
          </button>
        <button
          type="button"
          className="w-full border border-gray-300 rounded-full py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Log in with a passkey
        </button>
        </div>
      </div>
    );
};

export default LoginCard