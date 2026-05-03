// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const categoryColors = {
  Language: { bg: 'rgba(59,130,246,0.08)', color: '#60a5fa', border: 'rgba(59,130,246,0.2)' },
  Web: { bg: 'rgba(16,185,129,0.08)', color: '#34d399', border: 'rgba(16,185,129,0.2)' },
  AI: { bg: 'rgba(139,92,246,0.08)', color: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
  IoT: { bg: 'rgba(245,158,11,0.08)', color: '#fbbf24', border: 'rgba(245,158,11,0.2)' },
  Tool: { bg: 'rgba(236,72,153,0.08)', color: '#f472b6', border: 'rgba(236,72,153,0.2)' },
  Database: { bg: 'rgba(6,182,212,0.08)', color: '#22d3ee', border: 'rgba(6,182,212,0.2)' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const categories = [...new Set(skills.map((s) => s.category))];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{
              background: 'rgba(59,130,246,0.1)',
              color: 'var(--accent)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            Expertise
          </span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-8">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            const palette = categoryColors[category] || categoryColors['Tool'];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="glass-card p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Category Label */}
                  <div className="flex-shrink-0 w-28">
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: palette.color }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className="hidden sm:block w-px h-8 flex-shrink-0"
                    style={{ background: 'var(--border)' }}
                  />

                  {/* Badges */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {categorySkills.map((skill) => (
                      <motion.span
                        key={skill.label}
                        variants={badgeVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium cursor-default transition-all"
                        style={{
                          background: palette.bg,
                          color: palette.color,
                          border: `1px solid ${palette.border}`,
                        }}
                      >
                        <span>{skill.icon}</span>
                        {skill.label}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: '4+', label: 'Projects Completed', icon: '🚀' },
            { value: '5+', label: 'Technologies', icon: '⚡' },
            { value: '3+', label: 'Years Coding', icon: '💻' },
            { value: 'B.Eng.', label: 'AI & System Engineering', icon: '🎓' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div
                className="text-2xl font-black mb-1"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
