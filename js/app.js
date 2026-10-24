// Ticket prices match the KDC '26 candy and prize booth posters.
const ITEMS = [
  { id: "airheads-paradise", booth: "candy", name: "Airheads Bites Paradise", tickets: 10, img: "assets/items/airheads-paradise.png" },
  { id: "airheads-fruit", booth: "candy", name: "Airheads Bites Fruit", tickets: 10, img: "assets/items/airheads-fruit.png" },
  { id: "hershey-cookies", booth: "candy", name: "Hershey's Cookies 'n' Creme", tickets: 9, img: "assets/items/hershey-cookies.png" },
  { id: "riprolls-strawberry", booth: "candy", name: "Rip Rolls Strawberry", tickets: 7, img: "assets/items/riprolls-strawberry.png" },
  { id: "riprolls-blue", booth: "candy", name: "Rip Rolls Blue Raspberry", tickets: 7, img: "assets/items/riprolls-blue.png" },
  { id: "hershey-milk", booth: "candy", name: "Hershey's Milk Chocolate", tickets: 9, img: "assets/items/hershey-milk.png" },
  { id: "push-pops", booth: "candy", name: "Push Pops", tickets: 11, img: "assets/items/push-pops.png" },
  { id: "poprocks-cotton", booth: "candy", name: "Pop Rocks Cotton Candy", tickets: 9, img: "assets/items/poprocks-cotton.png" },
  { id: "poprocks-strawberry", booth: "candy", name: "Pop Rocks Strawberry", tickets: 9, img: "assets/items/poprocks-strawberry.png" },
  { id: "airheads-xtremes", booth: "candy", name: "Airheads Xtremes", tickets: 12, img: "assets/items/airheads-xtremes.png" },
  { id: "mms", booth: "candy", name: "M&M's", tickets: 9, img: "assets/items/mms.png" },
  { id: "skittles-sour", booth: "candy", name: "Skittles Sour", tickets: 9, img: "assets/items/skittles-sour.png" },
  { id: "sour-patch-kids", booth: "candy", name: "Sour Patch Kids", tickets: 9, img: "assets/items/sour-patch-kids.png" },
  { id: "skittles-tropical", booth: "candy", name: "Skittles Tropical", tickets: 9, img: "assets/items/skittles-tropical.png" },
  { id: "sour-punch-strawberry", booth: "candy", name: "Sour Punch Strawberry", tickets: 10, img: "assets/items/sour-punch-strawberry.png" },
  { id: "sour-patch-watermelon", booth: "candy", name: "Sour Patch Watermelon", tickets: 9, img: "assets/items/sour-patch-watermelon.png" },
  { id: "skittles-original", booth: "candy", name: "Skittles Original", tickets: 9, img: "assets/items/skittles-original.png" },
  { id: "sour-punch-blue", booth: "candy", name: "Sour Punch Blue Raspberry", tickets: 10, img: "assets/items/sour-punch-blue.png" },
  { id: "kitkat", booth: "candy", name: "Kit Kat", tickets: 9, img: "assets/items/kitkat.png" },
  { id: "reeses", booth: "candy", name: "Reese's", tickets: 9, img: "assets/items/reeses.png" },
  { id: "warheads", booth: "candy", name: "Warheads", tickets: 2, img: "assets/items/warheads.png" },
  { id: "ring-pop", booth: "candy", name: "Ring Pop", tickets: 7, img: "assets/items/ring-pop.png" },
  { id: "sour-punch-twists", booth: "candy", name: "Sour Punch Twists", tickets: 1, img: "assets/items/sour-punch-twists.png" },
  { id: "lollipops", booth: "candy", name: "Blow Pops", tickets: 2, img: "assets/items/lollipops.png" },
  { id: "fun-dip", booth: "candy", name: "Fun Dip", tickets: 5, img: "assets/items/fun-dip.png" },
  { id: "airplane", booth: "prize", name: "Foam airplane", tickets: 5, img: "assets/items/airplane.png" },
  { id: "fingerboard", booth: "prize", name: "Finger skateboard", tickets: 7, img: "assets/items/fingerboard.png" },
  { id: "clappers", booth: "prize", name: "Hand clappers", tickets: 7, img: "assets/items/clappers.png" },
  { id: "slinky", booth: "prize", name: "Slinky set", tickets: 7, img: "assets/items/slinky.png" },
  { id: "tops", booth: "prize", name: "Spinning tops", tickets: 2, img: "assets/items/tops.png" },
  { id: "whistles", booth: "prize", name: "Slide whistles", tickets: 5, img: "assets/items/whistles.png" },
  { id: "gyro", booth: "prize", name: "Gyro wheels", tickets: 10, img: "assets/items/gyro.png" },
  { id: "paddle", booth: "prize", name: "Paddle ball", tickets: 1, img: "assets/items/paddle.png" },
  { id: "slime", booth: "prize", name: "Slime", tickets: 8, img: "assets/items/slime.png" },
  { id: "soccer", booth: "prize", name: "Soccer ball", tickets: 5, img: "assets/items/soccer.png" },
  { id: "stampers", booth: "prize", name: "Stampers", tickets: 1, img: "assets/items/stampers.png" },
  { id: "bubbles", booth: "prize", name: "Bubble bottles", tickets: 3, img: "assets/items/bubbles.png" },
  { id: "slap", booth: "prize", name: "Slap bracelets", tickets: 2, img: "assets/items/slap.png" },
  { id: "parachute", booth: "prize", name: "Parachute toys", tickets: 1, pack: 3, img: "assets/items/parachute.png" },
  { id: "blowball", booth: "prize", name: "Floating ball", tickets: 4, img: "assets/items/blowball.png" },
  { id: "cube", booth: "prize", name: "Puzzle cube", tickets: 3, img: "assets/items/cube.png" },
  { id: "popit", booth: "prize", name: "Pop-it", tickets: 3, img: "assets/items/popit.png" },
  { id: "light-top", booth: "prize", name: "Light-up top", tickets: 6, img: "assets/items/light-top.png" },
  { id: "ice-cubes", booth: "prize", name: "Squishy cubes", tickets: 4, img: "assets/items/ice-cubes.png" },
  { id: "keychains", booth: "prize", name: "Fidget keychains", tickets: 10, img: "assets/items/keychains.png" },
  { id: "mazes", booth: "prize", name: "Maze cubes", tickets: 10, img: "assets/items/mazes.png" },
  { id: "butter", booth: "prize", name: "Butter slime", tickets: 12, img: "assets/items/butter.png" },
  { id: "bouncy", booth: "prize", name: "Bouncy balls", tickets: 10, img: "assets/items/bouncy.png" }
];

