import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './component/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <button>Plain Button</button>
      <Button variant='danger'>My Button</Button>
      <br />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="info" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
