export default function UserHomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, User!</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Browse Books Card */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-all">
            <h2 className="text-xl font-semibold mb-4">Browse Books</h2>
            <p className="text-gray-300">Explore the library's collection and find your next read.</p>
          </div>
          {/* My Borrowed Books Card */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-all">
            <h2 className="text-xl font-semibold mb-4">My Borrowed Books</h2>
            <p className="text-gray-300">View the books you have borrowed and manage returns.</p>
          </div>
          {/* Notifications Card */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-all">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <p className="text-gray-300">Stay up to date with your notifications and alerts.</p>
          </div>
          {/* Profile Card */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-all">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <p className="text-gray-300">Manage your account settings and personal information.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
