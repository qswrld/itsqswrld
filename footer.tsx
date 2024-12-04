const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
