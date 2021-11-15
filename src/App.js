

import { TodoList } from './Components/TodoList';
import { AddTodoForm } from './Components/AddTodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/Header';
import './App.css';
import { Filter } from './Components/Filter';

function App() {
  return (
    <div className="container">
      <Header />
      <Filter />
      <div className="align-blocs">
      <AddTodoForm />
      <TodoList />
      </div>

    </div>
  );
}

export default App;
