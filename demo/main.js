import Devano from "../src";
import App from "./App.devano";

const app = new Devano({
  element: "#app",
  components: [App],
});

console.log(app);
