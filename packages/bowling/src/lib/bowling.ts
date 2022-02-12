interface Score {
  frame: number;
  score: string;
}

interface BowlingParams {
  scores: Score[];
}

export function bowling({ scores }: BowlingParams): number {
  let result = 0;
  let spare = '/';
  let strike = 'X';
  let miss = '-';

  function formatValue(value: string) {
    if (value === miss) value = '0';
    return value;
  }

  function handleSpare(
    value: string,
    array: Score[],
    index: number,
    tries: string[]
  ) {
    if (value === spare) {
      let nextThrow: number = Number(formatValue(array[index + 1].score[0]));
      let currentFrame: number = Number(tries[0]);
      value = (10 + nextThrow - currentFrame).toString();
    }
    return value;
  }

  function handleStrike(value: string, array: Score[], index: number) {
    if (value === strike) {
      let nextFrame = array[index + 1].score.split(',');
      let nextThrowStr = formatValue(nextFrame[0]);
      let secondNextThrowStr = formatValue(nextFrame[1]);
      if (nextThrowStr === strike) {
        nextThrowStr = '10';
        secondNextThrowStr = formatValue(array[index + 2].score.split(',')[0]);
        if (secondNextThrowStr === strike) secondNextThrowStr = '10';
      }
      let nextThrow: number = Number(nextThrowStr);
      let secondNextThrow: number = Number(secondNextThrowStr);
      value = (10 + nextThrow + secondNextThrow).toString();
    }
    return value;
  }

  scores.forEach(({ score }, index, array) => {
    const tries: string[] = score.split(',');
    for (let n = 0; n < tries.length; n++) {
      let value: string = formatValue(tries[n]);
      value = handleSpare(value, array, index, tries);
      value = handleStrike(value, array, index);
      result += Number(value);
    }
  });
  return result;
}
