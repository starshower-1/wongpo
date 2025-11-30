import React from 'react';
import { Camera, Map } from 'lucide-react';
import { IMAGE_ASSETS } from '../constants';

const Beauty: React.FC = () => {
  const spots = [
    { title: '금강 낙조 전망대', desc: '서해안 최고의 낙조를 감상할 수 있는 포인트', img: IMAGE_ASSETS.GALLERY_2 },
    { title: '덕양정', desc: '강바람을 맞으며 쉬어갈 수 있는 고즈넉한 정자', img: IMAGE_ASSETS.GALLERY_3 },
    { title: '곰개나루 캠핑장', desc: '자연 속에서 즐기는 낭만적인 캠핑', img: IMAGE_ASSETS.GALLERY_4 },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-stone-100 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-800">아름다운 웅포</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            굽이치는 금강과 푸르른 함라산이 빚어낸 한 폭의 그림 같은 풍경.<br/>
            웅포의 사계절은 저마다의 색으로 빛납니다.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <img src={IMAGE_ASSETS.GALLERY_1} alt="웅포 전경" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-primary font-bold">Nature & History</span>
            <h2 className="text-3xl font-serif font-bold text-gray-800">역사와 자연이 공존하는 곳</h2>
            <p className="text-gray-600 leading-relaxed">
              웅포는 예로부터 금강의 관문 역할을 해왔습니다. 비단결 같은 금강 물줄기를 따라 펼쳐진 갈대밭과 
              철새들의 군무는 장관을 이룹니다. 함라산 둘레길을 걸으며 피톤치드를 마시고, 
              옛 선조들의 발자취가 남은 덕양정에서 잠시 쉬어가세요.
            </p>
            <div className="flex gap-4 pt-4">
               <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                  <Map size={16} /> 둘레길 1코스
               </div>
               <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                  <Map size={16} /> 둘레길 2코스
               </div>
            </div>
          </div>
        </div>

        {/* Photo Spots */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Camera className="text-secondary" />
            <h3 className="text-2xl font-serif font-bold text-gray-800">웅포 베스트 포토 스팟</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spots.map((spot, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl h-80">
                <img src={spot.img} alt={spot.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-xl font-bold mb-1">{spot.title}</h4>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Beauty;