'use client';
import { useState } from 'react';


interface FAQItemProps {
    question: string;
    answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4 bg-gradient-to-b from-[#D2DCFF] to-[#EAEEFE]">
            <button
                className="flex justify-between w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="text-3xl font-mono">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <p className="mt-2 text-gray-600 text-left font-semibold">
                    {answer}
                </p>
            )}
        </div>
    );
};