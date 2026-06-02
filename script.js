// ------------------------------------------------------------
//  READING & WRITING LESSONS (vocab, sequencing, comprehension)
// ------------------------------------------------------------
function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ----- VOCABULARY lessons (1st, 2nd, 3rd) -----
const vocab1 = [
  { learn: "Words tell us about things. 'Cat' is a furry pet.", visual: "🐱 = cat", example: "The ___ sleeps. (cat/dog)", hint: "it meows", gen: () => {
    let pairs = [["cat", "🐱"], ["dog", "🐶"], ["sun", "☀️"], ["big", "🐘"], ["red", "🔴"]];
    let [word, emoji] = pairs[rnd(0, 4)];
    return { q: `What word means ${emoji}?`, ans: word, opts: shuffle([word, "house", "run", "blue"]) };
  } },
  { learn: "Opposite words: big/small, happy/sad.", visual: "😊 happy vs 😞 sad", example: "The opposite of 'hot' is ___", hint: "ice is ...", gen: () => {
    return { q: `Opposite of 'hot'?`, ans: "cold", opts: shuffle(["cold", "warm", "tall", "fast"]) };
  } },
  { learn: "Words can be alike: 'happy' and 'glad' mean almost the same.", visual: "😄 happy = glad", example: "Another word for 'big' is ___", hint: "it starts with 'l'", gen: () => {
    return { q: `Another word for 'big'?`, ans: "large", opts: shuffle(["large", "small", "tall", "round"]) };
  } },
  { learn: "Use words to describe: the soft pillow.", visual: "🛏️ soft", example: "The pillow is ___.", hint: "opposite of hard", gen: () => {
    return { q: `The pillow is ___?`, ans: "soft", opts: shuffle(["soft", "hard", "loud", "blue"]) };
  } },
  { learn: "Action words: run, jump, eat.", visual: "🏃 run", example: "A fish can ___.", hint: "move in water", gen: () => {
    return { q: `A fish can ___?`, ans: "swim", opts: shuffle(["swim", "fly", "run", "jump"]) };
  } }
];

const vocab2 = [
  { learn: "Compound words: sun + flower = sunflower.", visual: "🌻 sunflower", example: "rain + bow = ___", hint: "color in the sky", gen: () => {
    return { q: `rain + bow = ___?`, ans: "rainbow", opts: shuffle(["rainbow", "raincoat", "sunbow", "rainfall"]) };
  } },
  { learn: "Synonyms: words that mean the same. 'happy' and 'joyful'.", visual: "😊 happy = joyful", example: "Another word for 'fast' is ___", hint: "swift", gen: () => {
    return { q: `Another word for 'fast'?`, ans: "quick", opts: shuffle(["quick", "slow", "tall", "short"]) };
  } },
  { learn: "Antonyms: words that are opposites. 'day' and 'night'.", visual: "☀️ day ↔ 🌙 night", example: "Opposite of 'day'", hint: "when we sleep", gen: () => {
    return { q: `Opposite of 'day'?`, ans: "night", opts: shuffle(["night", "light", "dark", "noon"]) };
  } },
  { learn: "Homophones: words that sound same but different. 'see' and 'sea'.", visual: "👀 see / 🌊 sea", example: "I ___ with my eyes.", hint: "not the ocean", gen: () => {
    return { q: `I ___ with my eyes.`, ans: "see", opts: shuffle(["see", "sea", "saw", "sees"]) };
  } },
  { learn: "Context clues: use other words to figure meaning. The 'enormous' elephant was huge.", visual: "🐘 enormous = very big", example: "The 'tiny' mouse was ___", hint: "very small", gen: () => {
    return { q: `'tiny' means ___?`, ans: "very small", opts: shuffle(["very small", "very big", "fast", "loud"]) };
  } }
];

