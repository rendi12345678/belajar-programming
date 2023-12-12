import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";
import GrantParent from "./components/Optimization/GrantParent";

function App() {
  return (
    <div className="App">
      <GrantParent>
        <ParentOne>
          <ChildOne />
        </ParentOne>
      </GrantParent>
    </div>
  );
}

export default App;
