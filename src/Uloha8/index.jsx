import React, { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [index, setIndex] = useState(0);
  const answers = ['možná', 'ano', 'ne'];
  return (
    <>
      <h3>Prší v Brně: {answers[index]}</h3>
      <button
        onClick={() => {
          answers.length === index + 1 ? setIndex(0) : setIndex(index + 1);
        }}
      >
        změnit
      </button>
    </>
  );
};
