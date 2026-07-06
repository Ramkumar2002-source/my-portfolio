import "./Contact.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_mt3jzo3",
        "template_wnjlbrq",
        form.current,
        {
          publicKey: "hhkIUSwJZaXIPy18B"
        }
      )
      .then(
        () => {

          setStatus("Message sent successfully! ✅");

          form.current.reset();

        },
        (error) => {

          console.log("EmailJS Error:", error);

          setStatus("Failed to send message ❌");

        }
      );
  };

  return (

    <footer id="contact" className="contact">

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >

        <h1>Let's Connect</h1>

        <p>
          Have a question or opportunity? Feel free to send me a message.
        </p>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            required
          />

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              y: -3
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            Send Message
          </motion.button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </motion.div>

      <div className="contact-ticker">
  <div className="ticker-content">

    <span>📞 +91 6382759661</span>
    <span>✉️ ramkumars21062002@gmail.com</span>
    <span>📸 Instagram: @ram__21.__</span>
    <span>💼 LinkedIn: RAMKUMARs</span>

    {/* Duplicate for smooth continuous scrolling */}

    <span>📞 +91 6382759661</span>
    <span>✉️ ramkumars21062002@gmail.com</span>
    <span>📸 Instagram: @ram__21.__</span>
    <span>💼 LinkedIn: RAMKUMARs</span>

  </div>
</div>

<div className="footer-bottom">
  <p>© 2026 Ramkumar. Built with React.</p>
</div>

    </footer>
  );
}

export default Contact;