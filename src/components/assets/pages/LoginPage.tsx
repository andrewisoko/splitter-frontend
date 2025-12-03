import React from 'react'

const LoginPage = () => {
  return ( 
  <div className='bg-purple-500 h-screen flex items-center justify-center px-4'>
    <div className='max-w-md w-full bg-white rounded-2xl p-8 shadow-md'>
      <h1 className='text-2xl font-semibold text-center mb-2'>
        Welcome back.
      </h1>
      <p className="text-center text-sm text-gray-600 mb-6">
        First time here? <span className="text-purple-600 font-medium">Sign up</span>
      </p>
       {/* Form will go here next */}
    </div>
  </div>
  )
}

export default LoginPage
