import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../utilities/apiClient";
import { API_PATHS } from "../../utilities/apiPath";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("Full name is required");
      setLoading(false);
      return;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setError("Password is required");
      setLoading(false);
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      const response = await apiClient.post(API_PATHS.AUTH.REGISTER, formData);

      if (response.success) {
        setSuccess(true);
        localStorage.setItem("token", response.token);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left side */}
      <div className="flex-1 flex items-center justify-center bg-[#343741] text-white">
        <h1 className="text-2xl font-semibold">Image Placeholder</h1>
      </div>

      {/* Right side */}
      <div className="flex-1 bg-white px-12 py-16 text-black">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-500">It's free and easy</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              E-mail or phone number
            </label>
            <input
              type="text"
              placeholder="Type your e-mail or phone number"
              className="w-full bg-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Type your password"
              className="w-full bg-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-xs text-gray-500 mt-2">
              Must be 8 characters at least
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              By creating an account means you agree to the{" "}
              <span className="font-semibold text-black cursor-pointer">
                Terms and Conditions
              </span>
              , and our{" "}
              <span className="font-semibold text-black cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
