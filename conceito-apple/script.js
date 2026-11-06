const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* menu da navegação global no celular */
function setupNav() {
    const gnav = document.getElementById('gnav');
    const btn = document.getElementById('gnavMenu');
    const setOpen = (open) => {
        gnav.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
        btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    btn.addEventListener('click', () => setOpen(!gnav.classList.contains('open')));
    document.querySelectorAll('#gnavLinks a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

    // a navegação local fica clara sobre seções claras, como na Apple
    const lnav = document.getElementById('lnav');
    const claras = document.querySelectorAll('.tile-light, .grid-section, .highlights, .compare, .contact');
    const atualizar = () => {
        const y = 44 + 26;
        const sobreClara = [...claras].some((el) => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom >= y; });
        lnav.classList.toggle('light', sobreClara);
        gnav.classList.toggle('light', sobreClara && !gnav.classList.contains('open'));
    };
    atualizar();
    window.addEventListener('scroll', atualizar, { passive: true });
}

/* foto do hero cresce e perde o arredondamento conforme a rolagem */
function setupHeroPhoto() {
    const foto = document.getElementById('heroPhoto');
    if (reduceMotion) return;
    let pendente = false;
    const atualizar = () => {
        pendente = false;
        const r = foto.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight * 0.9)));
        foto.style.setProperty('--p', p.toFixed(3));
    };
    window.addEventListener('scroll', () => { if (!pendente) { pendente = true; requestAnimationFrame(atualizar); } }, { passive: true });
    atualizar();
}

/* manifesto: cada palavra acende quando passa do meio da tela */
function setupManifesto() {
    const el = document.getElementById('manifesto');
    el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span> `).join('');
    const palavras = [...el.querySelectorAll('.w')];
    if (reduceMotion) { palavras.forEach((w) => w.classList.add('on')); return; }
    let pendente = false;
    const atualizar = () => {
        pendente = false;
        const r = el.getBoundingClientRect();
        const p = (innerHeight * 0.75 - r.top) / (r.height + innerHeight * 0.25);
        const n = Math.round(Math.min(1, Math.max(0, p)) * palavras.length);
        palavras.forEach((w, i) => w.classList.toggle('on', i < n));
    };
    window.addEventListener('scroll', () => { if (!pendente) { pendente = true; requestAnimationFrame(atualizar); } }, { passive: true });
    atualizar();
}

function setupReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('visible')); return; }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    items.forEach((el) => io.observe(el));
}

/* números contam até o valor quando aparecem */
function setupCounters() {
    const els = document.querySelectorAll('[data-count]');
    const contar = (el) => {
        const alvo = +el.dataset.count;
        if (reduceMotion) { el.textContent = alvo; return; }
        const t0 = performance.now();
        const passo = (t) => {
            const k = Math.min(1, (t - t0) / 1600);
            el.textContent = Math.round(alvo * (1 - Math.pow(1 - k, 4)));
            if (k < 1) requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
    };
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { contar(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));

    fetch('https://api.github.com/users/emersonsg01')
        .then((r) => (r.ok ? r.json() : null))
        .then((u) => { if (u && u.public_repos) document.getElementById('statRepos').dataset.count = u.public_repos; })
        .catch(() => {});
}

/* carrossel de destaques com botões anterior/próximo */
function setupCarousel() {
    const trilho = document.getElementById('carousel');
    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');
    const passo = () => trilho.querySelector('.hcard').offsetWidth + 20;
    const estado = () => {
        prev.disabled = trilho.scrollLeft < 8;
        next.disabled = trilho.scrollLeft + trilho.clientWidth > trilho.scrollWidth - 8;
    };
    prev.addEventListener('click', () => trilho.scrollBy({ left: -passo(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => trilho.scrollBy({ left: passo(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    trilho.addEventListener('scroll', estado, { passive: true });
    window.addEventListener('resize', estado);
    estado();
}

document.getElementById('year').textContent = new Date().getFullYear();
setupNav();
setupHeroPhoto();
setupManifesto();
setupReveal();
setupCounters();
setupCarousel();
