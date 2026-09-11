
# Etch-a-Sketch

A browser-based sketchpad inspired by the classic Etch A Sketch toy, built as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## Features

- **Dynamic Grid Generation:** Configurable grid dimensions (up to 100x100 squares) rendered inside a responsive canvas.
- **Drawing Modes:**
  - **Rainbow:** Generates randomized RGB colors on hover.
  - **Black:** Classic monochrome drawing directly in solid black.
- **Optional Progressive Darkening:** 
  - When enabled in Rainbow mode, each square progressively darkens by 10% on subsequent mouse passes, turning fully black after 10 passes.
  - Automatically toggled off and disabled when drawing in Black mode.
- **Canvas Controls:**
  - **Change size:** Prompts for a new grid resolution and redraws the canvas.
  - **Mode (Rainbow / Black):** Toggles between vibrant randomized colors and classic black.
  - **Darkening (ON / OFF):** Enables or disables incremental shading for Rainbow mode.
  - **Clear:** Resets the grid using the current resolution and settings.

## Tech Stack

- **HTML5:** Semantic structure and control buttons.
- **CSS3:** Clean minimal design, responsive layout and stateful button styling.
- **JavaScript:** Dynamic DOM rendering, dataset state tracking for shading passes, and event listeners.

## Live Demo

You can view the live website here: [odin-etch-a-sketch](https://frikap.github.io/odin-etch-a-sketch/)