return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-maroon-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={`#project-${index}`}
                className="block p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-2 text-maroon-400">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

