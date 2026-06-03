// ------------------------------------------------------------
//  READING & WRITING LESSONS (vocab, sequencing, comprehension)
// ------------------------------------------------------------
function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ----- VOCABULARY lessons (1st, 2nd, 3rd) -----
const vocab1 = [
  { id: "v1_01", title: "Basic Words", learn: "Words tell us about things. 'Cat' is a furry pet.", visual: "🐱 = cat", example: "The ___ sleeps. (cat/dog)", hint: "it meows", gen: () => {
    let pairs = [["cat", "🐱"], ["dog", "🐶"], ["sun", "☀️"], ["big", "🐘"], ["red", "🔴"]];
    let [word, emoji] = pairs[rnd(0, 4)];
    return { q: `What word means ${emoji}?`, ans: word, opts: shuffle([word, "house", "run", "blue"]) };
  } },
  { id: "v1_02", title: "Opposites", learn: "Opposite words: big/small, happy/sad.", visual: "😊 happy vs 😞 sad", example: "The opposite of 'hot' is ___", hint: "ice is ...", gen: () => {
    return { q: `Opposite of 'hot'?`, ans: "cold", opts: shuffle(["cold", "warm", "tall", "fast"]) };
  } },
  { id: "v1_03", title: "Synonyms", learn: "Words can be alike: 'happy' and 'glad' mean almost the same.", visual: "😄 happy = glad", example: "Another word for 'big' is ___", hint: "it starts with 'l'", gen: () => {
    return { q: `Another word for 'big'?`, ans: "large", opts: shuffle(["large", "small", "tall", "round"]) };
  } },
  { id: "v1_04", title: "Describing Words", learn: "Use words to describe: the soft pillow.", visual: "🛏️ soft", example: "The pillow is ___.", hint: "opposite of hard", gen: () => {
    return { q: `The pillow is ___?`, ans: "soft", opts: shuffle(["soft", "hard", "loud", "blue"]) };
  } },
  { id: "v1_05", title: "Action Words", learn: "Action words: run, jump, eat.", visual: "🏃 run", example: "A fish can ___.", hint: "move in water", gen: () => {
    return { q: `A fish can ___?`, ans: "swim", opts: shuffle(["swim", "fly", "run", "jump"]) };
  } }
];

const vocab2 = [
  { id: "v2_01", title: "Compound Words", learn: "Compound words: sun + flower = sunflower.", visual: "🌻 sunflower", example: "rain + bow = ___", hint: "color in the sky", gen: () => {
    return { q: `rain + bow = ___?`, ans: "rainbow", opts: shuffle(["rainbow", "raincoat", "sunbow", "rainfall"]) };
  } },
  { id: "v2_02", title: "More Synonyms", learn: "Synonyms: words that mean the same. 'happy' and 'joyful'.", visual: "😊 happy = joyful", example: "Another word for 'fast' is ___", hint: "swift", gen: () => {
    return { q: `Another word for 'fast'?`, ans: "quick", opts: shuffle(["quick", "slow", "tall", "short"]) };
  } },
  { id: "v2_03", title: "More Antonyms", learn: "Antonyms: words that are opposites. 'day' and 'night'.", visual: "☀️ day ↔ 🌙 night", example: "Opposite of 'day'", hint: "when we sleep", gen: () => {
    return { q: `Opposite of 'day'?`, ans: "night", opts: shuffle(["night", "light", "dark", "noon"]) };
  } },
  { id: "v2_04", title: "Homophones", learn: "Homophones: words that sound same but different. 'see' and 'sea'.", visual: "👀 see / 🌊 sea", example: "I ___ with my eyes.", hint: "not the ocean", gen: () => {
    return { q: `I ___ with my eyes.`, ans: "see", opts: shuffle(["see", "sea", "saw", "sees"]) };
  } },
  { id: "v2_05", title: "Context Clues", learn: "Context clues: use other words to figure meaning. The 'enormous' elephant was huge.", visual: "🐘 enormous = very big", example: "The 'tiny' mouse was ___", hint: "very small", gen: () => {
    return { q: `'tiny' means ___?`, ans: "very small", opts: shuffle(["very small", "very big", "fast", "loud"]) };
  } }
];

