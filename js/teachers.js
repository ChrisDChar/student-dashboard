let teachersData = [];
let currentTeacherPage = 1;
let teachersPerPage = 8;
let currentFilters = {
    gender: 'all',
    experience: 'all',
    rating: 'all',
    profession: 'all',
    search: ''
};

let API_URL = 'https://692376893ad095fb84709f35.mockapi.io/teachers';

function getInitials(name) {
    if (!name) return '??';
    return name.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadTeachersData();
    initializeFilters();
    setupSearch();
});

async function loadTeachersData() {
    try {
        showLoadingState();
        
        let response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let data = await response.json();
        
        data = data.map(teacher => ({
            ...teacher,
            rating: normalizeRating(teacher.rating)
        }));
        
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format: Expected array');
        }
        
        if (data.length === 0) {
            console.warn('No teachers data found in API');
        }
        
        teachersData = data;
        renderTeachers(teachersData);
        updateTeachersCount(teachersData.length, teachersData.length);
        
    } catch (error) {
        console.error('Error loading teachers data:', error);
        showErrorState('Failed to load teachers data. Please try again later.');
        teachersData = [];
    } finally {
        hideLoadingState();
    }
}

function normalizeRating(rating) {
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

function normalizeGender(gender) {
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
        
        if (genderLower.includes('male') || genderLower === 'm' || genderLower === 'man' || genderLower === 'true' || genderLower === '1') {
            return 'Male';
        }
        if (genderLower.includes('female') || genderLower === 'f' || genderLower === 'woman' || genderLower === 'women' || genderLower === 'false' || genderLower === '0') {
            return 'Female';
        }
    }
    
    return Math.random() > 0.5 ? 'Male' : 'Female';
}

function showLoadingState() {
    let container = document.getElementById("teachersContainer");
    if (container) {
        container.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-12">
                <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p class="text-gray-600 dark:text-gray-400">Loading teachers...</p>
                </div>
            </div>
        `;
    }
}

function showErrorState(message) {
    let container = document.getElementById("teachersContainer");
    if (container) {
        container.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-12">
                <div class="text-center text-red-600 dark:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p class="text-lg font-medium mb-2">Oops! Something went wrong</p>
                    <p class="text-sm">${message}</p>
                    <button onclick="loadTeachersData()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Try Again
                    </button>
                </div>
            </div>
        `;
    }
}

function hideLoadingState() {
}

async function addTeacherToAPI(teacherData) {
    try {
        let response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacherData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let newTeacher = await response.json();
        return newTeacher;
        
    } catch (error) {
        console.error('Error adding teacher:', error);
        throw error;
    }
}

