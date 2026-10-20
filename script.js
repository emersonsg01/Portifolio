const GH = 'https://github.com/emersonsg01/';

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

// Projetos em destaque: aparecem como cards grandes no topo da seção.
const featured = [
    {
        title: 'Pokédex',
        emoji: '🔴',
        colors: ['rgba(239, 68, 68, 0.45)', 'rgba(250, 204, 21, 0.25)'],
        desc: 'Pokédex responsiva com os 1025 Pokémon: busca instantânea, filtros por tipo e geração, favoritos, versão shiny, grito, evoluções e fraquezas.',
        tags: ['React 19', 'Vite', 'PokeAPI'],
        demo: 'https://pocket-monsters-frontend.vercel.app',
        repo: GH + 'pocket-monsters-frontend',
    },
    {
        title: 'Jocross: Planos de Saúde',
        emoji: '🩺',
        colors: ['rgba(56, 189, 248, 0.4)', 'rgba(124, 244, 196, 0.25)'],
        desc: 'Site institucional otimizado para SEO feito para uma corretora de planos de saúde com mais de 40 anos de mercado. Foco em conversão e captação de leads.',
        tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
        demo: 'https://site-plano-saude.vercel.app',
        repo: GH + 'site-plano-saude',
    },
    {
        title: 'Fábrica de Vídeos',
        emoji: '🎬',
        colors: ['rgba(197, 139, 255, 0.45)', 'rgba(124, 155, 255, 0.3)'],
        desc: 'MVP que gera vídeos automaticamente a partir de uma descrição: agentes de IA escrevem o roteiro, montam as cenas e a narração, e o MoviePy edita o resultado.',
        tags: ['Python', 'IA', 'MoviePy', 'TTS'],
        repo: GH + 'fabrica-de-videos',
    },
    {
        title: 'Truco Multijogador',
        emoji: '🃏',
        colors: ['rgba(34, 197, 94, 0.4)', 'rgba(250, 204, 21, 0.2)'],
        desc: 'Truco online para jogar com amigos em tempo real, com cliente e servidor separados para controlar as partidas.',
        tags: ['JavaScript', 'Node.js', 'Tempo real'],
        repo: GH + 'Novo-Truco-Multi-Jogador',
    },
    {
        title: 'Genial',
        emoji: '🧮',
        colors: ['rgba(124, 155, 255, 0.45)', 'rgba(56, 189, 248, 0.25)'],
        desc: 'Calculadora com módulos de matemática, física, finanças, conversão de unidades e gráficos. Tem testes automatizados.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'Vitest'],
        repo: GH + 'Genial',
    },
    {
        title: 'NPC AI Mod',
        emoji: '⛏️',
        colors: ['rgba(132, 204, 22, 0.4)', 'rgba(176, 114, 25, 0.35)'],
        desc: 'Mod de Minecraft para Fabric que adiciona um NPC com inteligência própria, inventário, comportamentos e comandos.',
        tags: ['Java', 'Fabric', 'Gradle'],
        repo: GH + 'NPC-AI-mine',
    },
];

