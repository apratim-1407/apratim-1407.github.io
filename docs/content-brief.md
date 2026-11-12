# Portfolio brief (paste this into Emergent)

This is the content and the rules for my portfolio. Read all of it before building. I'll tell you what to build step by step.

## Part 1 · The idea and the rules

A portfolio for **Apratim Saxena, APM / Product Analyst, from Kota**, told as a journey of **14 stops across Rajasthan**. Each stop is one full-screen page: a place in Rajasthan drawn in the background, and one piece of my work in a card on top. Most pages have one thing to touch. A small map at the bottom shows where on the route you are.

**Navigation**
- Pages move **sideways**, one at a time: Next and Back buttons (bottom right), arrow keys, mouse wheel, and swipe on phones.
- The Next button shows where you're going next, like "Next: Jodhpur". On the last page it says "Start over".
- Top bar: "Apratim Saxena · Portfolio", the current town in gold, "03 / 14", and a Contents button that opens a list of all 14 stops.

**Layout**
- The card alternates sides: stop 1 centred, then left, right, left, right…, stop 14 centred. The scene's main object sits on the side away from the card.
- On phones the card sits at the top and the scene shows below it.

**Bottom bar (on every page)**
- A small Rajasthan map badge sticking up out of the bar: the whole route dotted, the travelled part in gold, a red pin on the current stop, "RAJASTHAN" written under it.
- Then "Stop N of 14" in gold, the thing to do, and the place name as a Google Maps link. On wide screens, the place note in italics.

**Instruction pill**
- On pages with an interaction, a small dark pill with a gold round icon (hand for tap, arrows for drag, eye for spot) sits in the **bottom-right corner**, just above the bottom bar, on every page. It says exactly what to do.
- On stop 6 the same corner holds a slightly larger fact box instead.

