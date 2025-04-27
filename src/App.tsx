import React, { useState } from 'react';
import Header from './layouts/AppHeader/Header';
import BurgerIngredients from './layouts/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './layouts/BurgerConstructor/BurgerConstructor';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<any[]>([]);
  const [selectedCounts, setSelectedCounts] = useState<{[key: string]: number}>({});
  const [isContentVisible, setIsContentVisible] = useState(false)


  const handleIngredientAdd = (ingredient: any) => {
    if (ingredient.type === 'bun') {
      const prevBun = selectedIngredients.find(item => item.type === 'bun');
      const newCounts = { ...selectedCounts };
      if (prevBun) delete newCounts[prevBun._id];
      setSelectedCounts({
        ...newCounts,
        [ingredient._id]: 1
    });
      setSelectedIngredients(prev => [
        ...prev.filter(item => item.type !== 'bun'),
        ingredient
      ]);
    } else {
      setSelectedIngredients(prev => [...prev, ingredient]);
      setSelectedCounts(prev => ({
        ...prev,
        [ingredient._id]: (prev[ingredient._id] || 0) + 1
      }));
    }
  };

  return (
    <div className="App">
      <Header 
        onTabClick={() => setIsContentVisible(!isContentVisible)}
      />
      {isContentVisible && (
        <main className='main container'>
          <BurgerIngredients 
            onIngredientClick={handleIngredientAdd}
            selectedCounts={selectedCounts}
          />
          <BurgerConstructor ingredients={selectedIngredients} />
        </main>
      )}
    </div>
  );
}

export default App;
