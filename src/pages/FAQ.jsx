import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is KidsFin?",
      answer:
        "KidsFin is a platform designed to teach kids financial literacy through fun and interactive activities.",
    },
    {
      question: "Who can use KidsFin?",
      answer:
        "KidsFin is designed for children aged 4-16 years, but parents and educators can also use it as a teaching resource.",
    },
    {
      question: "Is KidsFin free to use?",
      answer:
        "KidsFin offers both free and premium plans. The premium plan includes additional features and exclusive content.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to us via email at support@kidsfin.com or use the contact form on our website.",
    },
    {
      question: "How does KidsFin help teach financial literacy?",
      answer: "KidsFin uses interactive games, quizzes, videos, and lessons to teach financial concepts in a fun and engaging way, tailored to different age groups."
    },
    {
      question: "Can I track my child's progress on KidsFin?",
      answer: "Yes, KidsFin has a parent portal where you can monitor your child's progress, track completed activities, and see their performance over time."
    },
    {
      question: "Are the activities on KidsFin age-appropriate?",
      answer: "Yes, KidsFin offers content specifically tailored to different age groups, ensuring that all activities and lessons are suitable and engaging for children aged 4-16."
    },
    {
      question: "Can KidsFin be used in schools?",
      answer: "Absolutely! KidsFin provides tools and resources for educators to incorporate financial literacy into their curriculum, including lesson plans, classroom activities, and progress tracking."
    }
    
      
      
    
  ];

  return (
    <div className="bg-[#1C1C1C] px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked <span className='text-[#C6A55C]'>Questions</span></h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border rounded-lg">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 flex justify-between items-center  hover:bg-gray-50"
            >
              <span className="font-semibold bg-white text-black">{faq.question}</span>
              <ChevronDown
                className={`bg-white transition-transform ${
                  activeQuestion === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeQuestion === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
