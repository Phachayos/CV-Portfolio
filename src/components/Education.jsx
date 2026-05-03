// src/components/Education.jsx
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{
              background: 'rgba(59,130,246,0.1)',
              color: 'var(--accent)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            Background
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic foundation</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'var(--border)' }}
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                    }}
                  >
                    🎓
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-4">
                  <div className="glass-card p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3
                          className="text-lg sm:text-xl font-bold leading-snug mb-1"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {edu.degree}
                        </h3>
                        <p className="font-semibold" style={{ color: 'var(--accent)' }}>
                          {edu.university}
                        </p>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span
                          className="inline-block px-3 py-1.5 rounded-lg text-sm font-semibold"
                          style={{
                            background: 'rgba(59,130,246,0.1)',
                            color: 'var(--accent)',
                            border: '1px solid rgba(59,130,246,0.2)',
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Degree badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold"
                        style={{
                          background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                          color: 'var(--accent)',
                          border: '1px solid rgba(59,130,246,0.2)',
                        }}
                      >
                        {edu.icon} {edu.short}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>
                        Key Focus Areas
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: 'var(--accent)' }}
                            />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
