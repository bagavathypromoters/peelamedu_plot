import { useState } from "react";

/* ---------- EDIT YOUR DETAILS HERE ---------- */
const SITE = {
  phone: "+91 90804 16637",
  whatsapp: "919080416637", // country code + number, no + or spaces
  email: "parameswarimiras@gmail.com",
  brochureUrl: "/brochure/plot-details.pdf",
  photos: ["/images/plot-1.jpeg", "/images/plot-2.png"],
  youtubeShortId: "q8iLlMo3bBw", // the part after /shorts/
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.963090563699!2d76.99357227504574!3d11.041394189123961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAyJzI5LjAiTiA3NsKwNTknNDYuMSJF!5e0!3m2!1sen!2sin!4v1792597402756!5m2!1sen!2sin",
  mapLink: "https://maps.google.com/?q=11.041394233703613,76.99614715576172&z=17&hl=en",
};

const FACTS = [
  ["Plot size", "64 ft × 155 ft"],
  ["Total area", "9,920 sq ft (about 22.77 cents)"],
  ["Facing", "East"],
  ["Frontage", "64 ft, south to north"],
  ["Depth", "155 ft, west to east"],
  ["Access", "30 ft tar road"],
  ["Landmark", "Near Balu Garden"],
  ["Fire service station", "About 100 m away"],
];

// Replace the distances with real figures from Google Maps before launch.
const NEARBY = [
  ["Coimbatore International Airport", "Short drive from the plot"],
  ["Malls and cinemas on Avinashi Road", "Short drive from the plot"],
  ["Fire service station", "About 100 m"],
  ["Balu Garden", "Neighbouring landmark"],
];

const FAQ = [
  ["Is the plot ready for house construction?", "Yes. It is a level residential plot on a 30 ft tar road. We can introduce you to local builders for design, approvals and construction."],
  ["Can NRIs and overseas buyers purchase it?", "Residential plots can generally be bought by NRIs and OCIs. Share your details and we will guide you through the paperwork. Please also confirm with your own legal adviser."],
  ["Can I visit or verify the documents?", "Yes. Site visits can be arranged, and title documents are shared with serious buyers on request."],
];

/* ---------- SMALL PIECES ---------- */
const Photo = ({ src, label }) => (
  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-emerald-900/10 ring-1 ring-emerald-900/10">
    <div className="absolute inset-0 grid place-items-center text-sm text-emerald-900/60">{label}</div>
    <img src={src} alt={label} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} className="absolute inset-0 h-full w-full object-cover" />
  </div>
);

const PlotDiagram = () => (
  <svg viewBox="0 0 420 250" role="img" aria-label="Plot diagram: 64 ft frontage facing east on a 30 ft road, 155 ft deep" className="w-full">
    <rect x="330" y="10" width="44" height="230" fill="#0b2624" />
    <path d="M352 24v202" stroke="#E9A21B" strokeWidth="2" strokeDasharray="10 8" />
    <rect x="30" y="65" width="300" height="124" fill="#DCE8E1" stroke="#12322F" strokeWidth="2.5" />
    <text x="180" y="132" textAnchor="middle" fontSize="20" fontWeight="700" fill="#12322F">9,920 sq ft</text>
    <text x="180" y="154" textAnchor="middle" fontSize="12" fill="#12322F">approx. 22.77 cents</text>
    <text x="180" y="216" textAnchor="middle" fontSize="13" fill="#12322F">155 ft (west to east)</text>
    <text x="350" y="246" textAnchor="middle" fontSize="11" fill="#12322F">30 ft road</text>
    <text transform="translate(318 127) rotate(-90)" textAnchor="middle" fontSize="13" fill="#12322F" fontWeight="700">64 ft frontage</text>
    <text x="30" y="52" fontSize="12" fill="#12322F">N ↑</text>
  </svg>
);

