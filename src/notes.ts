const NUM_NOTES = 12;

export enum Note {
  C = 0,
  C_SHARP = 1,
  D_FLAT = 1,
  D = 2,
  D_SHARP = 3,
  E_FLAT = 3,
  E = 4,
  F = 5,
  F_SHARP = 6,
  G_FLAT = 6,
  G = 7,
  G_SHARP = 8,
  A_FLAT = 8,
  A = 9,
  A_SHARP = 10,
  B_FLAT = 10,
  B = 11
}

export function normalizeNote(note: Note): Note {
  const normal = note % NUM_NOTES;
  if (normal === -0) {
    return 0;
  } else if (normal < 0) {
    return normal + NUM_NOTES;
  } else {
    return normal;
  }
}

export function normalizeNotes(notes: Note[]): Note[] {
  return notes.map(normalizeNote);
}
