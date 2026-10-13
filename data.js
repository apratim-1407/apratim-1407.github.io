/* ------------------------------------------------------------------
   All site content lives here. Edit this file to add / change things.

   PROJECTS: newest / strongest first. The first 5 show on the home page.
     kind   : "Research" | "Case study" | "Teardown" | "PRD" | "Build"
              (filters on the Projects page are created from these automatically)
     files  : one or more [label, path] pairs. Each becomes a tab in the pop-up.
              .pdf opens in a PDF viewer, .mp4 as a video.
     thumb  : optional preview image (shown on hover + in the pop-up)
     link   : optional external link (GitHub, live prototype...)

   EXPERIENCE / EDUCATION / CERTIFICATIONS: at the bottom of this file.
------------------------------------------------------------------- */

window.PROJECTS = [
  {
    id: "claude-groundwork",
    title: "GroundWork: a decision layer for Claude",
    short: "Claude GroundWork",
    kind: "Case study",
    year: "2026",
    oneLiner: "Most Claude users touch 10% of what it can do. GroundWork shows the plan before Claude executes.",
    summary:
      "My NextLeap graduation project: an end-to-end product for Anthropic's Claude. Users know Skills exist but default to prompting it like a search engine, because nothing sits between their intent and Claude's output. GroundWork has Claude declare its approach before executing, suggests a Skill when one fits, and lets users compare both outputs side by side.",
    points: [
      "<b>9 in 10</b> surveyed users would slow down for guidance; 80% felt unsure a better approach existed, and 60% just rewrote the prompt.",
      "Target segment: <b>aware-but-stuck</b> users, 77% of respondents and about 7.7M of Claude's active users.",
      "Picked GroundWork over a higher RICE-scoring idea because it fixes the root cause at input, not after the output.",
      "Defined the north star (Skill adoption rate), L1/L2 metrics, wireframes, data flow, a prototype and risks."
    ],
    metrics: [["9 in 10", "would slow down for guidance"], ["7.7M", "addressable users"], ["77%", "aware-but-stuck"]],
    tags: ["AI", "Product strategy", "NextLeap graduation project"],
    files: [["Deck", "assets/claude-groundwork.pdf"]]
  },
  {
    id: "job-platform-reviews",
    title: "Where the money comes from decides what breaks",
    short: "Job Platform Review Mining",
    kind: "Research",
    year: "Aug 2026",
    oneLiner: "421K Play Store reviews across 7 Indian job apps, and what they say about business models.",
    summary:
      "I scraped and classified every Google Play review I could get for apna, Naukri, Indeed, WorkIndia, foundit and two recruiter apps, and checked whether complaints changed with each release. They didn't, much. What separates these platforms is how they make money.",
    points: [
      "Apps that don't charge jobseekers carry <b>10–13× more employer-fraud complaints</b> than pricing complaints. The one app that charges sits at about 1:1.",
      "That gap has held steady for <b>4 years and 171 releases</b>. Release history barely matters.",
      "Built a Python pipeline (scrape → clean → label → validate) with a golden set, bias checks and conflict re-labelling before trusting the results."
    ],
    metrics: [["421K", "reviews analysed"], ["7", "apps compared"], ["171", "releases tracked"]],
    tags: ["Python", "Marketplaces", "NLP"],
    files: [["Report", "assets/job-platform-review-mining.pdf"]]
  },
  {
    id: "qcomm-carousel",
    title: "Quick commerce: three apps, three weak spots",
    short: "Quick Commerce Carousel",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "2,650 recent reviews show Blinkit, Zepto and Instamart each break in a different place.",
    summary:
      "A 7-slide carousel comparing the 1–2★ reviews of the three big quick-commerce apps over the same eight days. It compares shares, not counts, so bigger apps don't dominate.",
    points: [
      "<b>Blinkit:</b> late deliveries (17%), but it has the fewest support complaints.",
      "<b>Zepto:</b> getting help when an order goes wrong (44%), but it has the fewest fee complaints.",
      "<b>Instamart:</b> damaged, expired or poor-quality items."
    ],
    metrics: [["2,650", "reviews read"], ["3", "apps"], ["8", "day window"]],
    tags: ["Q-commerce", "Review analysis", "Carousel"],
    files: [["Carousel", "assets/qcomm-carousel.pdf"]]
  },
  {
    id: "blinkit",
    title: "Blinkit: search, and an honest ETA",
    short: "Blinkit",
    kind: "Teardown",
    year: "2026",
    oneLiner: "Two decks: how search builds a weekly habit, and why the delivery promise needs to be honest.",
    summary:
      "Two pieces of work on Blinkit. A teardown of its search feature across 3 search states, and a review analysis comparing Blinkit's 1–2★ complaints with Zepto and Instamart over the same eight days.",
    points: [
      "<b>Search = retention.</b> Every touchpoint from empty state to results is personalized to reduce friction. North star: orders per active user per week.",
      "<b>Hidden fees kill trust.</b> Staged price reveals undo what speed builds.",
      "Late delivery is <b>17%</b> of specific complaints, the highest of the three apps, and 1 in 3 of those compare it with the ETA shown in the app.",
      "Blinkit leads on support: 23% of complaints mention it, against 38–44% at the other two. Proposed an honest ETA over a faster one."
    ],
    metrics: [["62.3L+", "app reviews mined"], ["17%", "late-delivery complaints"], ["5", "improvements proposed"]],
    tags: ["Q-commerce", "Search", "Trust"],
    files: [["Search teardown", "assets/blinkit-teardown.pdf"], ["Delivery ETA deck", "assets/blinkit-eta.pdf"]]
  },
  {
    id: "nykaa",
    title: "Nykaa: sharing, and the delivery date promise",
    short: "Nykaa",
    kind: "Case study",
    year: "2026",
    oneLiner: "Two decks: a share feature the UI undersold, and delivery dates that keep slipping.",
    summary:
      "Two pieces of work on Nykaa. A UX case study on the share flow, where one OS default label made a working feature look broken, and a review analysis of 1,693 complaints, compared with Purplle.",
    points: [
      "<b>The feature worked. The UI lied about it.</b> The share sheet said \"Sharing image\" while the app was sending an image, title and buy link.",
      "Proposed a quick-win copy fix and a richer share-card redesign, with wireframes.",
      "<b>29%</b> of Nykaa complaints are about a late order or a delivery date that moved, steady at 25–32% every week for 9 weeks.",
      "33% of late-delivery complaints also mention chasing support, against 19% of others."
    ],
    metrics: [["42M+", "customer base"], ["29%", "late or moved dates"], ["1,693", "complaints read"]],
    tags: ["Beauty e-com", "UX", "Logistics"],
    files: [["Share case study", "assets/nykaa-share.pdf"], ["Delivery deck", "assets/nykaa-delivery.pdf"]]
  },
  {
    id: "qa-signal-loop",
    title: "QA Signal Loop",
    kind: "Build",
    year: "2026",
    oneLiner: "A tool that shows a PM which bugs keep coming back, using reports the team already writes.",
    summary:
      "I ran QA on a 2,000+ test-case suite over several monthly cycles. Bugs got fixed and closed, but the same kind of problem kept returning because nobody read the log as a whole. QA Signal Loop groups duplicate bug reports and sends the PM a short, ranked list every cycle.",
    points: [
      "Built for the <b>PM, not QA</b>. It ranks by user impact, not bug count, and reaches the PM every cycle instead of waiting to be searched.",
      "Found four gaps: no re-testing, no combined view, no memory between tickets, and nothing reaching Product.",
      "Delivered a PRD, a data model and a working prototype."
    ],
    metrics: [["2,000+", "test cases run"], ["4", "process gaps found"], ["1", "ranked list per cycle"]],
    tags: ["PRD", "Prototype", "Internal tools"],
    files: [["Deck", "assets/qa-signal-loop-deck.pdf"], ["PRD", "assets/qa-signal-loop-prd.pdf"]]
  },
  {
    id: "zepto-support",
    title: "Getting a person when an order goes wrong",
    short: "Zepto Support Analysis",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Why support shows up in almost half of Zepto's specific complaints, plus a fix.",
    summary:
      "An analysis of 1,592 recent 1–2★ Zepto reviews, benchmarked against Blinkit and Instamart over the same eight days. A companion note follows a small item problem step by step as it turns into a lost customer.",
    points: [
      "<b>46%</b> of specific Zepto complaints mention support, against 23% at Blinkit.",
      "Customers don't object to showing proof. They object to proof not changing the answer. The disputed amounts are often under ₹100.",
      "Proposed a spec that fast-tracks good, long-time customers without opening the door to refund abuse."
    ],
    metrics: [["1,592", "complaints read"], ["46%", "mention support"], ["3", "apps benchmarked"]],
    tags: ["Q-commerce", "Support", "Review analysis"],
    files: [["Deck", "assets/zepto-deck.pdf"], ["Note", "assets/zepto-note.pdf"]]
  },
  {
    id: "treebo",
    title: "What guests booked, and what they got",
    short: "Treebo Booking Analysis",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Treebo's rating went from 4.7★ to 2.6★. Here's where bookings break and who can fix each part.",
    summary:
      "I read every English Play Store review over two years to track Treebo's rating, then the 1–2★ reviews that describe what actually happened. One in three specific complaints say the stay didn't match the booking.",
    points: [
      "The failures fall into <b>three breaks with three owners</b>: software (guest count), contracts (the hotel hasn't agreed to what the app sold) and incentives (desks earn more from walk-ins).",
      "2 in 3 specific complaints also say support was hard to reach.",
      "Proposed one idea for the handoff between the app and the hotel."
    ],
    metrics: [["4.7→2.6★", "rating drop"], ["1 in 3", "booking mismatches"], ["3", "fixable breaks"]],
    tags: ["Travel", "Marketplaces", "Ops"],
    files: [["Deck", "assets/treebo-deck.pdf"], ["Note", "assets/treebo-note.pdf"]]
  },
  {
    id: "ai-profile-builder",
    title: "AI-Assisted Profile Builder",
    kind: "PRD",
    year: "2026",
    oneLiner: "Helping senior professionals turn 30 years of work into more than one line.",
    summary:
      "A PRD for a returning-professional marketplace. Candidates are experienced but out of practice at writing about themselves, so \"Worked at SBI, 1994–2024\" becomes their whole profile, and it's invisible to recruiters.",
    points: [
      "Drop-off concentrates at the <b>first free-text field</b>. Candidates open the box, don't know what to write, and leave.",
      "Weak profiles fail both sides: supply drops off, and demand skips to the few who happened to write well.",
      "Explains why the cheap fixes (placeholders, tips, nudges) only help at the margin, and specs an AI-assisted builder instead."
    ],
    metrics: [],
    tags: ["AI", "Two-sided marketplace", "HR tech"],
    files: [["PRD", "assets/prd-ai-profile-builder.pdf"]]
  },
  {
    id: "application-preview",
    title: "Application Preview Before Submission",
    kind: "Case study",
    year: "Mar 2026",
    oneLiner: "A shipped feature at WisdomCircle and how it performed after launch.",
    summary:
      "A post-launch feature analysis from my product internship at WisdomCircle. We added a full application preview before final submission so seasoned professionals could review and edit every answer.",
    points: [
      "Goal: reduce post-submission regret and improve application quality.",
      "Beat both success criteria: <b>39.9% edit rate</b> (target ≥30%) and <b>96.4% preview-to-submit</b> (target ≥90%).",
      "Recommendation: scale and iterate."
    ],
    metrics: [["39.9%", "edit rate at preview"], ["96.4%", "preview → submit"], ["2/2", "targets beaten"]],
    tags: ["Shipped", "Analytics", "HR tech"],
    files: [["Analysis", "assets/fa-application-preview.pdf"]]
  },
  {
    id: "pdf-download",
    title: "PDF Profile Download Improvements",
    kind: "Case study",
    year: "May 2026",
    oneLiner: "Sharper, smaller candidate PDFs for hiring managers, and an honest read on adoption.",
    summary:
      "A post-launch analysis of a PDF overhaul at WisdomCircle. We fixed pixelation, made text selectable, cut file size and added two new admin download options.",
    points: [
      "File size cut from <b>~5–7MB to under 500KB</b>.",
      "Profile downloads grew month-on-month, from <b>2 to 59 users</b>.",
      "Called out the weak spots honestly: one new option saw low use and another saw none. Recommendation: monitor."
    ],
    metrics: [["10×+", "smaller files"], ["2→59", "users downloading"], ["3", "download options"]],
    tags: ["Shipped", "Admin tools", "Analytics"],
    files: [["Analysis", "assets/fa-pdf-download.pdf"]]
  },
  {
    id: "blinkit-vs-instamart",
    title: "Blinkit vs Instamart: The Density Gap",
    kind: "Case study",
    year: "2026",
    oneLiner: "Same business, same country. One made ₹102 Cr, the other lost ₹778 Cr. Why?",
    summary:
      "Using Eternal's and Swiggy's Q1 FY27 results, I worked out a number neither company discloses: orders per dark store per day. Most of the profit gap comes down to density, not market share.",
    points: [
      "Blinkit does <b>~1,490 orders per store per day</b>, against Instamart's ~1,070.",
      "A dark store costs about the same to run either way, so every extra order drops to margin.",
      "The usual \"market share\" explanation is right, but it isn't the full answer."
    ],
    metrics: [["~39%", "more orders / store"], ["₹880 Cr", "EBITDA gap"], ["Q1 FY27", "filings used"]],
    tags: ["Unit economics", "Q-commerce", "Strategy"],
    files: [["Case study", "assets/blinkit-vs-instamart.pdf"]]
  },
  {
    id: "meesho",
    title: "When Ads Become the Take Rate",
    short: "Meesho Market Case Study",
    kind: "Case study",
    year: "2026",
    oneLiner: "Meesho charges zero commission. So where does the money come from, and where's the ceiling?",
    summary:
      "A market case study on Meesho's zero-commission model. Revenue comes mostly from sellers bidding for placement, which trades directly against discovery quality: the thing that built the user base.",
    points: [
      "<b>Commission is genuinely zero. The take rate isn't.</b> It's roughly 12% on a ₹500 order before any advertising.",
      "Every sponsored slot is a slot not given to the best-matching product.",
      "Asks how much further Meesho can monetise before that trade turns negative, and what it should sell instead."
    ],
    metrics: [["~12%", "effective take rate"], ["846K", "sellers"], ["₹12.6K Cr", "FY26 revenue"]],
    tags: ["Business model", "E-commerce", "Strategy"],
    files: [["Case study", "assets/meesho.pdf"]]
  },
  {
    id: "onboarding-prd",
    title: "Streamlined Onboarding for Hiring Platforms",
    kind: "PRD",
    year: "2026",
    oneLiner: "Cutting a 10+ screen onboarding without weakening identity trust.",
    summary:
      "A PRD that tackles compounding drop-off from long onboarding with two verification channels, and the \"profile debt\" left by users who rush through out of fatigue.",
    points: [
      "Each step beyond ~5 cuts completion by roughly 10–15%, and a second verification channel forces a context switch.",
      "<b>North star:</b> onboarding completion rate (Get Started → Dashboard, same session).",
      "Supporting metrics: verification success, time to complete, and Day-0 profile completeness."
    ],
    metrics: [],
    tags: ["Onboarding", "Activation", "HR tech"],
    files: [["PRD", "assets/prd-onboarding.pdf"]]
  },
  {
    id: "ultrahuman-redesign",
    title: "Bringing users along to Emerald",
    short: "Ultrahuman v3 Redesign",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Ratings on Ultrahuman's redesigned app fell to 1.8★. What changed, and a way back.",
    summary:
      "Ultrahuman moved its Android app to a new design, Emerald, with v3.0. I read all 1,352 of its Play Store reviews to compare v3 with v2 and find out what people were reacting to.",
    points: [
      "Reviews of v3 average <b>1.8★</b>, against 3.0★ for v2 earlier in the year.",
      "<b>45% of v3 complaints are about the redesign itself</b>, against 4% on v2.",
      "Ratings had already started dipping months earlier, when battery and support complaints rose.",
      "Proposed a way back to the old flows, plus staged rollouts for future redesigns."
    ],
    metrics: [["1.8★", "v3 rating (vs 3.0★)"], ["45%", "complaints about redesign"], ["1,352", "reviews read"]],
    tags: ["Wearables", "Redesign", "Rollouts"],
    files: [["Deck", "assets/ultrahuman-redesign.pdf"]]
  },
  {
    id: "skydo-pricing",
    title: "Winning freelancers at the first invoice",
    short: "Skydo Small-Invoice Pricing",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Skydo's flat fee is great at $5,000 and costly at $200. A pricing fix for small invoices.",
    summary:
      "A pricing analysis comparing Skydo, PayPal and Xflow at every invoice size, including GST and FX markup. Freelancers usually start with small invoices, and that's exactly where Skydo loses them.",
    points: [
      "Below <b>$257</b>, a freelancer keeps more money with PayPal than with Skydo.",
      "On a $100 invoice, Skydo's effective fee is 22.4%, against 8.9% at PayPal.",
      "Proposed a <b>Starter tier: 2%, capped at $19</b>, which meets the current flat fee exactly at $950."
    ],
    metrics: [["$257", "PayPal break-even"], ["22.4%", "fee on $100 invoice"], ["2% ≤ $19", "proposed tier"]],
    tags: ["Fintech", "Pricing", "Cross-border"],
    files: [["Deck", "assets/skydo-pricing.pdf"]]
  },
  {
    id: "kruti-ai",
    title: "What Kruti's users valued, and what they asked for",
    short: "Kruti AI User Research",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "431 reviews of Ola's AI assistant, turned into an eval set for its next AI launch.",
    summary:
      "User research on Kruti by Ola Krutrim. I read every English review to find what people praised and what they kept asking for, then turned real, dated reviews into evals to run before each release.",
    points: [
      "<b>1 in 6</b> happy reviews came from pride in an Indian-built AI. Agent tasks and Indian languages were the features people singled out.",
      "43 of the 346 reviews rated 4–5★ still asked for faster answers. The 4.3★ average hid that.",
      "Built <b>6 evals</b>, each with a pass rule, to run before every release of Ola's next AI product."
    ],
    metrics: [["431", "reviews read"], ["1 in 6", "praise Indian-built AI"], ["6", "evals built"]],
    tags: ["AI", "Evals", "User research"],
    files: [["Deck", "assets/kruti-ai.pdf"]]
  },
  {
    id: "slice-decisions",
    title: "A clear next step for every decision",
    short: "slice Credit Decisions",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Most slice complaints aren't bugs. They're decisions users don't understand.",
    summary:
      "An analysis of 1,653 recent slice complaints. Of the 785 that name a problem, most are about an account hold, a credit decision or KYC, and users often say they don't know why it happened or what to do next.",
    points: [
      "<b>58%</b> of specific complaints are about an account hold, a credit decision or KYC.",
      "<b>4 in 10</b> credit complaints say the user has a good CIBIL score.",
      "Proposed a clear, explained next step for every account decision."
    ],
    metrics: [["58%", "about decisions"], ["785", "specific complaints"], ["4 in 10", "cite a good CIBIL"]],
    tags: ["Fintech", "Credit", "Trust"],
    files: [["Deck", "assets/slice-decisions.pdf"]]
  },
  {
    id: "rapido-fares",
    title: "When the app price is the real price",
    short: "Rapido Fare Trust",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "1 in 4 specific Rapido complaints: the captain asked for more than the app fare.",
    summary:
      "An analysis of 1,509 recent Rapido complaints, compared with Uber. After support, riders' biggest problem is being asked for more money in person than the fare they booked on.",
    points: [
      "<b>202 of 811</b> specific complaints say the captain asked for more than the fare shown.",
      "12–17% of 2★ reviews mention it every month since May, so it's steady, not a spike.",
      "A government order ended pre-ride tips in the app. The reviews point to the other half of the problem: extra fare asked for in person."
    ],
    metrics: [["1 in 4", "asked to pay more"], ["1,509", "complaints read"], ["5 mo", "steady trend"]],
    tags: ["Mobility", "Pricing", "Trust"],
    files: [["Deck", "assets/rapido-fares.pdf"]]
  },
  {
    id: "groww-charts",
    title: "Power features without tripping everyday users",
    short: "Groww Chart Update",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "How one chart update tripped up everyday users, and how Groww compares with Kite, Upstox and INDmoney.",
    summary:
      "An analysis of Groww's Play Store reviews after a chart update, benchmarked against three rivals. Groww compares well overall, but one change stood out.",
    points: [
      "<b>41 of 471</b> low ratings in three weeks said the new chart screen hid phone navigation, or that the Scalper switch sat where the back gesture is.",
      "Mentions faded within a few weeks, so it may already be fixed.",
      "Speed and crash complaints: 18.9% at Groww, against 28.7% at Zerodha.",
      "Proposed a way to ship power features without tripping everyday users."
    ],
    metrics: [["41", "reviews on the update"], ["3", "rivals compared"], ["18.9%", "speed/crash (vs 28.7%)"]],
    tags: ["Fintech", "Trading", "Release quality"],
    files: [["Deck", "assets/groww-charts.pdf"]]
  },
  {
    id: "healthify-paid",
    title: "The next step for paid members",
    short: "Healthify Paid Members",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Healthify's rating recovered. Now paid members' coaching is the rising complaint.",
    summary:
      "An analysis of two years of Healthify's Play Store reviews. The old complaint about basics moving behind a paywall has halved, and paid coaching is taking its place.",
    points: [
      "Rating recovered from <b>2.3★ to 3.7★</b> in a single quarter.",
      "Complaints about paid-only basics fell from 43% to 20%.",
      "<b>33%</b> of this year's complaints are about coaching after payment, up from 20%. Proposed a more dependable paid experience."
    ],
    metrics: [["2.3→3.7★", "rating recovery"], ["33%", "coaching complaints"], ["43→20%", "paywall complaints"]],
    tags: ["Health", "Subscriptions", "Retention"],
    files: [["Deck", "assets/healthify-paid.pdf"]]
  },
  {
    id: "uc-instahelp",
    title: "Keeping the InstaHelp promise",
    short: "Urban Company InstaHelp",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Urban Company's fastest-growing service has a no-show problem the rest of the app doesn't.",
    summary:
      "InstaHelp now delivers over a million bookings a month and appears in 1 in 8 Urban Company complaints. I compared its complaints with the rest of the app's.",
    points: [
      "<b>59%</b> of InstaHelp complaints mention a helper not arriving, arriving late or cancelling, against 26% for the rest of UC.",
      "23% mention a prepaid pack, against 6% elsewhere.",
      "Proposed a booking customers can actually plan around."
    ],
    metrics: [["59% vs 26%", "no-show complaints"], ["1 in 8", "complaints mention it"], ["1,204", "complaints read"]],
    tags: ["Home services", "Reliability", "Ops"],
    files: [["Deck", "assets/uc-instahelp.pdf"]]
  },
  {
    id: "pronto-assignment",
    title: "Assignment customers can see and trust",
    short: "Pronto Partner Assignment",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "1 in 7 Pronto complaints: no partner was assigned, often for a booking made a day ahead.",
    summary:
      "A comparison of Pronto, Snabbit and Urban Company complaints. Pronto's policy already promises a refund or free reschedule when no partner is available, but the reviews say customers don't experience it that way.",
    points: [
      "<b>14%</b> of Pronto complaints say no partner was assigned, against 6% at Snabbit and 4% at Urban Company.",
      "41% of those also mention trying to reach support, against 28% of other complaints.",
      "Proposed partner assignment that customers can see as it happens."
    ],
    metrics: [["14%", "no partner assigned"], ["1,448", "complaints read"], ["3", "apps compared"]],
    tags: ["Home services", "Marketplaces", "Trust"],
    files: [["Deck", "assets/pronto-assignment.pdf"]]
  },
  {
    id: "snabbit-slots",
    title: "Helping pack buyers find a slot",
    short: "Snabbit Slot Availability",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Snabbit's helpers show up. The problem is customers who can't find a slot after buying a pack.",
    summary:
      "The same three-app comparison from Snabbit's side. Snabbit is the most reliable once booked, and the opportunity comes earlier, at slot availability.",
    points: [
      "Only <b>20%</b> of Snabbit complaints are about no-shows, against 46% at Pronto.",
      "<b>16%</b> say no slot was available, against 5% at Urban Company.",
      "1 in 5 complaints about packs say the pack expired unused. Proposed \"Pack protection\"."
    ],
    metrics: [["16%", "no slot available"], ["20% vs 46%", "no-shows vs Pronto"], ["1 in 5", "packs lapse unused"]],
    tags: ["Home services", "Supply", "Packs"],
    files: [["Deck", "assets/snabbit-slots.pdf"]]
  },
  {
    id: "instamart-freshness",
    title: "Freshness you can see",
    short: "Instamart Freshness",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "Instamart's quality complaints rose from 17% to 28% in five weeks. Show expiry before the order.",
    summary:
      "An analysis of 1,688 Instamart complaints, compared with Blinkit and Zepto. Instamart has the highest share of quality complaints of the three, and the fewest about late delivery.",
    points: [
      "Damaged, expired or poor-quality complaints rose from <b>17% to 28%</b> of specific complaints in five weeks.",
      "Complaints mentioning expired items doubled, from 10 to 20 a week.",
      "Proposed \"Check before you pack\", which shows expiry dates on perishables before the order."
    ],
    metrics: [["17→28%", "quality complaints"], ["10→20", "expired items / wk"], ["1,688", "complaints read"]],
    tags: ["Q-commerce", "Quality", "Trust"],
    files: [["Deck", "assets/instamart-freshness.pdf"]]
  },
  {
    id: "gabit-sync",
    title: "Catching the next sync issue early",
    short: "Gabit Smart Ring Sync",
    kind: "Research",
    year: "Sep 2026",
    oneLiner: "A third of Gabit's reviews turned 1–2★ over a sync issue. How to catch the next one sooner.",
    summary:
      "An analysis of all 740 Play Store reviews of the Gabit smart ring. Owners rate the ring well when it's connected, but a two-month stretch saw a spike in reviews about the ring not syncing.",
    points: [
      "<b>35%</b> of reviews during the spike were 1–2★, mostly about sync.",
      "Sync mentions then dropped from 10 to 0, and the rating recovered to 4.1★. From outside, it's hard to tell a fix from fewer reviews.",
      "Proposed an early-warning loop to catch the next issue before it reaches the store rating."
    ],
    metrics: [["740", "reviews read"], ["35%", "1–2★ during spike"], ["3.3→4.1★", "recovery"]],
    tags: ["Wearables", "Hardware", "Monitoring"],
    files: [["Deck", "assets/gabit-sync.pdf"]]
  },
  {
    id: "make",
    title: "Make.com Onboarding",
    kind: "Teardown",
    year: "Mar 2026",
    oneLiner: "Where new users get activated, and where they quietly drop off.",
    summary:
      "A teardown of Make.com's new-user onboarding across 4 steps, from the landing page to the first automation, looking for activation drivers and drop-off risks.",
    points: [
      "The visual builder lowers the floor for beginners and raises the ceiling for power users.",
      "<b>Templates are the real moat.</b> They cut time-to-value dramatically.",
      "Error handling is weak. Failed runs are hard to debug without technical knowledge."
    ],
    metrics: [["4", "step journey mapped"], ["2", "user personas"], ["4", "improvements proposed"]],
    tags: ["Automation", "Activation", "Personas"],
    files: [["Teardown", "assets/make-teardown.pdf"]]
  },
  {
    id: "review-pulse",
    title: "Review Pulse",
    kind: "Build",
    year: "Mar 2026",
    oneLiner: "An AI engine that turns thousands of app reviews into a weekly one-pager.",
    summary:
      "Pulls App Store and Play Store reviews, groups them into product themes with LLM summarization, and emails a scannable weekly pulse note to product, growth and leadership.",
    points: [
      "Groups feedback from an 8–12 week window into 5 product themes.",
      "Top 3 themes, real user quotes and prioritized actions, all in under 250 words.",
      "No user PII. Delivered automatically by email every cycle."
    ],
    metrics: [["5", "themes auto-grouped"], ["<250", "words per pulse"], ["0", "manual steps weekly"]],
    tags: ["AI", "LLM", "Automation"],
    files: [["Demo", "assets/review-pulse.mp4"]],
    thumb: "assets/thumbs/review-pulse.jpg",
    link: "" // add GitHub URL here
  },
  {
    id: "mf-assistant",
    title: "MF FAQ Assistant",
    kind: "Build",
    year: "2025",
    oneLiner: "A plain-language chatbot for first-time mutual fund investors.",
    summary:
      "A retrieval-based assistant (FAISS + FAQ sources) that answers mutual fund questions without the jargon. It's built for first-time investors who find fund documents overwhelming.",
    points: [
      "Retrieves context-aware answers from a curated FAQ dataset.",
      "Handles unknown queries gracefully without breaking the conversation.",
      "Ask anything and get a clear answer instantly."
    ],
    metrics: [],
    tags: ["RAG", "Python", "Fintech"],
    files: [["Demo", "assets/mf-faq-assistant.mp4"]],
    thumb: "assets/thumbs/mf-assistant.jpg",
    link: "" // add GitHub URL here
  },
  {
    id: "10-minute-food-delivery",
    title: "The 10-minute food delivery puzzle",
    short: "10-Minute Food Delivery",
    kind: "Case study",
    year: "2026",
    oneLiner: "Why Zomato failed three times at 10-minute food delivery, and why Swiggy's Bolt worked.",
    summary:
      "A strategy autopsy of 10-minute food delivery in India. I rebuilt every attempt by both platforms from shareholder letters, earnings calls and press records, and found the usual question is framed wrong: these were different business models, and Swiggy failed at one too.",
    points: [
      "Zomato shut down <b>three</b> quick-food products: Instant, Everyday and Quick.",
      "Swiggy scaled Bolt to <b>1 in 10 orders</b>, but shut down Snacc, its owned-kitchen model, in the same year.",
      "Compared operating models on inventory risk, capex and forecast sensitivity. Owned kitchens broke under demand-prediction error; curated restaurant menus absorbed it.",
      "Conclusion: the binding constraint was restaurant supply, not customer demand."
    ],
    metrics: [["3", "Zomato shutdowns"], ["4", "attempts compared"], ["50+", "dated sources"]],
    tags: ["Strategy", "Food delivery", "Unit economics"],
    files: [["Research", "assets/10-minute-food-delivery.pdf"]]
  }

];