/* ---------- APP ---------- */
export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", country: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi, I am interested in the Peelamedu plot.\nName: ${form.name}\nPhone: ${form.phone}\nLiving in: ${form.country}\n${form.message}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const input = "w-full rounded-lg border border-emerald-900/20 bg-white px-4 py-3 text-emerald-950 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400";

  return (
    <div className="bg-stone-50 text-emerald-950">
      <header className="sticky top-0 z-30 border-b border-emerald-900/10 bg-stone-50/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
          <a href="#top" className="font-display text-lg font-bold">Peelamedu Plot</a>
          <div className="hidden gap-6 text-sm md:flex">
            {[["Details", "#details"], ["Gallery", "#gallery"], ["Location", "#location"], ["FAQ", "#faq"]].map(([t, h]) => (
              <a key={h} href={h} className="hover:text-amber-600">{t}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-emerald-950 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800">Enquire now</a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">Home Plot in Peelamedu, Coimbatore for Sale</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-950/80">
              An east-facing 9,920 sq ft residential plot on a 30 ft tar road. A calm, friendly neighbourhood within easy reach of the airport, malls and city life, ready for you to build the house you have been planning. We connect you with trusted builders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-emerald-950 hover:bg-amber-300">Book a site visit</a>
              <a href={SITE.brochureUrl} className="rounded-full border-2 border-emerald-950 px-7 py-3 font-semibold hover:bg-emerald-950 hover:text-white">Download brochure</a>
            </div>
            <p className="mt-5 text-sm text-emerald-950/70">Built for city families, NRIs and overseas Indians who want a plot at home.</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-emerald-900/10"><PlotDiagram /></div>
        </section>

        {/* OVERVIEW */}
        <section id="details" className="bg-emerald-950 py-16 text-stone-50">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Plot details</h2>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-2">
              {FACTS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 bg-emerald-950 px-5 py-4">
                  <dt className="text-stone-300">{k}</dt>
                  <dd className="text-right text-lg font-semibold text-amber-300">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-stone-300">Price: <a href="#contact" className="font-semibold text-amber-300 underline">Contact us for the current price</a></p>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">See the plot</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Photo src={SITE.photos[0]} label="Plot photo 1" />
            <Photo src={SITE.photos[1]} label="Plot photo 2" />
            <div className="mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-xl bg-emerald-950 md:max-w-none">
              <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${SITE.youtubeShortId}`} title="Video walkthrough of the Peelamedu plot" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="bg-emerald-900/5 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Close to everything, quiet at home</h2>
              <ul className="mt-6 divide-y divide-emerald-900/10">
                {NEARBY.map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 py-3"><span className="font-medium">{k}</span><span className="text-emerald-950/70">{v}</span></li>
                ))}
              </ul>
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-emerald-800 underline">Open in Google Maps</a>
            </div>
            <iframe title="Map showing the plot in Peelamedu, Coimbatore" src={SITE.mapEmbedSrc} className="h-80 w-full rounded-xl border-0 md:h-full md:min-h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </section>

        {/* BROCHURE */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-amber-400 p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Get the detailed property PDF</h2>
              <p className="mt-2 max-w-xl">Measurements, location notes and next steps in one file you can share with family.</p>
            </div>
            <a href={SITE.brochureUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-emerald-950 px-7 py-3 font-semibold text-white hover:bg-emerald-800">View or download PDF</a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 pb-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Questions buyers ask</h2>
          <div className="mt-6 space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group rounded-xl bg-white p-5 ring-1 ring-emerald-900/10">
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-3 text-emerald-950/80">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-emerald-950 py-16 text-stone-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Talk to us about the plot</h2>
              <p className="mt-4 text-stone-300">Living abroad? Send a message and we will reply on WhatsApp or email at a time that suits your time zone.</p>
              <p className="mt-6"><a className="text-xl font-semibold text-amber-300" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></p>
              <p className="mt-1"><a className="text-amber-300 underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <label className="block text-sm">Your name<input required className={`${input} mt-1`} value={form.name} onChange={set("name")} autoComplete="name" /></label>
              <label className="block text-sm">Phone or WhatsApp (with country code)<input required className={`${input} mt-1`} value={form.phone} onChange={set("phone")} autoComplete="tel" /></label>
              <label className="block text-sm">Country you live in<input className={`${input} mt-1`} value={form.country} onChange={set("country")} /></label>
              <label className="block text-sm">Message<textarea rows="3" className={`${input} mt-1`} value={form.message} onChange={set("message")} /></label>
              <button className="w-full rounded-full bg-amber-400 px-7 py-3 font-semibold text-emerald-950 hover:bg-amber-300">Send on WhatsApp</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 px-5 py-6 text-center text-sm text-stone-400">
        © {new Date().getFullYear()} Home plot for sale in Peelamedu, Coimbatore. Details are indicative; please verify documents before purchase.
      </footer>
    </div>
  );
}
