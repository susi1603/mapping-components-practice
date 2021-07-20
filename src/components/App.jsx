import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          description={emojipedia[0].meaning}
        />
        {/* <Entry />
        <Entry /> */}
      </dl>
    </div>
  );
}

export default App;