/* Experience, from the resumes (Product Manager / Product Analyst / TPM / Consulting versions).
   section: "work" (internships) or "por" (positions of responsibility). Newest first within each. */
window.EXPERIENCE = [
  {
    section: "work",
    org: "WisdomCircle",
    role: "Product Intern",
    dates: "May 2026 – Jul 2026",
    summary: "Owned the weekly feature-analysis cadence for 20+ shipped stories across 6 monthly release cycles at an early-stage two-sided hiring marketplace, working with product, engineering and QA from adoption measurement to pre-release sign-off.",
    shipped: [
      "Wrote and validated SQL queries in Metabase against production tables to measure adoption, completion and drop-off across 4 core product surfaces: recruiter onboarding, team invites, application flows and role visibility.",
      "Segmented Fullstory sessions by device and journey stage, isolating device-specific abandonment points that aggregate completion rates had concealed.",
      "Turned funnel and session findings into weekly Scale / Iterate / Monitor recommendations for the Product Lead.",
      "Validated sprint builds against a 2,000+ case regression suite, logging reproducible defects with expected-versus-actual behaviour, and standardised reporting in Notion."
    ],
    impact: [["20+", "stories analysed"], ["6", "release cycles"], ["4", "product surfaces"], ["2,000+", "regression cases"]]
  },
  {
    section: "work",
    org: "Hashmint",
    role: "Operations Intern",
    dates: "Aug 2025 – Oct 2025",
    summary: "Owned end-to-end B2B outreach for the India 1000 Scholars Olympiad across 3 cities, from cold pipeline build to closed registration revenue.",
    shipped: [
      "Ran the full sales cycle across schools and coaching institutes in Kota, Jaipur and Dehradun, from cold outreach to close.",
      "Pitched directly to directors and owners across 30+ on-ground visits, opening enterprise-level conversations with Allen and Unacademy.",
      "Built the outreach CRM and follow-up cadence from scratch, tracking 80+ accounts across calls, email and WhatsApp.",
      "Worked with sales and operations to turn field objections into localised engagement frameworks, adapting positioning city by city."
    ],
    impact: [["₹2L+", "registration revenue"], ["80+", "institutions"], ["30+", "on-ground visits"], ["3", "cities"]]
  },
  {
    section: "work",
    org: "HNP+ Organisation",
    role: "Data Intern",
    dates: "Jun 2024 – Jul 2024",
    summary: "Handled beneficiary-data operations and government liaison for a public-health outreach programme across District Magistrate offices and field sites.",
    shipped: [
      "Maintained registration, entry and tracking workflows for 1,000+ confidential beneficiary records under prescribed data-privacy protocols.",
      "Coordinated with District Magistrate offices and Government of India departments to source the scheme records needed for field outreach.",
      "Reviewed field-collected data to find enrollment gaps in healthcare-scheme coverage, directing where awareness efforts went."
    ],
    impact: [["1,000+", "beneficiary records"]]
  },
  {
    section: "por",
    org: "Manoshakti, Emotional Well-Being Club",
    role: "Secretary",
    dates: "Aug 2023 – Jun 2025",
    summary: "Led the club for 2 years, owning event execution, budgets and university-level approvals across a student team.",
    shipped: [
      "Secured sign-off for campus-wide events by presenting structured proposals to CXOs and senior university administration.",
      "Managed budgets across logistics, resource allocation and compliance.",
      "Built documentation and process standards, mentoring junior members so quality held across annual handovers."
    ],
    impact: [["10,000+", "student footfall"], ["₹35K+", "budget managed"], ["2 yrs", "as Secretary"]]
  },
  {
    section: "por",
    org: "UPES CSA Student Chapter",
    role: "Core Member",
    dates: "Jun 2024 – Jan 2025",
    summary: "Ran registration and data workflows for the chapter's major events.",
    shipped: [
      "Owned end-to-end participant registration and data workflows across multiple event cycles.",
      "Maintained centralised event databases for performance tracking and future planning.",
      "Analysed participation metrics to find engagement patterns that shaped outreach, scheduling and resourcing."
    ],
    impact: [["100%", "data accuracy"]]
  }
];

