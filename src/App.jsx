import "./App.css";
import Bg from "./components/Bg";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}

      <Counter />
      <Bg />
      <Todo />
    </>
  );
}

export default App;
