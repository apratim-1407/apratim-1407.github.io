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
    tracked: [["North star", "Skill adoption rate: chose a Skill ÷ saw a Skill suggestion"], ["L1", "Approach card confirm rate"], ["L1", "Skill suggestion click rate"], ["L1", "Side-by-side pick rate"], ["L2", "Adjust rate, FAQ chip click rate, session return"], ["Test", "Skill adoption with the card shown vs hidden, 2 weeks, 1,000 users"]],
    tags: ["AI", "Product strategy", "NextLeap graduation project"],
    proto: "https://groundwork-claude.lovable.app/",
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
    link: "https://github.com/apratim-1407/Play-Store-Review-Intelligence",
    files: [["Report", "assets/job-platform-review-mining.pdf"]]
  },
  {
    id: "qcomm-carousel",
    title: "Quick commerce: three apps, three weak spots",
    short: "Quick Commerce Review Analysis",
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
    tags: ["Q-commerce", "Review analysis"],
    files: [["Review analysis", "assets/qcomm-carousel.pdf"]]
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
    tracked: [["North star", "Orders per active user per week"], ["L1", "Repeat order rate at 30 days"], ["L1", "Search-to-cart conversion"], ["L1", "On-time delivery rate"], ["L2", "Average order value, out-of-stock rate in search, session-to-order conversion"]],
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
    tracked: [["North star", "Share completion rate"], ["Metric", "Organic referral traffic"], ["Metric", "Share sheet drop-off rate (opened, did not share)"]],
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
    tracked: [["Metric", "Bugs per test case, by module"], ["Metric", "Repeat rate: share of bugs that repeat something seen before"], ["Metric", "Bugs that reached production"], ["Metric", "How long a pattern went unnoticed"], ["Success", "Close-out fields filled on 80%+ of bugs by cycle 2"]],
    tags: ["PRD", "Prototype", "Internal tools"],
    link: "https://github.com/apratim-1407/qa-signal-loop",
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
    id: "stuck-money",
    title: "Stuck Money: pending, not lost",
    short: "Stuck Money (UPI)",
    kind: "Case study",
    year: "2026",
    oneLiner: "Roughly 80 lakh UPI payments a month are not confirmed in real time. The money comes back; the sale often doesn't.",
    summary:
      "A proposal for B2B payment companies such as Razorpay and Pine Labs on what happens in the first hour after a UPI payment gets stuck. I sized the problem from NPCI's public member-performance data, mapped who is waiting at an app, an online checkout and a shop counter, and proposed five changes that stay inside NPCI's limits.",
    points: [
      "About <b>79.4 lakh</b> payments a month (range 73–90 lakh, Sep 2025–Aug 2026) are not confirmed in real time by the receiving bank.",
      "The rate fell from 8.8 to 3.4 per 10,000, but UPI volume roughly doubled, so the monthly count fell far less.",
      "<b>Hold, link, settle</b>: time the 3 allowed status checks for who is waiting, show \"pending\" with a time instead of \"failed\", and link a second payment to the first.",
      "North Star: <b>Saved Sales Rate</b>, stuck payments that still end in a completed order, paid exactly once. Four drivers, five guardrails, a 4-week 50/50 test."
    ],
    metrics: [["79.4 lakh", "stuck payments a month"], ["3", "status checks allowed"], ["5", "changes proposed"]],
    tracked: [["North star", "Saved Sales Rate: stuck payments that still end in a completed order, paid once"], ["L1", "Known-in-Time Rate"], ["L1", "Unrefunded Duplicates per 1,000 stuck payments"], ["L1", "Late-Money Cancels"], ["L1", "“Where's my money” tickets per 1,000 stuck payments"], ["Guardrail", "Give-up rate, hold time share, goods released unpaid, late refunds after T+5 (zero)"], ["Test", "4 weeks, 50/50 by merchant"]],
    tags: ["Payments", "UPI", "Data analysis"],
    proto: "https://apratim-1407.github.io/stuck-money/",
    files: [["Proposal", "assets/stuck-money.pdf"]]
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
    tracked: [["North star", "Recruiter-initiated contacts per published profile, 30-day window"], ["Supporting", "Profile completion rate by age band; share of profiles above the completeness threshold"], ["Supporting", "Generation acceptance rate, median edit distance, skip-to-manual rate"], ["Guardrail", "Factual error rate in audit sample; recruiter-reported inaccuracy"], ["Guardrail", "Screening-call-to-interview conversion; lexical diversity; p95 generation latency"]],
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
    tracked: [["Success", "Edit rate at preview: criterion ≥30%, result 39.9%"], ["Success", "Preview-to-submit conversion: criterion ≥90%, result 96.4%"], ["Metric", "Users clicking Next on the preview step (444 over Feb–Jun)"], ["Metric", "Users submitting the application (1,088); applications created vs submitted"], ["Metric", "Which sections users edit: questions, cover letter, references"]],
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
    tracked: [["Metric", "Unique users, sessions and events for Download Profile (133 users, 549 sessions)"], ["Metric", "Month-on-month growth in Download Profile use"], ["Metric", "Seasoned professionals vs internal admins (75.9% vs 24.1%)"], ["Metric", "Desktop vs mobile split of sessions (41.6% mobile)"], ["Metric", "Download without Name and Answers-only use (15 and 6 admin users); PDF quality itself is not measured"]],
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
    tracked: [["North star", "Onboarding completion rate: Get Started to Dashboard, same session"], ["Supporting", "Verification success rate (single channel)"], ["Supporting", "Median time to complete onboarding"], ["Supporting", "Profile completeness at Day 0 and Day 7"], ["Supporting", "Step-level drop-off rate"]],
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
    tracked: [["North star", "Users who sign up and run their first automated scenario"], ["L1", "Signed-up users who activate a scenario or use a template in their first session"], ["L2", "Visitors who leave the landing page without clicking “Get started free”"]],
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
    link: "https://github.com/apratim-1407/mf-faq-assistant"
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    short: "Finance Tracker",
    kind: "Build",
    year: "2025",
    oneLiner: "A terminal budgeting app for beginners, and the product thinking behind it.",
    summary:
      "A Python terminal app where you set a salary and a monthly budget, log each expense with a category and a note, and see what you have spent, what is left and where the money went. The report is about the decisions: who it is for, what I left out, and how I would know it works.",
    points: [
      "Designed for one person first: a student or first-job earner who reaches the end of the month wondering where the money went. This is an assumption, not a research finding.",
      "Every feature was cut against one question: does it help answer \"how much can I still spend?\" Bank import, charts, logins and a mobile app were left out of version 1.",
      "The biggest gap is persistence: live data cannot be reloaded after closing, which breaks the habit the product depends on.",
      "No user research yet, so the report separates assumptions from facts, and its metrics are ones I would track, not results."
    ],
    metrics: [["5", "features built"], ["6", "next steps ranked"], ["<10 s", "target to log an expense"]],
    tracked: [["Metric", "Weekly active loggers: people who recorded at least one expense this week (the first number I would watch)"], ["Metric", "Share of new users who log at least one expense in their first session"], ["Metric", "Time from opening the app to saving an expense; under 10 seconds after the first time"], ["Metric", "Users who log expenses in at least 3 separate weeks"], ["Metric", "Users who stay inside their budget compared with their own earlier months"], ["Guardrail", "Deletes and corrections per 100 entries; errors per session"]],
    tags: ["Python", "Product thinking", "Budgeting"],
    link: "https://github.com/apratim-1407/finance_tracker",
    files: [["Report", "assets/finance-tracker.pdf"]]
  },
  {
    id: "hospital-event-analytics",
    title: "Large-Scale Hospital Event Analytics",
    short: "Hospital Event Analytics",
    kind: "Build",
    year: "2026",
    oneLiner: "In progress: a cloud batch pipeline that turns up to a million synthetic hospital events into analytics.",
    summary:
      "A cloud-deployed batch analytics engine that turns a large stream of synthetic hospital events into three products: admission patterns, resource utilisation and unusual workload periods. It is a data-intensive pipeline, not a CRUD app. Built for UPES's Cloud Application and Development course; the design document is done and the build is under way.",
    points: [
      "Three separate planes: events are written once and never changed, jobs run map-then-reduce across a pool of workers, and results are served from pre-computed tables.",
      "A job request returns <b>202 Accepted in under 50 ms</b>. The work happens on workers the API never addresses directly.",
      "Designed to survive a worker dying mid-job: the broker redelivers the unfinished tasks and the job still completes with the same result.",
      "Not a hospital management system: patients exist only as opaque identifiers on synthetic events."
    ],
    metrics: [],
    status: "In progress",
    tags: ["Cloud", "Data pipeline", "Python"],
    link: "https://github.com/apratim-1407/hospital-event-analytics",
    files: [["Design document", "assets/hospital-event-analytics.pdf"]]
  },
  {
    id: "academic-voice-mode",
    title: "Academic Voice Mode for ChatGPT",
    short: "ChatGPT Academic Voice Mode",
    kind: "Case study",
    year: "2026",
    oneLiner: "Students try ChatGPT's voice, then go back to typing. A voice drafting layer to fix that.",
    summary:
      "A product proposal for ChatGPT on mobile in India. Students are the largest group of ChatGPT mobile users, and most have tried voice and gone back to typing. The idea: speak first, then review, edit and structure the question before ChatGPT answers.",
    points: [
      "62% of students have tried voice, only ~8% use it regularly, and 54% say typing feels easier. The survey is small (about two dozen responses), so read it as direction, not proof.",
      "Students stop because voice makes it hard to structure thoughts (25%), picks up background noise (16.7%), feels rushed (12.5%) and mishears words (8.3%).",
      "Proposed <b>Academic Voice Mode</b>: speak with pause and resume, read the live transcript, edit it, tap Structure My Doubt, pick a format, then get a text-first answer.",
      "Fixes workflow control, not speech accuracy. Students only, no gamification, and a text-first answer that is easy to use in shared spaces."
    ],
    metrics: [["~48%", "of ChatGPT mobile users are students"], ["62%", "have tried voice"], ["~8%", "use it regularly"]],
    tracked: [["Metric", "Share of student daily users who start at least one voice query in a week"], ["Metric", "Share of voice sessions that end in a successful submission"], ["Metric", "Share of first-time Academic Voice users who use voice again within 7 days"]],
    tags: ["Voice", "Student segment", "Product proposal"],
    proto: "https://moving-mono-05408821.figma.site/",
    files: [["Deck", "assets/academic-voice-mode-deck.pdf"]]
  },
  {
    id: "academic-voice-mode-prd",
    title: "Academic Voice Mode",
    short: "Academic Voice Mode",
    kind: "PRD",
    year: "2026",
    oneLiner: "A structured voice drafting layer that helps Indian students speak complex academic doubts to ChatGPT.",
    summary:
      "A PRD for ChatGPT on mobile in India, built on the product proposal. Voice in ChatGPT is made for conversation, but academic use is about drafting and structuring, so students who are comfortable with voice elsewhere keep going back to typing.",
    points: [
      "Indian college students (18-24) are about 48% of ChatGPT mobile users. 62% have tried voice and only ~8% use it regularly.",
      "<b>Speak first, then decide:</b> pause and resume, a visible recording timer, an editable transcript, Structure My Doubt to pick the answer format, and an auto-saved draft.",
      "Three goals: more students use voice each week, more voice queries get finished, and students come back to voice within 7 days. Targets are set after a baseline measurement.",
      "Not in this version: retraining the model for accents, offline voice processing, gamification, a voice-only redesign, or an enterprise solution."
    ],
    metrics: [],
    tracked: [["Metric", "Share of student daily users who start at least one voice query in a week"], ["Metric", "Share of voice sessions that end in a successful submission"], ["Metric", "Share of first-time Academic Voice users who use voice again within 7 days"]],
    tags: ["Voice", "AI", "Edtech"],
    files: [["PRD", "assets/academic-voice-mode-prd.pdf"]]
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
  }
];

