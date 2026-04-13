import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Fernando's commitment to innovation and adaptability makes him a valuable asset. With technology as his compass, he harnesses his skills to deliver exceptional results.",
      author: "Questor Sistemas",
      role: "Current Employer",
    },
    {
      quote: "His ability to quickly learn new technologies and apply them to solve complex problems is impressive. Fernando consistently delivers high-quality work.",
      author: "Team Lead",
      role: "Questor Sistemas",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border relative shadow-sm"
            >
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 pt-4">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