const byId = {};
for (const item of ITEMS) {
  item.pack = item.pack || 1;
  byId[item.id] = item;
}

const params = new URLSearchParams(location.search);
const locked = params.get("booth") === "candy" || params.get("booth") === "prize" ? params.get("booth") : null;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const state = {
  booth: "candy",
  tickets: null,
  haul: {},
  filter: "all",
  sheet: null,
  locked
};

const $ = (id) => document.getElementById(id);
const begin = $("begin");
const home = $("home");
const booth = $("booth");
const grid = $("grid");
const empty = $("empty");
const sheet = $("sheet");
const keypad = $("keypad");
const celebrate = $("celebrate");
const toast = $("toast");

let builtFor = null;
let buffer = "";
let resetArm = 0;
let idleTimer = 0;
let toastTimer = 0;
let view = "begin";
let viewTimer = 0;

function showView(next) {
  view = next;
  const map = { begin, home, booth };
  clearTimeout(viewTimer);
  for (const el of Object.values(map)) {
    if (el === map[next]) {
      el.hidden = false;
      el.classList.add("is-in");
    } else {
      el.classList.remove("is-in");
    }
  }
  viewTimer = setTimeout(() => {
    for (const [name, el] of Object.entries(map)) {
      if (name !== view) el.hidden = true;
    }
  }, reduceMotion ? 0 : 360);
}

function reveal(el) {
  el.hidden = false;
  if (reduceMotion) {
    el.classList.add("show");
    return;
  }
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("show")));
}

function conceal(el) {
  el.classList.remove("show");
  const finish = () => {
    if (!el.classList.contains("show")) el.hidden = true;
  };
  if (reduceMotion) finish();
  else setTimeout(finish, 320);
}

function isOpen(el) {
  return !el.hidden && el.classList.contains("show");
}

function spent() {
  let n = 0;
  for (const [id, qty] of Object.entries(state.haul)) n += qty * byId[id].tickets;
  return n;
}

