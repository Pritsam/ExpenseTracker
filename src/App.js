import './App.css';
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {IncmomeExpenses} from './Components/IncomeExpenses'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransaction'
import {GlobalProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div class="container">
        <Balance/>
        <IncmomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
  );
}

export default App;
