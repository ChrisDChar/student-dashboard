function showLoader(container, message = "Loading") {
    if (!container) return;
    
    container.innerHTML = `
        <div class="flex justify-center items-center py-12">
            <div class="loader-card bg-white dark:bg-[#0f1629] border border-gray-200 dark:border-gray-700">
                <div class="loader">
                    <span class="words">
                        <span class="word">${message}</span>
                        <span class="word">Please</span>
                        <span class="word">Wait</span>
                        <span class="word">Almost</span>
                        <span class="word">Done</span>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function hideLoader(container) {
    if (container && container.querySelector('.loader-card')) {
        container.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let themeToggle = document.getElementById('themeToggle');
    let sidebarToggle = document.querySelector('aside .flex.items-center.justify-between button');

    function updateIcon() {
        if (!themeToggle) return;

        if (document.documentElement.classList.contains('dark')) {
            themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-6 w-6">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>`;
        } else {
            themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon h-6 w-6">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>`;
        }
    }

    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        updateIcon();
    }

    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    updateIcon();

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
});

function switchPage(pageId, btn) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');

    document.querySelectorAll('nav button').forEach(b => {
        b.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'shadow-md', 'shadow-blue-500/30');
        b.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });

    btn.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    btn.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'shadow-md', 'shadow-blue-500/30');

    if (pageId === 'teachersPage' && typeof renderTeachers === 'function') {
        renderTeachers();
    }
    if (pageId === 'studentsPage' && typeof renderStudents === 'function') {
        renderStudents();
    }
}

function toggleSidebar() {
    let sidebar = document.querySelector('aside');
    let mainContent = document.getElementById('mainContent');
    let toggleButton = document.querySelector('aside .flex.items-center.justify-between button');
    let eduAdminText = document.querySelector('aside .flex.items-center.gap-2 span');
    let navTexts = document.querySelectorAll('nav button span');

    sidebar.classList.toggle('w-20');
    sidebar.classList.toggle('w-64');
    
    if (mainContent) {
        mainContent.classList.toggle('ml-20');
        mainContent.classList.toggle('ml-64');
    }

    if (eduAdminText) eduAdminText.classList.toggle('hidden');
    navTexts.forEach(span => span.classList.toggle('hidden'));

    if (toggleButton) {
        let chevronSvg = toggleButton.querySelector('svg');
        if (chevronSvg) {
            chevronSvg.classList.toggle('rotate-180');
        }
    }
}

async function loadDashboardData() {
    try {
        const teachersResponse = await fetch('https://692376893ad095fb84709f35.mockapi.io/teachers');
        const teachersData = await teachersResponse.json();
        
        const studentsResponse = await fetch('https://692376893ad095fb84709f35.mockapi.io/students');
        const studentsData = await studentsResponse.json();
        
        document.querySelector('#dashboardPage [class*="text-gray-900 dark:text-white text-lg"]').innerHTML = teachersData.length || teachersData.count || '0';
        document.querySelectorAll('#dashboardPage [class*="text-gray-900 dark:text-white text-lg"]')[1].innerHTML = studentsData.length || studentsData.count || '0';
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        document.querySelector('#dashboardPage [class*="text-gray-900 dark:text-white text-lg"]').innerHTML = '0';
        document.querySelectorAll('#dashboardPage [class*="text-gray-900 dark:text-white text-lg"]')[1].innerHTML = '0';
    }
}

function initDashboard() {
    loadDashboardData();
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('dashboardPage')) {
        initDashboard();
    }
});