import { Instagram, MessageCircle, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      color: "hover:text-green-600",
      description: "Chat with us instantly",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/autodealerpro",
      color: "hover:text-pink-600",
      description: "Follow our latest updates",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com/@autodealerpro",
      color: "hover:text-black",
      description: "Watch our car videos",
    },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow us on social media for the latest car arrivals, exclusive
            deals, and behind-the-scenes content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <social.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-automotive-dark mb-2">
                    {social.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {social.description}
                  </p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Follow</span>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-[var(--primary)] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-white mb-6">
              Our team is ready to help you find your perfect car. Contact us
              now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-automotive-dark hover:bg-[var(--primary)] hover:text-white transition duration-300"
              >
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Call 0723739283</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-automotive-dark hover:bg-[var(--primary)] hover:text-white transition duration-300"
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
