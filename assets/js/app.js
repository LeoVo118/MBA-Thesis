// assets/js/app.js

// --- 1. CẤU HÌNH DỮ LIỆU (DATA) ---
const CONFIG = {
    defaultLang: 'en',
    
    // Cấu trúc Menu mới: Hỗ trợ Dropdown
    menu: [
        // HEADER CHÍNH
        { isHeader: true, title: { en: "BUSINESS RESEARCH METHODOLOGY", vi: "PHƯƠNG PHÁP NGHIÊN CỨU KD" } },

        // --- PART 1 ---
        {
            isDropdown: true,
            id: "part1", // ID duy nhất để toggle
            title: { en: "PART ONE: THE RESEARCH PROCESS", vi: "PHẦN 1: QUY TRÌNH NGHIÊN CỨU" },
            items: [
                { title: { en: "Chapter 1: Nature & Process", vi: "Chương 1: Bản chất & Quy trình" }, link: "chapter1.html", icon: "📘" },
                { title: { en: "Chapter 2: Research Strategies", vi: "Chương 2: Chiến lược nghiên cứu" }, link: "chapter2.html", icon: "aaa" },
                { title: { en: "Chapter 3: Research Designs", vi: "Chương 3: Thiết kế nghiên cứu" }, link: "chapter3.html", icon: "aaa" },
                { title: { en: "Chapter 4: Planning & Questions", vi: "Chương 4: Lập kế hoạch & Câu hỏi" }, link: "chapter4.html", icon: "aaa" },
                { title: { en: "Chapter 5: Literature Review", vi: "Chương 5: Tổng quan tài liệu" }, link: "chapter5.html", icon: "aaa" },
                { title: { en: "Chapter 6: Ethics", vi: "Chương 6: Đạo đức nghiên cứu" }, link: "chapter6.html", icon: "aaa" },
                { title: { en: "Chapter 7: Writing Up", vi: "Chương 7: Viết báo cáo" }, link: "chapter7.html", icon: "aaa" }
            ]
        },

        // --- PART 2 ---
        {
            isDropdown: true,
            id: "part2",
            title: { en: "PART TWO: QUANTITATIVE RESEARCH", vi: "PHẦN 2: NGHIÊN CỨU ĐỊNH LƯỢNG" },
            items: [
                { title: { en: "Chapter 8: Nature of Quantitative", vi: "Chương 8: Bản chất định lượng" }, link: "chapter8.html", icon: "📊" },
                { title: { en: "Chapter 9: Sampling (Quant)", vi: "Chương 9: Chọn mẫu (Định lượng)" }, link: "chapter9.html", icon: "aaa" },
                { title: { en: "Chapter 10: Structured Interview", vi: "Chương 10: Phỏng vấn cấu trúc" }, link: "chapter10.html", icon: "aaa" },
                { title: { en: "Chapter 11: Questionnaires", vi: "Chương 11: Bảng hỏi tự điền" }, link: "chapter11.html", icon: "aaa" },
                { title: { en: "Chapter 12: Asking Questions", vi: "Chương 12: Đặt câu hỏi" }, link: "chapter12.html", icon: "aaa" },
                { title: { en: "Chapter 13: Natural Data", vi: "Chương 13: Dữ liệu tự nhiên" }, link: "chapter13.html", icon: "aaa" },
                { title: { en: "Chapter 14: Secondary Analysis", vi: "Chương 14: Phân tích thứ cấp" }, link: "chapter14.html", icon: "aaa" },
                { title: { en: "Chapter 15: Quant Analysis", vi: "Chương 15: Phân tích dữ liệu" }, link: "chapter15.html", icon: "aaa" },
                { title: { en: "Chapter 16: Using IBM SPSS", vi: "Chương 16: Sử dụng SPSS" }, link: "chapter16.html", icon: "aaa" }
            ]
        },

        // --- PART 3 ---
        {
            isDropdown: true,
            id: "part3",
            title: { en: "PART THREE: QUALITATIVE RESEARCH", vi: "PHẦN 3: NGHIÊN CỨU ĐỊNH TÍNH" },
            items: [
                { title: { en: "Chapter 17: Nature of Qualitative", vi: "Chương 17: Bản chất định tính" }, link: "chapter17.html", icon: "📝" },
                { title: { en: "Chapter 18: Sampling (Qual)", vi: "Chương 18: Chọn mẫu (Định tính)" }, link: "chapter18.html", icon: "aaa" },
                { title: { en: "Chapter 19: Ethnography", vi: "Chương 19: Dân tộc học" }, link: "chapter19.html", icon: "aaa" },
                { title: { en: "Chapter 20: Interviewing (Qual)", vi: "Chương 20: Phỏng vấn sâu" }, link: "chapter20.html", icon: "aaa" },
                { title: { en: "Chapter 21: Focus Groups", vi: "Chương 21: Phỏng vấn nhóm" }, link: "chapter21.html", icon: "aaa" },
                { title: { en: "Chapter 22: Language", vi: "Chương 22: Ngôn ngữ" }, link: "chapter22.html", icon: "aaa" },
                { title: { en: "Chapter 23: Documents", vi: "Chương 23: Tài liệu văn bản" }, link: "chapter23.html", icon: "aaa" },
                { title: { en: "Chapter 24: Qual Analysis", vi: "Chương 24: Phân tích định tính" }, link: "chapter24.html", icon: "aaa" },
                { title: { en: "Chapter 25: Using NVivo", vi: "Chương 25: Sử dụng NVivo" }, link: "chapter25.html", icon: "aaa" }
            ]
        },

        // --- PART 4 ---
        {
            isDropdown: true,
            id: "part4",
            title: { en: "PART FOUR: MIXED METHODS", vi: "PHẦN 4: PHƯƠNG PHÁP HỖN HỢP" },
            items: [
                { title: { en: "Chapter 26: Breaking Divide", vi: "Chương 26: Phá vỡ rào cản" }, link: "chapter26.html", icon: "🔄" },
                { title: { en: "Chapter 27: Mixed Methods", vi: "Chương 27: Kết hợp phương pháp" }, link: "chapter27.html", icon: "aaa" }
            ]
        },

        // --- CASE STUDY ---
        { isHeader: true, title: { en: "CASE STUDY", vi: "NGHIÊN CỨU TÌNH HUỐNG" } },
        { 
            title: { en: "Unlocking AI Capabilities", vi: "Khai phá Năng lực AI" }, 
            link: "index.html", 
            icon: "🚀" 
        }
    ]
};

