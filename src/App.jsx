import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MotivationSection from './components/MotivationSection';
import CollaborationSection from './components/CollaborationSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-theme-primary">
          <Navbar />
          <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
            <HeroSection />
            <MotivationSection />
            <CollaborationSection />
            <ContactSection />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
