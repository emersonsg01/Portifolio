const GH = 'https://github.com/emersonsg01/';
const WHATSAPP = 'https://wa.me/5512996200288/';
const LINKEDIN = 'https://www.linkedin.com/in/emerson-gon%C3%A7alves-a9ba6582/';

const LANG_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    PHP: '#4F5D95',
    Vue: '#41b883',
    HTML: '#e34c26',
    CSS: '#663399',
};

// Projetos em destaque: viram "cases" grandes na seção #projetos.
// Use `shot` (screenshot em assets/shots) para projetos no ar, ou `art` para uma capa desenhada:
// 'pipeline', 'cards' ou 'voxel'.
const featured = [
    {
        title: 'Pokédex',
        titleHtml: 'Poké<em>dex</em>',
        tint: 'rgba(239, 68, 68, 0.38)',
        desc: 'Pokédex responsiva com os 1025 Pokémon: busca instantânea, filtros por tipo e geração, favoritos, versão shiny, grito, evoluções e fraquezas.',
        tags: ['React 19', 'Vite', 'PokeAPI', 'Node.js'],
        shot: 'assets/shots/pokedex.webp',
        demo: 'https://pocket-monsters-frontend.vercel.app',
        repo: GH + 'pocket-monsters-frontend',
    },
    {
        title: 'Fábrica de Vídeos',
        titleHtml: 'Fábrica de <em>Vídeos</em>',
        tint: 'rgba(255, 106, 43, 0.35)',
        desc: 'Você descreve o vídeo e a fábrica faz o resto: agentes de IA escrevem o roteiro, buscam as cenas, geram a narração e o MoviePy monta o resultado. Roda por linha de comando, interface web ou .exe.',
        tags: ['Python', 'Agentes de IA', 'MoviePy', 'TTS', 'Interface web'],
        art: 'pipeline',
        repo: GH + 'fabrica-de-videos',
    },
    {
        title: 'Truco Multijogador',
        titleHtml: 'Truco <em>Multijogador</em>',
        tint: 'rgba(34, 197, 94, 0.3)',
        desc: 'Truco online para jogar com os amigos em tempo real. Cliente e servidor separados controlam as partidas, as rodadas e as apostas.',
        tags: ['JavaScript', 'Node.js', 'Tempo real'],
        art: 'cards',
        repo: GH + 'Novo-Truco-Multi-Jogador',
    },
    {
        title: 'Neon Orbit',
        titleHtml: 'Neon <em>Orbit</em>',
        tint: 'rgba(217, 70, 239, 0.4)',
        desc: 'Pinball synthwave refeito do zero com física própria: bumpers, drop targets, multibola, jackpot, skill shot e tilt. Display de matriz de pontos, sons sintetizados, modo demonstração e controles por toque.',
        tags: ['JavaScript', 'Canvas', 'Web Audio', 'Física'],
        shot: 'assets/shots/pinball.webp',
        demo: 'https://pin-ball-chi.vercel.app',
        repo: GH + 'PinBall',
    },
    {
        title: 'Genial',
        titleHtml: '<em>Genial</em>',
        tint: 'rgba(96, 165, 250, 0.35)',
        desc: 'Laboratório de matemática e física: calculadora científica, gráficos de funções, mais de 60 fórmulas que se resolvem para qualquer variável, simulações animadas, conversor, finanças e estatística.',
        tags: ['React', 'TypeScript', 'Chart.js', 'KaTeX', 'Vitest'],
        shot: 'assets/shots/genial.webp',
        demo: 'https://genial-five.vercel.app',
        repo: GH + 'Genial',
    },
    {
        title: 'NPC AI Mod',
        titleHtml: 'NPC <em>AI</em> Mod',
        tint: 'rgba(132, 204, 22, 0.32)',
        desc: 'Mod de Minecraft para Fabric que adiciona um NPC com inteligência própria, com inventário, comportamentos e comandos.',
        tags: ['Java', 'Fabric', 'Gradle'],
        art: 'voxel',
        repo: GH + 'NPC-AI-mine',
    },
];

