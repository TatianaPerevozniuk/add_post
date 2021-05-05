import './App.css';
import List from "./components/lists/List";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadPosts, loadUsers} from "./store";
import FormInput from "./components/input/FormInput"

function App() {
  const dispatch = useDispatch();

  useEffect(
      () => {
          dispatch(loadPosts());
          dispatch(loadUsers())
      },
      [dispatch]
  );
  return (
    <div className="App">
      <FormInput/>
      <List/>
    </div>
  );
}

export default App;
