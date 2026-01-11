import React from "react";
import { useState } from "react";
import api from "../services/api";

export default function SignupPage() {

    const [fullName,setFullName] = useState("");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
    const [phoneNumber,setPhoneNumber] = useState<number>()

    
    const handleSubmit = (event:any) =>{
        event.preventDefault()

         api.post("auth/register",{
            fullName:fullName,
            userName:userName,
            email:email,
            number:phoneNumber,
            password:password,
            confirmPassword:confirmPassword
        })

    }

    const handleFullName = (event:any) =>{
        setFullName(event.target.value)
        console.log(`data ${fullName}`)
    }
    const handleUserName = (event:any) =>{
        setUserName(event.target.value)
        console.log(`data ${userName}`)
    }
    const handleEmail = (event:any) =>{
        setEmail(event.target.value)
        console.log(`data ${email}`)
    }
    const handlePassword = (event:any) =>{
        setPassword(event.target.value)
        console.log(`data ${password}`)
    }
    const handleConfirmPassword = (event:any) =>{
        setconfirmPassword(event.target.value)
        console.log(`data ${confirmPassword}`)
    }
    const handleNumber = (event:any) =>{
        setPhoneNumber(event.target.value)
        console.log(`data ${phoneNumber}`)
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      {/* Card container */}
      <div className="mt-8 mb-8 w-full max-w-md bg-white rounded-3xl shadow-xl px-8 py-10">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Already have an account?
            <a
              href="/login"
              className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </a>
          </p>
        </div>

        {/* Signup form */}
        <form onSubmit={handleSubmit}  action="/signup" method="post" className="space-y-4">
          {/* Full name field */}
          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-slate-700"
            >
              Full name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              autoComplete="name"
              placeholder="Joe Smith"
              value={fullName}
              onChange={handleFullName}
              className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          {/* Username field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              placeholder="username"
              value={userName}
              onChange={handleUserName}
              className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmail}
              className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          {/* Phone field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+44 7700 900123"
              value={phoneNumber}
              onChange={handleNumber}
              className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          {/* Password field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              placeholder="Enter a strong password"
              value={password}
              onChange={handlePassword}
              className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
            Confirm Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              placeholder="Enter a strong password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          {/* Primary action */}
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Sign up
          </button>
        </form>

        {/* Alternative auth options */}
        <div className="mt-6">
          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs text-slate-400">
              <span className="bg-white px-2">Or sign up with</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="mt-4 space-y-3">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Continue with passkey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
