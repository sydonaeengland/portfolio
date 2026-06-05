import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_KEY;

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const REASONS = [
  { value: '',            label: 'What is this about?' },
  { value: 'internship',  label: 'Internship opportunity' },
  { value: 'fulltime',    label: 'Full-time role' },
  { value: 'collab',      label: 'Collaboration' },
  { value: 'resume',      label: 'Resume request' },
  { value: 'other',       label: 'Something else' },
];

const PLACEHOLDERS = {
  internship: 'Tell me about the internship and the company...',
  fulltime:   'Tell me about the role and what you are looking for...',
  collab:     'Tell me about the project or idea...',
  resume:     'Tell me about the role and I will send my resume over...',
  other:      'Tell me what is on your mind...',
  '':         'Your message...',
};

export default function Contact() {
  const [form, setForm]       = useState({ reason: '', name: '', email: '', subject: '', message: '' });
  const [status, setStatus]   = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const placeholder = PLACEHOLDERS[form.reason] || PLACEHOLDERS[''];

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const reasonLabel = REASONS.find(r => r.value === form.reason)?.label || '';

      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:  form.name,
          from_email: form.email,
          enquiry:    reasonLabel || form.subject,
          message:    form.message,
        },
        { publicKey: EMAILJS_KEY },
      );

      setStatus('success');
      setForm({ reason: '', name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-inner">

        {/* top */}
        <motion.div
          className="contact-top"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Contact</span>
          </div>
          <h2 className="contact-heading">Let's work together.</h2>
          <p className="contact-sub">
            Open to internships, full-time roles and collaborations. Pick the quickest path for you.
          </p>
        </motion.div>

        {/* two cols */}
        <div className="contact-cols">

          {/* Left — form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <p className="contact-col-label">Send a message</p>

            {/* 1. Name + Email */}
            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            {/* 2. What is it about */}
            <div className="form-field">
              <label>I am reaching out about</label>
              <div className="form-select-wrap">
                <select name="reason" value={form.reason} onChange={handleChange} required className="form-select">
                  {REASONS.map(r => (
                    <option key={r.value} value={r.value} disabled={r.value === ''}>{r.label}</option>
                  ))}
                </select>
                <svg className="form-select-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>

            {/* 3. Subject — only when "other" */}
            <AnimatePresence>
              {form.reason === 'other' && (
                <motion.div
                  className="form-field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ overflow: 'hidden' }}
                >
                  <label>Subject</label>
                  <input name="subject" type="text" placeholder="What is this about?" value={form.subject} onChange={handleChange} required />
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4. Message */}
            <AnimatePresence mode="wait">
              <motion.div
                key={form.reason}
                className="form-field"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <label>Message</label>
                <textarea name="message" rows={5} placeholder={placeholder} value={form.message} onChange={handleChange} required />
              </motion.div>
            </AnimatePresence>

            <div className="form-submit">
              <button type="submit" className="btn btn-violet" disabled={sending}>
                {sending ? 'Sending...' : <><Send size={13} />Send Message</>}
              </button>
            </div>

            {status === 'success' && <div className="form-message success">Message sent. I will get back to you soon.</div>}
            {status === 'error'   && <div className="form-message error">Something went wrong. Please email me directly.</div>}
          </motion.form>

          {/* Right — quick connect */}
          <motion.div
            className="contact-quick"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <p className="contact-col-label">Quick connect</p>

            <div className="contact-quick-divider">
              <span>reach me directly</span>
            </div>

            <a href="mailto:sydonaeengland@gmail.com" className="contact-email-large">
              sydonaeengland@gmail.com
            </a>

            <div className="contact-social-pills">
              <a href="https://linkedin.com/in/sydonae-england" target="_blank" rel="noreferrer" className="contact-social-pill">
                <IconLinkedIn /> LinkedIn
              </a>
              <a href="https://github.com/sydonaeengland" target="_blank" rel="noreferrer" className="contact-social-pill">
                <IconGitHub /> GitHub
              </a>
            </div>

            <p className="contact-availability">Based in Jamaica · Available for remote roles</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
