import React from 'react';
import { MapPin, Info, Utensils } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">여행 안내</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Info - Map Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-primary" /> 오시는 길
              </h2>
              {/* Fake Map Placeholder */}
              <div className="w-full h-80 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <p>Google Maps / Kakao Maps API Area</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-bold text-gray-800">주소:</span> 전북 익산시 웅포면 강변로 25</p>
                <p><span className="font-bold text-gray-800">자가용:</span> 서해안고속도로 군산IC → 웅포 방면 (약 15분 소요)</p>
                <p><span className="font-bold text-gray-800">대중교통:</span> 익산역/터미널에서 300번대 버스 탑승 (약 40분 소요)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info className="text-primary" /> 여행 꿀팁
              </h2>
              <ul className="space-y-4">
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                   <div>
                     <h3 className="font-bold text-gray-800">자전거 대여</h3>
                     <p className="text-sm text-gray-600">마을 입구 안내소에서 자전거를 무료로 대여해 드립니다. 금강 자전거길 라이딩을 추천합니다.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary font-bold flex-shrink-0">2</div>
                   <div>
                     <h3 className="font-bold text-gray-800">일몰 시간 체크</h3>
                     <p className="text-sm text-gray-600">웅포의 낙조는 정말 아름답습니다. 방문 전 일몰 시간을 확인하고 전망대에 오르세요.</p>
                   </div>
                 </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/20">
              <h2 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Utensils size={20} /> 추천 맛집
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-800">웅포 식당</h3>
                  <p className="text-xs text-gray-500 mb-1">매운탕, 어죽 전문</p>
                  <p className="text-sm text-gray-600">직접 잡은 민물고기로 끓여내는 얼큰한 매운탕이 일품입니다.</p>
                </div>
                <div className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-800">강변 카페</h3>
                  <p className="text-xs text-gray-500 mb-1">커피, 디저트</p>
                  <p className="text-sm text-gray-600">금강 뷰가 보이는 테라스에서 여유를 즐길 수 있습니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h2 className="text-xl font-bold mb-4 text-primary">주변 관광지</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">✔ 입점리 고분전시관 (차로 5분)</li>
                <li className="flex items-center gap-2">✔ 교도소 세트장 (차로 15분)</li>
                <li className="flex items-center gap-2">✔ 미륵사지 (차로 25분)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;