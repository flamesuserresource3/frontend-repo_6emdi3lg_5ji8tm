import { Bath, BedDouble, Heart, MapPin } from 'lucide-react';

const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'Modern Family House',
    location: 'Los Angeles, CA',
    price: 980000,
    beds: 4,
    baths: 3,
    area: 2400,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'Minimalist Glass Villa',
    location: 'Miami, FL',
    price: 1450000,
    beds: 5,
    baths: 4,
    area: 3200,
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    title: 'Cozy Suburban Home',
    location: 'Austin, TX',
    price: 520000,
    beds: 3,
    baths: 2,
    area: 1800,
    image:
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1600&auto=format&fit=crop',
    featured: false,
  },
];

function formatPrice(num) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
}

function PropertyCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
      <div className="relative h-44">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <button className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center bg-white/90 backdrop-blur text-gray-700 shadow-sm active:scale-95">
          <Heart size={18} />
        </button>
        {item.featured && (
          <span className="absolute bottom-3 left-3 bg-rose-600 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-0.5 text-sm text-gray-500 inline-flex items-center gap-1">
              <MapPin size={14} /> {item.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-indigo-600 font-semibold">{formatPrice(item.price)}</p>
            <p className="text-xs text-gray-500">Listing price</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 text-gray-600 text-sm">
          <div className="inline-flex items-center gap-1.5">
            <BedDouble size={16} /> {item.beds} Beds
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Bath size={16} /> {item.baths} Baths
          </div>
          <div className="ml-auto text-xs text-gray-500">{item.area} sqft</div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedList() {
  return (
    <section className="mx-auto max-w-md px-4 pb-24">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold">Featured Listings</h2>
        <button className="text-sm text-indigo-600 font-medium">See all</button>
      </div>
      <div className="grid gap-4">
        {MOCK_LISTINGS.map((home) => (
          <PropertyCard key={home.id} item={home} />
        ))}
      </div>
    </section>
  );
}
