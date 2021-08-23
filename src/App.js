import DataFetchingUseHook from "./components/DataFetchingUseHook";
import "./App.css";
import DataFetchinguseReducer from "./components/DataFetchinguseReducer";
import ParentcomponentuseCallback from "./components/ParentcomponentuseCallback";
import UsememohookCount from "./components/UsememohookCount";
import FocusInputuserefHook from "./components/FocusInputuserefHook";
import HookTimeruseRef from "./components/HookTimeruseRef";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookMouse from "./components/HookMouse";
import IntervalhookCounter from "./components/IntervalhookCounter";
import Reducerhook from "./components/Reducerhook";
import Testuseeffect from "./components/Testuseeffect";
function App() {
  return (
    <>
      <DataFetching />
      <DataFetchingUseHook />
      <DataFetchinguseReducer />
      <ParentcomponentuseCallback />
      <UsememohookCount />
      <FocusInputuserefHook />
      <HookTimeruseRef />
      <HookCounter />
      <HookMouse />
      <IntervalhookCounter />
      <Reducerhook />
      <Testuseeffect />
    </>
  );
}

export default App;
