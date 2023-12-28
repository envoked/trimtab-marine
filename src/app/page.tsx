import Image from "next/image"
import ProductRibbon from "./components/ProductRibbon"

export default function Index() {
  return (
    <>
      <nav className="py-4 px-10 bg-slate-900 relative">
        <div className="relative h-9 w-24">
          <Image src="/images/logo-white.png" fill alt="Trimtab Marine Services"/>
        </div>
        <a
          className="text-stone-300 hover:text-stone-100 absolute right-10 top-4 text-md font-thin border border-stone-50 rounded p-2 transition-all"
          href="https://trimtabmarine.notion.site/Resources-0c1ff1863f394d1898be570259285636"
          target="_blank"
          rel="noreferrer"
          >Notes</a>
      </nav>
      <div className="bg-[url('/images/Haven.webp')] w-full h-64 md:h-96 bg-cover bg-center flex items-center bg-blend-multiply bg-neutral-300">
        <h1 className="md:text-5xl font-medium tracking-tight text-3xl m-10 drop-shadow-lg bg-gradient-to-br from-zinc-100 to-zinc-300 bg-clip-text text-transparent text-center w-full font-sans">
          Modern Marine Systems in the Pacific Northwest
        </h1>
      </div>
      <ProductRibbon />
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-slate-100">
        <p className="text-md font-sans">
          Trimtab Marine specializes in modern marine system consulting and services. We are mobile, ABYC certified, and priced competitively. No project is too small – but some may be too large.
          To find out more about we&apos;ve been working on, head over to the
          <a
          className="text-orange-500 ml-1"
          href="https://trimtabmarine.notion.site/Resources-0c1ff1863f394d1898be570259285636"
          target="_blank"
          rel="noreferrer"
          >Notes</a> section.
        </p>
       <dl className="grid max-w-4xl grid-cols-1 gap-y-4 md:grid-cols-3 mt-10 mx-auto">
        <dt className="flex flex-col border-r border-slate-600">
          <h3 className="text-xl font-light border-b border-slate-600 mb-2 font-sans">Design</h3>
          <ul className="text-md font-extralight">
            <li>Systems Consulting</li>
            <li>Circuit Diagrams</li>
            <li>Load Calculations</li>
            <li>Upgrades and Refits</li>
          </ul>
        </dt>
        <dt className="flex flex-col border-r border-slate-600">
          <h3 className="px-2 text-xl font-light border-b border-slate-600 mb-2 font-sans">Install</h3>
          <ul className="text-md font-extralight">
            <li>Lithium Battery Banks</li>
            <li>Inverters/Chargers</li>
            <li>Alternator Upgrades</li>
            <li>Navigation Equipment</li>
            <li>Solar Charging Systems</li>
            <li>Starlink</li>
          </ul>
        </dt>
        <dt className="flex flex-col">
          <h3 className="px-5 text-xl font-light border-b border-slate-600 mb-2 font-sans">Digital</h3>
          <ul className="text-md font-extralight px-5">
            <li>Smart Owners Manuals</li>
            <li>Digital Doubles</li>
          </ul>
        </dt>
       </dl>
      </div>
      <div className="bg-stone-100 p-10 flex text-slate-800">
        <div>
          <h1 className="text-3xl font-thin bg-gradient-to-br from-slate-700 to-slate-800 bg-clip-text mb-5 font-mono">About</h1>
          <div>
            <img src="/images/Adrian.webp" alt="Adrian Wisernig" className="w-64 rounded-md shadow-md sm:float-right m-2"/>
            <p className="text-md mr-2 inline font-sans">
              Trimtab Marine was started by software engineer turned marine technician Adrian Wisernig. After a decade of overlanding and sailing experience, he attended the Northwest School of Wooden Boatbuilding and completed the Marine Systems Program in 2023.
              He is currently ABYC Certified in Marine Systems, Electrical, and Diesel.
            </p>
          </div>
        </div>
      </div>
      <footer className="text-slate-100 p-10 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900" id="footer">
        <h1 className="text-3xl font-thin">Contact</h1>
        <h4 className="text-md mb-5 text-slate-400 font-light">Have a project in mind? Get in touch.</h4>
        <p>Adrian Wisernig</p>
        <a href="mailto:ahoy@trimtabmarine.com" className="hover:text-orange-500 transition-colors block">ahoy@trimtabmarine.com</a>
        <a href="tel:509-637-8110" className="hover:text-orange-500 transition-colors block">(509) 637-8110</a>
      </footer>
    </>
  )
}
