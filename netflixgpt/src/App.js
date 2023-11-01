
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore"
// import Counter from './components/Counter';
// import Todo from './components/Todo';

function App() {
  return (
    
      <Provider store={appStore}>
         <Body/>  
         {/* <Counter/> */}
        {/* <Todo/> */}
      </Provider>

    
  );
}

export default App;
