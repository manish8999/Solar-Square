import  { useState } from 'react';

const faqData = [
    { question: 'How much can our society save with solar?', answer: 'Savings vary based on installation size and energy consumption.' },
    { question: 'Is there a government subsidy for housing societies?', answer: 'Yes, subsidies are available for eligible housing societies.' },
    { question: 'How do we apply for the subsidy?', answer: 'You can apply through the government portal or consult your local energy provider.' },
    { question: 'Does our society need an AGM (Annual General Meeting) approval to install solar?', answer: 'Yes, it is generally recommended to obtain AGM approval.' },
    { question: 'What is the typical payback period for a solar system?', answer: 'The payback period typically ranges from 5 to 7 years.' },
    { question: 'What happens if solar generation is lower than expected?', answer: 'The system should be checked for faults or maintenance issues.' },
    { question: 'How much rooftop space is needed for a solar installation?', answer: 'Approximately 100 sq ft per kW of solar capacity.' },
    { question: 'What are the different financing options available?', answer: 'Options include loans, leasing, and power purchase agreements.' },
    { question: 'How do we ensure the safety and longevity of the solar installation?', answer: 'Regular maintenance and quality components ensure safety and longevity.' },
    { question: 'What maintenance does a solar system require?', answer: 'Periodic cleaning and inspections are required to maintain efficiency.' }
];

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md">
                        <button onClick={() => toggleFAQ(index)} className="flex justify-between items-center w-full text-left">
                            <span className="font-semibold">{item.question}</span>
                            <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <p className="mt-2 text-gray-600">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQComponent;
