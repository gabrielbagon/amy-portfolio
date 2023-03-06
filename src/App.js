import BlackButton from './components/BlackButton/BlackButton';
import BlackRetangle from './components/BlackRetangle/BlackRetangle';
import FirstCopyBlock from './components/FirstCopyBlock/FirstCopyBlock';
import RetangleOval from './components/BlackRetangle/RetangleOval/RetangleOval';
import HardSkillsImages from './components/ImagesGrid/HardSkillsImages';
import AmyHero from './components/Amy-hero/AmyHero';
import CarouselComponent from './components/Carousel/PhotoCarousel';
import CallToAction from './components/CTA/CallToAction';
import FooterBlackButton from './components/FooterBlackButton/FooterBlackButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BlackRetangle />
      <RetangleOval />  
      <BlackButton />
      <FirstCopyBlock />
      <HardSkillsImages />
      <AmyHero />
      <CarouselComponent />
      <CallToAction />
      <FooterBlackButton />

    </div>
  );
}

export default App;
