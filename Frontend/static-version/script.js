// ============ Data ============
const STORY_CARDS = [
  {
    genre: 'Fantasy',
    chapter: 'Chapter I',
    title: 'The Kingdom Beyond the Stars',
    gradient: ['#2b3a8f', '#0e1330'],
    icon: 'castle'
  },
  {
    genre: 'Sci-Fi',
    chapter: 'Chapter II',
    title: 'Echoes of Europa',
    gradient: ['#1e6fa8', '#0a1730'],
    icon: 'planet'
  },
  {
    genre: 'Mystery',
    chapter: 'Chapter III',
    title: 'The House Without Shadows',
    gradient: ['#3a2f6b', '#12101f'],
    icon: 'mansion'
  },
  {
    genre: 'Horror',
    chapter: 'Chapter IV',
    title: 'Whispers in the Hollow',
    gradient: ['#20301f', '#0c1410'],
    icon: 'lantern'
  },
  {
    genre: 'Romance',
    chapter: 'Chapter V',
    title: 'When the Stars Remember',
    gradient: ['#5a2f6b', '#150e28'],
    icon: 'skyline'
  }
];

const ICONS = {
  castle:`<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="20" y="45" width="10" height="35" fill="rgba(255,255,255,0.14)"/><polygon points="25,30 20,45 30,45" fill="rgba(255,255,255,0.14)"/><rect x="45" y="30" width="12" height="50" fill="rgba(255,255,255,0.18)"/><polygon points="51,14 45,30 57,30" fill="rgba(255,255,255,0.18)"/><rect x="70" y="42" width="10" height="38" fill="rgba(255,255,255,0.14)"/><polygon points="75,28 70,42 80,42" fill="rgba(255,255,255,0.14)"/><rect x="30" y="55" width="40" height="25" fill="rgba(255,255,255,0.12)"/><circle cx="51" cy="42" r="55" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/></svg>`,
  planet:`<svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="55" cy="35" r="22" fill="rgba(255,255,255,0.14)"/><ellipse cx="55" cy="35" rx="34" ry="7" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" transform="rotate(-15 55 35)"/><circle cx="20" cy="75" r="4" fill="rgba(255,255,255,0.2)"/><circle cx="80" cy="70" r="2.5" fill="rgba(255,255,255,0.18)"/></svg>`,
  mansion:`<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="25" y="45" width="50" height="35" fill="rgba(255,255,255,0.12)"/><polygon points="50,25 20,45 80,45" fill="rgba(255,255,255,0.16)"/><rect x="43" y="58" width="14" height="22" fill="rgba(255,255,255,0.08)"/><circle cx="50" cy="12" r="8" fill="rgba(255,255,255,0.1)"/></svg>`,
  lantern:`<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="42" y="55" width="16" height="24" rx="3" fill="rgba(255,255,255,0.16)"/><line x1="50" y1="20" x2="50" y2="55" stroke="rgba(255,255,255,0.2)" stroke-width="2"/><circle cx="50" cy="66" r="6" fill="rgba(255,255,255,0.35)"/><path d="M25 85 Q50 70 75 85" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/></svg>`,
  skyline:`<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="15" y="50" width="12" height="35" fill="rgba(255,255,255,0.12)"/><rect x="32" y="35" width="14" height="50" fill="rgba(255,255,255,0.16)"/><rect x="52" y="45" width="12" height="40" fill="rgba(255,255,255,0.12)"/><rect x="68" y="28" width="16" height="57" fill="rgba(255,255,255,0.18)"/><circle cx="76" cy="16" r="7" fill="rgba(255,255,255,0.25)"/></svg>`
};

