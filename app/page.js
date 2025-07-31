
export default function Home() {
  return (

    
    
    <div className="w-full h-screen text-7xl font-semibold flex flex-col gap-10 justify-center items-center">
  <h1 className="text-slate-500 text-shadow-lg text-center flex flex-col lg:flex-row items-center gap-4">
    {["Practicing", "Replicating", "Designs."].map((word, i) => (
      <span key={i}>{word}</span>
    ))}
  </h1>
</div>

  );
}
