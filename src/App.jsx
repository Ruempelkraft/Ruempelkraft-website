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
      title: 'Abriss',
      text: 'Auch kleinere Abrissarbeiten stehen am Plan.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black">RümpelKraft</h1>
            <p className="text-sm text-zinc-500">ruempelkraft.at</p>
          </div>

          <a
            href="#kontakt"
            className="rounded-2xl bg-yellow-500 px-5 py-2 text-sm font-semibold text-white"
          >
            Angebot anfragen
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-yellow-100 via-white to-zinc-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
              Schnell • Zuverlässig • Professionell
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              Entrümpelung mit
              <span className="text-yellow-500"> Kraft & Vertrauen</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-zinc-600">
              Wir unterstützen Privatpersonen und Unternehmen bei Entrümpelungen,
              Haushaltsauflösungen und Räumungen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-yellow-500 px-6 py-4 font-semibold text-white"
              >
                Kostenloses Angebot
              </a>

              <a
                href="https://wa.me/436641666474"
                className="rounded-2xl border border-zinc-300 px-6 py-4 font-semibold"
              >
                Jetzt schreiben
              </a>
            </div>
          </div>

          <div>
            <img
              src={logo}
              alt="rümpelkraft logo"
              className="rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
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
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8"
            >
              <h4 className="text-xl font-bold">{service.title}</h4>
              <p className="mt-3 text-zinc-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="bg-yellow-500 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-5xl font-black">
            Jetzt kostenlos anfragen
          </h3>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm uppercase">Telefon</p>
              <p className="mt-3 text-2xl font-bold">+43 664 1666474</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm uppercase">E-Mail</p>
              <p className="mt-3 text-2xl font-bold">info@ruempelkraft.at</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm uppercase">Standort</p>
              <p className="mt-3 text-2xl font-bold">Graz & Umgebung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
