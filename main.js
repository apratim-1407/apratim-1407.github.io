(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const P = window.PROJECTS || [];
  const E = window.EXPERIENCE || [];
  const pad = n => String(n).padStart(2, "0");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isVideo = f => /\.(mp4|webm|mov)$/i.test(f);
  const thumbOf = p => p.thumb || (p.files[0][1].endsWith(".pdf") ? `assets/thumbs/${p.id}.jpg` : "");

  // order + blurb for each group on the Projects page
  const GROUPS = {
    "Research":   { label: "Research", desc: "Thousands of real app reviews, read closely to find what's actually breaking. Each ends with one fix." },
    "Case study": { label: "Case studies", desc: "Deeper dives into a single feature, metric or business model." },
    "Teardown":   { label: "Teardowns", desc: "Pulling a product apart to see why it works." },
    "PRD":        { label: "PRDs", desc: "Specs for what should be built next." },
    "Build":      { label: "Builds", desc: "Things I've made end to end." }
  };
  const rank = k => { const i = Object.keys(GROUPS).indexOf(k); return i < 0 ? 99 : i; };
  const SEQ = [...P].sort((a, b) => rank(a.kind) - rank(b.kind)); // display order, stable

  /* ---------- nav ---------- */
  const page = document.body.dataset.page;
  $$(".nav a[data-page]").forEach(a => { if (a.dataset.page === page) a.setAttribute("aria-current", "page"); });
  const nav = $(".nav");
  if (nav) { const sync = () => nav.classList.toggle("scrolled", scrollY > 24); sync(); addEventListener("scroll", sync, { passive: true }); }

  $$("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
  $$("[data-count]").forEach(el => (el.textContent = P.length));

  // resume menu: close on outside click or Escape
  const rm = $(".resume-menu");
  if (rm) {
    document.addEventListener("click", e => { if (rm.open && !rm.contains(e.target)) rm.open = false; });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && rm.open) { rm.open = false; rm.querySelector("summary").focus(); } });
  }

  // back to top (a real button; window.scrollTo, not the element's own scrollTo)
  $$(".to-top").forEach(b => b.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    $(".skip")?.focus({ preventScroll: true });
  }));

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
    const lines = ["hi, that's me", "1-star review nerd", "ask me about funnels", `${P.length} projects in`,
      "PRDs over small talk", "ok, back to work"];
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
        <span class="n" aria-hidden="true">${pad(i + 1)}</span>
        <div><h3>${x.title}</h3><p>${x.text}</p></div>
        ${x.evidence?.length ? `<div class="proof"><span class="lbl">Proof of work</span><ul>${x.evidence.map(([t, id]) =>
          `<li><a href="projects.html#${id}">${t}</a></li>`).join("")}</ul></div>` : ""}
      </li>`).join("");
  if (S && sg) sg.innerHTML = S.groups.map(g => `
      <div class="kit-row rv"><h3>${g.name}</h3><ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("");

  /* ---------- project cards ---------- */
  const card = p => `
    <li class="rv"><a class="slide slide-card card-link" href="projects.html#${p.id}" data-id="${p.id}" data-kind="${p.kind}">
      <span class="eyebrow">${p.kind}</span>
      <h3>${p.short || p.title}</h3>
      <p>${p.oneLiner}</p>
      ${thumbOf(p) ? `<span class="shot"><span><img src="${thumbOf(p)}" alt="" width="1000" height="563" loading="lazy" decoding="async"></span></span>` : ""}
      <span class="go" aria-hidden="true">Open ↗</span>
    </a></li>`;

  // home: the first five, as a bento
  const featured = $("#featured");
  if (featured) featured.innerHTML = P.slice(0, +featured.dataset.limit || 5).map(card).join("");

  // projects page: one section per kind, plus filters that live in the URL (?type=Research)
  const groupsEl = $("#groups");
  if (groupsEl) {
    const kinds = [...new Set(SEQ.map(p => p.kind))];
    groupsEl.innerHTML = kinds.map(k => {
      const items = SEQ.filter(p => p.kind === k);
      return `<section class="group" data-kind="${k}" aria-labelledby="g-${rank(k)}">
        <div class="slide divider rv">
          <span class="n" aria-hidden="true">${pad(rank(k) + 1)}</span>
          <div>
            <h2 id="g-${rank(k)}">${GROUPS[k]?.label || k}</h2>
            ${GROUPS[k]?.desc ? `<p>${GROUPS[k].desc} ${items.length} project${items.length > 1 ? "s" : ""}.</p>` : ""}
          </div>
        </div>
        <ul class="grid">${items.map(card).join("")}</ul>
      </section>`;
    }).join("");

    const filters = $(".filters");
    filters.innerHTML = [["all", "All", P.length], ...kinds.map(k => [k, GROUPS[k]?.label || k, P.filter(p => p.kind === k).length])]
      .map(([f, l, n]) => `<button class="chip" type="button" data-f="${f}" aria-pressed="false">${f === "all" ? "" : `<b>${pad(rank(f) + 1)}</b>`}${l} (${n})</button>`).join("");

    // chips jump to a section; every section stays on the page
    let lock = false, lockTimer;
    const setActive = f => $$(".chip", filters).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.f === f)));
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
      setActive(f);
      const g = f === "all" ? $(".group", groupsEl) : $(`.group[data-kind="${f}"]`, groupsEl);
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
      $$(".group", groupsEl).forEach(g => { if (g.getBoundingClientRect().top <= 190) cur = g.dataset.kind; });
      setActive(cur);
    };
    let tick = false;
    addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; spy(); }); } }, { passive: true });

    const first = new URL(location).searchParams.get("type");
    setActive("all");
    if (first && kinds.includes(first)) setTimeout(() => jump(first, false), 150);
    filters.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if (!c) return;
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

  function showFile(p, i) {
    const [label, file] = p.files[i];
    $$(".tabs button", win).forEach((b, j) => b.setAttribute("aria-selected", String(i === j)));
    $(".open-full", win).href = file;
    const v = $(".viewer", win);
    v.classList.add("loading");
    v.innerHTML = isVideo(file)
      ? `<video src="${file}" controls playsinline preload="metadata" controlslist="nodownload"></video>`
      : `<iframe src="${file}#view=FitH&toolbar=0&navpanes=0" title="${p.short || p.title}: ${label}"></iframe>`;
    const done = () => v.classList.remove("loading");
    v.firstElementChild.addEventListener(isVideo(file) ? "loadeddata" : "load", done, { once: true });
    setTimeout(done, 3000);
  }

  function openWin(id, evt) {
    const idx = SEQ.findIndex(p => p.id === id);
    if (!win || idx < 0) return;
    const p = SEQ[idx], wasOpen = win.classList.contains("on");
    current = idx;
    if (!wasOpen) {
      lastFocus = document.activeElement;
      win.style.transformOrigin = evt && evt.clientX
        ? `${evt.clientX - (innerWidth - win.offsetWidth) / 2}px ${evt.clientY - (innerHeight - win.offsetHeight) / 2}px`
        : "50% 50%";
      win.style.setProperty("--dx", "0px"); win.style.setProperty("--dy", "0px");
    }

    win.dataset.kind = p.kind;
    $(".crumb", win).innerHTML = `<span>${p.kind}</span>${p.short || p.title}`;
    $(".count", win).textContent = `${pad(idx + 1)} / ${pad(SEQ.length)}`;
    $(".tabs", win).innerHTML = p.files.length > 1
      ? p.files.map(([l], i) => `<button type="button" role="tab" data-i="${i}">${l}</button>`).join("") : "";

    const info = $(".win-info", win);
    info.innerHTML = `
      <span class="eyebrow">${p.kind}</span>
      <h3>${p.title}</h3>
      <p class="sum">${p.summary}</p>
      ${p.metrics?.length ? `<div class="figs">${p.metrics.map(([n, l]) => `<div class="fig"><b>${n}</b><span>${l}</span></div>`).join("")}</div>` : ""}
      <h4>key takeaways</h4>
      <ol>${p.points.map(x => `<li>${x}</li>`).join("")}</ol>
      <p class="tags">${p.tags.join(", ")}</p>
      ${p.link ? `<a class="btn sm" href="${p.link}" target="_blank" rel="noopener">View Code <span class="arr">↗</span></a>` : ""}`;
    info.scrollTop = 0;
    showFile(p, 0);

    win.classList.add("on"); scrim.classList.add("on");
    win.removeAttribute("inert");
    document.documentElement.style.overflow = "hidden";
    history.replaceState(null, "", location.search + "#" + p.id);
    if (!wasOpen) $(".close", win).focus({ preventScroll: true });
  }

  function step(d) {
    if (current < 0) return;
    if (!reduced) [$(".viewer", win), $(".win-info", win)].forEach(el => el.animate(
      [{ opacity: 0, transform: `translateX(${d * 14}px)` }, { opacity: 1, transform: "none" }],
      { duration: 280, easing: "cubic-bezier(.16,1,.3,1)" }));
    openWin(SEQ[(current + d + SEQ.length) % SEQ.length].id);
  }

  function closeWin() {
    if (!win || !win.classList.contains("on")) return;
    win.classList.remove("on", "max"); scrim.classList.remove("on");
    win.setAttribute("inert", "");
    document.documentElement.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
    current = -1;
    setTimeout(() => { if (!win.classList.contains("on")) $(".viewer", win).innerHTML = ""; }, 400);
    lastFocus?.focus({ preventScroll: true });
  }

  if (win) {
    win.setAttribute("inert", "");
    scrim.addEventListener("click", closeWin);
    win.addEventListener("click", e => {
      const b = e.target.closest("[data-act], .tabs button");
      if (!b) return;
      if (b.dataset.i) return showFile(SEQ[current], +b.dataset.i);
      ({ close: closeWin, prev: () => step(-1), next: () => step(1), max: () => win.classList.toggle("max") })[b.dataset.act]?.();
    });
    addEventListener("keydown", e => {
      if (!win.classList.contains("on")) return;
      if (e.key === "Escape") closeWin();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
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

    const id = location.hash.slice(1);
    if (id && P.some(p => p.id === id)) setTimeout(() => openWin(id), 250);
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

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("in"); io.unobserve(el);
    setTimeout(() => (el.style.transitionDelay = ""), 900);
  }), { threshold: .1 });
  $$(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
})();
