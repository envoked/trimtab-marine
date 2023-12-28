export default function Hero () {
 return (
  <header className="h-[32rem] bg-[url('/Diagram.png')] bg-cover bg-center rounded-md m-5 drop-shadow">
    <div className="h-full w-full font-mono bg-stone-300 bg-opacity-20 flex items-center">
      <div className="p-5 backdrop-blur-sm w-full drop-shadow-lg">
        <h2 className="text-3xl font-serif block text-slate-800 font-bold">Marine System Design</h2>
        <p className="text-slate-700 font-sans">
          From battery banks to charging systems we work with you to understand your unique needs and design an electrical system accordingly.
        </p>
    </div>
    </div>
  </header>
 )
}
