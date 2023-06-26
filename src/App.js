import ContextProvider from './context/user';
import Counter from './components/counter/counter';
import User from './components/user';

function App() {
  return (
    <ContextProvider>
      <div className="APP">
        {/* <Counter /> */}
        <User />
      </div>
    </ContextProvider>
  );
}

export default App;