// Arquivo completo: lista filtrável por `cat` (web, jogos, backend, java, ia).
// `demo` só quando há deploy no ar; `shot` mostra a prévia ao passar o mouse.
const projects = [
    { year: 2026, title: 'Pokédex', lang: 'JavaScript', stack: ['React 19', 'Vite'], cat: ['web'], desc: 'Os 1025 Pokémon com filtros, favoritos e evoluções.', demo: 'https://pocket-monsters-frontend.vercel.app', repo: GH + 'pocket-monsters-frontend', shot: 'assets/shots/pokedex.webp' },
    { year: 2026, title: 'Fábrica de Vídeos', lang: 'Python', stack: ['IA', 'MoviePy'], cat: ['ia'], desc: 'Agentes de IA que roteirizam, narram e editam vídeos.', repo: GH + 'fabrica-de-videos' },
    { year: 2026, title: 'NPC AI Mod', lang: 'Java', stack: ['Fabric'], cat: ['java', 'jogos', 'ia'], desc: 'NPC com inteligência própria no Minecraft.', repo: GH + 'NPC-AI-mine' },
    { year: 2026, title: 'Truco Multijogador', lang: 'JavaScript', stack: ['Node.js'], cat: ['jogos', 'web', 'backend'], desc: 'Truco online em tempo real com cliente e servidor.', repo: GH + 'Novo-Truco-Multi-Jogador' },
    { year: 2026, title: 'Genial', lang: 'TypeScript', stack: ['React', 'KaTeX', 'Vitest'], cat: ['web'], desc: 'Laboratório de cálculo com fórmulas, gráficos e simulações.', demo: 'https://genial-five.vercel.app', repo: GH + 'Genial', shot: 'assets/shots/genial.webp' },
    { year: 2026, title: 'Neon Orbit', lang: 'JavaScript', stack: ['Canvas', 'Web Audio'], cat: ['jogos', 'web'], desc: 'Pinball synthwave com multibola, jackpot e modo demonstração.', demo: 'https://pin-ball-chi.vercel.app', repo: GH + 'PinBall', shot: 'assets/shots/pinball.webp' },
    { year: 2025, title: 'Editor de Imagem', lang: 'JavaScript', stack: ['Canvas'], cat: ['web'], desc: 'Ajustes e filtros aplicados em tempo real no navegador.', repo: GH + 'Projeto-FN' },
    { year: 2025, title: 'Atividades Esportivas', lang: 'TypeScript', stack: ['Express', 'MongoDB', 'React'], cat: ['backend', 'web'], desc: 'Full stack com API REST e CRUD de atividades.', repo: GH + 'Desafio-01-Piracicaba' },
    { year: 2025, title: 'Mod Villagers', lang: 'Java', stack: ['Fabric'], cat: ['java', 'jogos'], desc: 'Expande o comportamento dos aldeões do Minecraft.', repo: GH + 'Mod-Villagers-Minecraft' },
    { year: 2025, title: 'Jocross: Planos de Saúde', lang: 'HTML', stack: ['SEO', 'CSS'], cat: ['web'], desc: 'Site institucional com SEO para uma corretora com 40+ anos de mercado.', repo: GH + 'site-plano-saude' },
    { year: 2025, title: 'Tetris Java Edition', lang: 'Java', stack: ['MVC'], cat: ['jogos', 'java'], desc: 'Tetris com níveis progressivos e ranking de recordes.', repo: GH + 'Tetris-Java-Edition' },
    { year: 2025, title: 'Jogo de Blocos', lang: 'JavaScript', stack: ['Canvas'], cat: ['jogos', 'web'], desc: 'O clássico de encaixar blocos em JavaScript puro.', demo: 'https://jogo-de-blocos.vercel.app', repo: GH + 'Jogo-de-Blocos', shot: 'assets/shots/blocos.webp' },
    { year: 2025, title: 'Calculadora de Juros', lang: 'JavaScript', stack: ['Finanças'], cat: ['web'], desc: 'Juros compostos com aportes mensais, investimento e financiamento.', demo: 'https://calcula-juros.vercel.app', repo: GH + 'Calcula-Juros', shot: 'assets/shots/juros.webp' },
    { year: 2025, title: 'Sistema de Caixa', lang: 'JavaScript', stack: ['PDV'], cat: ['backend', 'web'], desc: 'PDV com código de barras, parcelamento, cupons e estoque.', repo: GH + 'Sistema-Mercado' },
    { year: 2025, title: 'App de Ranking', lang: 'Vue', stack: ['Vue'], cat: ['web'], desc: 'Cadastro e classificação de participantes.', repo: GH + 'App-de-Ranking' },
    { year: 2025, title: 'Video Maker', lang: 'JavaScript', stack: ['Node.js'], cat: ['ia'], desc: 'A primeira versão da fábrica automática de vídeos.', repo: GH + 'Video-Maker' },
    { year: 2025, title: 'IA Minecraft', lang: 'Java', stack: ['IA'], cat: ['java', 'ia'], desc: 'Experimentos de inteligência artificial para entidades.', repo: GH + 'IA-Minecraft' },
    { year: 2025, title: 'Pong', lang: 'Python', stack: ['Jogo'], cat: ['jogos'], desc: 'O clássico Pong recriado em Python.', repo: GH + 'Pong' },
    { year: 2025, title: 'Jogo de Cartas', lang: 'Python', stack: ['Jogo'], cat: ['jogos'], desc: 'Jogo de cartas com regras e turnos.', repo: GH + 'Jogo-de-Cartas' },
    { year: 2024, title: 'API RESTful em PHP', lang: 'PHP', stack: ['REST', 'CRUD'], cat: ['backend'], desc: 'API REST em PHP puro, sem framework.', repo: GH + 'API-RESTful-em-PHP' },
    { year: 2024, title: 'Sorteador de Números', lang: 'JavaScript', stack: ['DOM'], cat: ['web'], desc: 'Sorteio de números aleatórios em um intervalo.', demo: 'https://sorteio-numeros-aleatorios.vercel.app', repo: GH + 'Sorteio-Numeros-Aleatorios', shot: 'assets/shots/sorteio.webp' },
    { year: 2024, title: 'Número Secreto', lang: 'JavaScript', stack: ['DOM'], cat: ['jogos', 'web'], desc: 'Adivinhe o número com dicas a cada tentativa.', demo: 'https://jogo-do-numero-secreto-nine-delta.vercel.app', repo: GH + 'jogo-do-numero-secreto', shot: 'assets/shots/secreto.webp' },
    { year: 2022, title: 'Pokédex (v1)', lang: 'JavaScript', stack: ['PokeAPI'], cat: ['web'], desc: 'Onde tudo começou: a primeira Pokédex.', demo: 'https://pokedex-steel-five.vercel.app', repo: GH + 'pokedex', shot: 'assets/shots/pokedex-v1.webp' },
];

