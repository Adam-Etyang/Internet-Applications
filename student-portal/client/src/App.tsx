import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Student Portal</h1>
            <div className="space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 font-medium">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Manage Your Academic Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive platform for students to track courses, grades, and progress
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Course Management</h3>
            <p className="text-gray-600">
              View all enrolled courses, access syllabi, and track your progress in each class
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Grade Tracking</h3>
            <p className="text-gray-600">
              Monitor your grades, assignments, and overall GPA in real-time with detailed analytics
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Planner</h3>
            <p className="text-gray-600">
              Organize your class schedule, deadlines, and events all in one convenient location
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instructor Portal</h3>
            <p className="text-gray-600">
              Connect with professors, submit assignments, and access course materials online
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600">
              Access important documents, transcripts, and academic records whenever you need them
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Settings</h3>
            <p className="text-gray-600">
              Customize your profile, preferences, and notification settings to suit your needs
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-lg mb-8 text-indigo-100">
            Join thousands of students already using Student Portal to succeed in their studies
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Create Your Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 Student Portal. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