function remaining() {
  if (state.tickets == null) return 0;
  return Math.max(0, state.tickets - spent());
}

function haulEntries() {
  return Object.entries(state.haul)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ ...byId[id], qty }));
}

function pieces(qty, item) {
  return qty * item.pack;
}

function ticketWord(n) {
  return n === 1 ? "ticket" : "tickets";
}

function fitText(item) {
  if (state.tickets == null) return "Tap to see it bigger";
  const have = state.haul[item.id] || 0;
  const moreQty = Math.floor(remaining() / item.tickets);
  const havePieces = pieces(have, item);
  if (moreQty < 1 && have === 0) {
    const need = item.tickets - remaining();
    return `Need ${need} more`;
  }
  if (have === 0) return `You can get ${pieces(moreQty, item)}`;
  if (moreQty < 1) return `${havePieces} in your haul`;
  return `${havePieces} in haul · ${pieces(moreQty, item)} more`;
}

function winCount() {
  if (state.tickets == null) return null;
  return ITEMS.filter((item) => item.booth === state.booth && remaining() >= item.tickets).length;
}

function noun() {
  return state.booth === "candy" ? "candies" : "prizes";
}

function showBegin() {
  showView("begin");
  clearTimeout(idleTimer);
}

function showHome() {
  showView("home");
  builtFor = null;
  armIdle();
}

function showBooth(which) {
  const changed = builtFor !== which;
  state.booth = which;
  $("tab-candy").classList.toggle("on", which === "candy");
  $("tab-prize").classList.toggle("on", which === "prize");
  $("tab-candy").hidden = state.locked === "prize";
  $("tab-prize").hidden = state.locked === "candy";
  const paint = () => {
    if (changed) buildGrid();
    render();
  };
  if (changed && view === "booth" && !reduceMotion) {
    grid.classList.add("swap");
    setTimeout(() => {
      if (view !== "booth" || state.booth !== which) {
        grid.classList.remove("swap");
        return;
      }
      paint();
      requestAnimationFrame(() => grid.classList.remove("swap"));
    }, 160);
  } else {
    paint();
  }
  showView("booth");
  armIdle();
}

function buildGrid() {
  builtFor = state.booth;
  grid.replaceChildren();
  const frag = document.createDocumentFragment();
  for (const item of ITEMS) {
    if (item.booth !== state.booth) continue;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card";
    btn.dataset.id = item.id;
    const art = document.createElement("span");
    art.className = "art";
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "";
    img.draggable = false;
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.hidden = true;
    art.append(img, badge);
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = item.name;
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = item.pack > 1
      ? `1 ${ticketWord(1)} · get ${item.pack}`
      : `${item.tickets} ${ticketWord(item.tickets)}`;
    const fit = document.createElement("span");
    fit.className = "fit";
    btn.append(art, name, price, fit);
    btn.addEventListener("click", () => openSheet(item.id));
    frag.append(btn);
  }
  grid.append(frag);
  grid.scrollTop = 0;
}

function render() {
  updateWallet();
  updateCards();
  updateDock();
  updateFilters();
  if (isOpen(sheet) || !sheet.hidden) renderSheet();
}

function updateWallet() {
  const count = $("ticket-count");
  const wins = $("win-count");
  const label = $("win-label");
  const n = winCount();
  count.textContent = state.tickets == null ? "?" : String(state.tickets);
  $("ticket-btn").setAttribute(
    "aria-label",
    state.tickets == null ? "Type how many tickets you have" : `${state.tickets} tickets. Tap to change`
  );
  if (state.tickets == null) {
    wins.textContent = "?";
    label.textContent = "Tap the ticket and type how many you have";
  } else if (state.tickets === 0) {
    wins.textContent = "0";
    label.textContent = "Earn a ticket at the games first";
  } else if (haulEntries().length) {
    wins.textContent = String(n);
    label.textContent = `still fit · ${remaining()} ${ticketWord(remaining())} left`;
  } else {
    wins.textContent = String(n);
    label.textContent = `${noun()} fit these tickets`;
  }
  $("minus").disabled = state.tickets == null || state.tickets === 0;
  $("minus5").disabled = state.tickets == null || state.tickets === 0;
}

