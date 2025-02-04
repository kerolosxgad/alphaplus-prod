import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "1. ما هي مجموعة منتجات ألفا بلس ودواعي استعمالها؟",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway."
    },
    {
      question: "2. مايجب أن تعرفه قبل القيام باستخدام مجموعة ألفا بلس؟",
      answer: "Shipping times vary depending on your location. Domestic orders typically take 3-5 business days, while international orders may take 7-14 business days. You'll receive a tracking number once your order ships."
    },
    {
      question: "3. كيفية تخزين مجموعة ألفا بلس؟",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return. Shipping costs for returns are the responsibility of the customer unless the item is defective."
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-1 bg-[#8D9598] px-12 py-6 md:py-12 text-sm">
      {/* Section Title */}
      <h2 className="font-bold text-lg md:text-3xl text-right text-white mb-5">
  الأسئلة الشائعة
</h2>

      
      {/* FAQ Items */}
      {faqData.map((item, index) => (
        <div 
          key={index}
          className="overflow-hidden border-b border-white text-white"
        >
          <button
            className="w-full py-5 px-6 text-right hover:bg-gray-500 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-sm md:text-lg">{item.question}</span>
            <ChevronDown 
              className={`transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-6 bg-gray-100 text-gray-800 rounded-b-lg">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
