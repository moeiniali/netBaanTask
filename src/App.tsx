import './App.css'
import { TmCard } from './components/ExAllCo';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Suspense } from 'react';
import { OrgSuspense } from './components/ExAllCo';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#10141A]">
      <Provider store={store}>

        {/* <Suspense fallback={<OrgSuspense />}> */}

        <TmCard />

        {/* </Suspense> */}
      </Provider>
    </div>
  );
}

export default App;
