import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "./components/ui/sonner";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Router>
    <Provider store={store}>
      <App />
      <Toaster position="bottom-right" richColors />
    </Provider>
  </Router>
);