async function updateTeacherInAPI(teacherId, teacherData) {
    try {
        let response = await fetch(`${API_URL}/${teacherId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacherData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let updatedTeacher = await response.json();
        return updatedTeacher;
        
    } catch (error) {
        console.error('Error updating teacher:', error);
        throw error;
    }
}

async function deleteTeacherFromAPI(teacherId) {
    try {
        let response = await fetch(`${API_URL}/${teacherId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return true;
        
    } catch (error) {
        console.error('Error deleting teacher:', error);
        throw error;
    }
}

async function editTeacher(id) {
    const teacher = teachersData.find(t => t.id === id);
    if (!teacher) return;

    const modal = document.getElementById('addTeacherModal');
    const form = document.getElementById('addTeacherForm');
    const title = modal.querySelector('h3');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    title.textContent = 'Edit Teacher';
    submitBtn.textContent = 'Update Teacher';
    
    form.querySelector('[name="name"]').value = teacher.name;
    form.querySelector('[name="subject"]').value = teacher.subject;
    form.querySelector('[name="experience"]').value = teacher.experience;
    form.querySelector('[name="age"]').value = teacher.age;
    form.querySelector('[name="rating"]').value = teacher.rating;
    form.querySelector('[name="gender"]').value = teacher.gender;
    form.querySelector('[name="phone"]').value = teacher.phone;
    form.querySelector('[name="email"]').value = teacher.email;
    form.querySelector('[name="twitter"]').value = teacher.twitter || '';
    form.querySelector('[name="linkedin"]').value = teacher.linkedin || '';

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const originalSubmit = form.onsubmit;
    
    form.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const teacherData = {
            name: formData.get('name'),
            subject: formData.get('subject'),
            experience: parseInt(formData.get('experience')),
            age: parseInt(formData.get('age')),
            rating: parseFloat(formData.get('rating')),
            gender: formData.get('gender'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            twitter: formData.get('twitter'),
            linkedin: formData.get('linkedin'),
            avatar: teacher.avatar
        };

        try {
            const updatedTeacher = await updateTeacherInAPI(id, teacherData);
            const index = teachersData.findIndex(t => t.id === id);
            teachersData[index] = updatedTeacher;
            renderTeachers(teachersData);
            closeTeacherModal();
            showToast('Teacher updated successfully!', 'success');
        } catch (error) {
            showToast('Failed to update teacher. Please try again.', 'error');
        }
    };

    modal._editHandler = form.onsubmit;
}

async function deleteTeacher(id) {
    if (!confirm('Are you sure you want to delete this teacher?')) return;

    try {
        console.log('Deleting teacher with ID:', id);
        
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        console.log('Delete response status:', response.status);
        console.log('Delete response ok:', response.ok);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Remove from local data
        teachersData = teachersData.filter(teacher => teacher.id !== id);
        renderTeachers(teachersData);
        showToast('Teacher deleted successfully!', 'success');
        
    } catch (error) {
        console.error('Delete error:', error);
        showToast('Failed to delete teacher. Please try again.', 'error');
    }
}

function renderTeachers(teachers = teachersData) {
    let container = document.getElementById("teachersContainer");
    if (!container) return;

    let startIndex = (currentTeacherPage - 1) * teachersPerPage;
    let endIndex = startIndex + teachersPerPage;
    let paginatedTeachers = teachers.slice(startIndex, endIndex);

    if (paginatedTeachers.length === 0 && currentTeacherPage > 1) {
        currentTeacherPage--;
        renderTeachers(teachers);
        return;
    }

    if (paginatedTeachers.length === 0) {
        container.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-12">
                <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p class="text-gray-600 dark:text-gray-400 text-lg">No teachers found</p>
                    <p class="text-gray-500 dark:text-gray-500 text-sm">Try adjusting your filters or search terms</p>
                </div>
            </div>
        `;
        renderTeacherPagination(teachers.length);
        return;
    }

    container.innerHTML = paginatedTeachers.map(teacher => `
        <div class="teacher-card flex flex-col gap-6 rounded-xl border p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group" 
         onclick="openSinglePage('teacher', '${teacher.id}')">
            <div class="flex flex-col items-center text-center mb-4">
                <div class="relative h-20 w-20 mb-3">
                    ${teacher.avatar ? 
                        `<img src="${teacher.avatar}" alt="${teacher.name}" class="w-full h-full rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900" />` :
                        `<div class="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold ring-4 ring-blue-100 dark:ring-blue-900">
                            ${getInitials(teacher.name)}
                        </div>`
                    }
                </div>

                <h3 class="text-gray-900 dark:text-white mb-1">${teacher.name}</h3>

                <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-white bg-secondary text-secondary-foreground mb-2">
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
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
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

                <div class="w-full space-y-2 my-3">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-black dark:bg-white h-2 rounded-full transition-all duration-300" 
                             style="width: ${(teacher.rating / 5) * 100}%">
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
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

            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <button onclick="event.stopPropagation(); editTeacher('${teacher.id}')" 
                        class="edit-btn flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-9 px-4 py-2 gap-2">
                    Edit
                </button>
                <button onclick="event.stopPropagation(); deleteTeacher('${teacher.id}')" 
                        class="delete-btn flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 h-9 px-4 py-2 gap-2">
                    Delete
                </button>
            </div>
        </div>
    `).join("");

    renderTeacherPagination(teachers.length);
}

function renderTeacherPagination(totalTeachers) {
    let container = document.getElementById("teachersContainer");
    if (!container) return;

    const totalPages = Math.ceil(totalTeachers / teachersPerPage);
    
    if (totalPages <= 1) {
        return;
    }

    let pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
        pages = Array.from({length: totalPages}, (_, i) => i + 1);
    } else {
        if (currentTeacherPage <= 3) {
            pages = [1, 2, 3, 4, '...', totalPages];
        } else if (currentTeacherPage >= totalPages - 2) {
            pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, '...', currentTeacherPage - 1, currentTeacherPage, currentTeacherPage + 1, '...', totalPages];
        }
    }

    const paginationHTML = `
        <div class="col-span-full flex justify-center items-center space-x-1 mt-6">
            <button onclick="changeTeacherPage(${currentTeacherPage - 1}, ${totalPages})" 
                    ${currentTeacherPage === 1 ? 'disabled' : ''}
                    class="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                Previous
            </button>
            
            ${pages.map(page => 
                page === '...' 
                    ? `<span class="px-3 py-2 text-gray-500">...</span>`
                    : `<button onclick="changeTeacherPage(${page}, ${totalPages})"
                            class="px-3 py-2 rounded border text-sm ${
                                page === currentTeacherPage 
                                ? 'border-blue-500 bg-blue-500 text-white' 
                                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }">
                        ${page}
                    </button>`
            ).join('')}
            
            <button onclick="changeTeacherPage(${currentTeacherPage + 1}, ${totalPages})"
                    ${currentTeacherPage === totalPages ? 'disabled' : ''}
                    class="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                Next
            </button>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', paginationHTML);
}

function changeTeacherPage(page, totalPages) {
    if (page < 1 || page > totalPages) return;
    
    currentTeacherPage = page;
    applyFilters();
}

function updateTeachersCount(showing, total) {
    let el = document.getElementById("teachersCount");
    if (el) {
        let start = (currentTeacherPage - 1) * teachersPerPage + 1;
        let end = Math.min(currentTeacherPage * teachersPerPage, total);
        el.innerText = `Showing ${start}-${end} of ${total} teachers`;
    }
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
    let professionContainer = document.querySelector('.profession-option')?.parentElement;
    if (!professionContainer) return;
    
    let professions = [...new Set(teachersData.map(teacher => teacher.subject))];
    
    professions.forEach(profession => {
        let button = document.createElement('button');
        button.className = 'profession-option w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700';
        button.setAttribute('data-value', profession);
        button.textContent = profession;
        professionContainer.appendChild(button);
    });
}

function setupFilterDropdowns() {
    let filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            let dropdown = button.nextElementSibling;
            let isVisible = dropdown.style.display === 'block';
            
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
            let value = e.target.getAttribute('data-value');
            currentFilters.gender = value;
            updateFilterButton('gender', value, getGenderDisplayText(value));
            applyFilters();
        });
    });

    document.querySelectorAll('.experience-option').forEach(option => {
        option.addEventListener('click', (e) => {
            let value = e.target.getAttribute('data-value');
            currentFilters.experience = value;
            updateFilterButton('experience', value, getExperienceDisplayText(value));
            applyFilters();
        });
    });

    document.querySelectorAll('.rating-option').forEach(option => {
        option.addEventListener('click', (e) => {
            let value = e.target.getAttribute('data-value');
            currentFilters.rating = value;
            updateFilterButton('rating', value, getRatingDisplayText(value));
            applyFilters();
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('profession-option')) {
            let value = e.target.getAttribute('data-value');
            currentFilters.profession = value;
            updateFilterButton('profession', value, getProfessionDisplayText(value));
            applyFilters();
        }
    });
}