const vocab3 = [
  { learn: "Synonyms: many words for one meaning. 'said' can be 'whispered', 'shouted'.", visual: "🗣️ said = whispered/shouted", example: "Another word for 'said' quietly is ___", hint: "soft voice", gen: () => {
    return { q: `Another word for 'said' quietly?`, ans: "whispered", opts: shuffle(["whispered", "shouted", "cried", "laughed"]) };
  } },
  { learn: "Figurative language: 'time flies' means time passes quickly.", visual: "⏰✈️ time flies", example: "'It's raining cats and dogs' means ___", hint: "heavy rain", gen: () => {
    return { q: `'raining cats and dogs' means?`, ans: "heavy rain", opts: shuffle(["heavy rain", "sunny", "windy", "snow"]) };
  } },
  { learn: "Prefixes: 'un-' means not. 'unhappy' means not happy.", visual: "😞 unhappy", example: "'unfair' means ___", hint: "not fair", gen: () => {
    return { q: `'unfair' means?`, ans: "not fair", opts: shuffle(["not fair", "very fair", "fair again", "fair"]) };
  } },
  { learn: "Suffixes: '-ful' means full of. 'joyful' means full of joy.", visual: "😄 joyful", example: "'hopeful' means ___", hint: "full of hope", gen: () => {
    return { q: `'hopeful' means?`, ans: "full of hope", opts: shuffle(["full of hope", "without hope", "hope again", "hoping"]) };
  } },
  { learn: "Context clues in longer sentences.", visual: "📖", example: "The 'arid' desert had no water.", hint: "dry", gen: () => {
    return { q: `'arid' means?`, ans: "very dry", opts: shuffle(["very dry", "wet", "cold", "windy"]) };
  } }
];

// ----- SEQUENCING lessons -----
const seq1 = [
  { learn: "First, next, last. What happens after?", visual: "🌱 → 🌻 → 🌼", example: "First we plant a seed, next it grows, last it ___.", hint: "blooms", gen: () => {
    return { q: `After morning comes ___.`, ans: "afternoon", opts: shuffle(["afternoon", "night", "evening", "morning"]) };
  } },
  { learn: "Order in a story: beginning, middle, end.", visual: "📖", example: "First we wake up, next we eat breakfast, last we ___.", hint: "go to school", gen: () => {
    return { q: `After breakfast, we ___.`, ans: "go to school", opts: shuffle(["go to school", "sleep", "eat dinner", "play"]) };
  } }
];

const seq2 = [
  { learn: "Put sentences in order. 1. I put on shoes. 2. I tie them. 3. I walk.", visual: "👟👟", example: "First, put on shoes. Next, tie them. Last, ___.", hint: "walk", gen: () => {
    return { q: `After tying shoes, you ___.`, ans: "walk", opts: shuffle(["walk", "sleep", "eat", "jump"]) };
  } },
  { learn: "Story order: beginning, middle, end.", visual: "📘", example: "First, the caterpillar hatches. Next, it eats. Last, it becomes a ___.", hint: "butterfly", gen: () => {
    return { q: `What comes last? caterpillar → eats → ___`, ans: "butterfly", opts: shuffle(["butterfly", "egg", "leaf", "cocoon"]) };
  } }
];

const seq3 = [
  { learn: "Logical order: instructions, events.", visual: "🍪 recipe", example: "First, mix ingredients. Next, bake. Last, ___.", hint: "eat", gen: () => {
    return { q: `After baking cookies, you ___.`, ans: "eat them", opts: shuffle(["eat them", "mix more", "turn off oven", "buy more"]) };
  } },
  { learn: "Cause and effect: because... then...", visual: "⚡→💡", example: "Because it rained, the ground got ___.", hint: "wet", gen: () => {
    return { q: `Because it rained, the ground got ___.`, ans: "wet", opts: shuffle(["wet", "dry", "hot", "cold"]) };
  } }
];

// ----- COMPREHENSION lessons -----
const comp1 = [
  { learn: "Read a short story. Answer one question.", visual: "🐭", story: "The mouse is small. It likes cheese.", example: "What does the mouse like?", hint: "yellow food", gen: () => {
    return { passage: "The mouse is small. It likes cheese.", q: "What does the mouse like?", ans: "cheese", opts: shuffle(["cheese", "cat", "bread", "rice"]) };
  } },
  { learn: "Find the main idea.", visual: "☀️", story: "The sun is hot. It gives light.", example: "What is this about?", hint: "star", gen: () => {
    return { passage: "The sun is hot. It gives light.", q: "What is this about?", ans: "the sun", opts: shuffle(["the sun", "the moon", "stars", "clouds"]) };
  } }
];