const FLOW_NODES = [
  {
    eyebrow:'Step 01', title:'Your Idea',
    desc:'You provide the creative spark:',
    list:['Genre & tone', 'Story topic', 'Characters', 'Setting', 'Preferences'],
    icon:'idea'
  },
  {
    eyebrow:'Step 02', title:'Story Generation',
    desc:'StoryForge analyzes your creative inputs and builds a full story structure — arc, pacing, and stakes — before a single scene is written.',
    icon:'spark'
  },
  {
    eyebrow:'Step 03', title:'Story Memory',
    desc:'A persistent, retrieval-based memory tracks everything that has happened so far:',
    list:['Characters & relationships', 'World & locations', 'Events & plot progression', 'Previous scenes'],
    icon:'memory'
  },
  {
    eyebrow:'Step 04', title:'Scene Generation',
    desc:'Each scene is generated in sequence, checked against story memory so characters, places, and plot threads stay consistent from chapter one to the finale.',
    icon:'scene'
  },
  {
    eyebrow:'Step 05', title:'Multimodal Creation',
    desc:'The finished story is transformed into a richer experience:',
    list:['Visual scenes', 'Audio narration', 'A complete storytelling experience'],
    icon:'multimodal'
  },
  {
    eyebrow:'Step 06', title:'Your Story',
    desc:'A complete, immersive, multi-scene story — consistent from first page to last.',
    icon:'book'
  }
];

const NODE_ICONS = {
  idea:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.5.4.6 1 .6 1.6V16h6v-.6c0-.6.1-1.2.6-1.6A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  spark:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2l1.8 5.6L19 9.5l-5.2 1.9L12 17l-1.8-5.6L5 9.5l5.2-1.9L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M19 15l.8 2.4L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.6L19 15z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  memory:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" stroke-width="1.6"/><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke="currentColor" stroke-width="1.6"/><path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  scene:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 9h18M7 5v4M17 5v4" stroke="currentColor" stroke-width="1.4"/></svg>`,
  multimodal:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><rect x="3" y="4" width="12" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="7.5" cy="8" r="1.3" fill="currentColor"/><path d="M4 12.5l3-3 2.5 2.5L13 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 8v8M20 6v12M15 10v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  book:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 6.5c-1.5-1-4-1.5-6-1v13c2 0 4.5.5 6 1.5m0-13.5c1.5-1 4-1.5 6-1v13c-2 0-4.5.5-6 1.5m0-13.5v13.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`
};

const CAPABILITIES = [
  {icon:'idea', title:'Creative Story Generation', desc:'Generate original stories from a simple idea, topic, or prompt.'},
  {icon:'char', title:'Character Consistency', desc:'Remember personalities, relationships, motivations, and development across every scene.'},
  {icon:'world', title:'World Consistency', desc:'Maintain locations, rules, lore, and events so the world never contradicts itself.'},
  {icon:'memory2', title:'Story Memory', desc:'Persistent story memory retrieves exactly what matters from earlier in the story.'},
  {icon:'multi', title:'Multi-Scene Generation', desc:'Long stories are built progressively, not treated as isolated, disconnected prompts.'},
  {icon:'visual', title:'Visual Storytelling', desc:'Turn generated scenes into cinematic visual experiences.'},
  {icon:'audio', title:'Audio Narration', desc:'Turn generated stories into narrated audio experiences.'}
];

