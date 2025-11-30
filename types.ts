export interface NavItem {
  label: string;
  path: string;
}

export interface Accommodation {
  id: string;
  name: string;
  description: string;
  capacity: string;
  price: number;
  imageUrl: string;
  features: string[];
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}