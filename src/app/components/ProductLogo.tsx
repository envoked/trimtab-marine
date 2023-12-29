import Image from "next/image";
export default function ProductLogo ({ url, alt }: { url: string, alt: string }) {
  return (
    <div className="relative h-7 w-36 mx-auto">
      <Image src={url} alt={alt} fill/>
    </div>
  )
}
