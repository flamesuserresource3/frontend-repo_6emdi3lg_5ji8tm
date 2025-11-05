import { Bell, Search } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center text-white font-semibold">E</div>
          <div>
            <p className="text-xs text-gray-500 leading-none">Discover</p>
            <h1 className="text-base font-semibold">Estate</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="h-9 w-9 rounded-lg grid place-items-center bg-gray-50 text-gray-700 hover:bg-gray-100 active:scale-95 transition">
            <Search size={18} />
          </button>
          <button aria-label="Notifications" className="h-9 w-9 rounded-lg grid place-items-center bg-gray-50 text-gray-700 hover:bg-gray-100 active:scale-95 transition">
            <Bell size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
