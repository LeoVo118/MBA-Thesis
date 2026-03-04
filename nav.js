/**
 * nav.js — Shared top navigation for MBA Research Hub
 * Usage: place <script src="nav.js"></script> as FIRST child of <body>
 * Each page declares active section via <meta name="nav-active" content="p1">
 * Valid values: home | p1 | p2 | p3 | p4 | cases
 */
(function () {
  const active = (document.querySelector('meta[name="nav-active"]') || {}).content || 'home';

  const items = [
    { id:'home',  label:'📚 Tổng Quan',    href:'index.html' },
    { id:'p1',    label:'Part I',          href:'index.html#part1' },
    { id:'p2',    label:'Part II',         href:'index.html#part2' },
    { id:'p3',    label:'Part III',        href:'index.html#part3' },
    { id:'p4',    label:'Part IV',         href:'index.html#part4' },
    { id:'cases', label:'🔬 Case Studies', href:'index.html#cases' },
  ];

  const css = `
    #snav{position:sticky;top:0;z-index:999;background:#0d1730;border-bottom:1px solid rgba(212,160,23,.25);font-family:'Inter',sans-serif}
    #snav .ni{max-width:72rem;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;height:52px}
    #snav .logo{display:flex;align-items:center;gap:9px;text-decoration:none;flex-shrink:0}
    #snav .logo-icon{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#d4a017,#fbbf24);display:flex;align-items:center;justify-content:center}
    #snav .logo-icon svg{width:14px;height:14px;fill:#fff}
    #snav .logo-text{font-size:.78rem;font-weight:700;color:rgba(255,255,255,.85);white-space:nowrap}
    #snav .links{display:flex;align-items:center;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}
    #snav .links::-webkit-scrollbar{display:none}
    #snav .nb{padding:0 13px;height:52px;font-size:.7rem;font-weight:600;color:rgba(255,255,255,.5);letter-spacing:.04em;text-transform:uppercase;border:none;border-bottom:2px solid transparent;background:none;cursor:pointer;text-decoration:none;white-space:nowrap;display:flex;align-items:center;transition:color .2s,border-color .2s}
    #snav .nb:hover{color:#fbbf24}
    #snav .nb.on{color:#fbbf24;border-bottom-color:#fbbf24}
    #snav .hbg{display:none;background:none;border:none;color:rgba(255,255,255,.7);cursor:pointer;padding:4px}
    #snav .hbg svg{width:20px;height:20px}
    #snav .mob{display:none;flex-direction:column;background:#080f1e;border-top:1px solid rgba(255,255,255,.08);padding:8px 12px 12px}
    #snav .mob.open{display:flex}
    #snav .mob a{text-decoration:none;font-size:.8rem;font-weight:600;color:rgba(255,255,255,.6);padding:9px 12px;border-radius:8px;transition:all .15s;letter-spacing:.03em}
    #snav .mob a:hover,#snav .mob a.on{color:#fbbf24;background:rgba(212,160,23,.1)}
    @media(max-width:640px){#snav .links{display:none}#snav .hbg{display:flex}}
  `;

  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

  const deskLinks = items.map(i=>`<a href="${i.href}" class="nb${i.id===active?' on':''}">${i.label}</a>`).join('');
  const mobLinks  = items.map(i=>`<a href="${i.href}" class="${i.id===active?'on':''}">${i.label}</a>`).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="snav">
      <div class="ni">
        <a href="index.html" class="logo">
          <div class="logo-icon"><svg viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg></div>
          <span class="logo-text">MBA Research Hub</span>
        </a>
        <div class="links">${deskLinks}</div>
        <button class="hbg" onclick="document.getElementById('snav-mob').classList.toggle('open')">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      <div id="snav-mob" class="mob">${mobLinks}</div>
    </nav>
  `);
})();
