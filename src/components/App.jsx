import React, { useState } from 'react';
import FilterBar from './FilterBar';
import Log from './Log';
import '../App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Log selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;