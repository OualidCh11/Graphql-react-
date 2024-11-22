import AddAccount from './gql/AddAccount';
import AccountById from './gql/AccountById';
import AccountsList from './gql/AccountsList';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bank Account Management</h1>
      <AddAccount />
      <AccountById />
      <AccountsList />
    </div>
  );
}

export default App;