function updateCards() {
  let shown = 0;
  for (const btn of grid.querySelectorAll(".card")) {
    const item = byId[btn.dataset.id];
    const have = state.haul[item.id] || 0;
    const yes = state.tickets != null && remaining() >= item.tickets;
    const fit = btn.querySelector(".fit");
    const badge = btn.querySelector(".badge");
    btn.classList.toggle("yes", yes);
    btn.classList.toggle("in", have > 0);
    badge.hidden = have === 0;
    if (have > 0) badge.textContent = String(pieces(have, item));
    fit.textContent = fitText(item);
    fit.classList.toggle("good", state.tickets != null && (yes || have > 0));
    fit.classList.toggle("short", state.tickets != null && !yes && have === 0);
    const hide = state.filter === "mine" && state.tickets != null && !yes && have === 0;
    btn.hidden = hide;
    if (!hide) shown += 1;
  }
  if (shown === 0) {
    empty.hidden = false;
    empty.textContent = state.tickets === 0
      ? "You need tickets from the games first."
      : "Nothing else fits. Take something off your haul, or earn a few more tickets.";
  } else {
    empty.hidden = true;
  }
}

function updateDock() {
  const entries = haulEntries();
  const things = entries.reduce((sum, entry) => sum + pieces(entry.qty, entry), 0);
  $("dock-title").textContent = entries.length ? `${things} in your haul` : "Your haul";
  if (state.tickets == null) $("dock-sub").textContent = "Type your tickets up top";
  else if (!entries.length) $("dock-sub").textContent = "Tap a candy or a prize";
  else $("dock-sub").textContent = `${spent()} ${ticketWord(spent())} · ${remaining()} left`;
  $("show").classList.toggle("waiting", entries.length === 0);
}

function updateFilters() {
  $("filter-all").classList.toggle("on", state.filter === "all");
  $("filter-mine").classList.toggle("on", state.filter === "mine");
}

function pop(el) {
  if (reduceMotion) return;
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
}

function shake(el) {
  if (reduceMotion) return;
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}

function say(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 2400);
}

function bump(delta) {
  if (state.tickets == null) {
    if (delta < 0) return;
    state.tickets = Math.min(999, delta);
  } else {
    state.tickets = Math.min(999, Math.max(0, state.tickets + delta));
  }
  render();
  pop($("ticket-count"));
  pop($("win-count"));
  armIdle();
}

function openSheet(id) {
  state.sheet = id;
  reveal(sheet);
  renderSheet();
  armIdle();
}

function closeSheet() {
  state.sheet = null;
  conceal(sheet);
}

function renderSheet() {
  const item = byId[state.sheet];
  if (!item) return;
  const have = state.haul[item.id] || 0;
  $("sheet-img").src = item.img;
  $("sheet-img").alt = item.name;
  $("sheet-name").textContent = item.name;
  $("sheet-price").textContent = item.pack > 1
    ? `1 ticket gets you ${item.pack}`
    : `${item.tickets} ${ticketWord(item.tickets)} each`;
  if (state.tickets == null) {
    $("sheet-fit").textContent = "Type your tickets to see how many you can get.";
  } else {
    const moreQty = Math.floor(remaining() / item.tickets);
    const need = item.tickets - remaining();
    if (have === 0 && moreQty < 1) {
      $("sheet-fit").textContent = `You need ${need} more ${ticketWord(need)} for this one.`;
    } else if (have === 0) {
      $("sheet-fit").textContent = `You can get ${pieces(moreQty, item)}.`;
    } else if (moreQty < 1) {
      $("sheet-fit").textContent = `${pieces(have, item)} in your haul. That's all that fits.`;
    } else {
      $("sheet-fit").textContent = `${pieces(have, item)} in your haul. Room for ${pieces(moreQty, item)} more.`;
    }
  }
  $("sheet-qty").textContent = String(pieces(have, item));
  $("sheet-qty-label").textContent = item.pack > 1 ? "toys in your haul" : "in your haul";
  $("sheet-note").textContent = have
    ? `${have * item.tickets} ${ticketWord(have * item.tickets)} for this pick`
    : "";
  $("sheet-dec").disabled = have === 0;
  $("sheet-inc").disabled = state.tickets != null && remaining() < item.tickets;
  const also = $("sheet-also");
  also.replaceChildren();
  if (state.tickets == null) return;
  const ideas = ITEMS.filter((other) => other.id !== item.id && other.booth === state.booth && remaining() >= other.tickets)
    .slice(0, 4);
  for (const other of ideas) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "also";
    const img = document.createElement("img");
    img.src = other.img;
    img.alt = "";
    const name = document.createElement("b");
    name.textContent = other.name;
    const cost = document.createElement("span");
    cost.textContent = `${other.tickets} ${ticketWord(other.tickets)}`;
    button.append(img, name, cost);
    button.addEventListener("click", () => openSheet(other.id));
    also.append(button);
  }
}

