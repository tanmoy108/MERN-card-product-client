import { createStore} from "redux";
import RootStore from "./rootStore";

const Store = createStore(
  RootStore,
);

export default Store;