const comp2 = [
  { learn: "Read a short paragraph. Answer who, what, where.", visual: "🏖️", story: "Tom and Sara went to the beach. They built a big sandcastle.", example: "Where did they go?", hint: "sand and water", gen: () => {
    return { passage: "Tom and Sara went to the beach. They built a big sandcastle.", q: "Where did they go?", ans: "beach", opts: shuffle(["beach", "park", "school", "store"]) };
  } },
  { learn: "Main idea and details.", visual: "📖", story: "Birds build nests in trees. They use twigs and leaves.", example: "What do birds build?", hint: "home", gen: () => {
    return { passage: "Birds build nests in trees. They use twigs and leaves.", q: "What do birds build?", ans: "nests", opts: shuffle(["nests", "trees", "twigs", "leaves"]) };
  } }
];

const comp3 = [
  { learn: "Longer passage. Make an inference.", visual: "🧥❄️", story: "Emma put on her warm coat and boots. Snow was falling.", example: "What season is it?", hint: "cold and snow", gen: () => {
    return { passage: "Emma put on her warm coat and boots. Snow was falling.", q: "What season is it?", ans: "winter", opts: shuffle(["winter", "summer", "spring", "fall"]) };
  } },
  { learn: "Character feelings.", visual: "😢", story: "Lily lost her favorite doll. She looked everywhere but couldn't find it.", example: "How does Lily feel?", hint: "sad", gen: () => {
    return { passage: "Lily lost her favorite doll. She looked everywhere but couldn't find it.", q: "How does Lily feel?", ans: "sad", opts: shuffle(["sad", "happy", "excited", "scared"]) };
  } }
];

// All categories
const CATEGORIES = {
  vocab1: { label: '1st Grade Vocabulary', icon: '🔤', grade: 1, lessons: vocab1 },
  seq1: { label: '1st Grade Sequencing', icon: '📝', grade: 1, lessons: seq1 },
  comp1: { label: '1st Grade Comprehension', icon: '📖', grade: 1, lessons: comp1 },
  vocab2: { label: '2nd Grade Vocabulary', icon: '🔤🔤', grade: 2, lessons: vocab2 },
  seq2: { label: '2nd Grade Sequencing', icon: '📝📝', grade: 2, lessons: seq2 },
  comp2: { label: '2nd Grade Comprehension', icon: '📖📖', grade: 2, lessons: comp2 },
  vocab3: { label: '3rd Grade Vocabulary', icon: '🔤✨', grade: 3, lessons: vocab3 },
  seq3: { label: '3rd Grade Sequencing', icon: '📝✨', grade: 3, lessons: seq3 },
  comp3: { label: '3rd Grade Comprehension', icon: '📖✨', grade: 3, lessons: comp3 }
};

// State
const STORAGE_KEY = 'readwrite_v2';
let progress = {};
let currentCat = '', currentLvl = 1, questions = [], qIdx = 0, correct = 0, wrong = 0, mistakes = [];
let answered = false, hintCount = 0;
let lessonData = null;

function initProgress() {
  for (let c in CATEGORIES) {
    if (!progress[c]) progress[c] = {};
    for (let l = 1; l <= 5; l++) {
      if (!progress[c][l]) progress[c][l] = { done: false, stars: 0 };
    }
  }
}

function saveProgress() {
  const blob = new Blob([JSON.stringify({ v: 1, progress })], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'readwrite_save.json';
  a.click();
  document.getElementById('saveLbl').textContent = '✅ Saved!';
  setTimeout(updateSaveLbl, 2000);
}

function loadProgress() { document.getElementById('loadFile').click(); }

function loadFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      if (d && d.v === 1 && d.progress) {
        progress = d.progress;
        initProgress();
        updateSaveLbl();
        document.getElementById('saveLbl').textContent = '✅ Loaded!';
        setTimeout(updateSaveLbl, 2000);
      } else alert('Invalid save');
    } catch { alert('Could not read'); }
  };
  r.readAsText(file);
  e.target.value = '';
}