const vocab3 = [
  { id: "v3_01", title: "Advanced Synonyms", learn: "Synonyms: many words for one meaning. 'said' can be 'whispered', 'shouted'.", visual: "🗣️ said = whispered/shouted", example: "Another word for 'said' quietly is ___", hint: "soft voice", gen: () => {
    return { q: `Another word for 'said' quietly?`, ans: "whispered", opts: shuffle(["whispered", "shouted", "cried", "laughed"]) };
  } },
  { id: "v3_02", title: "Figurative Language", learn: "Figurative language: 'time flies' means time passes quickly.", visual: "⏰✈️ time flies", example: "'It's raining cats and dogs' means ___", hint: "heavy rain", gen: () => {
    return { q: `'raining cats and dogs' means?`, ans: "heavy rain", opts: shuffle(["heavy rain", "sunny", "windy", "snow"]) };
  } },
  { id: "v3_03", title: "Prefixes", learn: "Prefixes: 'un-' means not. 'unhappy' means not happy.", visual: "😞 unhappy", example: "'unfair' means ___", hint: "not fair", gen: () => {
    return { q: `'unfair' means?`, ans: "not fair", opts: shuffle(["not fair", "very fair", "fair again", "fair"]) };
  } },
  { id: "v3_04", title: "Suffixes", learn: "Suffixes: '-ful' means full of. 'joyful' means full of joy.", visual: "😄 joyful", example: "'hopeful' means ___", hint: "full of hope", gen: () => {
    return { q: `'hopeful' means?`, ans: "full of hope", opts: shuffle(["full of hope", "without hope", "hope again", "hoping"]) };
  } },
  { id: "v3_05", title: "Advanced Context", learn: "Context clues in longer sentences.", visual: "📖", example: "The 'arid' desert had no water.", hint: "dry", gen: () => {
    return { q: `'arid' means?`, ans: "very dry", opts: shuffle(["very dry", "wet", "cold", "windy"]) };
  } }
];

// ----- SEQUENCING lessons -----
const seq1 = [
  { id: "s1_01", title: "First, Next, Last", learn: "First, next, last. What happens after?", visual: "🌱 → 🌻 → 🌼", example: "First we plant a seed, next it grows, last it ___.", hint: "blooms", gen: () => {
    return { q: `After morning comes ___.`, ans: "afternoon", opts: shuffle(["afternoon", "night", "evening", "morning"]) };
  } },
  { id: "s1_02", title: "Story Order", learn: "Order in a story: beginning, middle, end.", visual: "📖", example: "First we wake up, next we eat breakfast, last we ___.", hint: "go to school", gen: () => {
    return { q: `After breakfast, we ___.`, ans: "go to school", opts: shuffle(["go to school", "sleep", "eat dinner", "play"]) };
  } }
];

const seq2 = [
  { id: "s2_01", title: "Put in Order", learn: "Put sentences in order. 1. I put on shoes. 2. I tie them. 3. I walk.", visual: "👟👟", example: "First, put on shoes. Next, tie them. Last, ___.", hint: "walk", gen: () => {
    return { q: `After tying shoes, you ___.`, ans: "walk", opts: shuffle(["walk", "sleep", "eat", "jump"]) };
  } },
  { id: "s2_02", title: "Caterpillar Story", learn: "Story order: beginning, middle, end.", visual: "📘", example: "First, the caterpillar hatches. Next, it eats. Last, it becomes a ___.", hint: "butterfly", gen: () => {
    return { q: `What comes last? caterpillar → eats → ___`, ans: "butterfly", opts: shuffle(["butterfly", "egg", "leaf", "cocoon"]) };
  } }
];

const seq3 = [
  { id: "s3_01", title: "Instructions Order", learn: "Logical order: instructions, events.", visual: "🍪 recipe", example: "First, mix ingredients. Next, bake. Last, ___.", hint: "eat", gen: () => {
    return { q: `After baking cookies, you ___.`, ans: "eat them", opts: shuffle(["eat them", "mix more", "turn off oven", "buy more"]) };
  } },
  { id: "s3_02", title: "Cause & Effect", learn: "Cause and effect: because... then...", visual: "⚡→💡", example: "Because it rained, the ground got ___.", hint: "wet", gen: () => {
    return { q: `Because it rained, the ground got ___.`, ans: "wet", opts: shuffle(["wet", "dry", "hot", "cold"]) };
  } }
];

