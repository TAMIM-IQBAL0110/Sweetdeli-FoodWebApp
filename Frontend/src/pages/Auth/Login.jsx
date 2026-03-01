import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiClient from '../../utilities/apiClient'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validation
    if (!formData.email.trim()) {
      setError('Email is required')
      setLoading(false)
      return
    }
    if (!formData.password) {
      setError('Password is required')
      setLoading(false)
      return
    }

    try {
      const response = await apiClient.post(
        '/api/v1/auth/login',
        formData
      )

      if (response.success) {
        localStorage.setItem('token', response.token)
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Dark */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-800 text-white p-16 flex-col justify-between">
        <div>
          <div className="inline-block bg-white text-gray-800 px-6 py-2 rounded-full font-semibold mb-16">
            ★ LOGO
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-8">
            Welcome Back!
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Login to your account and continue enjoying delicious treats from Sweetdeli. Your sweet adventure awaits!
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-48 h-48 bg-white rounded-2xl flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-400 rounded-full mb-4"></div>
            <div className="flex gap-3">
              <div className="w-6 h-16 bg-gray-400 rounded-md"></div>
              <div className="w-6 h-16 bg-gray-400 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Light */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Welcome back
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Login to your account
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-3">
                Email or phone number
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type your e-mail or phone number"
                className="w-full px-5 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition placeholder-gray-500"
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm mb-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type your password"
                className="w-full px-5 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition placeholder-gray-500"
                disabled={loading}
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link to="#" className="text-sm text-blue-600 hover:text-blue-800 transition font-medium">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg mt-8"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <p className="text-center text-gray-600 text-sm mb-6">
              or do it via other accounts
            </p>
            <div className="flex justify-center gap-8">
              <button 
                type="button"
                className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 transition text-xl font-semibold"
              >
                G
              </button>
              <button 
                type="button"
                className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 transition text-xl"
              >
                🍎
              </button>
              <button 
                type="button"
                className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 transition text-xl font-semibold"
              >
                f
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-700 mt-8 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-800 transition">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
