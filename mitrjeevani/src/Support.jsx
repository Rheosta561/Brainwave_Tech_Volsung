import React from "react";

// Header Component
const Header = () => (
  <div className="bg-blue-600 py-12 text-center text-white">
    <h1 className="text-4xl font-bold">Support Center</h1>
    <p className="mt-2 text-lg">How can we help you today?</p>
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => (
  <div className="border rounded-lg p-4">
    <button className="w-full text-left text-gray-800 font-medium focus:outline-none">
      <span>{question}</span>
    </button>
    <div className="mt-2 text-gray-600">
      <p>{answer}</p>
    </div>
  </div>
);

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    { 
      question: "Is my information private and secure?", 
      answer: "Yes, we prioritize your privacy. All conversations are encrypted and stored securely. We never share personal information without consent." 
    },
    { 
      question: "How accurate is the mental health information provided?", 
      answer: "Our assistant is designed with input from mental health professionals, using credible resources to provide general support. It is not a replacement for professional therapy." 
    },
    { 
      question: "Can I get emergency help from the chatbot?", 
      answer: "The chatbot is not designed for emergency situations. If you or someone you know is in crisis, please call a local emergency number or go to the nearest emergency room." 
    },
    { 
      question: "Can I speak to a real therapist through this platform?", 
      answer: "Currently, the assistant is an AI-based support tool. For direct therapy, we recommend reaching out to a certified mental health professional." 
    }
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

// Help Topic Component
const HelpTopic = ({ title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
      Learn More &rarr;
    </a>
  </div>
);

// Help Topics Section
const HelpTopicsSection = () => {
  const topics = [
    { 
      title: "Understanding Anxiety and Stress", 
      description: "Learn more about managing daily stress and anxiety with techniques and resources." 
    },
    { 
      title: "How the AI Assistant Works", 
      description: "Find out how the assistant can help with mental health support and what it can (and can't) do." 
    },
    { 
      title: "Privacy and Security", 
      description: "Learn about our commitment to keeping your conversations secure and confidential." 
    },
    { 
      title: "Tips for Mental Well-being", 
      description: "Explore tips for maintaining mental health, including mindfulness, self-care, and resilience strategies." 
    },
    { 
      title: "Connecting with a Therapist", 
      description: "Guidance on finding and connecting with a mental health professional for personalized support." 
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Help Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <HelpTopic key={index} title={topic.title} description={topic.description} />
        ))}
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => (
  <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  </div>
);

// Footer Component
const Footer = () => (
  <div className="bg-gray-800 py-4 text-white text-center">
    <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
  </div>
);

// Main Support Page Component
const SupportPage = () => {
  return (
    <div>
      <Header />
      <FAQSection />
      <HelpTopicsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default SupportPage;