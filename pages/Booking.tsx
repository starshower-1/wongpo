import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, CheckCircle } from 'lucide-react';
import { ACCOMMODATIONS, EXPERIENCES } from '../constants';

const Booking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stay' | 'exp'>('stay');
  const [selectedDate, setSelectedDate] = useState('');

  const handleBook = (name: string) => {
    alert(`'${name}' 예약 신청이 접수되었습니다.\n담당자가 확인 후 연락드리겠습니다.`);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
       <div className="bg-primary py-12 text-white text-center">
        <h1 className="text-3xl font-serif font-bold mb-2">예약 하기</h1>
        <p className="opacity-90">원하시는 날짜와 서비스를 선택해주세요.</p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-md inline-flex">
            <button
              onClick={() => setActiveTab('stay')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'stay' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              숙박 예약
            </button>
            <button
              onClick={() => setActiveTab('exp')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'exp' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              체험 예약
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">날짜 선택</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 w-full">
             <label className="block text-sm font-medium text-gray-700 mb-2">인원</label>
             <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" size={18} />
              <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white">
                <option>2명</option>
                <option>3명</option>
                <option>4명</option>
                <option>5명 이상</option>
              </select>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="space-y-6">
          {activeTab === 'stay' ? (
            ACCOMMODATIONS.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map((f, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-500">기준 {room.capacity}</p>
                      <p className="text-2xl font-bold text-primary">{room.price.toLocaleString()}원</p>
                    </div>
                    <button 
                      onClick={() => handleBook(room.name)}
                      className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                      예약하기
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            EXPERIENCES.map((exp) => (
              <div key={exp.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={exp.imageUrl} alt={exp.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.name}</h3>
                      <span className="bg-green-100 text-primary px-2 py-1 rounded text-xs font-bold">{exp.category}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{exp.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle size={14} className="text-primary" /> 소요시간: {exp.duration}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4">
                    <p className="text-xl font-bold text-primary">{exp.price.toLocaleString()}원 <span className="text-sm font-normal text-gray-400">/ 1인</span></p>
                    <button 
                      onClick={() => handleBook(exp.name)}
                      className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7a5e55] transition"
                    >
                      예약신청
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-100 text-sm text-yellow-800">
          <h4 className="font-bold mb-2">📌 예약 안내 사항</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>예약 신청 후 입금 확인이 완료되면 예약이 확정됩니다.</li>
            <li>성수기/주말 요금은 상이할 수 있으니 반드시 전화 문의 부탁드립니다.</li>
            <li>체험 프로그램은 날씨 및 현지 사정에 따라 일정이 변경될 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Booking;