export interface DiecastCar {
  id: string;
  name: string;
  price: string;
  scale: string;
  image: string;
  description: string;
  category: 'exotic' | 'muscle' | 'movie' | 'race';
}

export interface Article {
  title: string;
  summary: string;
  content: string;
  date: string;
}

export interface VideoGenerationState {
  isGenerating: boolean;
  videoUrl: string | null;
  error: string | null;
  progress: string;
}

export interface GeminiContentState {
  loading: boolean;
  articles: Article[];
  heroBlurb: string;
}