// Linguagem principal de cada repositório próprio (sem forks).
const LANG_SHARE = [
    ['JavaScript', 10, LANG_COLORS.JavaScript],
    ['Java', 4, LANG_COLORS.Java],
    ['HTML & CSS', 4, LANG_COLORS.HTML],
    ['Python', 3, LANG_COLORS.Python],
    ['TypeScript', 2, LANG_COLORS.TypeScript],
    ['PHP & Vue', 2, LANG_COLORS.Vue],
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- capas desenhadas ---------- */
const PIXEL_NPC = [
    'hhhhhhhh',
    'hhhhhhhh',
    'hssssssh',
    'sewsswes',
    'ssssssss',
    'ssnmmnss',
    'ssmmmmss',
    'ssssssss',
];
const PIXEL_COLORS = { h: '#4a2f1b', s: '#c9926b', e: '#2b6cff', w: '#fff', n: '#8a5a3c', m: '#6b3f26' };

const ARTS = {
    pipeline: () => `
        <div class="art art-pipeline">
            <div class="prompt-box"><b>$</b> fabrica --descricao "Vídeo sobre reciclagem, 1 min, educativo"</div>
            <div class="steps">
                <div class="step"><span>✍️</span>Roteiro</div>
                <div class="step"><span>🎞️</span>Cenas</div>
                <div class="step"><span>🎙️</span>Narração</div>
                <div class="step"><span>✂️</span>Edição</div>
            </div>
            <div class="render">render final.mp4 <i></i> 1080p</div>
        </div>`,
    cards: () => `
        <div class="art art-cards">
            <div class="card c1"><span>4</span><span class="suit">♣</span><span class="corner-b">4</span></div>
            <div class="card c2 red"><span>7</span><span class="suit">♥</span><span class="corner-b">7</span></div>
            <div class="card c3"><span>A</span><span class="suit">♠</span><span class="corner-b">A</span></div>
            <div class="card c4 red"><span>7</span><span class="suit">♦</span><span class="corner-b">7</span></div>
            <span class="label">As quatro manilhas · Truco!</span>
        </div>`,
    voxel: () => `
        <div class="art art-voxel">
            <div class="pixel">${PIXEL_NPC.join('').split('').map((c) => `<i style="background:${PIXEL_COLORS[c]}"></i>`).join('')}</div>
            <div class="chat">
                <p><b>&lt;Steve&gt;</b> /npc seguir</p>
                <p><b>&lt;NPC&gt;</b> Indo até você!</p>
                <p><b>&lt;Steve&gt;</b> /npc minerar ferro</p>
                <p><b>&lt;NPC&gt;</b> 12 minérios encontrados ⛏️</p>
            </div>
        </div>`,
};

function linksFor(p, cls = '') {
    const demo = p.demo ? `<a href="${p.demo}" class="${cls ? cls + ' btn-primary' : 'demo'}" target="_blank" rel="noopener">${cls ? 'Ver online' : 'Online'} ↗</a>` : '';
    return `${demo}<a href="${p.repo}" class="${cls ? cls + ' btn-ghost' : ''}" target="_blank" rel="noopener">Código</a>`;
}

function renderFeatured() {
    document.getElementById('featured').innerHTML = featured.map((p, i) => {
        const visual = p.shot
            ? `<div class="browser"><div class="browser-bar"><i></i><i></i><i></i><span>${esc(p.demo.replace('https://', ''))}</span></div><img src="${p.shot}" alt="Tela do projeto ${esc(p.title)}" loading="lazy" width="1200" height="750"></div>`
            : ARTS[p.art]();
        return `
        <article class="case reveal">
            <div class="case-info">
                <div class="case-top mono">
                    <span>${String(i + 1).padStart(2, '0')} / ${String(featured.length).padStart(2, '0')}</span>
                    <span class="badge mono ${p.demo ? 'live' : ''}">${p.demo ? 'No ar' : 'Código aberto'}</span>
                </div>
                <h3>${p.titleHtml}</h3>
                <p>${esc(p.desc)}</p>
                <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
                <div class="case-links">${linksFor(p, 'btn')}</div>
            </div>
            <div class="case-visual" style="--c1:${p.tint}">${visual}</div>
        </article>`;
    }).join('');
}

function renderProjects(filter) {
    const list = filter === 'todos' ? projects : projects.filter((p) => p.cat.includes(filter));
    document.getElementById('projects').innerHTML = list.map((p, i) => `
        <div class="row project" role="row" style="animation-delay:${i * 30}ms" ${p.shot ? `data-shot="${p.shot}"` : ''}>
            <span class="year mono" role="cell">${p.year}</span>
            <div role="cell">
                <h3>${esc(p.title)}${p.demo ? '<span class="live-dot" title="No ar"></span>' : ''}</h3>
                <p>${esc(p.desc)}</p>
            </div>
            <div class="stack-list hide-md" role="cell">
                <span class="lang" style="--lang-color:${LANG_COLORS[p.lang] || '#9aa0b4'}">${p.lang}</span>
                ${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}
            </div>
            <div class="row-links" role="cell">${linksFor(p)}</div>
        </div>`).join('');
}

function renderLangs() {
    const total = LANG_SHARE.reduce((n, l) => n + l[1], 0);
    document.getElementById('langBar').innerHTML = LANG_SHARE
        .map(([, n, c], i) => `<span style="flex:${n};background:${c};transition-delay:${i * 90}ms"></span>`).join('');
    document.getElementById('langLegend').innerHTML = LANG_SHARE
        .map(([name, n, c]) => `<li><i style="background:${c}"></i>${name}<b>${Math.round((n / total) * 100)}%</b></li>`).join('');
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter');
    document.getElementById('countAll').textContent = projects.length;
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            buttons.forEach((b) => {
                b.classList.toggle('active', b === btn);
                b.setAttribute('aria-selected', b === btn);
            });
            renderProjects(btn.dataset.filter);
        });
    });
}

