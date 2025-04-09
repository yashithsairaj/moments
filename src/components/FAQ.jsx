import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4" data-aos="fade-up" data-aos-duration="1000">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-3 bg-slate-200 rounded-full text-black font-roboto md:text-2xl hover:bg-[#eaeaea] hover:scale-105 transition-all cursor-pointer"
      >
        {question}
        <span className="text-pink-500">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 ml-6 bg-pink-100 text-sm text-black rounded-md px-4 py-3 max-w-[600px] md:text-xl relative left-1/3">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I access my event photos?',
      answer:
        'Enter the unique function code provided by your photographer or event organizer to view your album.',
    },
    {
      question: 'Can I find my photos using face recognition?',
      answer: 'Yes, our AI-based face recognition helps locate your photos instantly.',
    },
    {
      question: 'Can I upgrade my storage for more photos?',
      answer: 'Absolutely! Upgrade options are available in your account settings.',
    },
    {
      question: 'What happens if I forget my function code?',
      answer: 'You can contact your event organizer or photographer to retrieve it.',
    },
    {
      question: 'How secure are my event photos?',
      answer: 'Your photos are encrypted and accessible only with valid credentials.',
    },
    {
      question: 'Can my friends upload photos to my event album?',
      answer: 'Yes, if you allow collaboration, your friends can contribute photos too.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4" >
      <h2 className="text-5xl font-bold mb-8 text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        Frequently Asked Questions <span role="img" aria-label="pointing finger">☝️</span>
      </h2>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
