(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const P = window.PROJECTS || [];
  const E = window.EXPERIENCE || [];
  const pad = n => String(n).padStart(2, "0");

  // a visitor with an out-of-date cached copy refreshes itself once (the deploy writes version.txt and window.__v)
  if (window.__v) fetch("version.txt?" + Date.now(), { cache: "no-store" }).then(r => r.text()).then(t => {
    t = t.trim();
    if (t && t !== window.__v) {
      let done = false; try { done = sessionStorage.getItem("reloadedFor") === t; sessionStorage.setItem("reloadedFor", t); } catch (e) { done = true; }
      if (!done) location.reload();
    }
  }).catch(() => {});
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isVideo = f => /\.(mp4|webm|mov)$/i.test(f);
  const thumbOf = p => p.thumb || (p.files[0]?.[1].endsWith(".pdf") ? `assets/thumbs/${p.id}.jpg` : "");

  /* ---------- technical write-ups ----------
     A few projects carry a technical side (data.js, window.TECH). It shows inside the project window. */
  const TECH = window.TECH || {};
  P.forEach(p => (p.tech = TECH[p.id]));
  const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const isTodo = t => /^TODO/.test(t);

  // flow diagram: one row per stage, boxes side by side, arrows between rows (inline SVG)
  const arch = (cols, big) => {
    const rowH = 30, gap = 12, W = 320, H = cols.length * rowH + (cols.length - 1) * gap;
    const labelW = Math.max(66, Math.ceil(Math.max(...cols.map(c => c[0].length)) * 6.3) + 14);   // wide enough for the longest stage name
    const rows = cols.map(([name, boxes], i) => {
      const y = i * (rowH + gap), bw = (W - labelW - (boxes.length - 1) * 6) / boxes.length;
      return `<text class="st" x="0" y="${y + 18}">${esc(name)}</text>` + boxes.map((b, j) =>
        `<rect x="${labelW + j * (bw + 6)}" y="${y}" width="${bw}" height="${rowH}" rx="6"/><text x="${labelW + j * (bw + 6) + bw / 2}" y="${y + 18.5}" text-anchor="middle">${esc(b)}</text>`).join("") +
        (i < cols.length - 1 ? `<path d="M${labelW + (W - labelW) / 2} ${y + rowH + 2}v${gap - 5}m-3 -3l3 3l3 -3"/>` : "");
    }).join("");
    const label = cols.map(c => c[0]).join(" to ");
    return `<svg class="arch${big ? " big" : ""}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Flow: ${esc(label)}"><title>Flow: ${esc(label)}</title>${rows}</svg>`;
  };
  const chips = t => `<span class="chips">${t.stack.map(x => `<i${isTodo(x) ? ' class="todo"' : ""}>${esc(x)}</i>`).join("")}</span>`;
  const stats = (t, cls = "stats") => `<span class="${cls}">${t.stats.map(([n, l]) =>
    `<span class="stat${isTodo(n) ? " todo" : ""}"><b>${esc(n)}</b><small>${esc(l)}</small></span>`).join("")}</span>`;

  // order + blurb for each group on the Projects page
  const GROUPS = {
    "Case study": { label: "Case studies", desc: "Deeper dives into a single feature, metric or business model." },
    "Teardown":   { label: "Teardowns", desc: "Pulling a product apart to see why it works." },
    "Build":      { label: "Builds", desc: "Things I've made end to end." },
    "Research":   { label: "Research", desc: "Thousands of real app reviews, read closely to find what's actually breaking. Each ends with one fix." },
    "PRD":        { label: "Documents", desc: "Specs for what should be built next." }
  };
  const kindName = k => (k === "PRD" ? "Document" : k);   // PRDs are shown as "Document"
  const rank = k => { const i = Object.keys(GROUPS).indexOf(k); return i < 0 ? 99 : i; };
  // home: the window browses only the five featured projects; the projects page browses all of them
  const FEATURED = ["stuck-money", "claude-groundwork", "qcomm-carousel", "review-pulse", "job-platform-reviews"];   // the highlight first
  const PIN = ["stuck-money", "claude-groundwork", "academic-voice-mode", "academic-voice-mode-prd",   // lead their sections: the case studies, then the documents
    "job-platform-reviews", "qcomm-carousel", "treebo", "kruti-ai", "skydo-pricing", "zepto-support",   // Research: the first six stay visible
    "ultrahuman-redesign", "slice-decisions", "rapido-fares", "healthify-paid", "uc-instahelp", "pronto-assignment", "snabbit-slots", "instamart-freshness", "gabit-sync"];   // the rest sit behind "Show more"
  const SHOWN = { Research: 6 };   // how many cards of a section show before "Show more"
  const pin = p => { const i = PIN.indexOf(p.id); return i < 0 ? 99 : i; };
  const SEQ = $("#featured") ? FEATURED.map(id => P.find(p => p.id === id)).filter(Boolean) : [...P].sort((a, b) => rank(a.kind) - rank(b.kind) || pin(a) - pin(b)); // display order, stable

  /* ---------- nav ---------- */
  const page = document.body.dataset.page;
  $$(".nav a[data-page]").forEach(a => { if (a.dataset.page === page) a.setAttribute("aria-current", "page"); });
  const nav = $(".nav");
  if (nav) { const sync = () => {
      const on = scrollY > (nav.classList.contains("scrolled") ? 12 : 40);
      nav.classList.toggle("scrolled", on); document.documentElement.classList.toggle("docked", on);
    }; sync(); addEventListener("scroll", sync, { passive: true }); }

  $$("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));

  // resume menu: close on outside click or Escape
  const rm = $(".resume-menu");
  if (rm) {
    document.addEventListener("click", e => { if (rm.open && !rm.contains(e.target)) rm.open = false; });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && rm.open) { rm.open = false; rm.querySelector("summary").focus(); } });
  }

  // back to top: the browser's own smooth scroll, and focus stays where it is (no hidden "skip to content" link popping up)
  $$(".to-top").forEach(b => b.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }));

  // footer message form: posts to FormSubmit, which forwards it to my inbox (no account, no backend of my own)
  const form = $(".msg-form");
  if (form) {
    const status = $(".msg-status", form), em = $("#msg-email"), tx = $("#msg-text");
    const say = (t, cls) => { status.textContent = t; status.className = "msg-status" + (cls ? " " + cls : ""); };
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    form.addEventListener("input", () => { if (form.classList.contains("sent")) { form.classList.remove("sent"); say(""); } });   // typing again starts a new message
    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (form.classList.contains("sending") || form.classList.contains("sent")) return;
      em.removeAttribute("aria-invalid"); tx.removeAttribute("aria-invalid");
      if (!ok.test(em.value.trim())) { em.setAttribute("aria-invalid", "true"); say("Please check your email address.", "err"); em.focus(); return; }
      if (tx.value.trim().length < 3) { tx.setAttribute("aria-invalid", "true"); say("Please write a short message.", "err"); tx.focus(); return; }
      if ($("[name=_honey]", form).value) return;                        // a bot filled the hidden field
      form.classList.add("sending"); say("Sending…");
      try {
        const r = await fetch("https://formsubmit.co/ajax/apratim1424@gmail.com", {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: em.value.trim(), message: tx.value.trim(), _subject: `New portfolio message from ${em.value.trim()} · ${new Date().toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}`, _template: "table", _captcha: "false" })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok || d.success === false || d.success === "false") throw new Error("send failed");
        form.classList.add("sent"); say("Thank you, I will reach out to you shortly.", "ok");
        em.value = ""; tx.value = "";
      } catch (err) {
        say("That didn't go through. Please email apratim1424@gmail.com directly.", "err");
      } finally { form.classList.remove("sending"); }
    });
  }

  // copy email
  $$("[data-copy]").forEach(b => b.addEventListener("click", () => {
    navigator.clipboard?.writeText(b.dataset.copy).then(() => {
      const t = b.textContent; b.textContent = "Copied";
      setTimeout(() => (b.textContent = t), 1600);
    });
  }));

  // hero figure: tap to cycle the speech bubble
  const sketch = $(".figure");
  if (sketch) {
    const lines = ["Hi it's me", "challenge geek", "discussions over small talk", "Review Nerd", "Never settle", "back to work"];
    const st = $(".cap", sketch), tap = $(".tap", sketch);
    let k = 0;
    const next = () => {
      k = (k + 1) % lines.length;
      st.textContent = lines[k];
      st.classList.remove("pop"); void st.offsetWidth; st.classList.add("pop");
      if (tap) tap.style.opacity = 0;
    };
    sketch.addEventListener("click", next);
    sketch.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); next(); } });
  }

  /* ---------- skills ---------- */
  const S = window.SKILLS;
  const sk = $("#strengths"), sg = $("#skill-groups");
  if (S && sk) sk.innerHTML = S.strengths.map((x, i) => `
      <li class="strength rv">
        <div class="s-left">
          <span class="n" aria-hidden="true"></span>
          <div class="s-text"><h3>${x.title}</h3><p>${x.text}</p></div>
        </div>
        ${x.evidence?.length ? `<div class="proof"><span class="lbl">Proof of work</span><ul>${x.evidence.map(([t, id]) =>
          `<li><a href="projects.html#${id}">${t}</a></li>`).join("")}</ul></div>` : ""}
      </li>`).join("");
  if (S && sg) sg.innerHTML = S.groups.map(g => `
      <div class="kit-row rv"><h3>${g.name}</h3><ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("");

  /* ---------- project cards ---------- */
  const metricLine = p => p.metrics?.length ? `<span class="mline"><b>${p.metrics[0][0]}</b> ${p.metrics[0][1]}</span>` : "";
  const frontOf = p => `
      <span class="eyebrow">${kindName(p.kind)}</span>
      <h3>${p.short || p.title}</h3>
      <p>${p.oneLiner}</p>
      ${metricLine(p)}
      ${thumbOf(p) ? `<span class="shot"><span><img src="${thumbOf(p)}" alt="" width="1000" height="563" loading="lazy" decoding="async"></span></span>` : ""}
      ${p.status || p.proto ? `<em class="pill">${p.status || "Prototype"}</em>` : ""}
      <span class="go" aria-hidden="true">Open ↗</span>`;
  const card = p => `
    <li class="rv"><a class="slide slide-card card-link" href="projects.html#${p.id}" data-id="${p.id}" data-kind="${p.kind}">${frontOf(p)}</a></li>`;

  // home: five chosen projects, as a bento
  const featured = $("#featured");
  if (featured) {
    featured.innerHTML = SEQ.map(card).join("");
  }

  // home: a card opens the project window right here, and the arrows browse just these five
  if (featured) featured.addEventListener("click", e => {
    const a = e.target.closest(".card-link");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    openWin(a.dataset.id, e);
  });

  // projects page: one section per kind, plus filters that live in the URL (?type=Research)
  const groupsEl = $("#groups");
  if (groupsEl) {
    const kinds = [...new Set(SEQ.map(p => p.kind))];
    groupsEl.innerHTML = kinds.map(k => {
      const items = SEQ.filter(p => p.kind === k);
      return `<section class="group" data-kind="${k}" aria-labelledby="g-${rank(k)}">
        <div class="slide divider rv${SHOWN[k] && items.length > SHOWN[k] ? " has-more" : ""}">
          <span class="n" aria-hidden="true">${pad(rank(k) + 1)}</span>
          <div>
            <h2 id="g-${rank(k)}">${GROUPS[k]?.label || k}</h2>
            ${GROUPS[k]?.desc ? `<p>${GROUPS[k].desc}</p>` : ""}
          </div>
          ${SHOWN[k] && items.length > SHOWN[k] ? `<button class="link more-link" type="button" aria-expanded="false">Show more →</button>` : ""}
        </div>
        <ul class="grid">${items.map((p, i) => SHOWN[k] && i >= SHOWN[k] ? card(p).replace('<li class="rv">', '<li class="rv more" hidden>') : card(p)).join("")}</ul>
      </section>`;
    }).join("");

    const filters = $(".filters");
    filters.innerHTML = `<div class="filters-title" aria-hidden="true">Projects</div><div class="filters-in"><button class="chip show-chip" type="button" aria-haspopup="true" aria-expanded="false"><span class="sc-l">Show</span><i aria-hidden="true">▾</i></button><button class="chip cat-chip" type="button" aria-haspopup="true" aria-expanded="false"><span class="cc-l">All</span><i aria-hidden="true">▾</i></button>${[["all", "All", P.length - kinds.reduce((s, k) => s + (SHOWN[k] ? Math.max(0, P.filter(p => p.kind === k).length - SHOWN[k]) : 0), 0)], ...kinds.map(k => [k, GROUPS[k]?.label || k, P.filter(p => p.kind === k).length])]
      .map(([f, l, n]) => `<button class="chip" type="button" data-f="${f}" aria-pressed="false">${f === "all" ? "" : `<b>${pad(rank(f) + 1)}</b>`}${l} (<span class="cnt">${SHOWN[f] ? Math.min(n, SHOWN[f]) : n}</span>)</button>`).join("")}</div>`;
    const fin = $(".filters-in", filters);

    // "Show more / Show less": a section can hold some cards back; the chip count follows what is showing
    // "Show": a second way to slice the same projects, from facts already in the data (tags, metrics, prototypes)
    const THEMES = [
      ["", "All", () => true],
      ["ai", "AI", p => /\b(AI|LLM|RAG|NLP|Voice|Evals)\b/.test(p.tags.join(" "))],
      ["strategy", "Strategy", p => /Strategy|Unit economics|Business model|Pricing/.test(p.tags.join(" "))],
      ["proto", "Prototype", p => !!p.proto],
      ["metrics", "Metrics defined", p => !!p.tracked]
    ];
    let theme = "";
    const themesEl = document.createElement("div");
    themesEl.className = "themes"; themesEl.setAttribute("role", "group"); themesEl.setAttribute("aria-label", "Show projects by theme");
    themesEl.innerHTML = `<span class="th-head">Show</span><div class="th-list">${THEMES.map(([k, l], i) => `<button class="th" type="button" data-th="${k}" aria-pressed="${k === ""}">${l}</button>${i === 2 ? '<span class="th-br" aria-hidden="true"></span>' : ""}`).join("")}</div>`;   // All, AI, Strategy on the first line; Prototype, Metrics defined under them
    // wide screens: the menu sits under the category filters in one sticky column, always showing
    const side = document.createElement("div");
    side.className = "side";
    groupsEl.before(side); side.append(filters, themesEl);

    // phones: "Show" and the current category are two chips in the filter bar; tapping one opens a small selection menu just above it
    const showChip = $(".show-chip", filters), catChip = $(".cat-chip", filters);
    const menus = [];
    const makeMenu = (chip, label, fill) => {
      const el = document.createElement("div");
      el.className = "th-pop"; el.setAttribute("role", "menu"); el.setAttribute("aria-label", label); el.hidden = true;
      document.body.append(el);
      const api = {
        el,
        close() { if (el.hidden) return; el.hidden = true; chip.setAttribute("aria-expanded", "false"); },
        open() {
          menus.forEach(x => x !== api && x.close());
          fill(el);
          const r = chip.getBoundingClientRect();
          el.hidden = false;
          el.style.left = Math.max(10, Math.min(r.left, innerWidth - el.offsetWidth - 10)) + "px";
          const down = r.top < innerHeight / 2;   // the bar is up at the top of the page: open downward, not up under the nav
          el.classList.toggle("down", down);
          el.style.top = down ? Math.round(r.bottom + 10) + "px" : "auto";
          el.style.bottom = down ? "auto" : Math.round(innerHeight - r.top + 10) + "px";
          chip.setAttribute("aria-expanded", "true");
        }
      };
      chip.addEventListener("click", () => (el.hidden ? api.open() : api.close()));
      menus.push(api);
      return api;
    };
    const themeMenu = makeMenu(showChip, "Show projects by theme", el => {
      el.innerHTML = THEMES.map(([k, l]) => `<button class="th-opt" type="button" role="menuitemradio" aria-checked="${k === theme}" data-th="${k}">${l}</button>`).join("");
    });
    const catMenu = makeMenu(catChip, "Jump to a category", el => {
      el.innerHTML = $$(".chip[data-f]", filters).filter(c => c.style.display !== "none")
        .map(c => `<button class="th-opt" type="button" role="menuitemradio" aria-checked="${c.dataset.f === catPick}" data-f="${c.dataset.f}">${c.textContent.replace(/^\d+/, "").trim()}</button>`).join("");
    });
    const closeMenus = () => menus.forEach(x => x.close());
    document.addEventListener("click", e => { if (!e.target.closest(".th-pop, .show-chip, .cat-chip")) closeMenus(); });
    addEventListener("scroll", closeMenus, { passive: true });
    addEventListener("resize", closeMenus);
    addEventListener("keydown", e => { if (e.key === "Escape") closeMenus(); });
    let catPick = "all";   // the category chip shows what was picked, and does not follow the page while it scrolls
    const syncCat = () => {
      const on = $(`.chip[data-f="${catPick}"]`, filters);
      $(".cc-l", catChip).textContent = on ? on.textContent.replace(/^\d+/, "").trim() : "All";
    };
    const refresh = () => {
      const t = THEMES.find(x => x[0] === theme);
      $$(".group", groupsEl).forEach(g => {
        const open = g.classList.contains("open");
        $$(".grid > li", g).forEach(li => {
          const p = P.find(x => x.id === $(".card-link", li).dataset.id);
          li.hidden = (li.classList.contains("more") && !open && !theme) || (!!theme && !t[2](p));
        });
        const n = $$(".grid > li", g).filter(li => !li.hidden).length;
        g.style.display = n ? "" : "none";
        const btn = $(".more-link", g); if (btn) btn.style.display = theme ? "none" : "";
        const chip = $(`.chip[data-f="${g.dataset.kind}"]`, filters);
        if (chip) { chip.style.display = n ? "" : "none"; const cnt = $(".cnt", chip); if (cnt) cnt.textContent = n; }
      });
      const all = $('.chip[data-f="all"] .cnt', filters);
      if (all) all.textContent = $$("#groups .grid > li").filter(li => !li.hidden).length;
      $$(".th", themesEl).forEach(x => x.setAttribute("aria-pressed", String(x.dataset.th === theme)));
      $(".sc-l", showChip).textContent = theme ? `Show: ${t[1]}` : "Show";
      showChip.dataset.on = String(!!theme);
      syncCat();
    };
    themesEl.addEventListener("click", e => { const x = e.target.closest(".th"); if (x) { theme = x.dataset.th === theme ? "" : x.dataset.th; refresh(); } });
    themeMenu.el.addEventListener("click", e => { const x = e.target.closest(".th-opt"); if (x) { theme = x.dataset.th === theme ? "" : x.dataset.th; refresh(); themeMenu.close(); } });
    catMenu.el.addEventListener("click", e => {
      const x = e.target.closest(".th-opt"); if (!x) return;
      const f = x.dataset.f;
      jump(f);
      const u = new URL(location);
      f === "all" ? u.searchParams.delete("type") : u.searchParams.set("type", f);
      history.replaceState(null, "", u);
      catMenu.close();
    });
    const setOpen = (g, open) => {
      g.classList.toggle("open", open);
      const btn = $(".more-link", g);
      if (btn) { btn.textContent = open ? "Show less ↑" : "Show more →"; btn.setAttribute("aria-expanded", String(open)); }
      refresh();
      if (!open) { const r = g.getBoundingClientRect(); if (r.top < 0) scrollTo({ top: scrollY + r.top - 130 }); }   // folding a long section: stay at its start
    };
    refresh();
    groupsEl.addEventListener("click", e => { const b = e.target.closest(".more-link"); if (b) { const g = b.closest(".group"); setOpen(g, !g.classList.contains("open")); } });
    window.expandFor = id => { const li = $(`.card-link[data-id="${id}"]`, groupsEl)?.closest("li"); if (li?.hidden) { theme = ""; setOpen(li.closest(".group"), true); } };

    // chips jump to a section; every section stays on the page
    let lock = false, lockTimer;
    // the chip row scrolls sideways on phones, so keep the highlighted chip in view
    const setActive = f => {
      let on = null;
      $$(".chip[data-f]", filters).forEach(c => { const is = c.dataset.f === f; c.setAttribute("aria-pressed", String(is)); if (is) on = c; });
      $$(".group", groupsEl).forEach(g => g.classList.toggle("cur", g.dataset.kind === f));   // the heading's number lights up with it
      if (on && fin.scrollWidth > fin.clientWidth)
        fin.scrollTo({ left: on.offsetLeft - (fin.clientWidth - on.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth" });
    };
    const arrive = g => {
      $$(".group.focus", groupsEl).forEach(x => x.classList.remove("focus"));
      g.classList.add("focus");
      setTimeout(() => g.classList.remove("focus"), 1700);
      if (!reduced) $$(".grid > li", g).forEach((li, i) => li.animate(
        [{ opacity: .15, transform: "translateY(26px) scale(.97)" }, { opacity: 1, transform: "none" }],
        { duration: 650, delay: 120 + i * 70, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" }));
    };
    const jump = (f, smooth = true) => {
      if (f !== "all" && !kinds.includes(f)) f = "all";
      catPick = f; syncCat();
      setActive(f);
      let g = f === "all" ? $(".group:not([hidden])", groupsEl) : $(`.group[data-kind="${f}"]`, groupsEl);
      if (!g || g.hidden) { f = "all"; g = $(".group:not([hidden])", groupsEl); setActive("all"); }
      lock = true; clearTimeout(lockTimer);
      (f === "all" ? groupsEl : g).scrollIntoView({ behavior: smooth && !reduced ? "smooth" : "auto", block: "start" });
      const done = () => { lock = false; if (f !== "all") arrive(g); };
      if (!smooth || reduced) { lockTimer = setTimeout(done, 50); return; }
      lockTimer = setTimeout(done, 900);
    };
    // keep the chips in step with whatever section is on screen
    const spy = () => {
      if (lock) return;
      let cur = "all";
      const gs = $$(".group:not([hidden])", groupsEl);
      gs.forEach(g => { if (g.getBoundingClientRect().top <= 190) cur = g.dataset.kind; });
      if (gs.length && innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = gs[gs.length - 1].dataset.kind;   // at the very bottom, the last section counts
      setActive(cur);
    };
    let tick = false;
    // phones: the filter bar docks above the nav only once you have scrolled past it
    const pageH1 = $(".page-head h1");
    const dockFilters = () => {
      const b = filters.getBoundingClientRect().bottom, root = document.documentElement;
      root.classList.toggle("fdocked", root.classList.contains("fdocked") ? b < 24 : b < 0);
      const hr = pageH1.getBoundingClientRect();
      root.classList.toggle("ptitle", hr.bottom < 120);   // the big title has scrolled away: a small yellow one appears above the filters
    };
    // desktop: nothing shows through a frozen category heading. Cards are hidden behind it, and stay visible in the gap between the nav bar and the heading.
    const hideUnderHeadings = () => {
      const wide = innerWidth >= 1024;
      // a frozen heading dissolves as the end of its section reaches it, so it leaves with the cards instead of hanging over them
      const bands = wide ? $$(".divider.slide").map(d => {
        const r = d.getBoundingClientRect(), end = d.closest(".group").getBoundingClientRect().bottom;
        const foot = $(".site-foot").getBoundingClientRect().top;   // the footer climbing into view also dissolves it
        const f = r.top <= 124 ? Math.max(0, Math.min(1, (end - r.bottom - 20) / 100, (foot - r.bottom - 290) / 70)) : 1;
        d.style.opacity = f < 1 ? f.toFixed(2) : "";
        return f > .15 ? r : null;
      }).filter(r => r && r.top > 100 && r.top <= 124) : ($$(".divider.slide").forEach(d => { d.style.opacity = ""; }), []);
      $$("#groups .grid").forEach(g => {
        const gr = g.getBoundingClientRect(), hit = bands.find(r => r.bottom > gr.top && r.top < gr.bottom);
        const v = hit ? `linear-gradient(180deg, #000 ${Math.round(hit.top - gr.top) - 1}px, transparent ${Math.round(hit.top - gr.top) + 4}px, transparent ${Math.round(hit.bottom - gr.top) - 4}px, #000 ${Math.round(hit.bottom - gr.top) + 8}px)` : "";
        g.style.webkitMaskImage = v; g.style.maskImage = v;
      });
    };
    addEventListener("resize", hideUnderHeadings);
    addEventListener("scroll", () => { dockFilters(); hideUnderHeadings(); if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; spy(); }); } }, { passive: true });
    dockFilters();

    const first = new URL(location).searchParams.get("type");
    setActive("all");
    if (first && kinds.includes(first)) setTimeout(() => jump(first, false), 150);
    filters.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if (!c || c.classList.contains("show-chip") || c.classList.contains("cat-chip")) return;
      jump(c.dataset.f);
      const u = new URL(location);
      c.dataset.f === "all" ? u.searchParams.delete("type") : u.searchParams.set("type", c.dataset.f);
      history.replaceState(null, "", u);
    });

    // open cards in the window (modifier-clicks still open a new tab)
    groupsEl.addEventListener("click", e => {
      const a = e.target.closest(".card-link");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      e.preventDefault();
      openWin(a.dataset.id, e);
    });
  }

  /* ---------- project window ---------- */
  const win = $("#win"), scrim = $(".scrim");
  let current = -1, lastFocus = null;

  const techBlock = p => {
    const t = p.tech; if (!t) return "";
    return `
      <section class="tech" aria-label="Technical details">
        <h4>flow</h4>
        ${arch(t.diagram, true)}
        ${chips(t)}
        <h4>data flow</h4>
        <ol class="flow">${t.flow.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
        ${t.table ? `<h4>${esc(t.table.title)}</h4><table class="ktable"><thead><tr>${t.table.head.map(h => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.table.rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join("")}</tr>`).join("")}</tbody></table>` : ""}
        ${t.stats?.length ? stats(t, "stats big") : ""}
        ${t.note ? `<p class="tnote${isTodo(t.note) ? " todo" : ""}">${esc(isTodo(t.note) ? t.note.replace(/^TODO:?\s*/, "") : t.note)}</p>` : ""}
      </section>`;
  };

  // phones can't show a PDF inside a page (Android Chrome doesn't, iOS only shows page one), so there the
  // document opens in the phone's own viewer from a clear button instead of an embedded frame
  const phone = matchMedia("(max-width: 860px), (pointer: coarse)");   // touch screens of any size get the open-in-viewer card (iPads and Android do not embed PDFs well)
  const sizeOf = async file => {
    try { const r = await fetch(file, { method: "HEAD" }); const n = +r.headers.get("content-length");
      return n ? (n > 1048576 ? (n / 1048576).toFixed(1) + " MB" : Math.round(n / 1024) + " KB") : ""; } catch (e) { return ""; }
  };
  function showFile(p, i) {
    if (!p.files.length) { $(".viewer", win).innerHTML = ""; return; }
    const [label, file] = p.files[i];
    $$(".tabs button", win).forEach((b, j) => b.setAttribute("aria-selected", String(i === j)));
    $(".open-full", win).href = file;
    const v = $(".viewer", win);
    if (phone.matches && !isVideo(file)) {
      const t = thumbOf(p);
      v.classList.remove("loading");
      v.innerHTML = `<a class="open-card" href="${file}" target="_blank" rel="noopener">
        ${t ? `<img src="${t}" alt="" width="1000" height="563">` : ""}
        <span class="oc-t">Open ${label} <span aria-hidden="true">↗</span></span>
        <small class="oc-s">PDF, opens in your device's viewer <span class="sz"></span></small></a>`;
      sizeOf(file).then(z => { const el = $(".sz", v); if (el && z) el.textContent = "· " + z; });
      return;
    }
    v.classList.add("loading");
    v.innerHTML = isVideo(file)
      ? `<video src="${file}" controls playsinline preload="metadata" controlslist="nodownload"></video>`
      : `<iframe src="${file}#view=FitH&toolbar=0&navpanes=0" title="${p.short || p.title}: ${label}"></iframe>`;
    const done = () => v.classList.remove("loading");
    v.firstElementChild.addEventListener(isVideo(file) ? "loadeddata" : "load", done, { once: true });
    setTimeout(done, 3000);
  }

  // what the window browses and counts: everything on the page right now (projects folded behind "Show more" are not in it)
  const browsable = () => SEQ.filter(p => !$(`#groups .card-link[data-id="${p.id}"]`)?.closest("li")?.hidden);

  function openWin(id, evt) {
    window.expandFor?.(id);   // a project held back behind "Show more" opens its section first
    const list = browsable(), idx = list.findIndex(p => p.id === id);
    if (!win || idx < 0) return;
    const p = list[idx], wasOpen = win.classList.contains("on");
    current = idx;
    win.classList.toggle("nofile", !p.files.length);
    if (!wasOpen) {
      lastFocus = document.activeElement;
      win.style.transformOrigin = evt && evt.clientX
        ? `${evt.clientX - (innerWidth - win.offsetWidth) / 2}px ${evt.clientY - (innerHeight - win.offsetHeight) / 2}px`
        : "50% 50%";
      win.style.setProperty("--dx", "0px"); win.style.setProperty("--dy", "0px");
      win.style.removeProperty("--info-w");   // every project opens with the same text and document split (52 / 48)
    }

    win.dataset.kind = p.kind;
    $(".crumb", win).innerHTML = `<span>${kindName(p.kind)}</span>${p.short || p.title}`;
    $$(".count", win).forEach(el => (el.textContent = `${pad(idx + 1)} / ${pad(list.length)}`));
    $(".tabs", win).innerHTML = p.files.length > 1
      ? p.files.map(([l], i) => `<button type="button" role="tab" data-i="${i}">${l}</button>`).join("") : "";

    const info = $(".win-info", win);
    info.innerHTML = `
      <span class="eyebrow">${kindName(p.kind)}${p.status ? `<em class="status">${p.status}</em>` : ""}</span>
      <h3>${p.title}</h3>
      <p class="sum">${p.summary}</p>
      ${techBlock(p)}
      ${p.metrics?.length ? `<div class="figs">${p.metrics.map(([n, l]) => `<div class="fig"><b>${n}</b><span>${l}</span></div>`).join("")}</div>` : ""}
      <h4>key takeaways</h4>
      <ol>${p.points.map(x => `<li>${x}</li>`).join("")}</ol>
      ${p.tracked?.length ? `<h4>metrics tracked</h4><ul class="tracked">${p.tracked.map(([l, t]) => `<li><i${l === "North star" ? ' class="ns"' : ""}>${l}</i><span>${t}</span></li>`).join("")}</ul>` : ""}
      <p class="tags">${p.tags.join(", ")}</p>
      ${p.proto || p.link ? `<div class="win-links">${p.proto ? `<a class="btn sm" href="${p.proto}" target="_blank" rel="noopener">Visit prototype <span class="arr">↗</span></a>` : ""}${p.link ? `<a class="btn sm" href="${p.link}" target="_blank" rel="noopener">View on GitHub <span class="arr">↗</span></a>` : ""}</div>` : ""}`;
    info.scrollTop = 0;
    showFile(p, 0);

    win.classList.add("on"); scrim.classList.add("on");
    if (!wasOpen && matchMedia("(pointer: coarse)").matches) {
      let seenHint = false; try { seenHint = localStorage.getItem("swipeHint") === "1"; localStorage.setItem("swipeHint", "1"); } catch (e) { /* private mode */ }
      if (!seenHint) { const h = document.createElement("div"); h.className = "swipe-hint"; h.textContent = "Swipe to browse projects"; win.append(h); setTimeout(() => h.remove(), 3600); }
    }
    win.removeAttribute("inert");
    document.documentElement.style.overflow = "hidden";
    history[wasOpen ? "replaceState" : "pushState"]({ win: 1 }, "", location.pathname + location.search + "#" + p.id);
    if (!wasOpen) $(".close", win).focus({ preventScroll: true });
  }

  function step(d) {
    if (current < 0) return;
    if (!reduced) [$(".viewer", win), $(".win-info", win)].forEach(el => el.animate(
      [{ opacity: 0, transform: `translateX(${d * 14}px)` }, { opacity: 1, transform: "none" }],
      { duration: 280, easing: "cubic-bezier(.16,1,.3,1)" }));
    { const l = browsable(); openWin(l[(current + d + l.length) % l.length].id); }
  }

  function closeWin(fromPop) {
    if (!win || !win.classList.contains("on")) return;
    win.classList.remove("on", "max"); scrim.classList.remove("on");
    win.setAttribute("inert", "");
    document.documentElement.style.overflow = "";
    if (fromPop === true) { /* the URL is already back */ }
    else if (history.state && history.state.win) history.back();
    else history.replaceState(null, "", location.pathname + location.search);
    current = -1;
    setTimeout(() => { if (!win.classList.contains("on")) $(".viewer", win).innerHTML = ""; }, 400);
    lastFocus?.focus({ preventScroll: true });
  }

  if (win) {
    win.setAttribute("inert", "");
    scrim.addEventListener("click", () => closeWin());
    addEventListener("popstate", () => closeWin(true));
    win.addEventListener("click", e => {
      const b = e.target.closest("[data-act], .tabs button");
      if (!b) return;
      if (b.dataset.i) return showFile(browsable()[current], +b.dataset.i);
      ({ close: () => closeWin(), prev: () => step(-1), next: () => step(1), max: () => win.classList.toggle("max") })[b.dataset.act]?.();
    });
    addEventListener("keydown", e => {
      if (!win.classList.contains("on")) return;
      if (e.key === "Escape") closeWin();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });

    // a divider between the text and the document: drag (or use the arrow keys) to change how wide the text is; the width is remembered
    const body = $(".win-body", win), handle = document.createElement("div");
    handle.className = "win-resize"; handle.tabIndex = 0;
    handle.setAttribute("role", "separator"); handle.setAttribute("aria-orientation", "vertical"); handle.setAttribute("aria-label", "Resize the text panel (arrow keys)");
    body.insertBefore(handle, $(".stage", body));
    const clampW = w => Math.round(Math.max(280, Math.min(w, body.clientWidth * .62)));
    const setW = w => { w = clampW(w); win.style.setProperty("--info-w", w + "px"); return w; };
    handle.addEventListener("pointerdown", e => {
      if (e.button) return;
      e.preventDefault(); handle.setPointerCapture(e.pointerId); win.classList.add("resizing");
    });
    handle.addEventListener("pointermove", e => {
      if (!win.classList.contains("resizing")) return;
      setW(e.clientX - body.getBoundingClientRect().left - 5);
    });
    const endResize = () => win.classList.remove("resizing");
    handle.addEventListener("pointerup", endResize);
    handle.addEventListener("pointercancel", endResize);
    handle.addEventListener("dblclick", () => win.style.removeProperty("--info-w"));
    handle.addEventListener("keydown", e => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault(); e.stopPropagation();
      setW($(".win-info", win).getBoundingClientRect().width + (e.key === "ArrowRight" ? 30 : -30));
    });

    // drag by the title bar (desktop only)
    const bar = $(".bar", win);
    let sx, sy, ox, oy;
    bar.addEventListener("pointerdown", e => {
      if (innerWidth <= 860 || win.classList.contains("max") || e.target.closest("button, a")) return;
      sx = e.clientX; sy = e.clientY;
      ox = parseFloat(win.style.getPropertyValue("--dx")) || 0;
      oy = parseFloat(win.style.getPropertyValue("--dy")) || 0;
      win.classList.add("dragging"); bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener("pointermove", e => {
      if (!win.classList.contains("dragging")) return;
      win.style.setProperty("--dx", ox + e.clientX - sx + "px");
      win.style.setProperty("--dy", oy + e.clientY - sy + "px");
    });
    const stop = () => win.classList.remove("dragging");
    bar.addEventListener("pointerup", stop);
    bar.addEventListener("pointercancel", stop);
    bar.addEventListener("dblclick", e => { if (!e.target.closest("button, a")) win.classList.toggle("max"); });

    // swipe: right goes to the previous project, left to the next
    let tx = 0, ty = 0, tt = 0, tracking = false;
    win.addEventListener("touchstart", e => {
      const t = e.touches[0];
      tracking = e.touches.length === 1 && !e.target.closest("video, .ktable, .tabs, .arch");
      tx = t.clientX; ty = t.clientY; tt = Date.now();
    }, { passive: true });
    win.addEventListener("touchend", e => {
      if (!tracking || current < 0) return;
      tracking = false;
      const t = e.changedTouches[0], dx = t.clientX - tx, dy = t.clientY - ty;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6 && Date.now() - tt < 800) step(dx < 0 ? 1 : -1);
    }, { passive: true });
    win.addEventListener("touchcancel", () => (tracking = false), { passive: true });

    const id = location.hash.slice(1);
    if (id && SEQ.some(p => p.id === id)) setTimeout(() => openWin(id), 250);
  }

  /* ---------- experience ---------- */
  const job = x => `
      <li class="slide job rv">
        <div>
          <span class="eyebrow">${x.dates}</span>
          <h3>${x.org}</h3>
          <p class="role">${x.role}</p>
          ${x.summary ? `<p class="sum">${x.summary}</p>` : ""}
        </div>
        <ul>${x.shipped.map(s => `<li>${s}</li>`).join("")}</ul>
        ${x.impact?.length ? `<div class="impact">${x.impact.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("")}</div>` : ""}
      </li>`;
  const cred = x => `
      <li class="slide cred rv">
        <span class="eyebrow">${x.dates}</span>
        <h3>${x.org}</h3>
        <p class="role">${x.role}</p>
        ${x.note ? `<span class="note">${x.note}</span>` : ""}
      </li>`;
  const fill = (sel, items, tpl) => { const el = $(sel); if (el) el.innerHTML = items.map(tpl).join(""); };
  fill("#work", E.filter(x => x.section === "work"), job);
  fill("#por", E.filter(x => x.section === "por"), job);
  fill("#edu", window.EDUCATION || [], cred);
  fill("#certs", window.CERTIFICATIONS || [], cred);


  /* ---------- experience: jump buttons that follow where you are ---------- */
  const eNav = $(".exp-nav");
  if (eNav) {
    const btns = $$(".chip", eNav), secs = btns.map(b => document.getElementById(b.dataset.go));
    // land with the section heading right where it freezes (just under the nav bar)
    btns.forEach((b, i) => b.addEventListener("click", () => {
      const h = secs[i]?.querySelector("h2"); if (!h) return;
      const stick = innerWidth >= 641 && innerHeight >= 560 ? 120 : 14;
      window.scrollTo({ top: scrollY + h.getBoundingClientRect().top - stick, behavior: reduced ? "auto" : "smooth" });
    }));
    const heads = secs.map(sc => sc?.querySelector("h2"));
    const lists = secs.map(sc => sc?.querySelector(".timeline"));
    const spyExp = () => {
      // while a heading is frozen, hide whatever has scrolled up behind it (a clean fade, no glass)
      heads.forEach((h, i) => {
        const tl = lists[i]; if (!h || !tl) return;
        if (getComputedStyle(h).position !== "sticky") { tl.classList.remove("cutting"); h.classList.remove("is-stuck"); return; }
        const hr = h.getBoundingClientRect();
        h.classList.toggle("is-stuck", hr.top <= (parseFloat(getComputedStyle(h).top) || 0) + 2 && secs[i].getBoundingClientRect().bottom > hr.height);   // frozen: goes yellow and half size (see CSS)
        const cut = h.getBoundingClientRect().bottom + 2 - tl.getBoundingClientRect().top;
        if (cut > 0) { tl.style.setProperty("--cut", Math.round(cut) + "px"); tl.classList.add("cutting"); }
        else tl.classList.remove("cutting");
      });
      btns.forEach((b, i) => {
        const r = secs[i]?.getBoundingClientRect();
        b.setAttribute("aria-pressed", String(!!r && r.top <= 220 && r.bottom > 220));
      });
    };
    addEventListener("scroll", spyExp, { passive: true });
    spyExp();
  }

  /* ---------- home: "Selected work" freezes (yellow, 85%), the cards fade away under it; "Introduction" turns yellow when it arrives ---------- */
  const workSec = $("#sec-work"), introH = $("#intro-title");
  if (workSec || introH) {
    const head = workSec && $(".sec-head", workSec), deck = workSec && $(".deck", workSec);
    const updHome = () => {
      if (head && deck) {
        const hr = head.getBoundingClientRect();
        head.classList.toggle("is-stuck", hr.top <= (parseFloat(getComputedStyle(head).top) || 0) + 2 && workSec.getBoundingClientRect().bottom > hr.height);
        const cut = hr.bottom + 2 - deck.getBoundingClientRect().top;
        if (cut > 0) { deck.style.setProperty("--cut", Math.round(cut) + "px"); deck.classList.add("cutting"); } else deck.classList.remove("cutting");
      }
      if (introH) introH.classList.toggle("lit", introH.getBoundingClientRect().top <= innerHeight * .55 && introH.closest("section").getBoundingClientRect().bottom > 160);
    };
    addEventListener("scroll", updHome, { passive: true });
    addEventListener("resize", updHome);
    updHome();
  }

  /* ---------- "Top skills": the heading freezes, goes yellow and half size, the rows fade away under it ---------- */
  $$("[data-frozen]").forEach(sec => {
    const h = $("h2", sec), list = $(".strengths", sec);
    if (!h || !list) return;
    const upd = () => {
      if (getComputedStyle(h).position !== "sticky") { list.classList.remove("cutting"); h.classList.remove("is-stuck"); return; }
      const hr = h.getBoundingClientRect();
      h.classList.toggle("is-stuck", hr.top <= (parseFloat(getComputedStyle(h).top) || 0) + 2 && sec.getBoundingClientRect().bottom > hr.height);
      const cut = h.getBoundingClientRect().bottom + 2 - list.getBoundingClientRect().top;
      if (cut > 0) { list.style.setProperty("--cut", Math.round(cut) + "px"); list.classList.add("cutting"); } else list.classList.remove("cutting");
    };
    addEventListener("scroll", upd, { passive: true });
    addEventListener("resize", upd);
    upd();
  });

  /* ---------- keep a clear gap under the nav bar: content fades out before it touches it ---------- */
  {
    const blocks = $$("main, .site-foot");
    const fadeUnderNav = () => {
      const on = innerWidth >= 641 && innerHeight >= 560 && scrollY > 0;               // phones have the nav at the bottom; at the very top nothing is under it
      const gap = 24 * Math.min(1, scrollY / 80);                 // hidden up to 90px from the top, fully visible from 120px (where things freeze), so frozen headings are never shaded
      blocks.forEach(b => {
        const y0 = 66 + gap - b.getBoundingClientRect().top;      // part of the block that is above the "hidden" line
        if (!on || y0 <= 0) { b.classList.remove("navfade"); return; }
        b.style.setProperty("--nf0", Math.round(y0) + "px"); b.classList.add("navfade");
      });
    };
    addEventListener("scroll", fadeUnderNav, { passive: true });
    addEventListener("resize", fadeUnderNav);
    fadeUnderNav();
  }

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("in"); io.unobserve(el);
    setTimeout(() => (el.style.transitionDelay = ""), 900);
  }), { threshold: .1 });
  $$(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
})();
