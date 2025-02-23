import SearchBar from "./SearchBar"

const Hero = () => {
  return (
    <div
      className="relative h-[360px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">Find your next stay</h1>
          <p className="text-xl md:text-2xl text-white">Search low prices on hotels for your dream vacation...</p>
        </div>
        <div className="w-full max-w-6xl">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Hero

