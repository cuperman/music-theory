import { Note } from './notes';
import { Step } from './steps';

export type Mode = Note[];

function reduceSteps(mode: Mode, step: Step, index: number) {
  return [...mode, mode[index] + step];
}

export function ionianMode(root: Note): Mode {
  const steps = [Step.WHOLE, Step.WHOLE, Step.HALF, Step.WHOLE, Step.WHOLE, Step.WHOLE, Step.HALF];
  return steps.reduce(reduceSteps, [root]).slice(0, steps.length);
}