/* ---------- prévia flutuante no arquivo ---------- */
function setupPeek() {
    const peek = document.getElementById('peek');
    const img = peek.querySelector('img');
    const list = document.getElementById('projects');
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0, active = false;

    const loop = () => {
        cx += (x - cx) * 0.18;
        cy += (y - cy) * 0.18;
        peek.style.transform = `translate(${cx + 30}px, ${cy - 110}px) scale(${active ? 1 : 0.85})`;
        raf = active || Math.abs(x - cx) > 0.5 ? requestAnimationFrame(loop) : 0;
    };

    list.addEventListener('mousemove', (e) => {
        const row = e.target.closest('.project');
        x = e.clientX; y = e.clientY;
        const shot = row && row.dataset.shot;
        if (shot) {
            if (!active) { cx = x; cy = y; }
            if (img.getAttribute('src') !== shot) img.src = shot;
            active = true;
        } else {
            active = false;
        }
        peek.classList.toggle('show', active);
        if (!raf) raf = requestAnimationFrame(loop);
    });
    list.addEventListener('mouseleave', () => { active = false; peek.classList.remove('show'); });
}

/* ---------- navegação ---------- */
function setupNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const setOpen = (open) => {
        links.classList.toggle('open', open);
        nav.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', open);
        toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

    // destaca o link da seção visível
    const navAnchors = [...links.querySelectorAll('a[href^="#"]')];
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach((a) => a.classList.toggle('current', a.getAttribute('href') === '#' + entry.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
}

function setupReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('visible'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
}

/* ---------- tema ---------- */
function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f2f0e9' : '#0b0b0c';
    try { localStorage.setItem('theme', theme); } catch (e) {}
    window.dispatchEvent(new Event('themechange'));
}
const toggleTheme = () => setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');

/* ---------- campo de pontos interativo ---------- */
function setupField() {
    const canvas = document.getElementById('field');
    const ctx = canvas.getContext('2d');
    const GAP = 30, RADIUS = 150;
    let w, h, dpr, dots = [], dotRGB = '255,255,255', accent = '255,106,43';
    const mouse = { x: -9999, y: -9999 };

    const readColors = () => {
        const cs = getComputedStyle(document.documentElement);
        dotRGB = cs.getPropertyValue('--dot').trim();
        const hex = cs.getPropertyValue('--accent').trim().replace('#', '');
        accent = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(',');
    };

    const resize = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        dots = [];
        for (let y = GAP / 2; y < h; y += GAP) {
            for (let x = GAP / 2; x < w; x += GAP) dots.push({ x, y, ox: 0, oy: 0, a: 0 });
        }
    };

    const draw = () => {
        ctx.clearRect(0, 0, w, h);
        for (const d of dots) {
            const dx = d.x - mouse.x, dy = d.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            const f = Math.max(0, 1 - dist / RADIUS);
            const tx = dist ? (dx / dist) * f * 14 : 0;
            const ty = dist ? (dy / dist) * f * 14 : 0;
            d.ox += (tx - d.ox) * 0.12;
            d.oy += (ty - d.oy) * 0.12;
            d.a += (f - d.a) * 0.12;
            ctx.fillStyle = d.a > 0.02 ? `rgba(${accent},${0.15 + d.a * 0.75})` : `rgba(${dotRGB},0.13)`;
            const r = 1 + d.a * 1.4;
            ctx.fillRect(d.x + d.ox - r / 2, d.y + d.oy - r / 2, r, r);
        }
    };

    const loop = () => { draw(); requestAnimationFrame(loop); };

    readColors();
    resize();
    window.addEventListener('resize', () => { resize(); if (reduceMotion) draw(); });
    window.addEventListener('themechange', () => { readColors(); if (reduceMotion) draw(); });
    if (reduceMotion) { draw(); return; }
    window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    loop();
}

