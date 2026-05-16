import logo from './logo.png'

export default function RuempelkraftWebsite() {
  const services = [
    {
      title: 'Entrümpelung',
      text: 'Schnelle und saubere Entrümpelungen von Wohnungen, Häusern, Kellern und Büros.',
    },
    {
      title: 'Haushaltsauflösungen',
      text: 'Professionelle Unterstützung bei kompletten Haushaltsauflösungen.',
    },
    {
      title: 'Firmenräumungen',
      text: 'Effiziente Räumungen von Geschäftslokalen und Büros.',
    },
    {
      title: 'Entsorgung',
      text: 'Umweltgerechte Entsorgung und Recycling.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black text-yellow-400">
              RümpelKraft
            </h1>

            <p className="text-sm text-zinc-400">
              ruempelkraft.at
            </p>
          </div>

          <a
            href="#kontakt"
            className="rounded-2xl bg-yellow-400 px-5 py-2 text-sm font-bold text-black shadow-[0_0_25px_rgba(250,204,21,0.9)] transition hover:scale-105"
          >
            Angebot anfragen
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          
          <div>
            <div className="mb-6 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
              Schnell • Zuverlässig • Professionell
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              Entrümpelung mit
              <span className="text-yellow-400">
                {' '}Kraft & Vertrauen
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Wir unterstützen Privatpersonen und Unternehmen bei
              Entrümpelungen, Haushaltsauflösungen und Räumungen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-[0_0_25px_rgba(250,204,21,0.9)] transition hover:scale-105"
              >
                Kostenloses Angebot
              </a>

              <a
                href="tel:+43123456789"
                className="rounded-2xl border border-zinc-700 px-6 py-4 font-semibold hover:border-yellow-400 hover:text-yellow-400"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="RümpelKraft Logo"
              className="max-h-[500px] rounded-[32px] bg-black p-4 object-contain shadow-[0_0_60px_rgba(250,204,21,0.5)]"
            />
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
            Unsere Leistungen
          </p>

          <h3 className="mt-3 text-4xl font-black">
            Alles aus einer Hand
          </h3>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
            >
              <h4 className="text-xl font-bold text-yellow-400">
                {service.title}
              </h4>

              <p className="mt-3 text-zinc-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="kontakt"
        className="border-t border-zinc-800 bg-yellow-400 py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-5xl font-black text-black">
            Jetzt kostenlos anfragen
          </h3>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            
            <div className="rounded-3xl bg-black p-6">
              <p className="text-sm uppercase text-yellow-400">
                Telefon
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                +43 123 456789
              </p>
            </div>

            <div className="rounded-3xl bg-black p-6">
              <p className="text-sm uppercase text-yellow-400">
                E-Mail
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                office@ruempelkraft.at
              </p>
            </div>

            <div className="rounded-3xl bg-black p-6">
              <p className="text-sm uppercase text-yellow-400">
                Standort
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Graz & Umgebung
              </p>
            </div>

          </div>
        </div>
      </section>

      <a
        href="https://wa.me/436641234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
      >
        <span className="text-2xl">💬</span>
        <span className="font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