// Demais projetos: grade filtrável por categoria.
const projects = [
    { title: 'Retro Pinball', icon: '🕹️', lang: 'JavaScript', cat: ['jogos', 'web'], desc: 'Pinball retrô jogável direto no navegador, com física e placar.', demo: 'https://pin-ball-chi.vercel.app', repo: GH + 'PinBall' },
    { title: 'Jogo de Blocos', icon: '🧱', lang: 'JavaScript', cat: ['jogos', 'web'], desc: 'O clássico de encaixar blocos, recriado em JavaScript puro.', demo: 'https://jogo-de-blocos.vercel.app', repo: GH + 'Jogo-de-Blocos' },
    { title: 'Tetris Java Edition', icon: '🟪', lang: 'Java', cat: ['jogos', 'java'], desc: 'Tetris em Java com arquitetura MVC, níveis de dificuldade progressivos e ranking de recordes.', repo: GH + 'Tetris-Java-Edition' },
    { title: 'Calculadora de Juros', icon: '💰', lang: 'JavaScript', cat: ['web'], desc: 'Simulador de juros compostos com aportes mensais e evolução do patrimônio.', demo: 'https://calcula-juros.vercel.app', repo: GH + 'Calcula-Juros' },
    { title: 'Editor de Imagem', icon: '🖼️', lang: 'JavaScript', cat: ['web'], desc: 'Editor de imagens no navegador com ajustes e filtros aplicados em tempo real.', demo: 'https://projeto-fn.vercel.app', repo: GH + 'Projeto-FN' },
    { title: 'Sistema de Caixa', icon: '🛒', lang: 'JavaScript', cat: ['backend', 'web'], desc: 'PDV de supermercado com código de barras, pagamentos parcelados, cupons e controle de estoque e validade.', repo: GH + 'Sistema-Mercado' },
    { title: 'Atividades Esportivas', icon: '🏃', lang: 'TypeScript', cat: ['backend', 'web'], desc: 'Aplicação full stack com CRUD de atividades: API REST em Express e MongoDB, front em React.', repo: GH + 'Desafio-01-Piracicaba' },
    { title: 'App de Ranking', icon: '🏆', lang: 'Vue', cat: ['web'], desc: 'Aplicação em Vue para cadastro e classificação de participantes em ranking.', repo: GH + 'App-de-Ranking' },
    { title: 'API RESTful em PHP', icon: '🔌', lang: 'PHP', cat: ['backend'], desc: 'API REST em PHP puro com rotas e operações CRUD.', repo: GH + 'API-RESTful-em-PHP' },
    { title: 'Video Maker', icon: '📹', lang: 'JavaScript', cat: ['ia'], desc: 'Primeira versão da fábrica automática de vídeos, escrita em JavaScript.', repo: GH + 'Video-Maker' },
    { title: 'IA Minecraft', icon: '🤖', lang: 'Java', cat: ['java', 'ia'], desc: 'Experimentos de inteligência artificial para entidades dentro do Minecraft.', repo: GH + 'IA-Minecraft' },
    { title: 'Mod Villagers', icon: '🏘️', lang: 'Java', cat: ['java', 'jogos'], desc: 'Mod Fabric que expande o comportamento dos aldeões do Minecraft.', repo: GH + 'Mod-Villagers-Minecraft' },
    { title: 'Pong', icon: '🏓', lang: 'Python', cat: ['jogos'], desc: 'O clássico Pong recriado em Python.', repo: GH + 'Pong' },
    { title: 'Jogo de Cartas', icon: '🂡', lang: 'Python', cat: ['jogos'], desc: 'Jogo de cartas em Python com regras e turnos.', repo: GH + 'Jogo-de-Cartas' },
    { title: 'Sorteador de Números', icon: '🎲', lang: 'JavaScript', cat: ['web'], desc: 'Sorteio de números aleatórios dentro de um intervalo definido pelo usuário.', demo: 'https://sorteio-numeros-aleatorios.vercel.app', repo: GH + 'Sorteio-Numeros-Aleatorios' },
    { title: 'Jogo do Número Secreto', icon: '🔢', lang: 'JavaScript', cat: ['jogos', 'web'], desc: 'Adivinhe o número secreto com dicas a cada tentativa.', demo: 'https://jogo-do-numero-secreto-nine-delta.vercel.app', repo: GH + 'jogo-do-numero-secreto' },
    { title: 'Pokédex (v1)', icon: '📕', lang: 'JavaScript', cat: ['web'], desc: 'A primeira versão da Pokédex, consumindo a PokeAPI.', demo: 'https://pokedex-steel-five.vercel.app', repo: GH + 'pokedex' },
];

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function linksRow(p) {
    const demo = p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Ver online ↗</a>` : '';
    return `<div class="links-row">${demo}<a href="${p.repo}" target="_blank" rel="noopener">Código</a></div>`;
}

function renderFeatured() {
    document.getElementById('featured').innerHTML = featured.map((p) => `
        <article class="card feature reveal">
            <div class="feature-cover" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
                <span class="badge ${p.demo ? 'live' : ''}">${p.demo ? 'No ar' : 'Código aberto'}</span>
                <span class="feature-emoji" aria-hidden="true">${p.emoji}</span>
            </div>
            <div class="feature-body">
                <h3>${esc(p.title)}</h3>
                <p>${esc(p.desc)}</p>
                <ul class="mini-tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
                ${linksRow(p)}
            </div>
        </article>`).join('');
}

function renderProjects(filter) {
    const list = filter === 'todos' ? projects : projects.filter((p) => p.cat.includes(filter));
    document.getElementById('projects').innerHTML = list.map((p, i) => `
        <article class="card project" style="animation-delay:${i * 40}ms">
            <div class="project-top">
                <span class="project-icon" aria-hidden="true">${p.icon}</span>
                <span class="lang" style="--lang-color:${LANG_COLORS[p.lang] || '#9aa0b4'}">${p.lang}</span>
            </div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
            ${linksRow(p)}
        </article>`).join('');
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter');
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

function setupTyped() {
    const el = document.getElementById('typed');
    const words = ['aplicações web', 'jogos', 'automações com IA', 'APIs', 'mods de Minecraft', 'sites que vendem'];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let w = 0;
    let i = words[0].length;
    let deleting = true;

    const tick = () => {
        const word = words[w];
        i += deleting ? -1 : 1;
        el.textContent = word.slice(0, i);

        let delay = deleting ? 45 : 85;
        if (!deleting && i === word.length) {
            deleting = true;
            delay = 1800;
        } else if (deleting && i === 0) {
            deleting = false;
            w = (w + 1) % words.length;
            delay = 300;
        }
        setTimeout(tick, delay);
    };
    setTimeout(tick, 2200);
}

document.getElementById('year').textContent = new Date().getFullYear();
renderFeatured();
renderProjects('todos');
setupFilters();
setupNav();
setupReveal();
setupTyped();