/* ---------- relógio de São José dos Campos ---------- */
function setupClock() {
    const el = document.getElementById('clock');
    const fmt = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
    const tick = () => { el.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 15000);
}

/* ---------- contador de repositórios ao vivo ---------- */
function animateCount(el, to) {
    if (reduceMotion) { el.textContent = to; return; }
    const start = performance.now();
    const step = (t) => {
        const k = Math.min(1, (t - start) / 1400);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function setupStats() {
    document.querySelectorAll('[data-count]').forEach((el) => animateCount(el, +el.dataset.count));
    fetch('https://api.github.com/users/emersonsg01')
        .then((r) => (r.ok ? r.json() : null))
        .then((u) => { if (u && u.public_repos) document.getElementById('statRepos').textContent = u.public_repos; })
        .catch(() => {});
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

function copyPhone() {
    const done = () => toast('WhatsApp copiado: (12) 99620-0288');
    if (navigator.clipboard) navigator.clipboard.writeText('+55 12 99620-0288').then(done, () => toast('(12) 99620-0288'));
    else toast('(12) 99620-0288');
}

const goTo = (id) => document.getElementById(id).scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
const openUrl = (url) => window.open(url, '_blank', 'noopener');

/* ---------- terminal ---------- */
function setupTerminal() {
    const body = document.getElementById('termBody');
    const form = document.getElementById('termForm');
    const input = document.getElementById('termField');
    const history = [];
    let hIndex = 0;

    const print = (html, cls = 'out') => {
        const p = document.createElement('p');
        p.className = cls;
        p.innerHTML = html;
        body.appendChild(p);
        body.scrollTop = body.scrollHeight;
    };

    const link = (url, label) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;

    const commands = {
        help: () => print(
            '<span class="hl">Comandos disponíveis:</span>\n' +
            '  sobre      quem é o Emerson\n' +
            '  projetos   os destaques\n' +
            '  stack      ferramentas que uso\n' +
            '  contato    como falar comigo\n' +
            '  ls / cd    navegar pelas seções\n' +
            '  tema       alternar claro/escuro\n' +
            '  github · linkedin · whatsapp · clear\n' +
            '<span class="hl">Dica:</span> Ctrl + K abre a paleta de comandos.'),
        whoami: () => print('<span class="hl">Emerson de Souza Gonçalves</span>\nDesenvolvedor de software · São José dos Campos, SP\nFormado em ADS pela Universidade Anhembi Morumbi.\n\nDigite <span class="hl">help</span> para ver o que mais dá para fazer.'),
        sobre: () => print('Trabalho com o ecossistema JavaScript (React, Vue, Node.js) e\nexperimento com Java, Python, PHP e TypeScript. Antes do código,\neditava vídeo e áudio e fazia design gráfico.'),
        projetos: () => print(featured.map((p) => `  ${p.demo ? '<span class="ok">●</span>' : '○'} ${link(p.demo || p.repo, esc(p.title))}`).join('\n') + '\n\n<span class="ok">●</span> no ar   ○ código aberto'),
        stack: () => print('<span class="hl">front</span>   HTML, CSS, JavaScript, TypeScript, React, Vue, Tailwind\n<span class="hl">back</span>    Node.js, Express, PHP, SQL, MongoDB\n<span class="hl">extra</span>   Java + Fabric, Python, MoviePy, APIs de IA, Vitest'),
        contato: () => print(`WhatsApp  ${link(WHATSAPP, '(12) 99620-0288')}\nLinkedIn  ${link(LINKEDIN, 'Emerson Gonçalves')}\nGitHub    ${link(GH, '@emersonsg01')}`),
        ls: () => print('<span class="hl">sobre/  projetos/  arquivo/  trajetoria/  contato/</span>'),
        cd: (arg) => {
            const id = norm(arg || '').replace(/\/$/, '').replace('trajetória', 'trajetoria');
            if (['sobre', 'projetos', 'arquivo', 'trajetoria', 'contato'].includes(id)) { print(`indo para ${id}/ ...`, 'ok'); setTimeout(() => goTo(id), 250); }
            else print(`cd: ${esc(arg || '')}: diretório não encontrado. Tente <span class="hl">ls</span>.`);
        },
        tema: () => { toggleTheme(); print(`tema ${document.documentElement.dataset.theme === 'light' ? 'claro' : 'escuro'} ativado`, 'ok'); },
        github: () => { print('abrindo github.com/emersonsg01 ...', 'ok'); openUrl(GH); },
        linkedin: () => { print('abrindo LinkedIn ...', 'ok'); openUrl(LINKEDIN); },
        whatsapp: () => { print('abrindo WhatsApp ...', 'ok'); openUrl(WHATSAPP); },
        contratar: () => { print('Ótima escolha. Te levando ao contato ...', 'ok'); setTimeout(() => goTo('contato'), 400); },
        sudo: () => print('Permissão negada. Mas gostei da confiança. 😄'),
        cafe: () => print('   ( (\n    ) )\n  ........\n  |      |]\n  \\      /\n   `----´   café pronto. Bora codar.'),
        date: () => print(new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })),
        echo: (arg) => print(esc(arg || '')),
        clear: () => { body.innerHTML = ''; },
    };
    commands.coffee = commands.cafe;
    commands.hire = commands.contratar;
    commands.ajuda = commands.help;

    const run = (raw) => {
        const line = raw.trim();
        print(esc(line), 'cmd');
        if (!line) return;
        const [name, ...rest] = line.split(/\s+/);
        const fn = commands[norm(name)];
        if (fn) fn(rest.join(' '));
        else print(`comando não encontrado: ${esc(name)}. Digite <span class="hl">help</span>.`);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = input.value;
        if (v.trim()) { history.push(v); hIndex = history.length; }
        input.value = '';
        run(v);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && history.length) {
            e.preventDefault(); hIndex = Math.max(0, hIndex - 1); input.value = history[hIndex];
        } else if (e.key === 'ArrowDown' && history.length) {
            e.preventDefault(); hIndex = Math.min(history.length, hIndex + 1); input.value = history[hIndex] || '';
        } else if (e.key === 'Tab' && input.value) {
            const match = Object.keys(commands).find((c) => c.startsWith(norm(input.value)));
            if (match) { e.preventDefault(); input.value = match; }
        }
    });

    document.getElementById('terminal').addEventListener('click', (e) => {
        if (!e.target.closest('a')) input.focus({ preventScroll: true });
    });

    // digita o primeiro comando sozinho
    const intro = 'whoami';
    if (reduceMotion) { run(intro); return; }
    let i = 0;
    const typed = document.createElement('p');
    typed.className = 'cmd';
    setTimeout(() => {
        body.appendChild(typed);
        const t = setInterval(() => {
            typed.textContent = intro.slice(0, ++i);
            if (i === intro.length) {
                clearInterval(t);
                setTimeout(() => { typed.remove(); run(intro); }, 350);
            }
        }, 110);
    }, 1300);
}

