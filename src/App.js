import './App.scss';
import Header from './components/header'
import Breadcrum from './components/breadcrum'
import Brands from './components/brands'
import Solutions from './components/solutions'
import About from './components/about'
import CallAction from './components/call-action'

function App() {
  return (
    <>
      <Header/>
      <Breadcrum/>
      <Brands/>
      <Solutions/>
      <About/>
      <CallAction/>
    </>
  );
}
  export default App;