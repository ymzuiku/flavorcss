import { Header } from "./components/Header";
import { List } from "./components/List";
import { medias, pseudos } from "./components/moreDetail";

export default () => {
  return (
    <div class="max-w:1100px margin:0|auto">
      <Header />
      <List />
      {pseudos}
      {medias}
    </div>
  );
};
