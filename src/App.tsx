import { Provider } from "react-redux";
import store from "./redux/index";

import Background from "./components/Background";

function App() {
  return (
    <Provider store={store}>
      <Background />
    </Provider>
  );
}

export default App;
