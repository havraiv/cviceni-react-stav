import React, { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  return (
    <>
      <input
        type="number"
        defaultValue={firstNum}
        onChange={(e) => setFirstNum(e.target.value)}
      />{' '}
      +{' '}
      <input
        type="number"
        defaultValue={secondNum}
        onChange={(e) => setSecondNum(e.target.value)}
      />{' '}
      = <output>{Number(firstNum) + Number(secondNum)}</output>
    </>
  );
};