window.EDUCATION = [
  {
    org: "UPES, Dehradun",
    role: "B.Tech, Computer Science (Cloud Computing & Virtualisation Technology)",
    dates: "2023 – 2027",
    note: "Available for roles from Jan 2027"
  }
];

window.CERTIFICATIONS = [
  {
    org: "NextLeap",
    role: "Product Manager Fellowship",
    dates: "Jan 2026 – May 2026",
    note: "Graduated Top Fellow"
  },
  {
    org: "Forage",
    role: "Virtual Job Simulations: BCG (Strategy Consulting), Deloitte (Data Analytics), Goldman Sachs (Risk, Internal Audit)",
    dates: "2025"
  }
];

/* SKILLS: "strengths" are the highlighted tiles (each backed by real work); "groups" are the full lists. */
window.SKILLS = {
  strengths: [
    { title: "Product analytics", text: "SQL on production tables in Metabase and Fullstory session segmentation, used to make weekly Scale / Iterate / Monitor calls at WisdomCircle.",
      evidence: [["Application Preview analysis", "application-preview"], ["PDF Download analysis", "pdf-download"], ["QA Signal Loop", "qa-signal-loop"]] },
    { title: "User research at scale", text: "421K Play Store reviews mined, 310 hand-labelled as ground truth, and 18 review-analysis projects across Indian consumer apps.",
      evidence: [["Job Platform Review Mining", "job-platform-reviews"], ["Zepto Support Analysis", "zepto-support"], ["Quick Commerce Carousel", "qcomm-carousel"]] },
    { title: "AI product sense", text: "LLM classification pipelines, eval design and RAG, used to build Review Pulse, the Kruti eval set and Claude GroundWork, my NextLeap graduation project.",
      evidence: [["Claude GroundWork", "claude-groundwork"], ["Review Pulse", "review-pulse"], ["Kruti AI User Research", "kruti-ai"]] }
  ],
  groups: [
    { name: "Product", items: ["Product strategy", "User research", "Problem framing", "PRDs", "Prioritisation (RICE)", "Roadmapping"] },
    { name: "Analytics", items: ["SQL", "North Star & L1/L2 metrics", "Funnel & cohort analysis", "A/B testing", "Dashboarding"] },
    { name: "AI", items: ["LLM applications", "Prompt engineering", "Eval design", "RAG", "Text classification"] },
    { name: "Technical", items: ["Python (pandas)", "System design", "REST APIs", "AWS", "Git"] },
    { name: "Tools", items: ["Metabase", "Fullstory", "Jira", "Notion", "Figma", "Excel"] }
  ]
};
