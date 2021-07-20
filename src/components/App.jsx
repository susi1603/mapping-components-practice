import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(oneEntry) {
  return (
    <Entry
      key={oneEntry.id}
      emoji={oneEntry.emoji}
      name={oneEntry.name}
      description={oneEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
