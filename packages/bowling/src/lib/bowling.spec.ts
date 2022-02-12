import { bowling } from './bowling';

describe('bowling: it should calculate total points based on what happened', () => {
  it('should say i am null', () => {
    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '-,-',
          },
          {
            frame: 2,
            score: '-,-',
          },
          {
            frame: 3,
            score: '-,-',
          },
          {
            frame: 4,
            score: '-,-',
          },
          {
            frame: 5,
            score: '-,-',
          },
          {
            frame: 6,
            score: '-,-',
          },
          {
            frame: 7,
            score: '-,-',
          },
          {
            frame: 8,
            score: '-,-',
          },
          {
            frame: 9,
            score: '-,-',
          },
          {
            frame: 10,
            score: '-,-',
          },
        ],
      })
    ).toEqual(0);
  });

  it('should calculate simple additions', () => {
    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '1,-',
          },
          {
            frame: 2,
            score: '-,-',
          },
          {
            frame: 3,
            score: '-,-',
          },
          {
            frame: 4,
            score: '-,-',
          },
          {
            frame: 5,
            score: '-,-',
          },
          {
            frame: 6,
            score: '-,-',
          },
          {
            frame: 7,
            score: '-,-',
          },
          {
            frame: 8,
            score: '-,-',
          },
          {
            frame: 9,
            score: '-,-',
          },
          {
            frame: 10,
            score: '-,-',
          },
        ],
      })
    ).toEqual(1);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '1,1',
          },
          {
            frame: 2,
            score: '-,-',
          },
          {
            frame: 3,
            score: '-,-',
          },
          {
            frame: 4,
            score: '-,-',
          },
          {
            frame: 5,
            score: '-,-',
          },
          {
            frame: 6,
            score: '-,-',
          },
          {
            frame: 7,
            score: '-,-',
          },
          {
            frame: 8,
            score: '-,-',
          },
          {
            frame: 9,
            score: '-,-',
          },
          {
            frame: 10,
            score: '-,-',
          },
        ],
      })
    ).toEqual(2);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '9,-',
          },
          {
            frame: 2,
            score: '9,-',
          },
          {
            frame: 3,
            score: '9,-',
          },
          {
            frame: 4,
            score: '9,-',
          },
          {
            frame: 5,
            score: '9,-',
          },
          {
            frame: 6,
            score: '9,-',
          },
          {
            frame: 7,
            score: '9,-',
          },
          {
            frame: 8,
            score: '9,-',
          },
          {
            frame: 9,
            score: '9,-',
          },
          {
            frame: 10,
            score: '9,-',
          },
        ],
      })
    ).toEqual(90);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '9,-',
          },
          {
            frame: 2,
            score: '9,-',
          },
          {
            frame: 3,
            score: '9,-',
          },
          {
            frame: 4,
            score: '9,-',
          },
          {
            frame: 5,
            score: '9,-',
          },
          {
            frame: 6,
            score: '9,-',
          },
          {
            frame: 7,
            score: '9,-',
          },
          {
            frame: 8,
            score: '9,-',
          },
          {
            frame: 9,
            score: '9,/',
          },
          {
            frame: 10,
            score: '9,-',
          },
        ],
      })
    ).toEqual(72 + (10 + 9) + 9);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '9,-',
          },
          {
            frame: 2,
            score: '9,-',
          },
          {
            frame: 3,
            score: '9,-',
          },
          {
            frame: 4,
            score: '9,-',
          },
          {
            frame: 5,
            score: '9,-',
          },
          {
            frame: 6,
            score: '9,-',
          },
          {
            frame: 7,
            score: '9,-',
          },
          {
            frame: 8,
            score: '9,-',
          },
          {
            frame: 9,
            score: '9,/',
          },
          {
            frame: 10,
            score: '-,9',
          },
        ],
      })
    ).toEqual(72 + (10 + 0) + 9);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '9,-',
          },
          {
            frame: 2,
            score: '9,-',
          },
          {
            frame: 3,
            score: '9,-',
          },
          {
            frame: 4,
            score: '9,-',
          },
          {
            frame: 5,
            score: '9,-',
          },
          {
            frame: 6,
            score: '9,-',
          },
          {
            frame: 7,
            score: '9,-',
          },
          {
            frame: 8,
            score: 'X',
          },
          {
            frame: 9,
            score: '2,2',
          },
          {
            frame: 10,
            score: '1,-',
          },
        ],
      })
    ).toEqual(63 + (10 + 2 + 2) + 4 + 1);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '9,-',
          },
          {
            frame: 2,
            score: '9,-',
          },
          {
            frame: 3,
            score: '9,-',
          },
          {
            frame: 4,
            score: '9,-',
          },
          {
            frame: 5,
            score: '9,-',
          },
          {
            frame: 6,
            score: '9,-',
          },
          {
            frame: 7,
            score: '9,-',
          },
          {
            frame: 8,
            score: 'X',
          },
          {
            frame: 9,
            score: 'X',
          },
          {
            frame: 10,
            score: '1,1',
          },
        ],
      })
    ).toEqual(63 + (10 + 10 + 1) + (10 + 1 + 1) + 2);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: '9,-',
          },
          {
            frame: 2,
            score: '9,-',
          },
          {
            frame: 3,
            score: '9,-',
          },
          {
            frame: 4,
            score: '9,-',
          },
          {
            frame: 5,
            score: '9,-',
          },
          {
            frame: 6,
            score: '9,-',
          },
          {
            frame: 7,
            score: 'X',
          },
          {
            frame: 8,
            score: 'X',
          },
          {
            frame: 9,
            score: 'X',
          },
          {
            frame: 10,
            score: '1,1',
          },
        ],
      })
    ).toEqual(54 + (10 + 10 + 10) + (10 + 10 + 1) + (10 + 1 + 1) + 2);

    expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: 'X',
          },
          {
            frame: 2,
            score: 'X',
          },
          {
            frame: 3,
            score: 'X',
          },
          {
            frame: 4,
            score: 'X',
          },
          {
            frame: 5,
            score: 'X',
          },
          {
            frame: 6,
            score: 'X',
          },
          {
            frame: 7,
            score: 'X',
          },
          {
            frame: 8,
            score: 'X',
          },
          {
            frame: 9,
            score: 'X',
          },
          {
            frame: 10,
            score: '1,1',
          },
        ],
      })
    ).toEqual(7 * 30 + (10 + 10 + 1) + (10 + 1 + 1) + 2);

    /*expect(
      bowling({
        scores: [
          {
            frame: 1,
            score: 'X',
          },
          {
            frame: 2,
            score: 'X',
          },
          {
            frame: 3,
            score: 'X',
          },
          {
            frame: 4,
            score: 'X',
          },
          {
            frame: 5,
            score: 'X',
          },
          {
            frame: 6,
            score: 'X',
          },
          {
            frame: 7,
            score: 'X',
          },
          {
            frame: 8,
            score: 'X',
          },
          {
            frame: 9,
            score: 'X',
          },
          {
            frame: 10,
            score: 'X',
          },
          {
            frame: 11,
            score: 'X',
          },
          {
            frame: 12,
            score: 'X',
          },
        ],
      })
    ).toEqual(300);*/
  });
});