// ----- COMPREHENSION lessons -----
const comp1 = [
  { id: "c1_01", title: "Mouse Story", learn: "Read a short story. Answer one question.", visual: "🐭", story: "The mouse is small. It likes cheese.", example: "What does the mouse like?", hint: "yellow food", gen: () => {
    return { passage: "The mouse is small. It likes cheese.", q: "What does the mouse like?", ans: "cheese", opts: shuffle(["cheese", "cat", "bread", "rice"]) };
  } },
  { id: "c1_02", title: "Sun Story", learn: "Find the main idea.", visual: "☀️", story: "The sun is hot. It gives light.", example: "What is this about?", hint: "star", gen: () => {
    return { passage: "The sun is hot. It gives light.", q: "What is this about?", ans: "the sun", opts: shuffle(["the sun", "the moon", "stars", "clouds"]) };
  } }
];

const comp2 = [
  { id: "c2_01", title: "Beach Day", learn: "Read a short paragraph. Answer who, what, where.", visual: "🏖️", story: "Tom and Sara went to the beach. They built a big sandcastle.", example: "Where did they go?", hint: "sand and water", gen: () => {
    return { passage: "Tom and Sara went to the beach. They built a big sandcastle.", q: "Where did they go?", ans: "beach", opts: shuffle(["beach", "park", "school", "store"]) };
  } },
  { id: "c2_02", title: "Birds Story", learn: "Main idea and details.", visual: "📖", story: "Birds build nests in trees. They use twigs and leaves.", example: "What do birds build?", hint: "home", gen: () => {
    return { passage: "Birds build nests in trees. They use twigs and leaves.", q: "What do birds build?", ans: "nests", opts: shuffle(["nests", "trees", "twigs", "leaves"]) };
  } }
];

const comp3 = [
  { id: "c3_01", title: "Winter Story", learn: "Longer passage. Make an inference.", visual: "🧥❄️", story: "Emma put on her warm coat and boots. Snow was falling.", example: "What season is it?", hint: "cold and snow", gen: () => {
    return { passage: "Emma put on her warm coat and boots. Snow was falling.", q: "What season is it?", ans: "winter", opts: shuffle(["winter", "summer", "spring", "fall"]) };
  } },
  { id: "c3_02", title: "Lily's Doll", learn: "Character feelings.", visual: "😢", story: "Lily lost her favorite doll. She looked everywhere but couldn't find it.", example: "How does Lily feel?", hint: "sad", gen: () => {
    return { passage: "Lily lost her favorite doll. She looked everywhere but couldn't find it.", q: "How does Lily feel?", ans: "sad", opts: shuffle(["sad", "happy", "excited", "scared"]) };
  } }
];

