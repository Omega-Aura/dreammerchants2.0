import Footer from './components/Footer';
import RibbonCursor from './components/RibbonCursor';
import BubbleMenu from './components/BubbleMenu';
import ScrollEffects from './components/ScrollEffects';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home_SinglePage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <RibbonCursor />
      <ScrollProgress />
      <ScrollEffects />
      <BubbleMenu />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;