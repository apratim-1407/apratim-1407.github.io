# Kathputli Darbar: 14 Stops in Rajasthan

Apratim Saxena's portfolio, built for the Wispr Flow hiring challenge (growth team, India). It is told as a journey of 14 stops across Rajasthan, his home state (he is from Kota). Each stop is one full-screen page: a place in Rajasthan drawn in SVG behind, one piece of his work in a card on top, usually one thing to touch, and a route map at the bottom.

Built by voice: Apratim directed every page through Wispr Flow, across many rounds of feedback. Keep that line on the last page.

## Files
- `rajasthan/index.html` — the entire site in one self-contained file (HTML + CSS + JS, inline SVG, Web Audio). No build step, no dependencies except Google Fonts (Yatra One, Mukta).
- `docs/content-brief.md` — every stop's exact text, numbers, links and interaction, in plain words. The source of truth for content.
- `docs/rajasthan-map.png` — clean route map (no pin), if a static map image is ever needed.
- `tools/shoot.js` — screenshots all 14 stops at 1440×900 and 390×844 into `shots/`, prints page errors.

## How the code is organised (all inside the one `<script>`)
- **`P` array** — one object per stop. Fields: `side` ('L' | 'R' | 'C' — card position), `fx` (x of the scene's focal point in the 1600×900 viewBox; used to crop on phones), `ll` ([lon, lat] for the route map), `place` (town shown in the top bar), `cat`, `cls`, `title`, `sub`, `hook`, `pts`, `mets`, `tools`, `links`, `outx` (small result box in the card), `act` ([icon, text] instruction pill; icon 'info' = fact box), `overlay` (extra HTML on the page, e.g. the sundial slider), `todo`, `loc`, `maps`, `nt` (place note), `scene()` (returns SVG markup), `init(sec)` (wires the interaction).
- **Scenes** are drawn in a 1600×900 viewBox with `preserveAspectRatio="xMidYMax slice"`. Helpers: `sky()`, `dune()`, `stars()`, `camel()`, `battl()`, `fire()` (living flame: three flickering tongues, breathing glow, embers), `el()`, `svgPt()` (screen → scene coordinates, mirror-aware), `mix()` (colour interpolation), `out()` (writes the card's result box).
- **Mirroring:** on `side:'R'` pages the whole scene group is flipped (`translate(1600 0) scale(-1 1)`) so the focal object sits opposite the card. `<text>` and `<foreignObject>` inside a mirrored scene are counter-flipped after build — keep that in mind when adding text to a right-card page.
- **Route map** (`routeSVG(i)`): Rajasthan outline from approximate lon/lat points, dotted full route, gold trail to the current stop, red pin that drops in.
- **Navigation** (`go(i)`): horizontal deck, parallax background (art moves at a different rate), card clip-path wipe from its own side, staggered line fade, number count-up (`countUp`). Next/Back buttons, arrow keys, wheel, swipe (swipe ignored on interactive elements and drag pages). Pages fire `enter` / `leave` events.
- **Music** (bottom of the script): five moods synthesised live with Web Audio, crossfading by stop via `MOOD_OF`: `tan` (tanpura + flute), `santoor`, `pad` (warm chords + bells), `forest` (wind, drone, birds), `desert` (wind + bowed melody). Starts on the first tap (sunrise), Sound on/off in the top bar, pauses when the tab is hidden. Variable names in the music block are prefixed (`mcur`) — do not reuse `cur`, which belongs to navigation.

## The 14 stops (side · place · content · interaction)
1. C · Sam Sand Dunes, Jaisalmer · cover · tap anywhere for sunrise
2. L · Chambal River Front, Kota · About me · tap the river to float a diya
3. R · Mehrangarh, Jodhpur · WisdomCircle internship · tap the city to light windows (4 product surfaces)
4. L · Sheesh Mahal, Amber · Application Preview case study · candle light breathes, drag to carry it
5. R · Ranthambore · Hashmint internship · spot the hidden tiger (auto-reveal after 8 s)
6. L · Junagarh Fort, Bikaner · NextLeap Top Fellow · no interaction, fact box
7. R · Jantar Mantar, Jaipur · GroundWork · slider under the sundial moves the sun, sky and shadow
8. L · Thar night sky · 421K-review research · tap to place stars, counter to 421,387
9. R · Lake Pichola, Udaipur · Stuck Money · still scene, no interaction
10. L · Bagru · Formulate · block stamps the pattern on arrival
11. R · Old City, Jaipur · quick-commerce research · tap a kachori to crack it, result under the kachoris
12. L · Jaisalmer · Academic Voice Mode · tap the singer: messy spoken doubt → structured question
13. R · Jaipur rooftops · Review Pulse + QA Signal Loop · drag the gold kite to cut kites
14. C · Desert camp · contact · tap the fire for sparks

## Rules Apratim set (follow them)
- His title is **APM / Product Analyst**. Never "Product Manager" for him. (The fellowship's own name is shortened to "PM Fellowship · NextLeap".)
- No job-seeking lines anywhere: no "open to roles", no "available from", no "apply".
- Instruction pill: small, always bottom-right, above the bottom bar. It must say exactly what to do.
- Every flame must visibly flicker, even with reduced motion on.
- Figures come only from his live portfolio (https://apratim-1407.github.io/, data in its `data.js`) or the content brief. Never invent numbers. Hedge facts about places you can't verify ("the story goes").
- No photos, stock art or carousels. Everything is drawn in code.
- Short replies, bottom line first. He works fast and often from his phone.

## Contact and links
apratim1424@gmail.com · linkedin.com/in/apratim-saxena · github.com/apratim-1407 · resume https://apratim-1407.github.io/assets/resume.pdf

## Deploy (GitHub Pages)
Target URL: **https://apratim-1407.github.io/rajasthan/**
1. Clone `apratim-1407/apratim-1407.github.io`.
2. Copy `rajasthan/index.html` into a `rajasthan/` folder at the repo root. Do not touch the existing site.
3. Commit ("Add Rajasthan journey portfolio") and push to `main`. Ask Apratim before pushing.
4. Wait 1–2 minutes, then open the URL and click through all 14 stops.

## Checking changes
`NODE_PATH=$(npm root -g) node tools/shoot.js`, then look at `shots/`. Look at the phone shots too: on phones the card sits on top and the scene shows below it.

## Known gaps
- Phone version is checked in a browser phone emulation only, not on a real iPhone or Android phone yet.
- The music has only been checked for errors, not for sound quality — ask Apratim how it sounds before changing it.

## Phones (lite mode)
Phones, touch screens and windows up to 760 px wide get the class `lite` on <html> (tiny script in <head>); desktop is untouched. Lite mode = the same 14 pages with: no parallax or card wipes, no twinkle/flap/walk scenery animation (fires still flicker), fewer stars and glints, scenes of far-away pages not drawn (`.near` = current page and its neighbours), no number count-up, the card capped at 46% of the screen height and scrollable (with a 'scroll for more' cue) so the scene stays visible, taps instead of drags (stop 4 candle, stop 13 kite), and sound off until the visitor taps the note button. Landscape phones get a side-by-side layout.

## Layout
DESKTOP: the top of the screen is empty except Sound and Contents at the top-right. The bottom has the map strip (.pin: map, 'Stop n of 14', title, place link, place note) on the left and Previous / Next on the right. No page count. The instruction pill sits above the strip on the right (the Hide/Show content button is phone-only).
PHONE (class lite): full-width top bar with the map, stop number, title and place link; bottom bar with page count, sound, Contents, previous, next; the Hide/Show button sits above the pill. The desktop-only CSS is all under `html:not(.lite)`. On phones stop 7 has no slider: the sun, sky and shadow run by themselves, 1 second = 10 minutes of the day (change `dt*(10/720)*100` in the stop 7 init to change the speed).