/* ---------- paleta de comandos (Ctrl/⌘ + K) ---------- */
function setupPalette() {
    const root = document.getElementById('palette');
    const input = document.getElementById('paletteInput');
    const list = document.getElementById('paletteList');
    let items = [], active = 0, lastFocus = null;

    const all = [
        { group: 'Navegar', icon: '↓', label: 'Sobre', hint: '01', run: () => goTo('sobre') },
        { group: 'Navegar', icon: '↓', label: 'Projetos em destaque', hint: '02', run: () => goTo('projetos') },
        { group: 'Navegar', icon: '↓', label: 'Arquivo completo', hint: '03', run: () => goTo('arquivo') },
        { group: 'Navegar', icon: '↓', label: 'Trajetória', hint: '04', run: () => goTo('trajetoria') },
        { group: 'Navegar', icon: '↓', label: 'Contato', hint: '05', run: () => goTo('contato') },
        { group: 'Ações', icon: '◐', label: 'Alternar tema claro/escuro', run: toggleTheme },
        { group: 'Ações', icon: '⧉', label: 'Copiar número do WhatsApp', run: copyPhone },
        { group: 'Ações', icon: '↗', label: 'Abrir WhatsApp', run: () => openUrl(WHATSAPP) },
        { group: 'Ações', icon: '↗', label: 'Abrir LinkedIn', run: () => openUrl(LINKEDIN) },
        { group: 'Ações', icon: '↗', label: 'Abrir GitHub', run: () => openUrl(GH) },
        ...projects.map((p) => ({
            group: 'Projetos', icon: p.demo ? '●' : '‹›', label: p.title,
            hint: p.demo ? 'ver online' : 'código', run: () => openUrl(p.demo || p.repo),
        })),
    ];

    const render = () => {
        const q = norm(input.value.trim());
        items = all.filter((it) => !q || norm(it.label + ' ' + it.group).includes(q));
        active = Math.min(active, Math.max(0, items.length - 1));
        if (!items.length) { list.innerHTML = '<li class="palette-empty">Nada encontrado.</li>'; return; }
        let group = '';
        list.innerHTML = items.map((it, i) => {
            const head = it.group !== group ? `<li class="palette-group" role="presentation">${(group = it.group)}</li>` : '';
            return `${head}<li class="palette-item ${i === active ? 'active' : ''}" role="option" aria-selected="${i === active}" data-i="${i}">
                <span class="ico">${it.icon}</span>${esc(it.label)}${it.hint ? `<small>${it.hint}</small>` : ''}</li>`;
        }).join('');
        const el = list.querySelector('.palette-item.active');
        if (el) el.scrollIntoView({ block: 'nearest' });
    };

    const open = () => {
        lastFocus = document.activeElement;
        root.hidden = false;
        input.value = ''; active = 0; render();
        input.focus();
    };
    const close = () => {
        root.hidden = true;
        if (lastFocus) lastFocus.focus({ preventScroll: true });
    };
    const exec = (i) => {
        const it = items[i];
        if (!it) return;
        close();
        it.run();
    };

    document.getElementById('openPalette').addEventListener('click', open);
    root.addEventListener('click', (e) => {
        if (e.target.closest('[data-close]')) close();
        const item = e.target.closest('.palette-item');
        if (item) exec(+item.dataset.i);
    });
    list.addEventListener('mousemove', (e) => {
        const item = e.target.closest('.palette-item');
        if (item && +item.dataset.i !== active) { active = +item.dataset.i; render(); }
    });
    input.addEventListener('input', () => { active = 0; render(); });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); active = (active + 1) % items.length; render(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); active = (active - 1 + items.length) % items.length; render(); }
        else if (e.key === 'Enter') { e.preventDefault(); exec(active); }
    });
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); root.hidden ? open() : close(); }
        else if (e.key === 'Escape' && !root.hidden) close();
    });
}

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
renderFeatured();
renderProjects('todos');
renderLangs();
setupFilters();
setupPeek();
setupNav();
setupReveal();
setupField();
setupClock();
setupStats();
setupTerminal();
setupPalette();
