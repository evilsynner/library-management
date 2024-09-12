import { useState } from 'react';
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      email: email,
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/users/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        const data = await response.json();
        showNotification("User created successfully!", "success");
        setEmail("");
        setUsername("");
        setPassword("");
      } else {
        const errorData = await response.json();
        showNotification("Error: " + JSON.stringify(errorData), "error");
      }
    } catch (error) {
      showNotification("Error: " + error.toString(), "error");
    }
  };

  // Function to show notifications
  const showNotification = (message, type) => {
    setNotification({ message, type });

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm relative">

        {/* Notification Banner */}
        {notification.message && (
          <div
            className={`absolute top-0 left-0 right-0 p-4 text-center rounded-t-lg ${
              notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {notification.message}
          </div>
        )}

        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="username">
              Your username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="uname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create an account
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Already have an account? <Link to="/accounts/login/" className="text-blue-500 underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}
