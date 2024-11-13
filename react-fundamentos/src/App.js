
import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import Mycomponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <Mycomponent />
      <TemplateExpressions />
      <Mycomponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
