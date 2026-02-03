'use client'

import { Navigation } from '@/components/designs/Navigation';
import Map from '@/components/map/Map';
import { useTranslation } from '@/hooks/useTranslation';

export default function HomePage() {
  const { t, locale, changeLocale } = useTranslation();

  const menuItems = [
    { label: t.nav.menu.intro, href: '#intro' },
    { label: t.nav.menu.info, href: '#info' },
    { label: t.nav.menu.location, href: '#location' },
    { label: t.nav.menu.faq, href: '#faq' }
  ];

  return (
    <div data-theme="dark" className="bg-base-100">
      {/* Navigation */}
      <Navigation
        brandName={t.nav.brand}
        menuItems={menuItems}
        variant="blur"
        locale={locale}
        onLocaleChange={changeLocale}
      />

      {/* Hero Section - Typography Focused */}
      <section id="intro" className="min-h-screen pt-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-5xl">
            {/* Large Typography */}
            <div className="mb-16">
              <div className="text-sm font-mono text-primary mb-8 tracking-wider">
                {t.hero.subtitle}
              </div>
              <h1 className="text-7xl lg:text-9xl font-bold leading-none mb-8 tracking-tight">
                {t.hero.title.line1}<br />
                {t.hero.title.line2}<br />
                {t.hero.title.line3}
              </h1>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-2xl lg:text-3xl text-base-content/80 leading-relaxed max-w-3xl font-light">
                {t.hero.description}
              </p>
            </div>

            {/* Status Banner */}
            <div className="bg-error text-error-content px-8 py-6 rounded-2xl inline-block mb-12">
              <div className="text-xl font-bold">{t.hero.status}</div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="https://discord.gg/gqpd3p6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg text-lg"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info - Typography Layout */}
      <section id="info" className="py-32 border-t border-base-content/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-5xl lg:text-6xl font-bold mb-20">{t.eventInfo.title}</h2>

            <div className="space-y-16">
              {t.eventInfo.items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-8 items-baseline pb-16 border-b border-base-content/10">
                  <div className="col-span-12 md:col-span-3">
                    <div className="text-base-content/60 text-sm mb-2">{item.label}</div>
                    <div className="text-2xl font-mono">{item.number}</div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <div className="text-4xl lg:text-5xl font-bold mb-4">{item.title}</div>
                    <div className="text-2xl text-base-content/70 mb-4">{item.subtitle}</div>
                    {item.note && (
                      <div className="text-sm text-warning">{item.note}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program - Typography */}
      <section className="py-32 bg-base-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-5xl lg:text-6xl font-bold mb-20">{t.program.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {t.program.items.map((item, index) => (
                <div key={index}>
                  <div className="text-6xl font-bold mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section id="location" className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">{t.location.title}</h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Typography */}
      <section id="faq" className="py-32 bg-base-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-5xl lg:text-6xl font-bold mb-20">{t.faq.title}</h2>

            <div className="space-y-12">
              {t.faq.items.map((faq, index) => (
                <div key={index} className="pb-12 border-b border-base-content/10 last:border-0">
                  <div className="text-sm text-base-content/60 mb-3 font-mono">
                    Q{String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6">{faq.question}</h3>
                  <p className="text-xl text-base-content/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-100 border-t border-base-content/10 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <div className="text-3xl font-bold mb-4">{t.footer.brand}</div>
            <div className="text-base-content/60 mb-8">{t.footer.description}</div>
            <div className="text-sm text-base-content/60">{t.footer.copyright}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
