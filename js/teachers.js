let teachersData = [
    {
        id: 1,
        name: "Ramiro Beer",
        subject: "Computer Science",
        experience: 5,
        age: 28,
        rating: 3.7,
        phone: "725-645-1187 x54086",
        email: "Ramiro.Beer88@hotmail.com",
        twitter: "@ramirobeer",
        linkedin: "linkedin.com/in/ramiro-beer",
        gender: "Male"
    },
    {
        id: 2,
        name: "Debra Gottlieb",
        subject: "Physics",
        experience: 34,
        age: 58,
        rating: 4.5,
        phone: "482-775-3845 x7034",
        email: "Debra.Gottlieb@yahoo.com",
        twitter: "@debragottlieb",
        linkedin: "linkedin.com/in/debra-gottlieb",
        gender: "Female"
    },
    {
        id: 3,
        name: "Sandra Franey",
        subject: "Computer Science",
        experience: 4,
        age: 27,
        rating: 4.2,
        phone: "400-310-9506 x7960",
        email: "Sandra_Farney66@hotmail.com",
        twitter: "@sandrafarney",
        linkedin: "linkedin.com/in/sandra-farney",
        gender: "Female"
    },
    {
        id: 4,
        name: "Lance Ledner",
        subject: "Computer Science",
        experience: 36,
        age: 60,
        rating: 4.1,
        phone: "1-852-430-6889 x82737",
        email: "Lance.Ledner65@hotmail.com",
        twitter: "@lanceledner",
        linkedin: "linkedin.com/in/lance-ledner",
        gender: "Male"
    },
    {
        id: 5,
        name: "Maria Rodriguez",
        subject: "Mathematics",
        experience: 12,
        age: 40,
        rating: 4.3,
        phone: "555-123-4567 x1234",
        email: "maria.rodriguez@school.edu",
        twitter: "@mariarodriguez",
        linkedin: "linkedin.com/in/maria-rodriguez",
        gender: "Female"
    },
    {
        id: 6,
        name: "James Wilson",
        subject: "Chemistry",
        experience: 8,
        age: 35,
        rating: 4.4,
        phone: "555-234-5678 x2345",
        email: "james.wilson@school.edu",
        twitter: "@jameswilson",
        linkedin: "linkedin.com/in/james-wilson",
        gender: "Male"
    },
    {
        id: 7,
        name: "Lisa Thompson",
        subject: "Biology",
        experience: 15,
        age: 42,
        rating: 4.6,
        phone: "555-345-6789 x3456",
        email: "lisa.thompson@school.edu",
        twitter: "@lisathompson",
        linkedin: "linkedin.com/in/lisa-thompson",
        gender: "Female"
    },
    {
        id: 8,
        name: "Michael Chen",
        subject: "Mathematics",
        experience: 7,
        age: 32,
        rating: 4.0,
        phone: "555-456-7890 x4567",
        email: "michael.chen@school.edu",
        twitter: "@michaelchen",
        linkedin: "linkedin.com/in/michael-chen",
        gender: "Male"
    },
    {
        id: 9,
        name: "Sarah Johnson",
        subject: "English",
        experience: 20,
        age: 45,
        rating: 4.7,
        phone: "555-567-8901 x5678",
        email: "sarah.johnson@school.edu",
        twitter: "@sarahjohnson",
        linkedin: "linkedin.com/in/sarah-johnson",
        gender: "Female"
    },
    {
        id: 10,
        name: "David Martinez",
        subject: "History",
        experience: 18,
        age: 48,
        rating: 4.3,
        phone: "555-678-9012 x6789",
        email: "david.martinez@school.edu",
        twitter: "@davidmartinez",
        linkedin: "linkedin.com/in/david-martinez",
        gender: "Male"
    },
    {
        id: 11,
        name: "Emily Davis",
        subject: "Art",
        experience: 6,
        age: 29,
        rating: 4.2,
        phone: "555-789-0123 x7890",
        email: "emily.davis@school.edu",
        twitter: "@emilydavis",
        linkedin: "linkedin.com/in/emily-davis",
        gender: "Female"
    },
    {
        id: 12,
        name: "Robert Brown",
        subject: "Physics",
        experience: 25,
        age: 55,
        rating: 4.8,
        phone: "555-890-1234 x8901",
        email: "robert.brown@school.edu",
        twitter: "@robertbrown",
        linkedin: "linkedin.com/in/robert-brown",
        gender: "Male"
    },
    {
        id: 13,
        name: "Jennifer Lee",
        subject: "Computer Science",
        experience: 3,
        age: 26,
        rating: 3.9,
        phone: "555-901-2345 x9012",
        email: "jennifer.lee@school.edu",
        twitter: "@jenniferlee",
        linkedin: "linkedin.com/in/jennifer-lee",
        gender: "Female"
    },
    {
        id: 14,
        name: "Christopher Taylor",
        subject: "Music",
        experience: 10,
        age: 38,
        rating: 4.5,
        phone: "555-012-3456 x0123",
        email: "chris.taylor@school.edu",
        twitter: "@christaylor",
        linkedin: "linkedin.com/in/christopher-taylor",
        gender: "Male"
    },
    {
        id: 15,
        name: "Amanda White",
        subject: "Psychology",
        experience: 9,
        age: 34,
        rating: 4.1,
        phone: "555-123-4567 x1234",
        email: "amanda.white@school.edu",
        twitter: "@amandawhite",
        linkedin: "linkedin.com/in/amanda-white",
        gender: "Female"
    },
    {
        id: 16,
        name: "Kevin Anderson",
        subject: "Economics",
        experience: 14,
        age: 41,
        rating: 4.4,
        phone: "555-234-5678 x2345",
        email: "kevin.anderson@school.edu",
        twitter: "@kevinanderson",
        linkedin: "linkedin.com/in/kevin-anderson",
        gender: "Male"
    },
    {
        id: 17,
        name: "Michelle Garcia",
        subject: "Spanish",
        experience: 11,
        age: 36,
        rating: 4.6,
        phone: "555-345-6789 x3456",
        email: "michelle.garcia@school.edu",
        twitter: "@michellegarcia",
        linkedin: "linkedin.com/in/michelle-garcia",
        gender: "Female"
    },
    {
        id: 18,
        name: "Brian Clark",
        subject: "Physical Education",
        experience: 16,
        age: 44,
        rating: 4.2,
        phone: "555-456-7890 x4567",
        email: "brian.clark@school.edu",
        twitter: "@brianclark",
        linkedin: "linkedin.com/in/brian-clark",
        gender: "Male"
    },
    {
        id: 19,
        name: "Jessica Hall",
        subject: "Biology",
        experience: 5,
        age: 30,
        rating: 3.8,
        phone: "555-567-8901 x5678",
        email: "jessica.hall@school.edu",
        twitter: "@jessicahall",
        linkedin: "linkedin.com/in/jessica-hall",
        gender: "Female"
    },
    {
        id: 20,
        name: "Daniel Wright",
        subject: "Chemistry",
        experience: 22,
        age: 52,
        rating: 4.7,
        phone: "555-678-9012 x6789",
        email: "daniel.wright@school.edu",
        twitter: "@danielwright",
        linkedin: "linkedin.com/in/daniel-wright",
        gender: "Male"
    },
    {
        id: 21,
        name: "Nicole King",
        subject: "English",
        experience: 8,
        age: 33,
        rating: 4.3,
        phone: "555-789-0123 x7890",
        email: "nicole.king@school.edu",
        twitter: "@nicoleking",
        linkedin: "linkedin.com/in/nicole-king",
        gender: "Female"
    },
    {
        id: 22,
        name: "Matthew Scott",
        subject: "Mathematics",
        experience: 19,
        age: 47,
        rating: 4.5,
        phone: "555-890-1234 x8901",
        email: "matthew.scott@school.edu",
        twitter: "@matthewscott",
        linkedin: "linkedin.com/in/matthew-scott",
        gender: "Male"
    },
    {
        id: 23,
        name: "Rachel Adams",
        subject: "Computer Science",
        experience: 2,
        age: 25,
        rating: 3.6,
        phone: "555-901-2345 x9012",
        email: "rachel.adams@school.edu",
        twitter: "@racheladams",
        linkedin: "linkedin.com/in/rachel-adams",
        gender: "Female"
    },
    {
        id: 24,
        name: "Andrew Nelson",
        subject: "Physics",
        experience: 13,
        age: 39,
        rating: 4.4,
        phone: "555-012-3456 x0123",
        email: "andrew.nelson@school.edu",
        twitter: "@andrewnelson",
        linkedin: "linkedin.com/in/andrew-nelson",
        gender: "Male"
    }
];


