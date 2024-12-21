'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, CreditCard } from 'lucide-react';

type Star = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

type Sections = 'intro' | 'about' | 'program' | 'register';


// Background Stars Component
const BackgroundStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      return [...Array(50)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * -10,
        opacity: Math.random() * 0.5 + 0.3
      }));
    };

    setStars(generateStars());
  }, []); // Empty dependency array ensures this runs only once

  return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="fixed inset-0 transition-opacity duration-1000"
             style={{
               opacity: 0.3,
               willChange: 'transform, opacity'
             }}>
          {stars.map((star, i) => (
              <div
                  key={i}
                  className="absolute rounded-full bg-white transition-opacity duration-1000"
                  style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity,
                    transform: 'translate3d(0, 0, 0)',
                    animation: `
                twinkle ${star.duration}s infinite ${star.delay}s,
                floating ${star.duration * 2}s infinite ${star.delay}s
              `
                  }}
              />
          ))}
        </div>
      </div>
  );
};

const GameMeetup = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [visibleSections, setVisibleSections] = useState(new Set(['intro']));
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menuObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(entry.target.id as Sections);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
    );

    const animationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        {
          threshold: 0.1
        }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      menuObserver.observe(section);
      animationObserver.observe(section);
    });

    return () => {
      menuObserver.disconnect();
      animationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: Sections) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };


  const DISCORD_LINK = 'https://discord.gg/gqpd3p6';
  //const REGISTER_LINK = 'https://forms.gle/';

  const faqs = [
    {
      question: "참가 연령제한이 있나요?",
      answer: "만 19세 이상이면 누구나 참여 가능합니다."
    },
    {
      question: "저는 특정 음식을 먹지 못합니다.",
      answer: "죄송합니다. 본 행사는 채식, 할랄등 맞춤 식단과 식품 알러지 성분표시를 제공해드리지 않습니다."
    },
    {
      question: "주차는 가능한가요?",
      answer: "대중교통 이용을 권장합니다. 하지만 부득이 차량을 가져오셔야 하는 분들을 위하여 인근 공용주차장을 안내해드릴 예정입니다. (주차비 지원 없음)"
    },
    {
      question: "현장 취소가 가능한가요?",
      answer: "현장 취소는 불가능합니다. 참가가 어려우신 경우 디스코드를 통해 연락주시기 바랍니다. 환불은 기간에 따라 불가할 수 있습니다."
    }
  ];

  const programs = [
    {time: '00:00', content: '-'},
    {time: '00:00', content: '-'},
    {time: '00:00', content: '-'},
    {time: '00:00', content: '-'},
    {time: '00:00', content: '-'}
  ]

  return (
      <div className="min-h-screen bg-black text-white break-keep">
        {/* Background Stars Component */}
        <BackgroundStars/>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">바 시티즌 코리아</div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                </svg>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['intro', 'about', 'program', 'register'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section as Sections)}
                        className={`text-sm tracking-widest hover:text-purple-400 transition-colors
              ${activeSection === section ? 'text-purple-400' : 'text-gray-400'}`}
                    >
                      {section.toUpperCase()}
                    </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
              <div className="flex flex-col space-y-4">
                {['intro', 'about', 'program', 'register'].map((section) => (
                    <button
                        key={section}
                        onClick={() => {
                          scrollToSection(section as Sections);
                          setIsMenuOpen(false);
                        }}
                        className={`text-sm tracking-widest hover:text-purple-400 transition-colors
              ${activeSection === section ? 'text-purple-400' : 'text-gray-400'}`}
                    >
                      {section.toUpperCase()}
                    </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative">
          {/* Intro Section */}
          <section
              id="intro"
              className="h-screen flex items-center justify-center relative px-8"
          >
            <div className={`w-full max-w-4xl mx-auto text-center transition-all duration-1000 transform
            ${visibleSections.has('intro') ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
                <p className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  BAR CITIZEN
                </p>
                <p className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  KOREA
                </p>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
                2025년 5월 3일, Star Citizen 파일럿들의 특별한 오프라인 모임이 펼쳐집니다.
                게임에 관한 이야기들을 함께 나누며 우주의 경험을 공유하세요.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
                <button
                    onClick={() => scrollToSection('register')}
                    className="px-12 py-5 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors text-lg w-full md:w-auto"
                >
                  참가 신청하기
                </button>
                <button
                    className="px-12 py-5 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors text-lg flex items-center justify-center space-x-2 w-full md:w-auto"
                    onClick={() => window.open(DISCORD_LINK, '_blank')}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span>Discord 참가하기</span>
                </button>
              </div>
            </div>
            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-gray-400 text-sm mb-4">Scroll</div>
              <div className="w-6 h-9 border-2 border-gray-400 rounded-full relative flex justify-center">
                <div
                    className="w-1 h-2 bg-gray-400 rounded-full absolute top-2"
                    style={{
                      animation: 'scroll 2s ease-in-out infinite'
                    }}
                />
              </div>
            </div>

          </section>

          {/* About Section */}
          <section
              id="about"
              className="min-h-screen flex items-center justify-center px-8 py-24"
          >
            <div className={`w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 transform
  ${visibleSections.has('about') ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              {[
                {icon: Calendar, title: '일시', content: ['곧 공개하겠습니다.', '곧 공개하겠습니다.']},
                {icon: MapPin, title: '장소', content: ['곧 공개하겠습니다.', '곧 공개하겠습니다.']},
                {icon: Users, title: '참가인원', content: ['곧 공개하겠습니다.', '곧 공개하겠습니다.']},
                {icon: CreditCard, title: '참가비', content: ['곧 공개하겠습니다.', '곧 공개하겠습니다.']}
              ].map((item, index) => (
                  <div
                      key={index}
                      className={`bg-purple-900 bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 
                  transform transition-all duration-500 hover:scale-105
                  ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                      style={{transitionDelay: `${index * 100}ms`}}
                  >
                    <item.icon className="w-8 h-8 text-purple-400 mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="redacted">
                      {item.content.map((line, i) => (
                          <p key={i} className="text-gray-400">{line}</p>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Program Section */}
          <section
              id="program"
              className="min-h-screen px-8 py-24"
          >
            <div className={`w-full max-w-7xl mx-auto transition-all duration-1000 transform
            ${visibleSections.has('program') ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="relative flex flex-col lg:flex-row gap-8">
                {/* Left Column - Sticky Program Schedule */}
                <div className="w-full lg:w-5/12">
                  <div className="lg:sticky lg:top-32">
                    <div className="bg-purple-900 bg-opacity-30 backdrop-blur-lg rounded-3xl p-8">
                      <h3 className="text-2xl font-bold mb-6">프로그램</h3>
                      <ul className="space-y-4 text-gray-400 redacted">
                        {programs.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start"
                                style={{transitionDelay: `${index * 100}ms`}}
                            >
                              <span className="text-purple-400 mr-4">{item.time}</span>
                              {item.content}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div className="w-full lg:w-7/12 space-y-8">
                  <div className="bg-blue-900 bg-opacity-30 backdrop-blur-lg rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6">행사소개</h3>
                    <div className="space-y-6 text-gray-400">
                      <p className="leading-relaxed">
                        <b>좋은 음식</b> 합석한 사람과 함께 음식을 고르고 나눠먹는다면 좋은 시작이 될거에요.
                        다양한 음식과 음료 그리고 술이 여러분을 기다리고 있으며 직접 주문할 수 있어요. 식품 알레르기 유발 물질 안내와 채식을 제공하지 않으므로 주의해주세요.
                      </p>
                      <p className="leading-relaxed">
                        <b>정보 교류</b> 스타 시티즌의 새로운 소식에 대해 이야기를 나누고 꿀팁을 서로 공유할 수 있어요.
                        혹시 라이벌을 만났다면 운영팀에게 알려주세요. 여러분의 뜨거운 복수가 보드 게임을 통해 이뤄질 수 있도록 저희 운영팀이 팝콘과 결투장을 준비할게요.
                      </p>
                      <p className="leading-relaxed">
                        <b>친목 도모</b> 혼자 노는 것은 이제 그만. 보드 게임을 통해 새로운 친구를 사귈 수 있어요.
                        원활한 행사 진행을 위하여 만 19세 이상 성인만 참여하실 수 있으며 여러분의 귀엽고 사랑스러운 애완동물은 행사장 출입이 불가해요.
                      </p>
                    </div>
                  </div>
                  <div className="bg-indigo-900 bg-opacity-30 backdrop-blur-lg rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                    <div className="space-y-6 text-gray-400">
                      {faqs.map((faq, index) => (
                          <div key={index}>
                            <h4 className="text-white mb-2">{faq.question}</h4>
                            <p>{faq.answer}</p>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Register Section with CTA */}

          <section
              id="register"
              className="min-h-screen flex items-center justify-center px-8 py-24 overflow-hidden"
          >
            <div className={`w-full max-w-6xl mx-auto transition-all duration-1000 transform
            ${visibleSections.has('register') ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div
                  className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-16 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div
                      className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                  <div
                      className="absolute bottom-1/2 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="w-full">
                    <h2 className="font-bold mb-6 space-y-2">
                      <p className="text-4xl md:text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                        참가 신청
                      </p>
                      <p className="text-3xl font-mono typing-effect hidden lg:block" style={{width: '31ch'}}>
                        &#47;&#47;REGISTRATION.NOT_AVAILABLE...
                      </p>
                      <p className="text-2xl font-mono typing-effect lg:hidden" style={{width: '18ch'}}>
                        &#47;&#47;NOT_AVAILABLE...
                      </p>
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      아직 참가 신청을 받지않고 있습니다. DISCORD에서 참가 신청 일자를 전달드리겠습니다.
                    </p>
                    <div className="flex gap-6 w-full lg:w-auto justify-start">
                      {/*
                      <a
                          href={REGISTER_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        지금 등록하기
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </a>
                      */}
                      <a
                          href={DISCORD_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path
                              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                        <span>Discord 참가하기</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="relative z-10 mt-12 pt-12 border-t border-white border-opacity-10">
                  <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-gray-400">
                    <p>• 한국어 진행</p>
                    <p>• 19세 미만 참석 불가</p>
                    <p>• 반려동물 입장 불가</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default GameMeetup;