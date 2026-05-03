'use client'
import { useRef } from 'react'
import { ArrowDown, Play } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 animate-bg">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,162,39,0.08) 0%, transparent 60%),
              radial-gradient(ellipse 50% 80% at 20% 70%, rgba(201,162,39,0.05) 0%, transparent 50%),
              linear-gradient(180deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating Card 1 */}
      <div className="absolute right-8 top-1/3 hidden xl:block animate-float z-10">
        <div className="bg-stone-900/80 backdrop-blur border border-stone-700/50 rounded-2xl p-6 w-64 shadow-2xl hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
              <span className="text-gold-400 text-lg">🏠</span>
            </div>
            <div>
              <p className="text-stone-50 text-sm font-medium">New Listing</p>
              <p className="text-stone-500 text-xs">Just added today</p>
            </div>
          </div>
          <p className="font-display text-gold-400 text-xl font-light">Maple Grove Estate</p>
          <p className="text-stone-400 text-xs mt-1">4 bed • 3 bath • 2,840 sqft</p>
          <div className="mt-4 pt-4 border-t border-stone-700/50 flex justify-between items-center">
            <span className="font-display text-stone-50 text-lg">$824,000</span>
            <span className="px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded border border-gold-500/20">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Floating Card 2 */}
      <div className="absolute right-17 bottom-1/5 hidden xl:block animate-float z-10" style={{ animationDelay: '2s' }}>
        <div className="bg-gold-500/10 backdrop-blur border border-gold-500/30 rounded-xl p-4 w-44 shadow-xl hover:scale-105 transition duration-300">
          <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Avg. ROI</p>
          <p className="font-display text-gold-400 text-3xl font-light">18.4%</p>
          <p className="text-stone-500 text-xs mt-1">Annual appreciation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-medium">
              New Builder Homes 2024
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-6xl md:text-8xl leading-none text-stone-50 mb-8 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Where{' '}
            <em className="text-gold-100 not-italic animate-glow p-1.5 rounded-2xl mb-0.5">Modern</em>
            <br />
            Living Begins
          </h1>

          {/* Subheadline */}
          <p
            className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-xl mb-12 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Curated builder homes and luxury apartments crafted for the way
            you actually live. Move-in ready. No compromises.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#properties"
              className="group px-8 py-4 bg-gold-500 hover:bg-gold-400 text-stone-950 font-medium rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] flex items-center gap-2"
            >
              Explore Properties
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 border border-stone-700 hover:border-gold-500/50 text-stone-300 hover:text-stone-50 rounded transition-all duration-300 flex items-center gap-3"
            >
              <Play size={14} className="text-gold-400" />
              Schedule Viewing
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-800">
            {[
              { value: '240+', label: 'Properties Sold' },
              { value: '$2.4B', label: 'In Sales Volume' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={stat.label} className="animate-fade-up" style={{ animationDelay: `${0.8 + i * 0.2}s` }}>
                <p className="font-display text-3xl text-gold-400 font-light">{stat.value}</p>
                <p className="text-stone-500 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce-slow">
        <span className="text-stone-600 text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} className="text-stone-600" />
      </div>
    </section>
  )
}