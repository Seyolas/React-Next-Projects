import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

const allCategories = ['all',...new Set(data.map((i)=>i.category))];

// aynı zamanda objecti arraye dönüştürdün.


function App() {
  const [menuItem, setMenuItem] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if (category ==='all') {
  
      setMenuItem(data);
      return
    }
    const newItems = data.filter((i) => i.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>

      <section className="-menu-section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories}></Categories>
      <Menu data={menuItem}></Menu>

      </section>
    </main>

  )


}

export default App;
