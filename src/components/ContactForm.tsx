import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({
      firstName: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-0 border-b border-gray-300 rounded-none focus:border-nexia-secondary focus:ring-0 text-xl py-4 px-0 bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-0 border-b border-gray-300 rounded-none focus:border-nexia-secondary focus:ring-0 text-xl py-4 px-0 bg-transparent"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="border-0 border-b border-gray-300 rounded-none focus:border-nexia-secondary focus:ring-0 text-xl py-4 px-0 bg-transparent"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-0 border-b border-gray-300 rounded-none focus:border-nexia-secondary focus:ring-0 text-xl py-4 px-0 bg-transparent"
            />
          </div>

          {/* Message - Full Width */}
          <div className="md:col-span-2 space-y-4">
            <Textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="border-0 border-b border-gray-300 rounded-none focus:border-nexia-secondary focus:ring-0 text-xl py-4 px-0 bg-transparent resize-none"
            />
            
            <p className="text-nexia-primary text-sm leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <Button
              type="submit"
              variant="nexia"
              size="lg"
              className="px-12"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}