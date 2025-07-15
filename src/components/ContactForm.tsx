import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building2, MessageSquare, Send, CheckCircle, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    countryCode: "+212",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email invalide";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: "" }));
    }
  };

  // Liste simplifiée des indicatifs de pays
  const countryCodes = [
    { code: "+212", country: "Maroc", flag: "🇲🇦" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+1", country: "États-Unis", flag: "🇺🇸" },
    { code: "+44", country: "Royaume-Uni", flag: "🇬🇧" },
    { code: "+49", country: "Allemagne", flag: "🇩🇪" },
    { code: "+39", country: "Italie", flag: "🇮🇹" },
    { code: "+34", country: "Espagne", flag: "🇪🇸" },
    { code: "+41", country: "Suisse", flag: "🇨🇭" },
    { code: "+32", country: "Belgique", flag: "🇧🇪" },
    { code: "+31", country: "Pays-Bas", flag: "🇳🇱" },
  ];

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      countryCode: "+212",
      phone: "",
      service: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nexia-primary mb-4">
            Contactez nos experts
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Parlez-nous de votre projet. Notre équipe d'experts vous accompagnera dans toutes vos démarches comptables et fiscales.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Prénom *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`h-12 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-nexia-secondary`}
                  placeholder="Votre prénom"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Nom *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`h-12 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-nexia-secondary`}
                  placeholder="Votre nom"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-nexia-secondary`}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone *
                </Label>
                <div className="relative">
                  <div className="flex h-12 border border-gray-300 rounded-md focus-within:border-nexia-secondary focus-within:ring-1 focus-within:ring-nexia-secondary">
                    {/* Country Code Button */}
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center justify-center w-20 sm:w-24 px-2 bg-gray-50 border-r border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-base">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium">{formData.countryCode}</span>
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                      </div>
                    </button>
                    
                    {/* Phone Input */}
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`flex-1 h-full border-0 focus:ring-0 rounded-l-none bg-white ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="XX XX XX XX"
                    />
                  </div>
                  
                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                      {countryCodes.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, countryCode: country.code }));
                            setShowCountryDropdown(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-lg">{country.flag}</span>
                          <span className="font-medium">{country.code}</span>
                          <span className="text-sm text-gray-600">{country.country}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            {/* Company and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Entreprise
                </Label>
                <Input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-nexia-secondary"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Service souhaité
                </Label>
                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-nexia-secondary">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="audit">Audit et Assurance</SelectItem>
                    <SelectItem value="conseil">Conseil Fiscal</SelectItem>
                    <SelectItem value="comptabilite">Expertise Comptable</SelectItem>
                    <SelectItem value="social">Social et Paie</SelectItem>
                    <SelectItem value="juridique">Conseil Juridique</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-nexia-secondary resize-none`}
                placeholder="Décrivez votre projet ou vos besoins..."
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Information Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Confidentialité garantie</p>
                  <p>Vos informations sont traitées en toute confidentialité. Nous nous engageons à vous répondre dans un délai de 24h ouvrées.</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-nexia-primary hover:bg-nexia-primary/90 text-white px-6 sm:px-8 py-3 h-auto text-base sm:text-lg font-medium rounded-lg transition-all duration-200 flex items-center gap-2 min-w-[160px] sm:min-w-[180px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}