function updateSaveLbl() {
  let done = 0, total = 0, stars = 0;
  for (let c in CATEGORIES) {
    for (let l = 1; l <= 5; l++) {
      total++;
      if (progress[c]?.[l]?.done) {
        done++;
        stars += progress[c][l].stars || 0;
      }
    }
  }
  document.getElementById('saveLbl').textContent = done ? `${done}/${total} lessons • ⭐ ${stars}` : '⭐ start';
  let chart = document.getElementById('progressChart');
  if (chart) {
    let pct = Math.round((done / total) * 100) || 0;
    chart.innerHTML = `<h3 style="color:#d9b8ff;">📊 my reading trail</h3><div class="progress-bar-cont" style="background:#1a1428;border-radius:30px;"><div class="progress-bar-fill" style="width:${pct}%;height:20px;border-radius:30px;background:linear-gradient(90deg,#b497d6,#d9b8ff);"></div></div><div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:15px;color:#e0d2ff;">⭐ ${stars} stars • ${done}/${total} lessons</div>`;
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showHome() {
  updateSaveLbl();
  showScreen('homeScreen');
}

function openCategory(c) {
  currentCat = c;
  document.getElementById('levelsTitle').textContent = CATEGORIES[c].label + ' — choose lesson';
  const grid = document.getElementById('levelsGrid');
  grid.innerHTML = '';
  const emojis = ['🌱', '🌿', '🍃', '🌟', '🏆'];
  if (!progress[c]) progress[c] = {};
  for (let l = 1; l <= 5; l++) {
    if (!progress[c][l]) progress[c][l] = { done: false, stars: 0 };
    const p = progress[c][l];
    const btn = document.createElement('button');
    btn.className = 'lv-btn' + (p.done ? ' done' : '');
    btn.innerHTML = `<span class="lv-icon">${emojis[l - 1]}</span>lesson ${l}${p.done ? `<div class="lv-score">⭐ ${p.stars}</div>` : ''}`;
    btn.onclick = (ll => () => startLesson(c, ll))(l);
    grid.appendChild(btn);
  }
  showScreen('levelsScreen');
}

function startLesson(cat, lvl) {
  currentLvl = lvl;
  qIdx = 0;
  correct = 0;
  wrong = 0;
  mistakes = [];
  answered = false;
  hintCount = 0;
  let lessons = CATEGORIES[cat].lessons;
  lessonData = lessons[(lvl - 1) % lessons.length];
  questions = [];
  for (let i = 0; i < 3; i++) questions.push(lessonData.gen());
  document.getElementById('quizLabel').textContent = `${CATEGORIES[cat].label} · lesson ${lvl}`;
  showScreen('quizScreen');
  renderLesson();
}

function renderLesson() {
  let visual = lessonData.visual || '📖';
  let storyHtml = lessonData.story ? `<div class="story-passage">${lessonData.story}</div>` : '';
  document.getElementById('lessonContainer').innerHTML = `
    <div class="lesson-card">
      <div class="lesson-badge">📘 learn first</div>
      <div class="lesson-title">${lessonData.learn}</div>
      <div class="lesson-visual">${visual}</div>
      <div class="lesson-explanation">✨ ${lessonData.example}</div>
      ${storyHtml}
    </div>
  `;
  loadQuestion();
}

function loadQuestion() {
  if (qIdx >= questions.length) {
    showResult();
    return;
  }
  answered = false;
  const q = questions[qIdx];
  document.getElementById('quizQNum').textContent = `question ${qIdx + 1}/${questions.length}`;
  document.getElementById('qsCorrect').textContent = correct;
  document.getElementById('qsWrong').textContent = wrong;
  document.getElementById('progFill').style.width = (qIdx / questions.length * 100) + '%';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('checkBtn').style.display = 'inline-flex';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('hintBtn').disabled = false;
  document.getElementById('hintBtn').style.display = qIdx < 2 ? 'inline-flex' : 'none';

  let passageHtml = q.passage ? `<div class="story-passage">${q.passage}</div>` : '';
  let questionText = q.q || q.question || 'choose the right word';

  let optsHtml = '<div class="options-grid">';
  q.opts.forEach((opt, i) => optsHtml += `<button class="opt-btn" data-opt-index="${i}" data-opt-value="${opt}">${opt}</button>`);
  optsHtml += '</div>';

  document.getElementById('questionContainer').innerHTML = `
    <div class="q-card">
      <div class="question-text">${questionText}</div>
      ${passageHtml}
      ${optsHtml}
    </div>
  `;

  document.querySelectorAll('.opt-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.optIndex);
      const val = btn.dataset.optValue;
      selectOption(idx, val);
    };
  });
}

