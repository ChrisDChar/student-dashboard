document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const sidebarToggle = document.querySelector('aside .flex.items-center.justify-between button');

    // Function to update the theme toggle icon
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

    // Toggle theme function
    function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateIcon();
    
    // Debug: Check if classes are being applied
    console.log('Dark mode:', document.documentElement.classList.contains('dark'));
    console.log('Body classes:', document.body.className);
}

    // Initialize theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Initialize theme icon
    updateIcon();

    // Event listener for theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Event listener for sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
});

// Page switcher - can be outside DOMContentLoaded since it's called from HTML
function switchPage(pageId, btn) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');

    document.querySelectorAll('nav button').forEach(b => {
        b.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'shadow-md', 'shadow-blue-500', 'dark:shadow-blue-500/30');
        b.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });

    btn.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    btn.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white', 'shadow-md', 'shadow-blue-500', 'dark:shadow-blue-500/30');

    // Check if renderTeachers function exists before calling it
    if (pageId === 'teachersPage' && typeof renderTeachers === 'function') {
        renderTeachers();
    }
}

// Sidebar toggle function - can be outside DOMContentLoaded
function toggleSidebar() {
    const sidebar = document.querySelector('aside');
    const mainContent = document.getElementById('mainContent');
    const toggleButton = document.querySelector('aside .flex.items-center.justify-between button');
    const eduAdminText = document.querySelector('aside .flex.items-center.gap-2 span');
    const navTexts = document.querySelectorAll('nav button span');

    // Toggle sidebar width
    sidebar.classList.toggle('w-20');
    sidebar.classList.toggle('w-64');
    
    // Toggle main content margin
    if (mainContent) {
        mainContent.classList.toggle('ml-20');
        mainContent.classList.toggle('ml-64');
    }

    // Toggle text visibility
    if (eduAdminText) eduAdminText.classList.toggle('hidden');
    navTexts.forEach(span => span.classList.toggle('hidden'));

    // Rotate chevron icon
    if (toggleButton) {
        const chevronSvg = toggleButton.querySelector('svg');
        if (chevronSvg) {
            chevronSvg.classList.toggle('rotate-180');
        }
    }
}