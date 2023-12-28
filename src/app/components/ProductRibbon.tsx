export default function ProductRibbon () {
  return (
    <div className="pt-5 pb-10 bg-white drop-shadow-xl">
      <h1 className="px-5 text-3xl font-thin mb-5 font-mono border-b">Products We Work With</h1>
      <div className="flex flex-col sm:flex-row gap-5 flex-wrap">
        <img src="/images/VictronLogo.webp" alt="Victron" className="h-9 mx-auto"/>
        <img src="/images/B&G.png" alt="B&G Electronics" className="h-9 mx-auto"/>
        <img src="/images/WakespeedLogo.webp" alt="Wakespeed" className="mx-auto h-9"/>
        <img src="/images/bluesea_logo.webp" alt="Blue Sea Systems" className="mx-auto h-9"/>
        <img src="/images/WebastoLogo.png" alt="Webasto Logo" className="mx-auto h-9"/>
      </div>
    </div>
  )
}
