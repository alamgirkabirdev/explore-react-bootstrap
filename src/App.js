import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './component/GridCard/GridCard';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
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
