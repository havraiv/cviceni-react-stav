import React, { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [state, setState] = useState('možná');
  return (
    <>
      <h3>Prší v Brně: {state}</h3>
      <button
        onClick={() => {
          state === 'možná'
            ? setState('ano')
            : state === 'ano'
            ? setState('ne')
            : state === 'ne'
            ? setState('možná')
            : null;
        }}
      >
        změnit
      </button>
    </>
  );
};
