import { useState } from "react";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Controlled inputs: React state is the single source of truth for each field.
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const found = {};
    if (!form.name.trim()) found.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) found.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) found.message = "Write at least 10 characters.";
    return found;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="wrap section narrow">
      <h1 className="page-title">Contact</h1>
      <p>Write a message below, or email <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} aria-invalid={!!errors.message} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button className="btn primary" type="submit">Send message</button>
        {sent && <p role="status">Your email app should open with the message ready to send.</p>}
      </form>
    </section>
  );
}
