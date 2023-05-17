import React from 'react';
import { useState } from 'react';

// Zadání 1: Převeď `cislo` na stavovou proměnnou.
// Zadání 2: Nastav, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku, vynulovat nastavovalo na nulu apod.

const Pocitadlo = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h3>Počítadlo: {number}</h3>
      <button onClick={() => setNumber(number - 5)}>-5</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(0)}>vynulovat</button>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number + 5)}>+5</button>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
      <Pocitadlo />
    </>
  );
};
