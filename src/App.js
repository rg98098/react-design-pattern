import './App.css';
import SplitScreen from './SplitScreen';

const LeftComponent = () => {
  return <h1 style={{ backgroundColor: 'green'}}>Left!</h1>
}

const RightComponent = () => {
  return <p style={{backgroundColor: 'red'}}>Right!</p>
}

function App() {
  return (
    <SplitScreen left={LeftComponent} right={RightComponent}/>
  );
}

export default App;