/* SKILLS: "strengths" are the highlighted tiles (each backed by real work); "groups" are the full lists.
*/
window.SKILLS = {
  strengths: [
    { title: "AI product sense", text: "LLM classification pipelines, eval design and RAG, used to build Review Pulse, the Kruti eval set and Claude GroundWork, my NextLeap graduation project, end to end.",
      evidence: [["Claude GroundWork", "claude-groundwork"], ["Review Pulse", "review-pulse"], ["Kruti AI User Research", "kruti-ai"]] },
    { title: "Product analytics", text: "SQL on production tables in Metabase and Fullstory session segmentation, used for weekly Scale / Iterate / Monitor calls on 4 core product surfaces at WisdomCircle.",
      evidence: [["Application Preview analysis", "application-preview"], ["PDF Download analysis", "pdf-download"], ["QA Signal Loop", "qa-signal-loop"]] },
    { title: "User research at scale", text: "421K Play Store reviews mined, 310 hand-labelled as ground truth, and 18 review-analysis projects across Indian consumer apps, from quick commerce to job platforms.",
      evidence: [["Job Platform Review Mining", "job-platform-reviews"], ["Zepto Support Analysis", "zepto-support"], ["Quick Commerce Review Analysis", "qcomm-carousel"]] }
  ],
  groups: [
    { name: "Product", items: ["Product strategy", "User research", "Problem framing", "PRDs", "Prioritisation (RICE)", "Roadmapping"] },
    { name: "Analytics", items: ["SQL", "North Star & L1/L2 metrics", "Funnel & cohort analysis", "A/B testing", "Dashboarding"] },
    { name: "AI", items: ["LLM applications", "Prompt engineering", "Eval design", "RAG", "Text classification"] },
    { name: "Technical", items: ["Python (pandas)", "System design", "REST APIs", "AWS", "Git"] },
    { name: "Tools", items: ["Metabase", "Fullstory", "Jira", "Notion", "Figma", "Excel"] }
  ]
};