let currentFilters = {
    gender: 'all',
    experience: 'all',
    rating: 'all',
    profession: 'all',
    search: ''
};

document.addEventListener("DOMContentLoaded", () => {
    renderTeachers(teachersData);
    updateTeachersCount(teachersData.length, teachersData.length);
    initializeFilters();
    setupSearch();
});

function renderTeachers(teachers = teachersData) {
    let container = document.getElementById("teachersContainer");
    if (!container) return;

    container.innerHTML = teachers.map(teacher => `
        <div class="teacher-card flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group">

            <div class="flex flex-col items-center text-center mb-4">
                <span class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-blue-100 dark:ring-blue-900">
                    <div class="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700 rounded-full">
                        ${teacher.name.split(" ").map(n => n[0]).join("")}
                    </div>
                </span>

                <h3 class="text-gray-900 dark:text-white mb-1">${teacher.name}</h3>

                <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 bg-secondary text-secondary-foreground mb-2">
                    ${teacher.subject}
                </span>

                <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-briefcase h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                        </svg>
                        ${teacher.experience}y
                    </span>
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-users h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        ${teacher.age}y
                    </span>
                </div>

                <div class="flex items-center gap-1 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span class="text-gray-900 dark:text-white">${teacher.rating}</span>
                </div>
            </div>

            <div class="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-phone h-4 w-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    ${teacher.phone}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-mail h-4 w-4 text-green-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                    ${teacher.email}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-send h-4 w-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    ${teacher.twitter}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-linkedin h-4 w-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    ${teacher.linkedin}
                </div>
            </div>

        </div>
    `).join("");
}

