import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContianer from "./components/NewCakeContianer";
import HooksNewCakeContainer from "./components/HooksNewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import HooksItemContainer from "./components/HooksItemContainer";
import UserContainer from "./components/UserContainer";
import HooksUserContainer from "./components/HooksUserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <HooksItemContainer name="cake" />
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContianer />
        <HooksNewCakeContainer />
        <ItemContainer />
        <HooksItemContainer />
        <HooksIceCreamContainer />
        <br />
        <br />
        <br />
        <br />
        <UserContainer />
        <HooksUserContainer />
      </div>
    </Provider>
  );
}

export default App;
