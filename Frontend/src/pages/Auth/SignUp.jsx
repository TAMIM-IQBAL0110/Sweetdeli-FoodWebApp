import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../utilities/apiClient";
import { API_PATHS } from "../../utilities/apiPath";
import LeftSideAuthPage from "../../componets/LeftSideAuthPage";
import AuthForm, { AuthInput } from "../../componets/AuthForm";

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
      <div className="flex-1">
        <LeftSideAuthPage />
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white py-12">
        <AuthForm
          title="Create your account"
          subtitle="It's free and easy"
          submitText={loading ? "Signing up..." : "Sign Up"}
          onSubmit={handleSubmit}
          footerText="Already have an account?"
          footerLinkText="Sign In"
          onFooterClick={() => navigate("/login")}
        >
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">
              Account created successfully! Redirecting...
            </div>
          )}

          <AuthInput
            label="Full name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <AuthInput
            label="E-mail or phone number"
            placeholder="Type your e-mail or phone number"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <AuthInput
            label="Password"
            placeholder="Type your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            helperText="Must be 8 characters at least"
          />

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
        </AuthForm>
      </div>
    </div>
  );
};

export default SignUp;
