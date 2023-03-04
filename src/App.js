import BlackButton from './components/BlackButton/BlackButton';
import BlackRetangle from './components/BlackRetangle/BlackRetangle';
import FirstCopyBlock from './components/FirstCopyBlock/FirstCopyBlock';
import RetangleOval from './components/BlackRetangle/RetangleOval/RetangleOval';
import HardSkillsImages from './components/ImagesGrid/HardSkillsImages';
import AmyHero from './components/Amy-hero/AmyHero';
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
    </div>
  );
}

export default App;