function addOne() {
  const item = byId[state.sheet];
  if (!item) return;
  if (state.tickets == null) {
    openKeypad();
    return;
  }
  if (remaining() < item.tickets) {
    shake($("sheet-inc"));
    say(`You need ${item.tickets - remaining()} more ${ticketWord(item.tickets - remaining())}.`);
    return;
  }
  state.haul[item.id] = (state.haul[item.id] || 0) + 1;
  if (navigator.vibrate) navigator.vibrate(12);
  render();
  pop($("sheet-qty"));
  armIdle();
}

function removeOne() {
  const item = byId[state.sheet];
  if (!item || !state.haul[item.id]) return;
  state.haul[item.id] -= 1;
  if (state.haul[item.id] <= 0) delete state.haul[item.id];
  render();
  armIdle();
}

function openKeypad() {
  buffer = state.tickets == null ? "" : String(state.tickets);
  paintKey();
  reveal(keypad);
  armIdle();
}

function closeKeypad() {
  conceal(keypad);
}

function paintKey() {
  $("keypad-value").textContent = buffer === "" ? "?" : buffer;
}

function pressKey(key) {
  if (key === "c") buffer = "";
  else if (key === "b") buffer = buffer.slice(0, -1);
  else if (buffer === "0") buffer = key;
  else if (buffer.length < 3) buffer += key;
  paintKey();
  armIdle();
}

function commitKey() {
  state.tickets = buffer === "" ? null : Math.min(999, parseInt(buffer, 10) || 0);
  closeKeypad();
  render();
  pop($("ticket-count"));
  pop($("win-count"));
  armIdle();
}

function surprise() {
  if (state.tickets == null) {
    shake($("wallet"));
    openKeypad();
    return;
  }
  const before = spent();
  const pool = ITEMS.filter((item) => item.booth === state.booth).sort((a, b) => a.tickets - b.tickets);
  for (let pass = 0; pass < 2; pass += 1) {
    const order = pass === 0 ? pool : [...pool].sort(() => Math.random() - 0.5);
    for (const item of order) {
      if (remaining() >= item.tickets) state.haul[item.id] = (state.haul[item.id] || 0) + 1;
    }
  }
  render();
  if (spent() === before) say("Your tickets are already in the haul.");
  else openCelebrate(true);
}

function openCelebrate(isSurprise) {
  const entries = haulEntries();
  if (!entries.length) {
    shake($("dock"));
    say("Tap something you want first.");
    return;
  }
  $("cel-title").textContent = isSurprise ? "Surprise haul" : "Your haul";
  const list = $("cel-list");
  list.replaceChildren();
  const ordered = entries.sort((a, b) => a.booth.localeCompare(b.booth) || a.name.localeCompare(b.name));
  for (const entry of ordered) {
    const li = document.createElement("li");
    const left = document.createElement("div");
    const title = document.createElement("div");
    const kind = document.createElement("i");
    kind.className = "kind";
    kind.textContent = entry.booth === "candy" ? "Candy" : "Prize";
    title.append(kind, document.createTextNode(`${entry.name} × ${pieces(entry.qty, entry)}`));
    left.append(title);
    if (entry.pack > 1) {
      const note = document.createElement("span");
      note.textContent = "1 ticket gets you 3";
      left.append(note);
    }
    const cost = document.createElement("div");
    cost.className = "cost";
    cost.textContent = `${entry.qty * entry.tickets} ${ticketWord(entry.qty * entry.tickets)}`;
    li.append(left, cost);
    list.append(li);
  }
  $("cel-spent").textContent = `${spent()} ${ticketWord(spent())} to hand over`;
  $("cel-left").textContent = state.tickets == null ? "" : `${remaining()} left`;
  closeSheet();
  reveal(celebrate);
  burst();
  armIdle();
}

