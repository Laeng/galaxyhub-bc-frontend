'use client'

import React from 'react';

export interface StatusButton {
  text: string;
  url: string;
  variant: 'primary' | 'secondary';
  icon: 'ticket' | 'discord';
}

export interface StatusContent {
  title: string;
  description: string;
  buttons: StatusButton[];
}

export interface StatusBannerProps {
  isOpen: boolean;
  openContent: StatusContent;
  closedContent: StatusContent;
}

export const StatusBanner: React.FC<StatusBannerProps> = ({
  isOpen,
  openContent,
  closedContent
}) => {
  const content = isOpen ? openContent : closedContent;

  if (isOpen) {
    // Registration Open - Green/Success Theme
    return (
      <div className="relative mb-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-success/20 via-success/30 to-success/20 rounded-3xl blur-2xl animate-pulse"></div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-success via-success/90 to-success/80 rounded-3xl p-12 lg:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </div>
              <div className="text-sm font-mono text-white/80 uppercase tracking-widest">
                Registration Open
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {content.title}
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {content.buttons.map((button, index) => {
                const isPrimary = button.variant === 'primary';
                const isTicket = button.icon === 'ticket';

                return (
                  <a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg lg:text-xl font-bold transition-all hover:scale-105 ${
                      isPrimary
                        ? 'bg-white text-success hover:bg-white/90 hover:shadow-2xl'
                        : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    {isTicket ? (
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    )}
                    {button.text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Registration Closed - Red/Error Theme
  return (
    <div className="relative mb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-error/20 via-error/30 to-error/20 rounded-3xl blur-2xl animate-pulse"></div>

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-error via-error/90 to-error/80 rounded-3xl p-12 lg:p-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            <div className="text-sm font-mono text-white/80 uppercase tracking-widest">
              Status Update
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {content.buttons.map((button, index) => {
              const isPrimary = button.variant === 'primary';
              const isTicket = button.icon === 'ticket';

              return (
                <a
                  key={index}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg lg:text-xl font-bold transition-all hover:scale-105 ${
                    isPrimary
                      ? 'bg-white text-error hover:bg-white/90 hover:shadow-2xl'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  {isTicket ? (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  )}
                  {button.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
