import { faqData } from "@/constants/data";
import { FAQItem } from "@/components/LandingP";

export const Faq = () => {
    return (
        <section className='bg-gradient-to-b from-[#D2DCFF] to-[#EAEEFE]'>
        <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-center section-title font-bold p-10">Frequently asked questions</h2>
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
        </section>
    );
};

