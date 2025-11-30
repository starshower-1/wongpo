import { NavItem, Accommodation, Experience, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '아름다운 웅포', path: '/beauty' },
  { label: '예약하기', path: '/booking' },
  { label: '여행 안내', path: '/guide' },
  { label: '문의하기', path: '/contact' },
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'room1',
    name: '황토방 별채',
    description: '천연 황토로 지어진 아늑한 독채 펜션입니다. 자연의 숨결을 느끼며 편안한 휴식을 취하세요.',
    capacity: '4인 (최대 6인)',
    price: 150000,
    imageUrl: 'https://picsum.photos/id/1039/800/600',
    features: ['황토 건축', '개별 바베큐', '무료 Wi-Fi', '침대룸 1 + 온돌룸 1'],
  },
  {
    id: 'room2',
    name: '강변 펜션 A동',
    description: '금강이 내려다보이는 탁 트인 전망을 자랑합니다. 가족 모임에 최적화된 넓은 거실이 있습니다.',
    capacity: '6인 (최대 10인)',
    price: 220000,
    imageUrl: 'https://picsum.photos/id/1040/800/600',
    features: ['리버뷰', '넓은 거실', '노래방 기기', '대형 냉장고'],
  },
  {
    id: 'room3',
    name: '커플 힐링룸',
    description: '연인을 위한 오붓한 공간입니다. 창밖으로 보이는 숲 뷰가 로맨틱한 분위기를 자아냅니다.',
    capacity: '2인',
    price: 100000,
    imageUrl: 'https://picsum.photos/id/1047/800/600',
    features: ['숲 전망', '스파 욕조', '호텔식 침구', '넷플릭스 지원'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    name: '유기농 블루베리 수확',
    description: '직접 따서 먹는 신선한 블루베리 체험. 아이들과 함께하는 즐거운 농촌 학습입니다.',
    duration: '1시간',
    price: 15000,
    imageUrl: 'https://picsum.photos/id/292/800/600',
    category: '농촌 체험',
  },
  {
    id: 'exp2',
    name: '웅포 나루터 뱃놀이',
    description: '황포돛배를 타고 금강의 물살을 가르며 옛 선조들의 풍류를 즐겨보세요.',
    duration: '40분',
    price: 10000,
    imageUrl: 'https://picsum.photos/id/164/800/600',
    category: '문화 체험',
  },
  {
    id: 'exp3',
    name: '전통 고추장 만들기',
    description: '마을 어르신들께 배우는 전통 방식의 고추장 담그기 체험입니다. 직접 만든 고추장을 가져가세요.',
    duration: '1시간 30분',
    price: 25000,
    imageUrl: 'https://picsum.photos/id/225/800/600',
    category: '요리 체험',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '주차 공간은 넉넉한가요?',
    answer: '네, 마을 입구 공영 주차장과 각 펜션 앞에 전용 주차 공간이 마련되어 있습니다.',
  },
  {
    question: '바베큐 숯불 비용은 얼마인가요?',
    answer: '바베큐 그릴 및 숯 세트는 4인 기준 20,000원의 추가 요금이 발생하며, 현장 결제 가능합니다.',
  },
  {
    question: '애완동물 동반이 가능한가요?',
    answer: '쾌적한 환경 유지를 위해 원칙적으로 애완동물 동반은 불가합니다. 단, 별채 일부 객실은 사전 문의 시 가능할 수 있습니다.',
  },
  {
    question: '예약 취소 시 환불 규정은 어떻게 되나요?',
    answer: '이용 7일 전 100% 환불, 3일 전 50% 환불, 당일 취소는 환불이 불가합니다.',
  },
];

export const IMAGE_ASSETS = {
  HERO_BG: 'https://picsum.photos/id/10/1600/900', // Forest/River vibe
  GALLERY_1: 'https://picsum.photos/id/11/800/600',
  GALLERY_2: 'https://picsum.photos/id/14/800/600',
  GALLERY_3: 'https://picsum.photos/id/28/800/600',
  GALLERY_4: 'https://picsum.photos/id/29/800/600',
};