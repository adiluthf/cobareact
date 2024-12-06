import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Profile />
      <Introduction name="adi" />
      <Introduction name="luthfi" />
    </div>
  );
}

export default App;
