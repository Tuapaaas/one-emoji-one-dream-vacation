// One Emoji, One Dream Vacation — make.fun entry
// The dream: dawn beneath Mount Fuji, Japan — one particular trip, not
// any holiday. Fuji is a postcard in a single glyph: a snow-capped
// mountain, a faraway place, the journey of a lifetime. No words —
// the mountain says it all, at any size, on any screen.

import { writeFileSync, mkdirSync } from "node:fs";

const EMOJI = "🗻"; // Mount Fuji — the dream vacation, one emoji

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: entry.txt must be UTF-8 text of 1 to 8 characters, not only whitespace.
const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
}
if (!EMOJI.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (chars.length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

writeFileSync(`${outDir}/entry.txt`, EMOJI, "utf8");
