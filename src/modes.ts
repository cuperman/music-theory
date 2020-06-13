// reference: https://en.wikipedia.org/wiki/Mode_(music)

import { Note } from './notes';
import { Step } from './steps';

export type Mode = Note[];

function makeMode(root: Note, steps: Step[]): Mode {
  return steps
    .reduce(
      (mode, step, index) => {
        return [...mode, mode[index] + step];
      },
      [root]
    )
    .slice(0, steps.length);
}

export function ionianMode(root: Note): Mode {
  return makeMode(root, [
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF
  ]);
}

export function dorianMode(root: Note): Mode {
  return makeMode(root, [
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE
  ]);
}

export function phrygianMode(root: Note): Mode {
  return makeMode(root, [
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE
  ]);
}

export function lydianMode(root: Note): Mode {
  return makeMode(root, [
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF
  ]);
}

export function mixolydianMode(root: Note): Mode {
  return makeMode(root, [
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE
  ]);
}

export function aeolianMode(root: Note): Mode {
  return makeMode(root, [
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE
  ]);
}

export function locrianMode(root: Note): Mode {
  return makeMode(root, [
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE
  ]);
}
