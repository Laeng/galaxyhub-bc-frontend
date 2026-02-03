import { StatusButton, StatusContent } from '@/components/StatusBanner';

export interface TranslationSchema {
  event: {
    registrationOpen: boolean;
  };
  nav: {
    brand: string;
    menu: {
      intro: string;
      info: string;
      location: string;
      faq: string;
    };
  };
  hero: {
    subtitle: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    description: string;
  };
  status: {
    open: StatusContent;
    closed: StatusContent;
  };
  eventInfo: {
    title: string;
    items: Array<{
      label: string;
      number: string;
      title: string;
      subtitle: string;
      note?: string;
    }>;
  };
  program: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  location: {
    title: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    brand: string;
    description: string;
    copyright: string;
  };
}
