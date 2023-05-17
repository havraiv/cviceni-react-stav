import React from 'react';
import dice1Url from './1.svg';
import dice2Url from './2.svg';
import dice3Url from './3.svg';
import dice4Url from './4.svg';
import dice5Url from './5.svg';
import dice6Url from './6.svg';
import './kostka.css';
import { useState } from 'react';

const diceUrls = [dice1Url, dice2Url, dice3Url, dice4Url, dice5Url, dice6Url];

// Zadání 1: Převeď `cisloNaKostce` na stavovou proměnnou.
// Zadání 2: Po kliku na tlačítko zvětši číslo na kostce o jedna. Po šetce by měla následovat jednička.
// Zadání 3: Vypiš v textu `<p>`, jaké číslo kostka ukazuje.
// Zadání 4: Vypiš v atributu `alt` správné číslo.

export const Uloha3 = () => {
  const [diceNumber, setDiceNumber] = useState(1);

  return (
    <div className="kostka">
      <img
        src={diceUrls[diceNumber - 1]} /* indexy se číslují od nuly */
        width={60}
        height={60}
        alt={diceNumber ? `Kostka s číslem ${diceNumber}` : null}
        className="kostka__ikona"
      />
      <p className="kostka__text">Na kostce je číslo {diceNumber}.</p>
      <button
        onClick={() => {
          setDiceNumber(diceNumber <= 5 ? diceNumber + 1 : diceNumber - 5);
        }}
        className="kostka__akce"
      >
        Zvětši číslo na kostce o jedna.
      </button>
    </div>
  );
};
