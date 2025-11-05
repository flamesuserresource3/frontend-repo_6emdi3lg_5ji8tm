import { MapPin, Search, SlidersHorizontal } from 'lucide-react';

export default function HeroSearch() {
  return (
    <section className="mx-auto max-w-md px-4 pt-5 pb-3">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white p-5">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 10%, white, transparent 25%), radial-gradient(circle at 80% 50%, white, transparent 25%)'}} />
        <div className="relative">
          <h2 className="text-2xl font-bold leading-tight">Find your dream home</h2>
          <p className="mt-1 text-white/80 text-sm">Browse curated listings in top locations</p>

          <div className="mt-4 bg-white rounded-xl p-2 shadow-lg">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gray-50">
              <MapPin size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search by city, neighborhood, or address"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <button className="shrink-0 inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-3 py-2 rounded-lg active:scale-95 transition">
                <Search size={16} />
                Search
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">For Sale</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">$250k - $1.2M</button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 inline-flex items-center gap-1">
                <SlidersHorizontal size={14} /> Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