// ----- LISTENING COMPREHENSION lessons (each lesson has audio text and 5 questions) -----
const listen1Lessons = [
  {
    id: "l1_01",
    title: "Leo at the Park",
    learn: "Listen to a short story about Leo at the park.",
    visual: "🎧🎙️",
    example: "Click the button to listen. Then answer the questions.",
    hint: "Listen for details like who, what, where, when.",
    audioText: "Leo and his dad went to the park. Leo played on the swings for ten minutes. Then he climbed the slide. After that, he ran to the fountain to get a drink of water. His dad sat on a bench and watched him. They stayed at the park until it started to rain.",
    questions: [
      { text: "Where did Leo go?", options: ["Beach", "Park", "Library", "Store"], correct: 1 },
      { text: "What did Leo do FIRST?", options: ["Climbed the slide", "Got a drink of water", "Played on the swings", "Sat on a bench"], correct: 2 },
      { text: "What did Leo do after climbing the slide?", options: ["Went home", "Played on the swings again", "Ran to the fountain", "Sat with his dad"], correct: 2 },
      { text: "Where was Leo's dad sitting?", options: ["On the swings", "On the slide", "On a bench", "In the fountain"], correct: 2 },
      { text: "Why did they leave the park?", options: ["Leo was tired", "It started to rain", "It got dark", "They had to eat dinner"], correct: 1 }
    ]
  },
  {
    id: "l1_02",
    title: "Whiskers the Cat",
    learn: "Listen to a story about Mia's playful cat.",
    visual: "🎧🐱",
    example: "Click the button to listen. Then answer the questions.",
    hint: "Pay attention to colors and actions.",
    audioText: "Mia's cat, Whiskers, is very playful. Every morning, Whiskers chases a red ball of yarn around the living room. Sometimes she hides behind the sofa and jumps out at Mia's feet. Last week, Whiskers found a mouse in the basement. She didn't chase it. She just watched it run away.",
    questions: [
      { text: "What is the cat's name?", options: ["Mia", "Whiskers", "Fluffy", "Red"], correct: 1 },
      { text: "What color is the ball of yarn?", options: ["Blue", "Red", "Green", "Yellow"], correct: 1 },
      { text: "Where does Whiskers hide?", options: ["Under the bed", "Behind the sofa", "In the closet", "Under the table"], correct: 1 },
      { text: "What did Whiskers find in the basement?", options: ["A toy", "A mouse", "A ball", "Food"], correct: 1 },
      { text: "What did Whiskers do when she saw the mouse?", options: ["Chased it", "Caught it", "Just watched it", "Ran away"], correct: 2 }
    ]
  },
  {
    id: "l1_03",
    title: "Safia's Treasure Box",
    learn: "Listen to a story about Safia's treasure box.",
    visual: "🎧📦",
    example: "Click the button to listen. Then answer the questions.",
    hint: "Listen for numbers, colors, and where things came from.",
    audioText: "Safia has a special box where she keeps her treasures. Inside the box there are three shiny seashells, a yellow feather, and a small green marble. She found the seashells at the beach last summer. The feather came from a parrot at the zoo. She only opens the box on Sundays.",
    questions: [
      { text: "How many seashells are in the box?", options: ["Two", "Three", "Four", "Five"], correct: 1 },
      { text: "What color is the feather?", options: ["Blue", "Red", "Yellow", "Green"], correct: 2 },
      { text: "Where did Safia find the seashells?", options: ["At the zoo", "At the beach", "At school", "From a prize"], correct: 1 },
      { text: "Where did the feather come from?", options: ["A chicken", "A parrot at the zoo", "A bird in her yard", "A costume"], correct: 1 },
      { text: "How often does Safia open the box?", options: ["Every day", "On Mondays", "On Sundays", "Once a month"], correct: 2 }
    ]
  },
  {
    id: "l1_04",
    title: "The Busy Bakery",
    learn: "Listen to a story about a busy bakery.",
    visual: "🎧🍪",
    example: "Click the button to listen. Then answer the questions.",
    hint: "Listen for what the baker does and who helps.",
    audioText: "Every morning at 5 AM, the baker wakes up to bake bread. She mixes flour, water, and yeast. While the bread is rising, she starts making cookies. Her daughter helps put chocolate chips on each cookie. By 7 AM, the bakery is open.",
    questions: [
      { text: "What time does the baker wake up?", options: ["4 AM", "5 AM", "6 AM", "7 AM"], correct: 1 },
      { text: "What does the baker make FIRST?", options: ["Cookies", "Cake", "Bread", "Pies"], correct: 2 },
      { text: "Who helps put chocolate chips on cookies?", options: ["Her husband", "Her daughter", "Her son", "No one"], correct: 1 },
      { text: "What time does the bakery open?", options: ["5 AM", "6 AM", "7 AM", "8 AM"], correct: 2 },
      { text: "What does the baker make while bread is rising?", options: ["Cake", "Pies", "Cookies", "Muffins"], correct: 2 }
    ]
  },
  {
    id: "l1_05",
    title: "The Lost Puppy",
    learn: "Listen to a story about a lost puppy.",
    visual: "🎧🐕",
    example: "Click the button to listen. Then answer the questions.",
    hint: "Listen for who helped and what happened at the end.",
    audioText: "Max the puppy was playing in the backyard when he saw a squirrel. He chased the squirrel through a hole in the fence. Soon, Max was lost. A girl named Emma found him shivering under a tree. She called the number on his collar. Max's owner came running to pick him up.",
    questions: [
      { text: "What did Max chase?", options: ["A cat", "A squirrel", "A bird", "A butterfly"], correct: 1 },
      { text: "Who found Max?", options: ["A police officer", "A girl named Emma", "The park ranger", "His owner"], correct: 1 },
      { text: "Where was Max hiding?", options: ["Behind a bush", "Under a tree", "In a dumpster", "By the pond"], correct: 1 },
      { text: "How did Emma find Max's owner?", options: ["She asked around", "She called the number on the collar", "She posted online", "The owner found them"], correct: 1 },
      { text: "How did Emma feel at the end?", options: ["Sad", "Angry", "Happy", "Tired"], correct: 2 }
    ]
  }
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
  comp3: { label: '3rd Grade Comprehension', icon: '📖✨', grade: 3, lessons: comp3 },
  listen1: { label: 'Listening Comprehension', icon: '🎧', grade: 3, lessons: listen1Lessons }
};

// State
const STORAGE_KEY = 'readwrite_v5';
let progress = {};
let currentCat = '', questions = [], qIdx = 0, correct = 0, wrong = 0, mistakes = [];
let answered = false, hintCount = 0;
let lessonData = null;

