import React from 'react';
import Counter from './Counter'; 

function App() {
  return (
    <div>
      <Counter initialVal={0} incrementAmount={1} />
    </div>
  );
}

export default App;
