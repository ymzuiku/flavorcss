import { Header } from "./components/Header";
import { ExampleList } from "./components/ExampleList";

export default () => {
  const out = document.createElement("div");
  out.className = "max-w:1300px margin:0|auto";
  out.append(Header(), ExampleList());
  return out;
};