// Listening-specific state
let currentAudioPassage = null;
let currentAudioQuestions = [];
let currentAudioIndex = 0;

function initProgress() {
  for (let c in CATEGORIES) {
    if (!progress[c]) progress[c] = {};
    // No need to pre-initialize with level numbers anymore
  }
}

function saveProgress() {
  const blob = new Blob([JSON.stringify({ v: 2, progress })], { type: 'application/json' });
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
      if (d && (d.v === 1 || d.v === 2) && d.progress) {
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
  let totalLessons = 0;
  let completedLessons = 0;
  let totalStars = 0;

  for (let c in CATEGORIES) {
    totalLessons += CATEGORIES[c].lessons.length;
    
    if (progress[c]) {
      for (let id in progress[c]) {
        if (progress[c][id].done) {
          completedLessons++;
          totalStars += progress[c][id].stars || 0;
        }
      }
    }
  }

  document.getElementById('saveLbl').textContent = completedLessons > 0 
    ? `${completedLessons}/${totalLessons} lessons • ⭐ ${totalStars}` 
    : '⭐ start';

  let chart = document.getElementById('progressChart');
  if (chart) {
    let pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    chart.innerHTML = `
      <h3 style="color:#d9b8ff;">📊 my reading trail</h3>
      <div class="progress-bar-cont" style="background:#1a1428;border-radius:30px;">
        <div class="progress-bar-fill" style="width:${pct}%;height:20px;border-radius:30px;background:linear-gradient(90deg,#b497d6,#d9b8ff);"></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:15px;color:#e0d2ff;">
        ⭐ ${totalStars} stars • ${completedLessons}/${totalLessons} lessons
      </div>`;
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showHome() {
  updateSaveLbl();
  showScreen('homeScreen');
}

function openCategory(c) {
  console.log("Opening category:", c);
  if (!CATEGORIES[c]) {
    console.error("Category not found:", c);
    return;
  }
  currentCat = c;
  const lessons = CATEGORIES[c].lessons;
  document.getElementById('levelsTitle').innerHTML = CATEGORIES[c].label + ' — choose lesson';
  const grid = document.getElementById('levelsGrid');
  grid.innerHTML = '';
  
  // Separate lessons into 'new' and 'completed'
  let newLessons = lessons.filter(l => !progress[c]?.[l.id]?.done);
  let doneLessons = lessons.filter(l => progress[c]?.[l.id]?.done);

  // Display 'new' lessons first (randomized)
  shuffle([...newLessons]).forEach(lesson => {
    createLessonBtn(c, lesson, false);
  });

  // Display 'completed' lessons after
  doneLessons.forEach(lesson => {
    createLessonBtn(c, lesson, true);
  });

  showScreen('levelsScreen');
}

function createLessonBtn(cat, lesson, isDone) {
  const grid = document.getElementById('levelsGrid');
  const btn = document.createElement('button');
  btn.className = 'lv-btn' + (isDone ? ' done' : '');
  const starDisplay = isDone ? `<div class="lv-score">⭐ ${progress[cat][lesson.id].stars}</div>` : '';
  btn.innerHTML = `<span class="lv-icon">${isDone ? '✅' : '🌱'}</span>${lesson.title || 'Lesson'}${starDisplay}`;
  btn.onclick = () => startLesson(cat, lesson);
  grid.appendChild(btn);
}

// Text-to-speech function
function speakNow(text, button = null) {
  if (!window.speechSynthesis) {
    alert("🔊 Your browser doesn't support speech. The story is: " + text);
    return;
  }
  
  window.speechSynthesis.cancel();
  
  if (button) {
    button.classList.add('speaking');
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  utterance.pitch = 1.1;
  utterance.lang = 'en-US';
  
  utterance.onend = () => {
    if (button) button.classList.remove('speaking');
  };
  
  utterance.onerror = () => {
    if (button) button.classList.remove('speaking');
  };
  
  window.speechSynthesis.speak(utterance);
}

function startLesson(cat, lessonObj) {
  console.log("Starting lesson:", cat, lessonObj.id);
  currentCat = cat;
  lessonData = lessonObj;
  
  qIdx = 0;
  correct = 0;
  wrong = 0;
  mistakes = [];
  answered = false;
  hintCount = 0;
  
  // Check if this is a listening comprehension category
  if (cat === 'listen1') {
    startListeningLesson(cat, lessonObj);
    return;
  }
  
  questions = [];
  for (let i = 0; i < 3; i++) questions.push(lessonData.gen());
  document.getElementById('quizLabel').innerHTML = `${CATEGORIES[cat].label} · ${lessonData.title || 'Lesson'}`;
  showScreen('quizScreen');
  renderLesson();
}

function startListeningLesson(cat, lessonObj) {
  console.log("Starting listening lesson:", cat, lessonObj.id);
  lessonData = lessonObj;
  currentAudioPassage = lessonData.audioText;
  currentAudioQuestions = lessonData.questions;
  currentAudioIndex = 0;
  
  document.getElementById('quizLabel').innerHTML = `${CATEGORIES[cat].label} · ${lessonData.title || 'Lesson'}`;
  showScreen('quizScreen');
  renderListeningLesson();
}

function isCategoryComplete(cat) {
  const lessons = CATEGORIES[cat].lessons;
  return lessons.every(l => progress[cat]?.[l.id]?.done === true);
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

function renderListeningLesson() {
  let visual = lessonData.visual || '🎧';
  document.getElementById('lessonContainer').innerHTML = `
    <div class="lesson-card">
      <div class="lesson-badge">🎧 listen first</div>
      <div class="lesson-title">${lessonData.learn}</div>
      <div class="lesson-visual">${visual}</div>
      <div class="lesson-explanation">✨ ${lessonData.example}</div>
      <div class="audio-btn" id="listenBtn">🔊 Click to hear the story</div>
    </div>
  `;
  
  const listenBtn = document.getElementById('listenBtn');
  if (listenBtn) {
    listenBtn.onclick = () => speakNow(currentAudioPassage, listenBtn);
  }
  
  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-check';
  startBtn.textContent = '🌸 Start Questions →';
  startBtn.style.marginTop = '15px';
  startBtn.style.width = '100%';
  startBtn.onclick = () => {
    currentAudioIndex = 0;
    loadListeningQuestion();
  };
  document.getElementById('lessonContainer').appendChild(startBtn);
}

function loadQuestion() {
  if (qIdx >= questions.length) {
    showResult();
    return;
  }
  answered = false;
  const q = questions[qIdx];
  document.getElementById('quizQNum').innerHTML = `question ${qIdx + 1}/${questions.length}`;
  document.getElementById('qsCorrect').innerHTML = correct;
  document.getElementById('qsWrong').innerHTML = wrong;
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

function loadListeningQuestion() {
  if (currentAudioIndex >= currentAudioQuestions.length) {
    showListeningResult();
    return;
  }
  
  answered = false;
  const q = currentAudioQuestions[currentAudioIndex];
  
  document.getElementById('quizQNum').innerHTML = `question ${currentAudioIndex + 1}/${currentAudioQuestions.length}`;
  document.getElementById('qsCorrect').innerHTML = correct;
  document.getElementById('qsWrong').innerHTML = wrong;
  document.getElementById('progFill').style.width = (currentAudioIndex / currentAudioQuestions.length * 100) + '%';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('checkBtn').style.display = 'inline-flex';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('hintBtn').disabled = false;
  
  let reListenHtml = `<div class="audio-btn" id="reListenBtn" style="width:100%; margin-bottom:15px;">🔊 Re-listen to the story</div>`;
  
  let optsHtml = '<div class="options-grid">';
  q.options.forEach((opt, i) => {
    optsHtml += `<button class="opt-btn" data-opt-index="${i}" data-opt-value="${opt}">${opt}</button>`;
  });
  optsHtml += '</div>';
  
  document.getElementById('questionContainer').innerHTML = `
    <div class="q-card">
      <div class="question-text">${q.text}</div>
      ${reListenHtml}
      ${optsHtml}
    </div>
  `;
  
  const reListenBtn = document.getElementById('reListenBtn');
  if (reListenBtn) {
    reListenBtn.onclick = () => speakNow(currentAudioPassage, reListenBtn);
  }
  
  document.querySelectorAll('.opt-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.optIndex);
      const val = btn.dataset.optValue;
      selectListeningOption(idx, val);
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
  fb.innerHTML = isCorrect ? '✅ correct! ' + (lessonData.hint || '') : '❌ try again – ' + (lessonData.hint || '');
  fb.className = 'feedback show ' + (isCorrect ? 'ok' : 'bad');
  document.getElementById('checkBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-flex';
  document.getElementById('qsCorrect').innerHTML = correct;
  document.getElementById('qsWrong').innerHTML = wrong;
}

function selectListeningOption(idx, val) {
  if (answered) return;
  answered = true;
  const q = currentAudioQuestions[currentAudioIndex];
  let isCorrect = (val == q.options[q.correct]);
  
  if (isCorrect) {
    correct++;
  } else {
    wrong++;
    mistakes.push({ q: q.text, exp: `correct answer: ${q.options[q.correct]}` });
  }
  
  let btns = document.querySelectorAll('.opt-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (btn.innerText == q.options[q.correct]) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });
  
  let fb = document.getElementById('feedback');
  fb.innerHTML = isCorrect ? '✅ Correct! Good listening!' : `❌ The correct answer is: ${q.options[q.correct]}`;
  fb.className = 'feedback show ' + (isCorrect ? 'ok' : 'bad');
  
  document.getElementById('checkBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-flex';
  document.getElementById('qsCorrect').innerHTML = correct;
  document.getElementById('qsWrong').innerHTML = wrong;
  
  const reListenBtn = document.getElementById('reListenBtn');
  if (reListenBtn) reListenBtn.disabled = true;
}

function checkAnswer() { /* handled by selectOption/selectListeningOption */ }

function showHint() {
  hintCount++;
  let hintDiv = document.createElement('div');
  hintDiv.className = 'hint-box show';
  hintDiv.style.cssText = 'background:#322b4a;border-radius:40px;padding:15px;margin:10px 0;font-weight:800;border:2px solid #b497d6;color:#e0d2ff;';
  
  if (currentCat === 'listen1') {
    hintDiv.innerHTML = '💡 ' + (lessonData.hint || 'Listen carefully for details like who, what, where, and when.');
  } else {
    hintDiv.innerHTML = '💡 ' + (lessonData.hint || 'think carefully');
  }
  
  document.getElementById('questionContainer').after(hintDiv);
  document.getElementById('hintBtn').disabled = true;
}

function nextQuestion() {
  if (currentCat === 'listen1') {
    currentAudioIndex++;
    if (currentAudioIndex < currentAudioQuestions.length) {
      loadListeningQuestion();
    } else {
      showListeningResult();
    }
  } else {
    qIdx++;
    if (qIdx < questions.length) loadQuestion();
    else showResult();
  }
}

function showResult() {
  let total = questions.length;
  let stars = Math.min(3, Math.ceil(correct / 1.5) || 1);
  let passed = correct >= 2;
  
  if (passed) {
    if (!progress[currentCat]) progress[currentCat] = {};
    progress[currentCat][lessonData.id] = { 
      done: true, 
      stars: Math.max(progress[currentCat][lessonData.id]?.stars || 0, stars) 
    };
  }
  
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 2, progress })); } catch { }
  updateSaveLbl();
  
  document.getElementById('resEmoji').innerHTML = stars === 3 ? '🏆' : (stars === 2 ? '🌟' : '⭐');
  document.getElementById('resStars').innerHTML = '⭐'.repeat(stars);
  document.getElementById('resMsg').innerHTML = `you got ${correct} out of ${total} correct. ${passed ? 'lesson passed!' : 'try again to earn stars'}`;
  
  let ms = document.getElementById('mistakeSection');
  ms.innerHTML = mistakes.length ? '<div style="font-weight:900;margin-bottom:8px;color:#d9b8ff;">📝 keep practicing:</div>' + 
    mistakes.map(m => `<div class="mistake-item">❓ ${m.q}<br>💡 ${m.exp}</div>`).join('') : '';
  
  document.getElementById('retryBtn').onclick = () => startLesson(currentCat, lessonData);
  let nb = document.getElementById('nextLvBtn');
  
  // Show next lesson button if there are unfinished lessons
  const allLessons = CATEGORIES[currentCat].lessons;
  const unfinishedLessons = allLessons.filter(l => !progress[currentCat]?.[l.id]?.done);
  
  if (passed && unfinishedLessons.length > 0) {
    nb.style.display = 'inline-flex';
    const randomUnfinished = unfinishedLessons[Math.floor(Math.random() * unfinishedLessons.length)];
    nb.onclick = () => startLesson(currentCat, randomUnfinished);
  } else {
    nb.style.display = 'none';
  }
  
  // Check if category is fully complete
  if (isCategoryComplete(currentCat)) {
    const heroMessages = [
      "🦸‍♂️ Fantastic job, Superhero! You've mastered all the missions in this category! 🦸‍♀️",
      "⚡ Incredible speed! You've leveled up and conquered every challenge here! ⚡",
      "🏆 Amazing work, Champion! Your reading powers are growing stronger every day! 🏆",
      "🚀 Hero level unlocked! You've crossed the finish line of this learning adventure! 🚀"
    ];
    const randomMsg = heroMessages[Math.floor(Math.random() * heroMessages.length)];
    document.getElementById('certMsg').innerHTML = randomMsg;
    showScreen('certScreen');
    return;
  }
  
  showScreen('resultScreen');
}

function showListeningResult() {
  let total = currentAudioQuestions.length;
  let stars = Math.min(3, Math.ceil(correct / 1.5) || 1);
  let passed = correct >= Math.ceil(total * 0.6);
  
  if (passed) {
    if (!progress[currentCat]) progress[currentCat] = {};
    progress[currentCat][lessonData.id] = { 
      done: true, 
      stars: Math.max(progress[currentCat][lessonData.id]?.stars || 0, stars) 
    };
  }
  
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 2, progress })); } catch { }
  updateSaveLbl();
  
  document.getElementById('resEmoji').innerHTML = stars === 3 ? '🏆' : (stars === 2 ? '🌟' : '⭐');
  document.getElementById('resStars').innerHTML = '⭐'.repeat(stars);
  document.getElementById('resMsg').innerHTML = `you got ${correct} out of ${total} correct. ${passed ? 'lesson passed!' : 'try again to earn stars'}`;
  
  let ms = document.getElementById('mistakeSection');
  ms.innerHTML = mistakes.length ? '<div style="font-weight:900;margin-bottom:8px;color:#d9b8ff;">📝 keep practicing:</div>' + 
    mistakes.map(m => `<div class="mistake-item">❓ ${m.q}<br>💡 ${m.exp}</div>`).join('') : '';
  
  document.getElementById('retryBtn').onclick = () => startLesson(currentCat, lessonData);
  let nb = document.getElementById('nextLvBtn');
  
  const allLessons = CATEGORIES[currentCat].lessons;
  const unfinishedLessons = allLessons.filter(l => !progress[currentCat]?.[l.id]?.done);
  
  if (passed && unfinishedLessons.length > 0) {
    nb.style.display = 'inline-flex';
    const randomUnfinished = unfinishedLessons[Math.floor(Math.random() * unfinishedLessons.length)];
    nb.onclick = () => startLesson(currentCat, randomUnfinished);
  } else {
    nb.style.display = 'none';
  }
  
  // Check if category is fully complete
  if (isCategoryComplete(currentCat)) {
    const heroMessages = [
      "🦸‍♂️ Fantastic job, Superhero! You've mastered all the missions in this category! 🦸‍♀️",
      "⚡ Incredible speed! You've leveled up and conquered every challenge here! ⚡",
      "🏆 Amazing work, Champion! Your reading powers are growing stronger every day! 🏆",
      "🚀 Hero level unlocked! You've crossed the finish line of this learning adventure! 🚀"
    ];
    const randomMsg = heroMessages[Math.floor(Math.random() * heroMessages.length)];
    document.getElementById('certMsg').innerHTML = randomMsg;
    showScreen('certScreen');
    return;
  }
  
  showScreen('resultScreen');
}

function leaveQuiz() {
  if (confirm('leave? progress won\'t be saved')) showHome();
}

function backToHomeFromCert() {
  showHome();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM loaded, setting up event listeners");
  
  document.querySelectorAll('.menu-card[data-category]').forEach(card => {
    card.addEventListener('click', function () { 
      console.log("Menu card clicked:", this.dataset.category);
      openCategory(this.dataset.category); 
    });
  });
  
  document.getElementById('saveBtn').addEventListener('click', saveProgress);
  document.getElementById('loadBtn').addEventListener('click', loadProgress);
  document.getElementById('loadFile').addEventListener('change', loadFile);
  document.getElementById('backToHomeBtn').addEventListener('click', showHome);
  document.getElementById('leaveQuizBtn').addEventListener('click', leaveQuiz);
  document.getElementById('homeFromResultBtn').addEventListener('click', showHome);
  document.getElementById('hintBtn').addEventListener('click', showHint);
  document.getElementById('checkBtn').addEventListener('click', checkAnswer);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('certBackBtn').addEventListener('click', backToHomeFromCert);
  
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      let d = JSON.parse(raw);
      if ((d.v === 1 || d.v === 2) && d.progress) progress = d.progress;
    }
  } catch { }
  initProgress();
  showHome();
});
