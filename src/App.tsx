import "./App.css";
import People from "./containers/people";

function App() {
  return (
    <div className="App">
      {/* We can use routing here but as our requirement don't actually need a routing for people we'll directly use the component here */}
      <People />
    </div>
  );
}

export default App;