function selectOption(idx, val) {
  if (answered) return;
  answered = true;
  const q = questions[qIdx];
  let isCorrect = (val == q.ans);
  if (isCorrect) correct++;
  else {
    wrong++;
    mistakes.push({ q: q.q || q.question || q.passage, exp: `answer: ${q.ans}` });
  }
  let btns = document.querySelectorAll('.opt-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (btn.innerText == q.ans) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });
  let fb = document.getElementById('feedback');
  fb.textContent = isCorrect ? '✅ correct! ' + (lessonData.hint || '') : '❌ try again – ' + (lessonData.hint || '');
  fb.className = 'feedback show ' + (isCorrect ? 'ok' : 'bad');
  document.getElementById('checkBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-flex';
  document.getElementById('qsCorrect').textContent = correct;
  document.getElementById('qsWrong').textContent = wrong;
}

function checkAnswer() { /* handled by selectOption */ }

function showHint() {
  hintCount++;
  let hintDiv = document.createElement('div');
  hintDiv.className = 'hint-box show';
  hintDiv.style.cssText = 'background:#322b4a;border-radius:40px;padding:15px;margin:10px 0;font-weight:800;border:2px solid #b497d6;color:#e0d2ff;';
  hintDiv.textContent = '💡 ' + (lessonData.hint || 'think carefully');
  document.getElementById('questionContainer').after(hintDiv);
  document.getElementById('hintBtn').disabled = true;
}

function nextQuestion() {
  qIdx++;
  if (qIdx < questions.length) loadQuestion();
  else showResult();
}

function showResult() {
  let total = questions.length;
  let stars = Math.min(3, Math.ceil(correct / 1.5) || 1);
  let passed = correct >= 2;
  if (passed) {
    progress[currentCat][currentLvl].done = true;
    progress[currentCat][currentLvl].stars = Math.max(progress[currentCat][currentLvl].stars || 0, stars);
  }
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, progress })); } catch { }
  updateSaveLbl();
  document.getElementById('resEmoji').textContent = stars === 3 ? '🏆' : (stars === 2 ? '🌟' : '⭐');
  document.getElementById('resStars').innerHTML = '⭐'.repeat(stars);
  document.getElementById('resMsg').textContent = `you got ${correct} out of ${total} correct. ${passed ? 'lesson passed!' : 'try again to earn stars'}`;
  let ms = document.getElementById('mistakeSection');
  ms.innerHTML = mistakes.length ? '<div style="font-weight:900;margin-bottom:8px;color:#d9b8ff;">📝 keep practicing:</div>' + mistakes.map(m => `<div class="mistake-item">❓ ${m.q}<br>💡 ${m.exp}</div>`).join('') : '';
  document.getElementById('retryBtn').onclick = () => startLesson(currentCat, currentLvl);
  let nb = document.getElementById('nextLvBtn');
  if (passed && currentLvl < 5) {
    nb.style.display = 'inline-flex';
    nb.onclick = () => startLesson(currentCat, currentLvl + 1);
  } else nb.style.display = 'none';
  showScreen('resultScreen');
}

function leaveQuiz() {
  if (confirm('leave? progress won\'t be saved')) showHome();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Menu card clicks
  document.querySelectorAll('.menu-card[data-category]').forEach(card => {
    card.addEventListener('click', function () { openCategory(this.dataset.category); });
  });

  // Top bar buttons
  document.getElementById('saveBtn').addEventListener('click', saveProgress);
  document.getElementById('loadBtn').addEventListener('click', loadProgress);
  document.getElementById('loadFile').addEventListener('change', loadFile);

  // Navigation buttons
  document.getElementById('backToHomeBtn').addEventListener('click', showHome);
  document.getElementById('leaveQuizBtn').addEventListener('click', leaveQuiz);
  document.getElementById('homeFromResultBtn').addEventListener('click', showHome);

  // Quiz buttons
  document.getElementById('hintBtn').addEventListener('click', showHint);
  document.getElementById('checkBtn').addEventListener('click', checkAnswer);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);

  // Initialize
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      let d = JSON.parse(raw);
      if (d.v === 1 && d.progress) progress = d.progress;
    }
  } catch { }
  initProgress();
  showHome();
});
