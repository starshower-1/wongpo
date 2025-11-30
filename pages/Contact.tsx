import React, { useState } from 'react';
import { Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
  };

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">문의하기</h1>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">자주 묻는 질문</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-primary font-bold">Q.</span> {faq.question}
                  </span>
                  {openFaqIndex === index ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 pt-0 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    <div className="mt-4 flex gap-3">
                       <span className="text-secondary font-bold">A.</span>
                       {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1:1 문의</h2>
            <p className="text-gray-600 mb-8">
              궁금한 점이 있으신가요?<br/>
              운영위원회에 직접 메시지를 남겨주세요.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">전화 문의</p>
                  <p className="font-bold">063-123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">이메일 문의</p>
                  <p className="font-bold">help@ungpo.kr</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일/연락처</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
              <textarea rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg">
              문의 보내기
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;