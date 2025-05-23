import { CardProvider } from '@/context/CardContext';
import Home from '@/pages/Home/Home';

function App() {
  return (
    <CardProvider>
      <Home />
    </CardProvider>
  );
}

export default App;
