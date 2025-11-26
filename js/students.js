let studentsData = [];
let currentStudentPage = 1;
let studentsPerPage = 8;
let currentStudentFilters = {
    gender: 'all',
    grade: 'all',
    rating: 'all',
    age: 'all',
    search: ''
};

let STUDENTS_API_URL = 'https://692376893ad095fb84709f35.mockapi.io/students';

function getStudentInitials(name) {
    if (!name) return '??';
    return name.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

function normalizeStudentRating(rating) {
    if (rating === null || rating === undefined) {
        return 3.0;
    }
    
    let numRating = typeof rating === 'string' ? parseFloat(rating) : rating;
    
    if (numRating >= 1 && numRating <= 5) {
        return parseFloat(numRating.toFixed(1));
    }
    
    if (numRating >= 0 && numRating <= 100) {
        let normalized = 1 + (numRating / 100) * 4;
        return parseFloat(normalized.toFixed(1));
    }
    
    return Math.min(5, parseFloat(numRating.toFixed(1)));
}

function normalizeStudentGender(gender) {
    if (gender === null || gender === undefined) {
        return Math.random() > 0.5 ? 'Male' : 'Female';
    }
    
    if (typeof gender === 'boolean') {
        return gender ? 'Male' : 'Female';
    }
    
    if (typeof gender === 'number') {
        return gender === 1 ? 'Male' : 'Female';
    }
    
    if (typeof gender === 'string') {
        let genderLower = gender.toLowerCase();
        
        if (genderLower.includes('male') || genderLower === 'm' || genderLower === 'boy' || genderLower === 'true' || genderLower === '1') {
            return 'Male';
        }
        if (genderLower.includes('female') || genderLower === 'f' || genderLower === 'girl' || genderLower === 'false' || genderLower === '0') {
            return 'Female';
        }
    }
    
    return Math.random() > 0.5 ? 'Male' : 'Female';
}

async function loadStudentsData() {
    try {
        showStudentLoadingState();
        
        let response = await fetch(STUDENTS_API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let data = await response.json();
        
        data = data.map(student => ({
            ...student,
            age: normalizeStudentAge(student.age),
            grade: normalizeStudentGrade(student.grade),
            coins: normalizeStudentCoins(student.coins),
            rating: normalizeStudentRating(student.rating)
        }));
        
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format: Expected array');
        }
        
        if (data.length === 0) {
            console.warn('No students data found in API');
        }
        
        studentsData = data;
        renderStudents(studentsData);
        updateStudentsCount(studentsData.length, studentsData.length);
        
    } catch (error) {
        console.error('Error loading students data:', error);
        showStudentErrorState('Failed to load students data. Please try again later.');
        studentsData = [];
    }
}

function normalizeStudentAge(age) {
    if (age >= 6 && age <= 25) {
        return age;
    }
    if (age > 25) {
        return Math.min(25, Math.max(6, age % 13 + 6));
    }
    return Math.max(6, age);
}

function normalizeStudentGrade(grade) {
    if (grade >= 1 && grade <= 12) {
        return grade;
    }
    if (grade > 12) {
        return Math.min(12, Math.max(1, grade % 12 + 1));
    }
    return Math.max(1, grade);
}

function normalizeStudentCoins(coins) {
    if (coins === null || coins === undefined) {
        return 0;
    }
    
    let numCoins = typeof coins === 'string' ? parseFloat(coins) : coins;
    
    if (isNaN(numCoins)) {
        return 0;
    }
    
    return Math.max(0, numCoins);
}

function showStudentLoadingState() {
    let container = document.getElementById("studentsContainer");
    if (container) {
        container.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-12">
                <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                    <p class="text-gray-600 dark:text-gray-400">Loading students...</p>
                </div>
            </div>
        `;
    }
}

function showStudentErrorState(message) {
    let container = document.getElementById("studentsContainer");
    if (container) {
        container.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-12">
                <div class="text-center text-red-600 dark:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p class="text-lg font-medium mb-2">Oops! Something went wrong</p>
                    <p class="text-sm">${message}</p>
                    <button onclick="loadStudentsData()" class="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                        Try Again
                    </button>
                </div>
            </div>
        `;
    }
}

async function editStudent(id) {
    let student = studentsData.find(s => s.id === id);
    if (!student) return;

    let modal = document.getElementById('addStudentModal');
    let form = document.getElementById('addStudentForm');
    let title = modal.querySelector('h3');
    let submitBtn = form.querySelector('button[type="submit"]');
    
    title.textContent = 'Edit Student';
    submitBtn.textContent = 'Update Student';
    
    form.querySelector('[name="name"]').value = student.name;
    form.querySelector('[name="grade"]').value = student.grade;
    form.querySelector('[name="age"]').value = student.age;
    form.querySelector('[name="rating"]').value = student.rating;
    form.querySelector('[name="coins"]').value = student.coins;
    form.querySelector('[name="gender"]').value = student.gender;
    form.querySelector('[name="phone"]').value = student.phone;
    form.querySelector('[name="email"]').value = student.email;
    form.querySelector('[name="twitter"]').value = student.twitter || '';
    form.querySelector('[name="linkedin"]').value = student.linkedin || '';

    form.dataset.editId = id;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

async function deleteStudent(id) {
    let student = studentsData.find(s => s.id === id);
    if (!student) return;

    let url;

    if (!student.teacherId) {
        url = `https://692376893ad095fb84709f35.mockapi.io/students/${id}`;
    } 
    else {
        url = `https://692376893ad095fb84709f35.mockapi.io/teachers/${student.teacherId}/students/${id}`;
    }

    if (!confirm("Are you sure you want to delete this student?")) return;

    try {
        let response = await fetch(url, { method: "DELETE" });

        if (!response.ok) throw new Error(response.status);

        studentsData = studentsData.filter(s => s.id !== id);
        renderStudents(studentsData);

        showToast("Student deleted successfully!", "success");

    } catch (error) {
        console.error("Delete error:", error);
        showToast("Failed to delete student.", "error");
    }
}


async function updateStudentInAPI(id, studentData) {
    let response = await fetch(`${STUDENTS_API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData)
    });
    
    if (!response.ok) {
        throw new Error('Failed to update student');
    }
    
    return await response.json();
}

function renderStudents(students = studentsData) {
    let container = document.getElementById("studentsContainer");
    if (!container) return;

    let startIndex = (currentStudentPage - 1) * studentsPerPage;
    let endIndex = startIndex + studentsPerPage;
    let paginatedStudents = students.slice(startIndex, endIndex);

    if (paginatedStudents.length === 0 && currentStudentPage > 1) {
        currentStudentPage--;
        renderStudents(students);
        return;
    }

    if (paginatedStudents.length === 0) {
        container.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-12">
                <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p class="text-gray-600 dark:text-gray-400 text-lg">No students found</p>
                    <p class="text-gray-500 dark:text-gray-500 text-sm">Try adjusting your filters or search terms</p>
                </div>
            </div>
        `;
        renderStudentPagination(students.length);
        return;
    }

    container.innerHTML = paginatedStudents.map(student => `
        <div class="student-card flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group relative"
         onclick="openSinglePage('student', '${student.id}')">
            <div class="flex flex-col items-center text-center mb-4">
                <div class="relative h-20 w-20 mb-3">
                    ${student.avatar ? 
                        `<img src="${student.avatar}" alt="${student.name}" class="w-full h-full rounded-full object-cover ring-4 ring-purple-100 dark:ring-purple-900" />` :
                        `<div class="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold ring-4 ring-purple-100 dark:ring-purple-900">
                            ${getStudentInitials(student.name)}
                        </div>`
                    }
                </div>

                <h3 class="text-gray-900 dark:text-white mb-1">${student.name}</h3>

                <div class="flex items-center gap-2 mb-3">
                    <span class="inline-flex items-center justify-center rounded-md border border-blue-500 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 text-blue-600 dark:text-blue-400">
                        Grade ${student.grade}
                    </span>
                    <span class="text-gray-600 dark:text-gray-400 text-sm">${student.age}y</span>
                </div>

                <div class="w-full space-y-2 mb-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <span class="text-sm text-gray-900 dark:text-white">${student.rating}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-coins h-4 w-4 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <circle cx="8" cy="8" r="6"></circle>
                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                <path d="M7 6h1v4"></path>
                                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                            </svg>
                            <span class="text-sm text-gray-900 dark:text-white">${student.coins}</span>
                        </div>
                    </div>
                    
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-black dark:bg-white h-2 rounded-full transition-all duration-300" 
                             style="width: ${(Math.min(student.rating, 5) / 5) * 100}%">
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-phone h-4 w-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                    ${student.phone}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-mail h-4 w-4 text-green-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                    ${student.email}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-send h-4 w-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    ${student.twitter}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="lucide lucide-linkedin h-4 w-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    ${student.linkedin}
                </div>
            </div>

            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <button onclick="event.stopPropagation(); editStudent('${student.id}')" 
                        class="edit-btn flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-9 px-4 py-2 gap-2">
                    Edit
                </button>
                <button onclick="event.stopPropagation(); deleteStudent('${student.id}')" 
                        class="delete-btn flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 h-9 px-4 py-2 gap-2">
                    Delete
                </button>
            </div>
        </div>
    `).join("");

    renderStudentPagination(students.length);
}

function renderStudentPagination(totalStudents) {
    let container = document.getElementById("studentsContainer");
    if (!container) return;

    let totalPages = Math.ceil(totalStudents / studentsPerPage);
    
    if (totalPages <= 1) {
        return;
    }

    let pages = [];
    let maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
        pages = Array.from({length: totalPages}, (_, i) => i + 1);
    } else {
        if (currentStudentPage <= 3) {
            pages = [1, 2, 3, 4, '...', totalPages];
        } else if (currentStudentPage >= totalPages - 2) {
            pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, '...', currentStudentPage - 1, currentStudentPage, currentStudentPage + 1, '...', totalPages];
        }
    }

    let paginationHTML = `
        <div class="col-span-full flex justify-center items-center space-x-1 mt-6">
            <button onclick="changeStudentPage(${currentStudentPage - 1}, ${totalPages})" 
                    ${currentStudentPage === 1 ? 'disabled' : ''}
                    class="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                Previous
            </button>
            
            ${pages.map(page => 
                page === '...' 
                    ? `<span class="px-3 py-2 text-gray-500">...</span>`
                    : `<button onclick="changeStudentPage(${page}, ${totalPages})"
                            class="px-3 py-2 rounded border text-sm ${
                                page === currentStudentPage 
                                ? 'border-purple-500 bg-purple-500 text-white' 
                                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }">
                        ${page}
                    </button>`
            ).join('')}
            
            <button onclick="changeStudentPage(${currentStudentPage + 1}, ${totalPages})"
                    ${currentStudentPage === totalPages ? 'disabled' : ''}
                    class="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                Next
            </button>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', paginationHTML);
}

function changeStudentPage(page, totalPages) {
    if (page < 1 || page > totalPages) return;
    
    currentStudentPage = page;
    applyStudentFilters();
}

function updateStudentsCount(showing, total) {
    let el = document.getElementById("studentsCount");
    if (el) {
        let start = (currentStudentPage - 1) * studentsPerPage + 1;
        let end = Math.min(currentStudentPage * studentsPerPage, total);
        el.innerText = `Showing ${start}-${end} of ${total} students`;
    }
}

function updateStudentsCount(showing, total) {
    let el = document.getElementById("studentsCount");
    if (el) el.innerText = `Showing ${showing} of ${total} students`;
}

function setupStudentSearch() {
    let searchInput = document.getElementById("studentSearch");
    
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentStudentFilters.search = searchInput.value.toLowerCase().trim();
            applyStudentFilters();
        });
    }
}

function initializeStudentFilters() {
    populateGradeOptions();
    setupStudentFilterDropdowns();
    setupStudentFilterHandlers();
}

function populateGradeOptions() {
    let gradeContainer = document.querySelector('.grade-option')?.parentElement;
    if (!gradeContainer) return;
    
    let grades = [...new Set(studentsData.map(student => student.grade))].sort((a, b) => a - b);
    
    grades.forEach(grade => {
        let button = document.createElement('button');
        button.className = 'grade-option w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2';
        button.setAttribute('data-value', grade);
        button.textContent = `Grade ${grade}`;
        gradeContainer.appendChild(button);
    });
}

function setupStudentFilterDropdowns() {
    let filterButtons = document.querySelectorAll('.student-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            let dropdown = button.nextElementSibling;
            let isVisible = dropdown.style.display === 'block';
            
            document.querySelectorAll('.student-filters .absolute').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            
            dropdown.style.display = isVisible ? 'none' : 'block';
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.student-filters .absolute').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
}

function setupStudentFilterHandlers() {
    document.querySelectorAll('.student-gender-option').forEach(option => {
        option.addEventListener('click', (e) => {
            let value = e.target.getAttribute('data-value');
            currentStudentFilters.gender = value;
            updateStudentFilterButton('gender', value, getStudentGenderDisplayText(value));
            applyStudentFilters();
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('grade-option')) {
            let value = e.target.getAttribute('data-value');
            currentStudentFilters.grade = value;
            updateStudentFilterButton('grade', value, getStudentGradeDisplayText(value));
            applyStudentFilters();
        }
    });

    document.querySelectorAll('.student-rating-option').forEach(option => {
        option.addEventListener('click', (e) => {
            let value = e.target.getAttribute('data-value');
            currentStudentFilters.rating = value;
            updateStudentFilterButton('rating', value, getStudentRatingDisplayText(value));
            applyStudentFilters();
        });
    });

    document.querySelectorAll('.student-age-option').forEach(option => {
        option.addEventListener('click', (e) => {
            let value = e.target.getAttribute('data-value');
            currentStudentFilters.age = value;
            updateStudentFilterButton('age', value, getStudentAgeDisplayText(value));
            applyStudentFilters();
        });
    });
}

function updateStudentFilterButton(filterType, value, displayText) {
    let button = document.querySelector(`[data-student-filter="${filterType}"]`);
    if (button) {
        button.textContent = displayText;
        button.setAttribute('data-value', value);
    }
}

function getStudentGenderDisplayText(value) {
    let texts = { all: 'All Gender', male: 'Male Only', female: 'Female Only' };
    return texts[value] || 'All Gender';
}

function getStudentGradeDisplayText(value) {
    return value === 'all' ? 'All Grades' : `Grade ${value}`;
}

function getStudentRatingDisplayText(value) {
    let texts = { all: 'All Rating', highest: 'Highest First', lowest: 'Lowest First' };
    return texts[value] || 'All Rating';
}

function getStudentAgeDisplayText(value) {
    let texts = { 
        all: 'All Ages', 
        '6-10': '6-10 years', 
        '11-14': '11-14 years', 
        '15-18': '15-18 years' 
    };
    return texts[value] || 'All Ages';
}

function applyStudentFilters() {
    let filteredStudents = [...studentsData];

    if (currentStudentFilters.search) {
        filteredStudents = filteredStudents.filter(student =>
            student.name.toLowerCase().includes(currentStudentFilters.search) ||
            student.email.toLowerCase().includes(currentStudentFilters.search) ||
            student.grade.toString().includes(currentStudentFilters.search)
        );
    }

    if (currentStudentFilters.gender !== 'all') {
        filteredStudents = filteredStudents.filter(student => {
            let normalizedGender = normalizeStudentGender(student.gender).toLowerCase();
            return normalizedGender === currentStudentFilters.gender;
        });
    }

    if (currentStudentFilters.grade !== 'all') {
        filteredStudents = filteredStudents.filter(student =>
            student.grade.toString() === currentStudentFilters.grade
        );
    }

    if (currentStudentFilters.age !== 'all') {
        filteredStudents = filteredStudents.filter(student => {
            let age = student.age;

            switch (currentStudentFilters.age) {
                case '6-10':
                    return age >= 6 && age <= 10;
                case '11-14':
                    return age >= 11 && age <= 14;
                case '15-18':
                    return age >= 15 && age <= 18;
                default:
                    return true;
            }
        });
    }

    if (currentStudentFilters.rating !== 'all') {
        if (currentStudentFilters.rating === 'highest') {
            filteredStudents.sort((a, b) => b.rating - a.rating);
        }
        if (currentStudentFilters.rating === 'lowest') {
            filteredStudents.sort((a, b) => a.rating - b.rating);
        }
    }

    if ((currentStudentPage - 1) * studentsPerPage >= filteredStudents.length) {
        currentStudentPage = 1;
    }

    renderStudents(filteredStudents);
    updateStudentsCount(filteredStudents.length, studentsData.length);
}


document.addEventListener("DOMContentLoaded", async () => {
    await loadStudentsData();
    initializeStudentFilters();
    setupStudentSearch();
});

function openStudentModal() {
    let modal = document.getElementById('addStudentModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleStudentEscapeKey);
}

function closeStudentModal() {
    let modal = document.getElementById('addStudentModal');
    let form = document.getElementById('addStudentForm');
    let title = modal.querySelector('h3');
    let submitBtn = form.querySelector('button[type="submit"]');
    
    title.textContent = 'Add New Student';
    submitBtn.textContent = 'Add Student';
    delete form.dataset.editId;
    
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleStudentEscapeKey);
    form.reset();
}

function handleStudentEscapeKey(e) {
    if (e.key === 'Escape') {
        closeStudentModal();
    }
}

function handleStudentBackdropClick(e) {
    if (e.target.id === 'addStudentModal') {
        closeStudentModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let studentForm = document.getElementById('addStudentForm');
    let studentModal = document.getElementById('addStudentModal');
    
    if (studentForm && studentModal) {
        studentModal.addEventListener('click', handleStudentBackdropClick);
        
        studentModal.querySelector('.bg-white').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        studentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            let formData = new FormData(e.target);
            let studentData = {
                name: formData.get('name'),
                grade: parseInt(formData.get('grade')),
                age: parseInt(formData.get('age')),
                rating: parseFloat(formData.get('rating')),
                coins: parseInt(formData.get('coins')),
                gender: formData.get('gender'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                twitter: formData.get('twitter') || `@${formData.get('name').toLowerCase().replace(/\s+/g, '')}`,
                linkedin: formData.get('linkedin') || `linkedin.com/in/${formData.get('name').toLowerCase().replace(/\s+/g, '-')}`,
                avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.get('name')}`
            };

            try {
                let isEdit = studentForm.dataset.editId;
                
                if (isEdit) {
                    let updatedStudent = await updateStudentInAPI(isEdit, studentData);
                    let index = studentsData.findIndex(s => s.id === isEdit);
                    studentsData[index] = updatedStudent;
                    
                    renderStudents(studentsData);
                    closeStudentModal();
                    showToast('Student updated successfully!', 'success');
                    
                    delete studentForm.dataset.editId;
                } else {
                    let response = await fetch(STUDENTS_API_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(studentData)
                    });
                    
                    if (!response.ok) throw new Error('Failed to add student');
                    
                    let newStudent = await response.json();
                    studentsData.push(newStudent);
                    renderStudents(studentsData);
                    updateStudentsCount(studentsData.length, studentsData.length);
                    closeStudentModal();
                    
                    showToast('Student added successfully!', 'success');
                }
            } catch (error) {
                let action = studentForm.dataset.editId ? 'update' : 'add';
                showToast(`Failed to ${action} student. Please try again.`, 'error');
            }
        });
    }
});

if (typeof showToast === 'undefined') {
    function showToast(message, type = 'info') {
        document.querySelectorAll('[data-toast]').forEach(toast => toast.remove());
        
        let toast = document.createElement('div');
        toast.setAttribute('data-toast', 'true');
        toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium z-50 transform transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}