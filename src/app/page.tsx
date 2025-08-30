export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl px-6">
        <div className="space-y-6">
          <div className="inline-block backdrop-blur-xl bg-white/15 border border-white/30 rounded-full px-8 py-3">
            <span className="text-sm text-white/90 uppercase tracking-wider font-medium">DIGITAL BIOGRAPHY</span>
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-bold leading-tight"
            style={{ 
              background: 'linear-gradient(135deg, #f17a0f 0%, #e25c05 50%, #319968 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            The Making of Greatness
          </h1>

          <h2 className="text-4xl md:text-5xl text-white/90 font-light">
            Cristiano Ronaldo
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Journey through seven defining chapters that forged a legend. From the streets of Madeira 
            to global icon, explore the internal transformation that created football's greatest story.
          </p>
        </div>

        <div className="pt-8">
          <button className="px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg text-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50">
            Begin the Journey
          </button>
        </div>

        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">7</h3>
            <p className="text-white/80">Defining Chapters</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-500 mb-2">20+</h3>
            <p className="text-white/80">Years of Greatness</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-red-500 mb-2">∞</h3>
            <p className="text-white/80">Legacy Impact</p>
          </div>
        </div>

        <div className="pt-16">
          <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">
              The Journey Continues
            </h3>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Greatness isn't a destination—it's a way of being. The story of Cristiano Ronaldo 
              reminds us that legends are forged through relentless pursuit of excellence, 
              one chapter at a time.
            </p>
            <div className="inline-flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              <span className="text-sm text-white/70 uppercase tracking-wider font-medium">SIUUUUUU</span>
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/50 uppercase tracking-wider">
            © 2025 The Making of Greatness - A Digital Biography Experience
          </p>
        </div>
      </div>
    </main>
  )
}