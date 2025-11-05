import { Home, Heart, Bookmark, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-md">
      <div className="mx-auto rounded-2xl bg-white/90 backdrop-blur shadow-lg border border-gray-100 px-4 py-2">
        <ul className="flex items-center justify-between text-gray-600">
          <li>
            <button className="flex flex-col items-center gap-1 px-3 py-1 text-indigo-600">
              <Home size={22} />
              <span className="text-[11px] font-medium">Home</span>
            </button>
          </li>
          <li>
            <button className="flex flex-col items-center gap-1 px-3 py-1">
              <Heart size={22} />
              <span className="text-[11px]">Saved</span>
            </button>
          </li>
          <li>
            <button className="flex flex-col items-center gap-1 px-3 py-1">
              <Bookmark size={22} />
              <span className="text-[11px]">Offers</span>
            </button>
          </li>
          <li>
            <button className="flex flex-col items-center gap-1 px-3 py-1">
              <User size={22} />
              <span className="text-[11px]">Profile</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
