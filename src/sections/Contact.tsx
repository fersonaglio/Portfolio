import { Mail, Linkedin, Github, Phone, Terminal } from 'lucide-react';
import { useState } from 'react';

// Contact data - obfuscated to prevent simple scraping
const ENCODED_EMAIL = 'c29uYWdsaW8zQGdtYWlsLmNvbQ==';
const DECODED_EMAIL = atob(ENCODED_EMAIL);
const ENCODED_PHONE = 'KzU1ICg0OSkgOTk5MzQtNDg4Mg==';
const DECODED_PHONE = atob(ENCODED_PHONE);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '', website: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${DECODED_EMAIL}`;
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <span className="mono-detail">Communication Port // 0.1</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-balance">
            Initiate <span className="text-muted-foreground">Contact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Matrix */}
          <div className="lg:col-span-4 space-y-6">
            <div className="industrial-border p-6 space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Direct_Channels</p>
                <div className="space-y-3">
                  <button onClick={handleEmailClick} className="flex items-center gap-3 group w-full text-left">
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-xs font-mono group-hover:underline">sonaglio3@gmail.com</span>
                  </button>
                  <a href={`https://wa.me/${DECODED_PHONE.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Phone className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-xs font-mono group-hover:underline">+55 49 99934-4882</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Social_Nodes</p>
                <div className="space-y-3">
                  <a href="https://www.linkedin.com/in/fernando-sonaglio0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-xs font-mono group-hover:underline">LinkedIn/sonaglio</span>
                  </a>
                  <a href="https://github.com/fersonaglio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-xs font-mono group-hover:underline">GitHub/fersonaglio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Industrial Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="industrial-border p-8 space-y-6 bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Requestor_Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-2 text-sm focus:border-foreground outline-none transition-colors"
                    placeholder="IDENTIFY YOURSELF"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Return_Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-2 text-sm focus:border-foreground outline-none transition-colors"
                    placeholder="EMAIL@DOMAIN.COM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Transmission_Body</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border border-border p-4 text-sm focus:border-foreground outline-none transition-colors resize-none"
                  placeholder="TYPE YOUR MESSAGE HERE..."
                />
              </div>

              <div className="absolute opacity-0 pointer-events-none">
                <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest font-bold hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : submitted ? "TRANSMISSION SUCCESSFUL" : "SEND MESSAGE // EXECUTE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