function closeCelebrate() {
  conceal(celebrate);
  $("confetti").replaceChildren();
}

function burst() {
  const layer = $("confetti");
  layer.replaceChildren();
  if (reduceMotion) return;
  const colors = ["#e10600", "#ffc83d", "#fffef8", "#ff7ab6", "#3ec6ff", "#7c1b2a"];
  for (let i = 0; i < 80; i += 1) {
    const bit = document.createElement("i");
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = `${Math.random() * 0.35}s`;
    bit.style.animationDuration = `${1.7 + Math.random() * 1.3}s`;
    bit.style.transform = `rotate(${Math.random() * 80}deg)`;
    layer.append(bit);
  }
  setTimeout(() => { if (isOpen(celebrate)) layer.replaceChildren(); }, 3400);
}

function resetAll() {
  state.tickets = null;
  state.haul = {};
  state.filter = "all";
  closeSheet();
  closeKeypad();
  closeCelebrate();
  $("reset").textContent = "Start over";
  resetArm = 0;
  if (state.locked) showBooth(state.locked);
  else showBegin();
}

function armIdle() {
  clearTimeout(idleTimer);
  if (view === "begin") return;
  idleTimer = setTimeout(resetAll, 40000);
}

begin.addEventListener("click", () => {
  if (state.locked) showBooth(state.locked);
  else showHome();
});

document.querySelectorAll(".door, .tab").forEach((button) => {
  button.addEventListener("click", () => {
    const which = button.dataset.booth;
    if (state.locked && which !== state.locked) return;
    showBooth(which);
  });
});

$("plus").addEventListener("click", () => bump(1));
$("minus").addEventListener("click", () => bump(-1));
$("plus5").addEventListener("click", () => bump(5));
$("minus5").addEventListener("click", () => bump(-5));
$("type").addEventListener("click", openKeypad);
$("ticket-btn").addEventListener("click", openKeypad);

$("filter-all").addEventListener("click", () => {
  state.filter = "all";
  render();
});

$("filter-mine").addEventListener("click", () => {
  if (state.tickets == null) {
    openKeypad();
    return;
  }
  state.filter = "mine";
  render();
  grid.scrollTop = 0;
});

$("sheet-close").addEventListener("click", closeSheet);
$("sheet-scrim").addEventListener("click", closeSheet);
$("sheet-inc").addEventListener("click", addOne);
$("sheet-dec").addEventListener("click", removeOne);
$("surprise").addEventListener("click", surprise);
$("show").addEventListener("click", () => openCelebrate(false));
$("cel-back").addEventListener("click", () => { closeCelebrate(); armIdle(); });
$("cel-done").addEventListener("click", resetAll);

$("keypad-scrim").addEventListener("click", closeKeypad);
$("keypad-done").addEventListener("click", commitKey);
document.querySelectorAll(".keys button").forEach((button) => {
  button.addEventListener("click", () => pressKey(button.dataset.key));
});

$("reset").addEventListener("click", () => {
  const now = Date.now();
  if (now - resetArm < 2500) resetAll();
  else {
    resetArm = now;
    $("reset").textContent = "Tap again";
    setTimeout(() => {
      if (Date.now() - resetArm >= 2400 && $("reset").textContent === "Tap again") {
        $("reset").textContent = "Start over";
        resetArm = 0;
      }
    }, 2600);
  }
});

grid.addEventListener("scroll", () => armIdle(), { passive: true });

document.addEventListener("pointerdown", armIdle);

document.addEventListener("keydown", (event) => {
  armIdle();
  if (isOpen(keypad)) {
    if (event.key >= "0" && event.key <= "9") pressKey(event.key);
    else if (event.key === "Backspace") pressKey("b");
    else if (event.key === "Enter") commitKey();
    else if (event.key === "Escape") closeKeypad();
    return;
  }
  if (event.key === "Escape") {
    if (isOpen(sheet)) closeSheet();
    else if (isOpen(celebrate)) closeCelebrate();
    else if (view === "booth" && !state.locked) showHome();
    else if (view === "home") showBegin();
  } else if (event.key === "Enter" && view === "begin") {
    begin.click();
  } else if (event.key >= "0" && event.key <= "9" && !isOpen(sheet) && !isOpen(celebrate) && view === "booth") {
    openKeypad();
    pressKey(event.key);
  }
});

showBegin();
fitStage();