function updateFilterButton(filterType, value, displayText) {
    let button = document.querySelector(`[data-filter="${filterType}"]`);
    if (button) {
        button.textContent = displayText;
        button.setAttribute('data-value', value);
    }
}

function getGenderDisplayText(value) {
    let texts = { all: 'All Gender', male: 'Male Only', female: 'Female Only' };
    return texts[value] || 'All Gender';
}

function getExperienceDisplayText(value) {
    let texts = { 
        all: 'All Experience', 
        '0-5': '0-5 years', 
        '6-10': '6-10 years', 
        '11-20': '11-20 years', 
        '20+': '20+ years' 
    };
    return texts[value] || 'All Experience';
}

function getRatingDisplayText(value) {
    let texts = { all: 'All Rating', highest: 'Highest First', lowest: 'Lowest First' };
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
        filteredTeachers = filteredTeachers.filter(teacher => {
            let normalizedGender = normalizeGender(teacher.gender).toLowerCase();
            return normalizedGender === currentFilters.gender;
        });
    }

    if (currentFilters.experience !== 'all') {
        filteredTeachers = filteredTeachers.filter(teacher => {
            let exp = teacher.experience;
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

function openTeacherModal() {
    let modal = document.getElementById('addTeacherModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleTeacherEscapeKey);
}

function closeTeacherModal() {
    let modal = document.getElementById('addTeacherModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleTeacherEscapeKey);
    document.getElementById('addTeacherForm').reset();
}

function handleTeacherEscapeKey(e) {
    if (e.key === 'Escape') {
        closeTeacherModal();
    }
}

function handleTeacherBackdropClick(e) {
    if (e.target.id === 'addTeacherModal') {
        closeTeacherModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let teacherForm = document.getElementById('addTeacherForm');
    let teacherModal = document.getElementById('addTeacherModal');
    
    if (teacherForm && teacherModal) {
        teacherModal.addEventListener('click', handleTeacherBackdropClick);
        
        teacherModal.querySelector('.bg-white').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        teacherForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            let formData = new FormData(e.target);
            let teacherData = {
                name: formData.get('name'),
                subject: formData.get('subject'),
                experience: parseInt(formData.get('experience')),
                age: parseInt(formData.get('age')),
                rating: parseFloat(formData.get('rating')),
                gender: formData.get('gender'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                twitter: formData.get('twitter') || `@${formData.get('name').toLowerCase().replace(/\s+/g, '')}`,
                linkedin: formData.get('linkedin') || `linkedin.com/in/${formData.get('name').toLowerCase().replace(/\s+/g, '-')}`,
                avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.get('name')}`
            };

            try {
                let newTeacher = await addTeacherToAPI(teacherData);
                teachersData.push(newTeacher);
                renderTeachers(teachersData);
                updateTeachersCount(teachersData.length, teachersData.length);
                closeTeacherModal();
                
                showToast('Teacher added successfully!', 'success');
            } catch (error) {
                showToast('Failed to add teacher. Please try again.', 'error');
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