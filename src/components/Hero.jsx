// src/components/Hero.jsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Background Blobs */}
      <div
        className="hero-blob w-96 h-96"
        style={{
          top: '10%',
          left: '-5%',
          background: 'radial-gradient(circle, #3b82f6, #8b5cf6)',
        }}
      />
      <div
        className="hero-blob w-80 h-80"
        style={{
          bottom: '10%',
          right: '-5%',
          background: 'radial-gradient(circle, #06b6d4, #3b82f6)',
        }}
      />
      <div
        className="hero-blob w-64 h-64"
        style={{
          top: '40%',
          right: '20%',
          background: 'radial-gradient(circle, #f59e0b, #ef4444)',
          opacity: 0.08,
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Phachayos
              <br />
              <span className="gradient-text">Badklang</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-semibold mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Software Developer &amp;{' '}
              <span style={{ color: 'var(--accent)' }}>AI Engineer</span>
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Passionate about building intelligent systems and impactful software.
              Specializing in{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Artificial Intelligence</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>System Engineering</strong>, and{' '}
              <strong style={{ color: 'var(--text-primary)' }}>IoT development</strong> — turning
              complex problems into elegant, scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary" id="hero-view-projects">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-secondary" id="hero-contact-me">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
            </motion.div>

            {/* Social Quick Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                Find me on
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Phachayos"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-link"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/phachayos"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-linkedin-link"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#0077b5'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            variants={itemVariants}
          >
            <div className="relative animate-float">
              {/* Outer glow rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                  padding: '3px',
                  borderRadius: '50%',
                  animation: 'spin-glow 4s linear infinite',
                }}
              />
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-xl"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                  animation: 'spin-glow 4s linear infinite',
                }}
              />

              {/* Profile image container */}
              <div
                className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/CV-Portfolio/Profile1.JPG"
                    alt="Phachayos Badklang — Software Developer & AI Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>


            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <a
            href="#education"
            className="flex flex-col items-center gap-2 group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="w-1 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
