'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiAlertTriangle,
  FiLoader,
  FiX,
} from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { fadeUp, stagger, slideRight, slideLeft } from '@/utils/animations';
import styles from './Contact.module.css';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const CONTACT_EMAIL = 'officialankush3343@gmail.com';

const buildMailto = (data) => {
  const subject = `Portfolio inquiry from ${data.name || 'visitor'}`;
  const lines = [
    data.name && `Name: ${data.name}`,
    data.email && `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    '',
    'Message:',
    data.message || '',
  ].filter((line) => line !== false && line !== undefined);
  const body = lines.join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    const formEl = formRef.current;
    if (!formEl) {
      setStatus('idle');
      return;
    }

    const data = Object.fromEntries(new FormData(formEl).entries());

    try {
      if (WEB3FORMS_KEY) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New portfolio inquiry from ${data.name || 'visitor'}`,
            from_name: 'Ankush Contact Form',
            ...data,
          }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.success) {
          throw new Error(json.message || 'Submission failed.');
        }
      } else if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, {
          publicKey: PUBLIC_KEY,
        });
      } else {
        // No backend configured — open the visitor's mail client pre-filled.
        window.location.href = buildMailto(data);
      }

      formEl.reset();
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4500);
    } catch (err) {
      // Network/provider failed — fall back to mailto so the user can still reach out.
      try {
        window.location.href = buildMailto(data);
        formEl.reset();
        setStatus('success');
        setTimeout(() => setStatus('idle'), 4500);
        return;
      } catch {
        // ignore and fall through to error state
      }
      setErrorMsg(err?.text || err?.message || 'Something went wrong.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Contact
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Let's build something <span className="gradient-text">amazing</span>.
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Got a project, a question, or just want to say hi? Drop me a note —
            I reply within 24 hours.
          </motion.p>
        </motion.div>

        <div className={styles.grid}>
          <motion.aside
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.info}
          >
            <h3 className={styles.infoTitle}>Get in touch</h3>
            <p className={styles.infoSub}>
              I'm currently accepting new projects for Q3 / Q4. Let's make
              something memorable.
            </p>

            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoIcon}><FiMail /></span>
                <a href="mailto:officialankush3343@gmail.com">officialankush3343@gmail.com</a>
              </li>
              <li>
                <span className={styles.infoIcon}><FiPhone /></span>
                <a href="tel:+919728733043">+91 97287 33043</a>
              </li>
              <li>
                <span className={styles.infoIcon}><FiMapPin /></span>
                Chandigarh, India · Remote-friendly
              </li>
            </ul>

            <div className={styles.socials}>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" data-cursor="hover">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor="hover">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" data-cursor="hover">
                <FaInstagram />
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.availDot} />
              <div>
                <strong>Open to opportunities</strong>
                <span>Avg response · within 24 hours</span>
              </div>
            </div>
          </motion.aside>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.form}
            noValidate
          >
            <div className={styles.row}>
              <Field label="Name" name="name" type="text" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" />

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, timeline, and budget..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={styles.submitBtn}
              data-cursor="hover"
            >
              {status === 'loading' ? (
                <>
                  <FiLoader className={styles.spinner} /> Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            <p className={styles.disclaimer}>
              By submitting, you agree to be contacted about your project.
            </p>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <Toast
            kind={status}
            message={
              status === 'success'
                ? "Thanks! Your message landed — I'll reply within 24 hours."
                : errorMsg || 'Could not send your message. Please try again.'
            }
            onClose={() => setStatus('idle')}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={
          name === 'email' ? 'email' :
          name === 'name' ? 'name' :
          name === 'phone' ? 'tel' : 'off'
        }
      />
    </div>
  );
}

function Toast({ kind, message, onClose }) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.toast} ${kind === 'success' ? styles.toastSuccess : styles.toastError}`}
    >
      <span className={styles.toastIcon}>
        {kind === 'success' ? <FiCheckCircle /> : <FiAlertTriangle />}
      </span>
      <span className={styles.toastMsg}>{message}</span>
      <button type="button" onClick={onClose} aria-label="Dismiss" className={styles.toastClose}>
        <FiX />
      </button>
    </motion.div>
  );
}
