import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,Setpeople]=useState(data);

  return <main>
    <section className="container">

      <h3>{people.length} Birthdays Today</h3>
      <List people={people}></List>
      <button onClick={()=>Setpeople([])}>Clear All</button>

    </section>

  </main>
}

export default App;