function updateTeachersCount(showing, total) {
    let el = document.getElementById("teachersCount");
    if (el) el.innerText = `Showing ${showing} of ${total} teachers`;
}

function setupSearch() {
    let searchInput = document.getElementById("teacherSearch");
    
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentFilters.search = searchInput.value.toLowerCase().trim();
            applyFilters();
        });
    }
}

function initializeFilters() {
    populateProfessionOptions();
    setupFilterDropdowns();
    setupFilterHandlers();
}

function populateProfessionOptions() {
    const professionContainer = document.querySelector('.profession-option').parentElement;
    const professions = [...new Set(teachersData.map(teacher => teacher.subject))];
    
    professions.forEach(profession => {
        const button = document.createElement('button');
        button.className = 'profession-option w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700';
        button.setAttribute('data-value', profession);
        button.textContent = profession;
        professionContainer.appendChild(button);
    });
}

function setupFilterDropdowns() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = button.nextElementSibling;
            const isVisible = dropdown.style.display === 'block';
            
            document.querySelectorAll('.absolute').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            
            dropdown.style.display = isVisible ? 'none' : 'block';
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.absolute').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
}

function setupFilterHandlers() {
    document.querySelectorAll('.gender-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            currentFilters.gender = value;
            updateFilterButton('gender', value, getGenderDisplayText(value));
            applyFilters();
        });
    });

    document.querySelectorAll('.experience-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            currentFilters.experience = value;
            updateFilterButton('experience', value, getExperienceDisplayText(value));
            applyFilters();
        });
    });

    document.querySelectorAll('.rating-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            currentFilters.rating = value;
            updateFilterButton('rating', value, getRatingDisplayText(value));
            applyFilters();
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('profession-option')) {
            const value = e.target.getAttribute('data-value');
            currentFilters.profession = value;
            updateFilterButton('profession', value, getProfessionDisplayText(value));
            applyFilters();
        }
    });
}

function updateFilterButton(filterType, value, displayText) {
    const button = document.querySelector(`[data-filter="${filterType}"]`);
    button.textContent = displayText;
    button.setAttribute('data-value', value);
}

function getGenderDisplayText(value) {
    const texts = { all: 'All Gender', male: 'Male Only', female: 'Female Only' };
    return texts[value] || 'All Gender';
}

function getExperienceDisplayText(value) {
    const texts = { 
        all: 'All Experience', 
        '0-5': '0-5 years', 
        '6-10': '6-10 years', 
        '11-20': '11-20 years', 
        '20+': '20+ years' 
    };
    return texts[value] || 'All Experience';
}

function getRatingDisplayText(value) {
    const texts = { all: 'All Rating', highest: 'Highest First', lowest: 'Lowest First' };
    return texts[value] || 'All Rating';
}

function getProfessionDisplayText(value) {
    return value === 'all' ? 'All Profession' : value;
}

function applyFilters() {
    let filteredTeachers = [...teachersData];

    if (currentFilters.search) {
        filteredTeachers = filteredTeachers.filter(teacher =>
            teacher.name.toLowerCase().includes(currentFilters.search) ||
            teacher.email.toLowerCase().includes(currentFilters.search) ||
            teacher.subject.toLowerCase().includes(currentFilters.search)
        );
    }

    if (currentFilters.gender !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => 
            teacher.gender.toLowerCase() === currentFilters.gender
        );
    }

    if (currentFilters.experience !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => {
            const exp = teacher.experience;
            switch (currentFilters.experience) {
                case '0-5': return exp >= 0 && exp <= 5;
                case '6-10': return exp >= 6 && exp <= 10;
                case '11-20': return exp >= 11 && exp <= 20;
                case '20+': return exp > 20;
                default: return true;
            }
        });
    }

    if (currentFilters.profession !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => 
            teacher.subject === currentFilters.profession
        );
    }

    if (currentFilters.rating !== 'all') {
        filteredTeachers.sort((a, b) => {
            if (currentFilters.rating === 'highest') {
                return b.rating - a.rating;
            } else {
                return a.rating - b.rating;
            }
        });
    }

    renderTeachers(filteredTeachers);
    updateTeachersCount(filteredTeachers.length, teachersData.length);
}