/* Anything marked TODO below is a number I have not verified. It is shown as TODO on purpose. */

/* The technical side of a project, shown in its window.
   diagram: columns left to right, each with up to two boxes.
   stats:   2-3 numbers. A stat whose number is "TODO" is not verified yet.
   table:   one key table (schema, funnel, weights...). */
window.TECH = {
  "job-platform-reviews": {
    stack: ["Python", "pandas", "scikit-learn", "google-play-scraper", "Parquet and CSV"],
    diagram: [["Collect", ["google-play-scraper", "raw JSON, 7 apps"]], ["Clean", ["6+ words, de-dupe", "1–2★ only"]],
              ["Label", ["310 hand labels", "~40 regex rules"]], ["Test", ["held-out set", "1,368 version tests"]]],
    flow: [
      "Scrape every English, India Play Store review available for 7 job apps. Raw JSON is saved first, so the analysis re-runs without re-scraping.",
      "Drop short and repeated reviews and keep 1–2★ only: 421,387 reviews become 29,988.",
      "Read and label 310 reviews by hand to build the taxonomy: eleven categories plus other, with other at 12.6% of the labelled set.",
      "Classify with about forty weighted regex rules, split 201 for tuning and 109 held out. I re-adjudicated 76 conflicting labels after the first score and say so in the report.",
      "Check for bias and length effects, then test 8 categories across release versions (1,368 comparisons) before trusting any finding."
    ],
    table: { title: "Cleaning funnel", head: ["Stage", "Reviews"],
      rows: [["Raw scrape", "421,387"], ["6+ words", "139,622"], ["De-duplicated", "137,419"], ["1–2★ only", "29,988"]] },
    stats: [["421,387", "reviews scraped"], ["29,988", "1–2★ analysed"], ["53.2%", "held-out accuracy, 109 labels"]]
  },

  "review-pulse": {
    stack: ["React", "TypeScript", "Vite", "Supabase Edge Functions", "Gemini via Lovable AI gateway", "Resend API"],
    diagram: [["Input", ["CSV upload", "last 12 weeks"]], ["Analyse", ["analyze-reviews", "LLM call 1: pulse"]],
              ["Draft", ["LLM call 2: email", "under 120 words"]], ["Send", ["send-pulse-email", "Resend API"]]],
    flow: [
      "A CSV with rating, title, text and date columns is parsed in the browser and filtered to the last 12 weeks by default.",
      "The analyze-reviews edge function sends the reviews to the model once for the weekly pulse: top themes, user quotes and action ideas.",
      "A second call turns that pulse into a team email. The prompt caps it at 120 words and bans names, handles and other personal details.",
      "The send-pulse-email edge function posts the draft to the Resend email API."
    ],
    table: { title: "Input CSV", head: ["Column", "Used for"],
      rows: [["rating", "keep / drop by score"], ["title", "context for the model"], ["text", "themes and quotes"], ["date", "12-week window"]] },
    stats: [["2", "edge functions"], ["2", "LLM calls per run"], ["TODO", "emails sent through the API"]]
  },

  "qa-signal-loop": {
    stack: ["TanStack Start", "TypeScript", "React", "Tailwind CSS", "LLM for tagging and merging (design)"],
    note: "Prototype only, not deployed. The LLM steps are specified in the PRD.",
    diagram: [["Capture", ["tester: 3 questions", "engineer: 2 dropdowns"]], ["Group", ["rules first", "LLM merge + reason"]],
              ["Rank", ["repeats × path", "× blocking"]], ["Deliver", ["one ranked list", "per cycle"]]],
    flow: [
      "The tester answers what they can see: what they were trying to do, what happened, and whether they could continue.",
      "An LLM guesses the component and bug type from the description. The engineer confirms them and adds the cause and whether the fix touched shared code.",
      "Step 1, rules: same component, cause and type within three cycles. Browser is ignored, so one layout bug on two browsers is one problem.",
      "Step 2, LLM: reads what the rules missed and suggests merges. Every suggestion carries a reason and is labelled for the PM.",
      "A problem is listed at 3+ bugs across 2+ cycles, or 2 if a fix touched shared code, or 1 if it was reopened."
    ],
    table: { title: "Ranking score = repeats × path × blocking", head: ["Factor", "Weights"],
      rows: [["Path importance (main / supporting / minor)", "3 / 2 / 1"], ["How blocking", "2 / 1.5 / 1"],
             ["Signup, 3 blocking bugs", "3 × 3 × 2 = 18"], ["Settings, 7 cosmetic bugs", "7 × 1 × 1 = 7"]] },
    stats: [["2,000+", "test cases in the suite it came from"], ["3", "rules decide what is listed"], ["4", "process gaps found"]]
  },

  "stuck-money": {
    stack: ["NPCI public data", "GitHub Pages", "TODO: analysis tooling"],
    diagram: [["Source", ["NPCI Top-50 member", "performance, monthly"]], ["Estimate", ["bank volume × %", "range from rounding"]],
              ["Analyse", ["12-month averages", "rate per 10,000"]], ["Publish", ["GitHub Pages"]]],
    flow: [
      "NPCI publishes, for the top 50 receiving banks, the share of payments it deems approved without an online credit confirmation.",
      "Monthly count is estimated as each bank's UPI volume × NPCI's published %. The range comes from NPCI rounding each bank's % to 2 decimals.",
      "Compare 12-month averages: the rate fell about 47% (6.9 to 3.7 per 10,000) but the monthly count only about 18% (97 to 79 lakh).",
      "Design within NPCI's limits: at most 3 status checks per payment, the first not before 90 seconds."
    ],
    table: { title: "Status-check schedule inside the 2-hour window", head: ["Setting", "Check 1", "Check 2", "Check 3"],
      rows: [["Shop counter", "90 s", "5 min", "118 min"], ["Online checkout", "90 s", "44 min", "118 min"]] },
    stats: [["79.4 lakh", "unconfirmed payments a month"], ["8.8 → 3.4", "per 10,000, Jan 2024 to Aug 2026"], ["2.03×", "UPI volume, Aug 2026 vs Jan 2024"]]
  },
  "hospital-event-analytics": {
    stack: ["FastAPI", "Celery", "Redis", "PostgreSQL 16", "Docker", "Render", "Locust"],
    note: "Work in progress. This is the design from the project document; the build, benchmarks and load tests are still under way.",
    diagram: [["Ingest", ["REST /events", "append-only raw table"]], ["Process", ["Redis broker", "Celery map, chord reduce"]],
              ["Store", ["PostgreSQL results", "admission, resource, anomaly"]], ["Query", ["REST analytics", "Redis cache, 60 s"]]],
    flow: [
      "Generation. A generator produces a synthetic hospital event: patient, department, severity, bed.",
      "Ingestion. Events are POSTed to /api/v1/events with an API key, validated, stamped with a correlation ID and written to an append-only raw table. No analysis happens on this path.",
      "Job trigger. An analyst calls POST /api/v1/jobs. The API queues the job and returns 202 Accepted in under 50 ms.",
      "Partition and map. The window is split into one partition per day and department (248 for March across 8 departments); workers pull partitions in parallel.",
      "Shuffle and reduce. Intermediate values go to Redis grouped by key. Once every map task has finished, a Celery chord fires the reducer: daily counts, average length of stay, peak occupancy and rolling z-scores.",
      "Persist and query. Results are written to three result tables, and the analytics endpoints read those pre-computed rows, cached for 60 seconds."
    ],
    table: { title: "Dataset sizes to benchmark", head: ["Dataset", "Events", "Partitions"],
      rows: [["Small", "10,000", "31"], ["Medium", "100,000", "186"], ["Large", "1,000,000", "1,095"]] }
  }
};