**Sound**
- Soft ambient music, generated in the browser with the Web Audio API (no audio files). Tanpura: four strings plucked in a slow ~4.7-second loop (Pa, Sa, Sa, low Sa). Each pluck is about 12 harmonics; the upper ones swell in after the attack (the tanpura's buzzing "jawari" sound), and the plucks overlap into one continuous drone. A distant flute (soft sine tone with vibrato and a little breath noise) plays a short slow phrase in raag Maand every 15 seconds or so. Gentle reverb and a compressor on top.
- It fades in when the visitor taps for sunrise on stop 1. A "Sound on / off" button in the top bar mutes it, and it pauses when the tab is hidden.

**Animation**
- Page change: the page slides sideways, and the background moves slower than the card, so it feels deep.
- Card: opens with a wipe from its own side, then each line fades up one after another, then numbers count up from zero.
- The map pin drops in with a bounce, and the gold route line draws itself.
- **Every flame is alive:** three flickering flame layers (red-orange, orange, yellow), a soft glow that breathes, light pulsing on the ground, and small embers drifting up.

**Look**
- Night maroon background, sandstone and saffron in the scenes, gold accents, cream text.
- Fonts: **Yatra One** for headings, **Mukta** for body text.
- All art is drawn in code with SVG and CSS. No photos, no stock images, no carousels.

**Contact:** apratim1424@gmail.com · linkedin.com/in/apratim-saxena · github.com/apratim-1407 · resume: https://apratim-1407.github.io/assets/resume.pdf

---

## Part 2 · The 14 stops (exact text)

### Stop 1 · Sam Sand Dunes, Jaisalmer
- **Thing to do:** Watch the sun rise over the dunes
- **Place note:** The Thar before first light.
- **Card side:** centre
- **Card:** small label "Product portfolio · 2026", big name "Apratim Saxena", line "APM · Product Analyst", then: "Rajasthan is home, so this portfolio is a journey: 14 stops across Rajasthan, and at each one, a piece of my work. Every page has something to touch, and a map at the bottom shows where you are." Buttons: Start the journey, Resume.
- **Instruction pill:** Tap anywhere for sunrise

### Stop 2 · Chambal River Front, Kota
- **Thing to do:** Float a diya on the Chambal
- **Place note:** Home. Ghats and fountains along the Chambal, with the hanging bridge across the water.
- **Card side:** left
- **Tag:** About me
- **Title:** I keep asking why until it makes sense.
- **Subtitle:** APM / Product Analyst · from Kota · B.Tech CS, UPES Dehradun, 2023–27
- **Opening line:** I break products down to build them better: read their reviews, pull them apart, and write what should come next.
- **Points:**
  - Three internships: product at WisdomCircle, operations at Hashmint, data at HNP+.
  - Led Manoshakti, the campus well-being club, for two years: 10,000+ footfall.
- **Numbers:** 421K reviews mined · 18 review analyses · 3 internships
- **Skill tags, in this order:** AI products, LLMs, GenAI, RAG, Eval design, SQL, Python, Metabase, Fullstory, RICE, North Star metrics, Figma
- **Small box in the card:** 0 diyas on the Chambal. This is home, where every one of these stories starts.
- **Instruction pill:** Tap the river to float a diya

### Stop 3 · Mehrangarh Fort, Jodhpur
- **Thing to do:** Climb Mehrangarh, look down on the blue city
- **Place note:** From the top you see what the streets hide.
- **Card side:** right
- **Tag:** Experience
- **Title:** Product Intern · WisdomCircle
- **Subtitle:** May – Jul 2026 · an early-stage, two-sided hiring marketplace
- **Opening line:** Owned the weekly feature-analysis cadence for 20+ shipped stories across 6 release cycles.
- **Points:**
  - SQL in Metabase on production tables to measure adoption and drop-off.
  - Fullstory sessions split by device exposed abandonment that averages hid.
  - Weekly Scale / Iterate / Monitor calls for the Product Lead.
- **Numbers:** 20+ stories analysed · 6 release cycles · 2,000+ regression cases
- **Small box in the card:** Every lit window is one product surface I measured. 0 of 4 found.
- **Instruction pill:** Tap anywhere in the blue city to light a window

### Stop 4 · Amber Fort, Jaipur
- **Thing to do:** Step inside the Sheesh Mahal
- **Place note:** A hall of mirrors that a single flame can fill with light.
- **Card side:** left
- **Tag:** Case study · shipped
- **Title:** Application Preview Before Submission
- **Subtitle:** WisdomCircle · March 2026
- **Opening line:** Show candidates their application before they send it. Did it actually reduce regret?
- **Points:**
  - Beat both success criteria: 39.9% edit rate against a 30% target.
  - 96.4% preview-to-submit against a 90% target. Recommendation: scale and iterate.
- **Numbers:** 39.9% edit rate · 96.4% preview to submit
- **Buttons:** Read the case study → https://apratim-1407.github.io/assets/fa-application-preview.pdf
- **Small box in the card:** A small light shows you the whole room before you step in. That is what a preview does before you press submit.
- **Instruction pill:** Watch the candle breathe, or drag to carry it

### Stop 5 · Ranthambore National Park, Sawai Madhopur
- **Thing to do:** Go on a tiger safari
- **Place note:** Dense dry forest. You can drive for hours and see nothing, then everything at once.
- **Card side:** right
- **Tag:** Experience
- **Title:** Operations Intern · Hashmint
- **Subtitle:** Aug – Oct 2025 · India 1000 Scholars Olympiad
- **Opening line:** Took B2B outreach from a cold pipeline to closed revenue across Kota, Jaipur and Dehradun.
- **Points:**
  - Pitched directors and owners across 30+ on-ground visits, opening conversations with Allen and Unacademy.
  - Built the outreach CRM and follow-up cadence from scratch for 80+ accounts.
- **Numbers:** ₹2L+ registration revenue · 80+ institutions · 30+ field visits
- **Small box in the card:** The safari is rolling. Somewhere in this forest a tiger is watching you.
- **Instruction pill:** Spot the tiger in the forest and tap it

### Stop 6 · Junagarh Fort, Bikaner
- **Thing to do:** Walk the walls of Junagarh Fort
- **Place note:** Red sandstone outside, painted and mirrored palaces inside. Built in the late 1500s.
- **Card side:** left
- **Tag:** Certification
- **Title:** PM Fellowship · NextLeap
- **Subtitle:** Jan – May 2026
- **Opening line:** Graduated as a Top Fellow. Five months of product sense, metrics, prioritisation and PRDs.
- **Points:**
  - The graduation project became GroundWork, a decision layer for Claude (next stop).
- **Numbers:** Top Fellow
- **Fact box (bottom right, in place of an instruction):** Did you know? Most Rajasthan forts sit on a hill. Junagarh stands on flat desert ground, and the story goes that an enemy held it only once, for a single day.

### Stop 7 · Jantar Mantar, Jaipur
- **Thing to do:** Read the sky at Jantar Mantar
- **Place note:** Home of one of the world’s largest stone sundials.
- **Card side:** right
- **Tag:** Case study · NextLeap project
- **Title:** GroundWork: a decision layer for Claude
- **Subtitle:** 2026 · NextLeap graduation project
- **Opening line:** Most Claude users touch 10% of what it can do. GroundWork shows the plan before Claude executes.
- **Points:**
  - 9 in 10 surveyed users would slow down for guidance; 60% just rewrote the prompt.
  - Target: aware-but-stuck users, 77% of respondents, about 7.7M of Claude’s active users.
  - Chosen over a higher-RICE idea because it fixes the root cause at input.
- **Numbers:** 9 in 10 want guidance · 77% aware but stuck · 7.7M users in segment
- **Buttons:** Read the case study → https://apratim-1407.github.io/assets/claude-groundwork.pdf
- **Small box in the card:** The Samrat Yantra tells the time by its shadow. Read the shadow first, then act.
- **Instruction pill:** Drag the slider under the sundial to move the sun

### Stop 8 · Thar Desert, Jaisalmer
- **Thing to do:** Count the stars over the Thar
- **Place note:** Far from any city, there are more stars than anyone can count.
- **Card side:** left
- **Tag:** Research
- **Title:** Where the money comes from decides what breaks
- **Subtitle:** August 2026 · 7 Indian job apps
- **Opening line:** 421,387 Play Store reviews, and what they reveal about business models.
- **Points:**
  - Apps free for jobseekers carry 10–13× more employer-fraud complaints than pricing ones. The one that charges sits near 1:1.
  - The gap held for 4 years and 171 releases.
  - Python pipeline with 310 hand labels and a held-out test set.
- **Numbers:** 421K reviews · 7 apps · 171 releases tested
- **Buttons:** Read the report → https://apratim-1407.github.io/assets/job-platform-review-mining.pdf · GitHub → https://github.com/apratim-1407/Play-Store-Review-Intelligence
- **Small box in the card:** Each star you place reads another batch of reviews. 0 of 421,387 read.
- **Instruction pill:** Tap anywhere in the sky to place a star

### Stop 9 · Lake Pichola, Udaipur
- **Thing to do:** Take a boat out on Lake Pichola
- **Place note:** Halfway across, you belong to neither shore.
- **Card side:** right
- **Tag:** Case study
- **Title:** Stuck Money: pending, not lost
- **Subtitle:** 2026 · UPI payments
- **Opening line:** About 79.4 lakh UPI payments a month aren’t confirmed in real time. The money comes back. The sale often doesn’t.
- **Points:**
  - Hold, link, settle: time the 3 allowed status checks, show “pending” with a time instead of “failed”.
  - Link a retried payment to the first, so the customer pays exactly once.
  - North star: Saved Sales Rate, with a 4-week 50/50 test.
- **Numbers:** 79.4L a month · 3.4 per 10,000
- **Buttons:** Open the live build → https://apratim-1407.github.io/stuck-money/ · Read the case → https://apratim-1407.github.io/assets/stuck-money.pdf
- **Instruction pill:** none (this page has no interaction)

### Stop 10 · Bagru, Jaipur district
- **Thing to do:** Watch the block printers of Bagru
- **Place note:** Carve the block once, then print it a thousand times.
- **Card side:** left
- **Tag:** Build · in progress
- **Title:** Formulate: an AI form builder
- **Subtitle:** 2026 · in development
- **Opening line:** Describe a form in one sentence. Get a published Google Form in one click.
- **Points:**
  - Writes the questions and picks the right field types for you.
  - Publishes the live Google Form directly. No dragging fields, no settings menus.
- **Small box in the card:** One carved block prints the whole cloth. One sentence should build the whole form.
- **Instruction pill:** none (this page has no interaction)

### Stop 11 · Old City, Jaipur
- **Thing to do:** Crack open a pyaaz kachori
- **Place note:** Flaky outside, spiced onion inside. Best eaten standing at the stall.
- **Card side:** right
- **Tag:** Research
- **Title:** Quick commerce: three apps, three weak spots
- **Subtitle:** September 2026 · 2,650 recent reviews
- **Opening line:** Blinkit, Zepto and Instamart each break in a different place.
- **Points:**
  - Built from 2,650 recent Play Store reviews, tagged by theme.
  - Each app’s weakness is another’s strength, which tells you what is fixable.
- **Numbers:** 2,650 reviews · 3 apps
- **Buttons:** See the analysis → https://apratim-1407.github.io/assets/qcomm-carousel.pdf · Full portfolio → https://apratim-1407.github.io/projects.html
- **Instruction pill:** Tap a kachori to crack it open

### Stop 12 · Jaisalmer
- **Thing to do:** Hear a Manganiyar singer by the fire
- **Place note:** Songs passed down by voice for generations, never on paper.
- **Card side:** left
- **Tag:** Case study + PRD
- **Title:** Academic Voice Mode for ChatGPT
- **Subtitle:** 2026 · Indian college students
- **Opening line:** 62% of students have tried ChatGPT’s voice. Only about 8% use it regularly.
- **Points:**
  - 54% say typing feels easier: voice makes it hard to structure a thought (small survey, about two dozen responses).
  - Proposed pause and resume, an editable live transcript, “Structure My Doubt”, and a text-first answer.
- **Numbers:** 62% tried voice · ~8% use it regularly
- **Buttons:** Read the deck → https://apratim-1407.github.io/assets/academic-voice-mode-deck.pdf · Read the PRD → https://apratim-1407.github.io/assets/academic-voice-mode-prd.pdf
- **Small box in the card:** Spoken thoughts are messy. A good voice product helps you shape them.
- **Instruction pill:** Tap the singer by the fire

### Stop 13 · Rooftops of Jaipur
- **Thing to do:** Fly a kite on Makar Sankranti
- **Place note:** Every January the whole city is on its roof, and the sky is full.
- **Card side:** right
- **Tag:** Builds
- **Title:** Review Pulse and QA Signal Loop
- **Subtitle:** 2026 · working products
- **Opening line:** Two tools that find the one signal inside thousands.
- **Points:**
  - Review Pulse turns thousands of reviews into a weekly one-pager: top 3 themes, real quotes and actions in under 250 words, emailed automatically.
  - QA Signal Loop shows a PM which bugs keep coming back, ranked by user impact. PRD, data model and a working prototype.
- **Buttons:** QA Signal Loop on GitHub → https://github.com/apratim-1407/qa-signal-loop · Review Pulse demo → https://apratim-1407.github.io/assets/review-pulse.mp4
- **Small box in the card:** Your gold kite has cut 0. The sky is noise; your string finds the signal.
- **Instruction pill:** Drag your gold kite into the others to cut them

### Stop 14 · Sam Sand Dunes, Jaisalmer
- **Thing to do:** Spend a night under the desert sky
- **Place note:** Folk music, a fire, and more stars than you have ever seen.
- **Card side:** centre
- **Tag:** Contact
- **Title:** The fire’s lit. Let’s talk.
- **Subtitle:** Thanks for travelling all 14 stops.
- **Opening line:** Email apratim1424@gmail.com
- **Points:**
  - Everything I couldn’t fit into 14 stops (Blinkit, Nykaa, Zepto, Skydo, Rapido and more) is on my full portfolio.
- **Buttons:** Resume → https://apratim-1407.github.io/assets/resume.pdf · Full portfolio → https://apratim-1407.github.io/ · LinkedIn → https://www.linkedin.com/in/apratim-saxena/ · GitHub → https://github.com/apratim-1407
- **Instruction pill:** Tap the fire to send up sparks

### What happens on each stop
1. **Thar at dawn:** opens at night with stars. Any tap fades the night away and the sun rises slowly over three layers of dunes. Three camels walk along the bottom.
2. **Kota, Chambal River Front:** night. The cable-stayed hanging bridge across the river with lights along the deck, ghats and lit pavilions on the near bank, light shimmering on the water. Tap the water: a small clay diya with a living flame appears where you tapped, splashes, and drifts slowly downstream. The card counts the diyas.
3. **Jodhpur:** blue houses tumbling down the hill below Mehrangarh at dusk. Tap anywhere in the city: the nearest window glows gold and a label pops above it. Four labels in turn: Recruiter onboarding, Team invites, Application flows, Role visibility. Labels always stay fully on screen. The card shows "2 of 4 found".
4. **Sheesh Mahal, Amber Fort:** a dark hall of mirrors full of tiny sparkling mirror pieces. A candle's circle of light grows and shrinks and drifts around by itself. Moving the mouse or dragging carries the candle; mirrors sparkle inside the light.
5. **Ranthambore:** dense dry forest, a green safari jeep with two people (one with binoculars). A **small** tiger is hidden behind bushes with only its ears and eyes peeking. Tap it: it steps out and the card says "Spotted in 3.4 seconds". After 8 seconds it walks out by itself.
6. **Junagarh Fort, Bikaner:** no interaction. A red sandstone fort on flat desert ground at dusk: round bastions along the outer wall, an arched gate, and the palace rising behind with cream jharokha balconies and small domed chhatris. A saffron flag waves on top; two camels stand by the wall. A small fact box sits in the bottom-right corner.
7. **Jantar Mantar:** a stone sundial, not too big, sitting low on the page: a tall triangular gnomon with steps over a curved dial marked 6, 9, 12, 3, 6. A slider **directly under the sundial** moves the sun from 6 AM to 6 PM. The sky colour changes with it (night, dawn, noon, dusk), the shadow moves along the hour marks, a clock shows the time. At noon the card says: "Noon. The shadow is shortest and the reading is clearest. GroundWork gives Claude users the same thing: the plan, readable, before anything runs."
8. **Thar night sky:** each tap places a star with a small burst, joined to the previous one by a gold line. A counter climbs to 421,387 reviews, then says "All 421,387 read."
9. **Lake Pichola, Udaipur:** **no interaction, no boat, nothing moving.** A still scene: City Palace along the left shore, the white Lake Palace on the water, its reflection, hills and a small hilltop palace behind, ghat steps in a corner, dusk sky.
10. **Bagru:** block-printed cloth. When you arrive, a wooden block races across the cloth stamping the flower pattern row by row, about a second in total. **No text box, no print button.**
11. **Jaipur old city:** three small pyaaz kachoris on leaf plates, each with a paper tag: Blinkit, Zepto, Instamart. Tap one: it cracks open into two halves with steam rising. **The result shows in a box directly under the three kachoris** (not in the card): Blinkit: late deliveries are its top complaint (17%), but it has the fewest support complaints. · Zepto: getting help when an order goes wrong (44%), but the fewest fee complaints. · Instamart: damaged, expired or poor-quality items are where it breaks.
12. **Jaisalmer:** night dunes, a camel sitting, a singer with a turban and a kamaicha by a living fire. Tap the singer: music notes float up, and the card types out a messy spoken question, then a clean version under "Structured:". Three examples, one per tap.
13. **Kites, Makar Sankranti:** a sky full of kites over pink rooftops. Drag your gold kite; any kite its string touches gets cut and falls spinning. After 8 cuts the card says the line about Review Pulse.
14. **Desert camp:** stars, a crescent moon, dunes and one big living fire. Tap the fire for a burst of sparks. Contact card in the centre.
