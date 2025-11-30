import React from 'react';
import { ArrowRight, Star, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ACCOMMODATIONS, EXPERIENCES, IMAGE_ASSETS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGE_ASSETS.HERO_BG})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-lg md:text-xl font-medium tracking-widest mb-4 animate-fade-in-up">산들강 웅포마을</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100">
            자연이 숨 쉬는 곳,<br />
            진정한 휴식을 만나다
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            금강의 물결과 함라산의 정기가 만나는 힐링 플레이스.<br className="hidden md:block"/>
            가족, 연인과 함께 특별한 추억을 만들어보세요.
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="group bg-primary hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto animate-fade-in-up delay-300 shadow-lg"
          >
            지금 예약하기
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 opacity-70">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">가장 편안한 쉼표, 웅포</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <div className="max-w-md text-left space-y-4">
              <p className="text-gray-600 leading-relaxed">
                웅포마을은 맑은 공기와 수려한 경관을 자랑하는 전북의 대표적인 힐링 마을입니다. 
                바쁜 일상에서 벗어나 흙을 밟고, 강바람을 맞으며 자연과 하나되는 경험을 선물합니다.
              </p>
              <button 
                onClick={() => navigate('/beauty')}
                className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 flex items-center gap-1"
              >
                마을 소개 더보기 <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative">
              <img 
                src={IMAGE_ASSETS.GALLERY_1} 
                alt="웅포 풍경" 
                className="w-full md:w-[500px] h-[350px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white p-6 shadow-lg hidden md:flex">
                <p className="text-center font-serif leading-relaxed">"자연 속에서의<br/>하루는<br/>선물입니다"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold text-sm uppercase mb-2 block">Activities</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">다채로운 농촌 체험</h2>
            </div>
            <button 
               onClick={() => navigate('/booking')}
               className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary transition"
            >
              전체 보기 <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={exp.imageUrl} 
                    alt={exp.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                    {exp.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{exp.description}</p>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-400">{exp.duration} 소요</span>
                    <span className="text-primary">{exp.price.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <button 
               onClick={() => navigate('/booking')}
               className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50"
            >
              모든 체험 보기
            </button>
          </div>
        </div>
      </section>

      {/* Accommodation Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase mb-2 block">Stay</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">편안한 잠자리</h2>
              <p className="text-gray-600">황토의 따스함과 현대적인 편리함이 공존하는 공간입니다.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ACCOMMODATIONS.map((room) => (
                <div key={room.id} className="flex flex-col h-full border border-gray-100 rounded-2xl p-4 hover:border-green-200 transition-colors">
                  <div className="h-64 rounded-xl overflow-hidden mb-6 relative">
                    <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center gap-1 text-white">
                         <Star size={14} className="fill-yellow-400 text-yellow-400" />
                         <span className="text-sm font-medium">인기 객실</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{room.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{room.description}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {room.features.slice(0, 3).map((feat, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{feat}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-lg font-bold text-primary">{room.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-400">원 / 1박</span>
                      </div>
                      <button 
                        onClick={() => navigate('/booking')}
                        className="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-stone-700 transition"
                      >
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div> {/* Abstract pattern placeholder */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">특별한 추억을 만들 준비가 되셨나요?</h2>
          <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
            산들강 웅포마을은 언제나 여러분을 환영합니다.<br/>
            지금 바로 예약하고 힐링 여행을 떠나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/booking')}
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-lg"
            >
              실시간 예약하기
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition"
            >
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;