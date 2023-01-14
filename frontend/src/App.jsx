import {Route} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ChatPage from "./Pages/Chat/ChatPage"

function App() {
  return (
    <div className="app">

          <Route path="/" component={HomePage} exact/>
          <Route path="/chats" component={ChatPage} exact/>
          

    </div>
  );
}

export default App;
