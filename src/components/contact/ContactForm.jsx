import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

const initialState = { name: "", phone: "", device: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet — this opens the user's email client
    // pre-filled with the enquiry so it reaches shoohaenterprises1998@gmail.com.
    // Swap this for an API call / form service (e.g. Formspree, EmailJS) later.
    const subject = encodeURIComponent(`Repair Enquiry from ${form.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nDevice / Issue: ${form.device}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-navy-950">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-navy-950">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="device" className="text-sm font-semibold text-navy-950">
          Device / Issue
        </label>
        <input
          id="device"
          name="device"
          type="text"
          value={form.device}
          onChange={handleChange}
          placeholder="e.g. HP Laptop not turning on"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-navy-950">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the issue you're facing..."
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition resize-none"
        />
      </div>

      <Button type="submit" variant="primary" icon={FaPaperPlane} className="self-start">
        Send Enquiry
      </Button>
    </form>
  );
}
