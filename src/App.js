import './App.css';
import SplitScreen from './SplitScreen';

const LeftComponent = ({message}) => {
  return <h1 style={{ backgroundColor: 'green'}}>{message}</h1>
}

const RightComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftComponent message="Hello"/>
      <RightComponent message="Rahul"/>
    </SplitScreen>
  );
}

export default App;