const CAP_ICONS = {
  idea: NODE_ICONS.idea,
  char:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.6"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  world:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.2 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.2-3.8-8.5S9.5 5.8 12 3.5z" stroke="currentColor" stroke-width="1.4"/></svg>`,
  memory2: NODE_ICONS.memory,
  multi:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="4" width="12" height="9" rx="1.6" stroke="currentColor" stroke-width="1.5"/><rect x="8.5" y="10.5" width="12" height="9" rx="1.6" stroke="currentColor" stroke-width="1.5" fill="#05060d"/></svg>`,
  visual: NODE_ICONS.multimodal,
  audio:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M4 10v4h3.5L12 17.5v-11L7.5 10H4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

// ============ Navbar scroll state ============
const navbar = document.getElementById('navbar');
function onScroll(){
  if(window.scrollY > 12){ navbar.classList.add('scrolled'); }
  else{ navbar.classList.remove('scrolled'); }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// ============ Carousel ============
const carouselEl = document.getElementById('carousel');
let activeIndex = 0;
let autoTimer = null;
let isHovering = false;
const N = STORY_CARDS.length;

function buildCards(){
  carouselEl.innerHTML = STORY_CARDS.map((card, i) => `
    <div class="story-card" data-index="${i}" tabindex="0" role="button" aria-label="${card.title}, ${card.genre}">
      <div class="art" style="background:linear-gradient(160deg, ${card.gradient[0]} 0%, ${card.gradient[1]} 100%);">
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.9;width:60%;height:60%;margin:auto;">${ICONS[card.icon]}</div>
      </div>
      <div class="overlay"></div>
      <div class="meta">
        <p class="chapter">${card.genre} · ${card.chapter}</p>
        <p class="title">${card.title}</p>
      </div>
    </div>
  `).join('');

  carouselEl.querySelectorAll('.story-card').forEach(el => {
    el.addEventListener('click', () => {
      const i = parseInt(el.dataset.index, 10);
      goTo(i);
      restartAuto();
    });
  });
  updatePositions();
}

function signedOffset(index){
  let rel = (index - activeIndex + N) % N;
  if(rel > N/2) rel -= N;
  return rel;
}

function updatePositions(){
  carouselEl.querySelectorAll('.story-card').forEach(el => {
    const i = parseInt(el.dataset.index, 10);
    const off = signedOffset(i);
    const offAbs = Math.abs(off);
    el.dataset.offset = offAbs > 2 ? 'hidden' : String(off);
  });
}

function goTo(i){
  activeIndex = ((i % N) + N) % N;
  updatePositions();
}
function next(){ goTo(activeIndex + 1); }
function prev(){ goTo(activeIndex - 1); }

function startAuto(){
  autoTimer = setInterval(() => { if(!isHovering) next(); }, 4000);
}
function restartAuto(){
  clearInterval(autoTimer);
  startAuto();
}

document.getElementById('carNext').addEventListener('click', () => { next(); restartAuto(); });
document.getElementById('carPrev').addEventListener('click', () => { prev(); restartAuto(); });

const carouselWrap = document.querySelector('.carousel-wrap');
carouselWrap.addEventListener('mouseenter', () => isHovering = true);
carouselWrap.addEventListener('mouseleave', () => isHovering = false);

// touch swipe
let touchStartX = null;
carouselWrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, {passive:true});
carouselWrap.addEventListener('touchend', e => {
  if(touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx) > 40){ dx < 0 ? next() : prev(); restartAuto(); }
  touchStartX = null;
}, {passive:true});

buildCards();
startAuto();

// ============ Workflow flow build ============
const flowEl = document.getElementById('flow');
flowEl.innerHTML = FLOW_NODES.map((node, i) => `
  <div class="flow-node">
    <div class="node-card">
      <div class="node-icon">${NODE_ICONS[node.icon]}</div>
      <div class="node-body">
        <p class="node-eyebrow">${node.eyebrow}</p>
        <h3>${node.title}</h3>
        <p>${node.desc}</p>
        ${node.list ? `<ul>${node.list.map(li => `<li>${li}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  </div>
  ${i < FLOW_NODES.length - 1 ? `<div class="connector"><span class="particle"></span><span class="particle p2"></span><span class="particle p3"></span></div>` : ''}
`).join('');

// ============ Capabilities build ============
const capGrid = document.getElementById('capGrid');
capGrid.innerHTML = CAPABILITIES.map(cap => `
  <div class="cap-card">
    <div class="cap-icon">${CAP_ICONS[cap.icon]}</div>
    <h3>${cap.title}</h3>
    <p>${cap.desc}</p>
  </div>
`).join('');

// ============ Scroll reveal ============
const revealTargets = document.querySelectorAll('.flow-node, .cap-card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.2, rootMargin:'0px 0px -60px 0px'});
revealTargets.forEach(el => io.observe(el));
