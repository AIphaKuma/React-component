import TodoList from './todoList.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
      <div className="card-body my-4 text-center" style={{ width: "50%", margin: "0 auto" }}>
        <TodoList />
      </div>
      
    </>
  );
}

export default App;