// --- 2. LOGIC HỆ THỐNG (CORE) ---
const App = {
    init: function() {
        this.lang = localStorage.getItem('site_lang') || CONFIG.defaultLang;
        this.renderLayout(); 
        this.applyLanguage(); 
        this.bindEvents(); 
        
        // Mở sẵn Dropdown chứa trang hiện tại
        this.autoOpenDropdown();
        
        // Mở tab đầu tiên nếu có
        if(document.querySelector('.nav-btn')) this.switchTab('overview');
    },

    renderLayout: function() {
        // 1. Render Sidebar
        const sidebarContainer = document.getElementById('sidebar-area');
        if (sidebarContainer) {
            const currentPath = window.location.pathname.split("/").pop() || "index.html";
            let html = `
                <div class="h-16 flex items-center px-6 border-b border-slate-100 bg-white sticky top-0 z-10">
                    <span class="text-xl font-extrabold text-slate-800 tracking-tight">MBA<span class="text-blue-600">Mastery</span></span>
                </div>
                <div class="flex-1 overflow-y-auto py-4 bg-white custom-scrollbar">`;

            CONFIG.menu.forEach(item => {
                const titleHTML = `<span class="lang-en">${item.title.en}</span><span class="lang-vi">${item.title.vi}</span>`;

                if (item.isHeader) {
                    // Render Header tĩnh
                    html += `<div class="px-6 mt-6 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-t border-slate-50 pt-4 first:mt-0 first:border-t-0">${titleHTML}</div>`;
                } 
                else if (item.isDropdown) {
                    // Render Dropdown (Part)
                    html += `
                        <div class="menu-group">
                            <button onclick="App.toggleSidebarGroup('${item.id}')" class="w-full flex justify-between items-center px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors group">
                                <span class="uppercase text-xs">${titleHTML}</span>
                                <span id="arrow-${item.id}" class="text-xs text-slate-400 transition-transform duration-200">▼</span>
                            </button>
                            <div id="group-${item.id}" class="hidden bg-slate-50 border-y border-slate-100">
                                ${item.items.map(subItem => {
                                    const subTitle = `<span class="lang-en">${subItem.title.en}</span><span class="lang-vi">${subItem.title.vi}</span>`;
                                    const activeClass = (currentPath === subItem.link) ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100';
                                    // Xử lý icon: Nếu là "aaa" thì bỏ qua để menu gọn, chỉ hiện icon đặc biệt
                                    const iconHtml = (subItem.icon && subItem.icon !== 'aaa') ? `<span class="w-5 inline-block">${subItem.icon}</span>` : `<span class="w-5 inline-block text-[10px] text-slate-300">•</span>`;
                                    
                                    return `<a href="${subItem.link}" class="flex items-center pl-8 pr-6 py-2.5 text-xs transition-colors ${activeClass}">
                                        ${iconHtml}
                                        <span class="truncate">${subTitle}</span>
                                    </a>`;
                                }).join('')}
                            </div>
                        </div>
                    `;
                } 
                else {
                    // Render Link thường (Case study)
                    const activeClass = (currentPath === item.link) ? 'active bg-blue-50 text-blue-600 font-bold border-r-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600';
                    html += `
                    <a href="${item.link}" class="sidebar-link flex items-center px-6 py-3 text-sm transition-colors ${activeClass}">
                        <span class="mr-3 text-lg">${item.icon}</span>
                        <span>${titleHTML}</span>
                    </a>`;
                }
            });
            
            html += `</div>`; // End scroll content
            
            // Footer user info
            html += `
                <div class="p-4 border-t border-slate-100 bg-slate-50 sticky bottom-0 z-10">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">HV</div>
                        <div><p class="text-xs font-bold text-slate-700">MBA Student</p><p class="text-[10px] text-slate-500">Pro Account</p></div>
                    </div>
                </div>`;
            
            sidebarContainer.innerHTML = html;
        }

        // Render Nút Ngôn ngữ
        const langPlace = document.getElementById('lang-switch-area');
        if (langPlace) {
            langPlace.innerHTML = `<button id="btn-toggle-lang" class="flex items-center justify-center w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-300 transition-colors shadow-sm"><span class="text-lg">🇺🇸</span></button>`;
        }
    },

    bindEvents: function() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('#btn-toggle-lang')) this.toggleLang();
        });
        window.switchTab = (tabId) => this.switchTab(tabId);
        window.toggleAccordion = (id) => { const el = document.getElementById(id); if(el) el.classList.toggle('hidden'); };
    },

    toggleSidebarGroup: function(id) {
        const group = document.getElementById(`group-${id}`);
        const arrow = document.getElementById(`arrow-${id}`);
        if(group) {
            group.classList.toggle('hidden');
            if(group.classList.contains('hidden')) {
                arrow.style.transform = 'rotate(0deg)';
            } else {
                arrow.style.transform = 'rotate(180deg)';
            }
        }
    },

    autoOpenDropdown: function() {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        CONFIG.menu.forEach(item => {
            if(item.isDropdown && item.items) {
                // Kiểm tra xem trang hiện tại có nằm trong dropdown này không
                const hasItem = item.items.some(sub => sub.link === currentPath);
                if(hasItem) {
                    this.toggleSidebarGroup(item.id);
                }
            }
        });
    },

    toggleLang: function() {
        this.lang = (this.lang === 'en') ? 'vi' : 'en';
        localStorage.setItem('site_lang', this.lang);
        this.applyLanguage();
    },

    applyLanguage: function() {
        document.body.classList.remove('lang-en', 'lang-vi');
        document.body.classList.add('lang-' + this.lang);
        const btn = document.querySelector('#btn-toggle-lang span');
        if(btn) btn.innerText = (this.lang === 'en') ? '🇺🇸' : '🇻🇳';
    },

    switchTab: function(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        const selectedTab = document.getElementById(tabId);
        if(selectedTab) {
            selectedTab.classList.remove('hidden');
            window.dispatchEvent(new Event('resize'));
        }
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active-tab', 'text-blue-600');
            btn.classList.add('text-slate-500');
            if(btn.dataset.tab === tabId) {
                btn.classList.add('active-tab', 'text-blue-600');
                btn.classList.remove('text-slate-500');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });