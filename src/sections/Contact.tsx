import { Mail, Linkedin, Github, MapPin, Send, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-bg-main dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pastel-blue dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            GET IN TOUCH
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-white">
            Let's Connect
          </h2>
          <p className="mt-4 text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-montserrat font-bold text-xl text-text-primary dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:sonaglio3@gmail.com"
                  className="flex items-center gap-4 p-4 bg-pastel-blue dark:bg-blue-900/30 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-gray-400">Email</p>
                    <p className="font-semibold text-text-primary dark:text-white">sonaglio3@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+5549999344882"
                  className="flex items-center gap-4 p-4 bg-pastel-green dark:bg-green-900/30 rounded-2xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-text-primary dark:text-white">+55 (49) 99934-4882</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/fernando-sonaglio0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pastel-pink dark:bg-pink-900/30 rounded-2xl hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-gray-400">LinkedIn</p>
                    <p className="font-semibold text-text-primary dark:text-white">Fernando Sonaglio</p>
                  </div>
                </a>

                <a
                  href="https://github.com/fersonaglio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform shadow-sm">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-gray-400">GitHub</p>
                    <p className="font-semibold text-text-primary dark:text-white">@fersonaglio</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-pastel-yellow dark:bg-yellow-900/30 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-gray-400">Location</p>
                    <p className="font-semibold text-text-primary dark:text-white">Chapecó, SC - Brazil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-montserrat font-bold text-xl text-text-primary dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-primary dark:text-white focus:border-accent-teal dark:focus:border-teal-500 focus:ring-2 focus:ring-accent-teal/20 dark:focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-primary dark:text-white focus:border-accent-teal dark:focus:border-teal-500 focus:ring-2 focus:ring-accent-teal/20 dark:focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-primary dark:text-white focus:border-accent-teal dark:focus:border-teal-500 focus:ring-2 focus:ring-accent-teal/20 dark:focus:ring-teal-500/20 outline-none transition-all resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent-teal dark:bg-teal-600 hover:bg-accent-teal/90 dark:hover:bg-teal-500 text-white font-montserrat font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span>Message sent successfully!</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
