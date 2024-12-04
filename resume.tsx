use client'

import { motion } from 'framer-motion'

const Resume = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovative Systems LLC',
      period: '2018 - 2020',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Co.',
      period: '2016 - 2018',
    },
  ]

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-maroon-500">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 pb-6 border-b border-gray-700 last:border-b-0"
            >
              <h3 className="text-2xl font-semibold text-maroon-400">{exp.title}</h3>
              <p className="text-xl text-gray-400">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
