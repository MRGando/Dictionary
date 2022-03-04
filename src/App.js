import Search from "./Component/Search";
import Information from "./Component/Information";
import { useState } from "react";
import Header from "./Component/Header";

function App() {
  let [value, setValue] = useState("tell");
  let [details, setDetails] = useState({});

  return (
    <div className="App">
      <Header />
      <Search
        value={value}
        setValue={setValue}
        details={details}
        setDetails={setDetails}
      />
      <Information details={details} />
    </div>
  );
}

export default App;
