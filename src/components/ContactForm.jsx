import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return isSubmitted ? (
        <div className="bg-[#181818] rounded-md shadow-lg p-8 text-center">
            <CheckCircle className="mx-auto text-[#E50914] mb-4" size={48} />
            <h2 className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</h2>
            <p className="text-[#b3b3b3] mb-6">Your message has been sent successfully.</p>
        </div>
    ) : (
        <div className="bg-[#181818] rounded-md shadow-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
            <p className="text-[#b3b3b3] mb-8">Have any questions regarding me?</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field) => (
                    <div key={field}>
                        {field === 'message' ? (
                            <textarea
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                rows={4}
                                placeholder="How can we help you?"
                                className={`w-full px-4 py-3 bg-[#333333] border-none text-white rounded focus:ring-2 focus:ring-[#E50914] placeholder-[#8c8c8c] ${errors[field] ? "border-[#E50914]" : ""}`}
                            />
                        ) : (
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                className={`w-full px-4 py-3 bg-[#333333] border-none text-white rounded focus:ring-2 focus:ring-[#E50914] placeholder-[#8c8c8c] ${errors[field] ? "border-[#E50914]" : ""}`}
                            />
                        )}
                        {errors[field] && <p className="mt-1 text-sm text-[#E50914]">{errors[field]}</p>}
                    </div>
                ))}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center py-3 px-4 rounded text-base font-medium text-white bg-[#E50914] hover:bg-[#f40612] transition ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2" size={18} /> Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
