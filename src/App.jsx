import HeaderNav from './components/HeaderNav';
import HeroSearch from './components/HeroSearch';
import FeaturedList from './components/FeaturedList';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <HeaderNav />
      <main>
        <HeroSearch />
        <FeaturedList />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
