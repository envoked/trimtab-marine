import ProductLogo from "./ProductLogo";

export default function ProductRibbon () {
  return (
    <div className="pt-5 pb-10 bg-neutral-100 drop-shadow-xl">
      <h1 className="px-5 text-3xl font-thin mb-5 font-mono border-b text-slate-800">Products We Use</h1>
      <div className="flex flex-col md:flex-row gap-2 flex-wrap">
        <ProductLogo url="/images/vendors/Victron.webp" alt="Victron Energy" />
        <ProductLogo url="/images/vendors/B&G.webp" alt="B&G Electronics" />
        <ProductLogo url="/images/vendors/Wakespeed.webp" alt="Wakespeed" />
        <ProductLogo url="/images/vendors/bluesea-logo.webp" alt="BlueSea Systems" />
        <ProductLogo url="/images/vendors/Webasto.webp" alt="Webasto" />
      </div>
    </div>
  )
}
