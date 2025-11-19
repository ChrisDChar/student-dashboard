let studentsData = [
    {
        id: 1,
        name: "Armando Huel",
        grade: 7,
        age: 12,
        rating: 3.2,
        coins: 912,
        phone: "1-955-731-0692 x1516",
        email: "Armando.huel@hotmail.com",
        twitter: "@armandohuel",
        linkedin: "linkedin.com/in/armando-huel",
        gender: "Male"
    },
    {
        id: 2,
        name: "Pamela DuBuque",
        grade: 2,
        age: 11,
        rating: 2.8,
        coins: 504,
        phone: "(504) 230-1996 x49404",
        email: "Pamela.DuBuque@yahoo.com",
        twitter: "@pameladubuque",
        linkedin: "linkedin.com/in/pamela-dubuque",
        gender: "Female"
    },
    {
        id: 3,
        name: "Juan Schoen",
        grade: 6,
        age: 10,
        rating: 4.7,
        coins: 176,
        phone: "(783) 323-0001 x64542",
        email: "Juan.Schoen56@yahoo.com",
        twitter: "@juanschoen",
        linkedin: "linkedin.com/in/juan-schoen",
        gender: "Male"
    },
    {
        id: 4,
        name: "Anthony Jacobi",
        grade: 11,
        age: 10,
        rating: 3.1,
        coins: 973,
        phone: "519.663.7462 x61797",
        email: "Anthony.Jacobi@gmail.com",
        twitter: "@anthonyjacobi",
        linkedin: "linkedin.com/in/anthony-jacobi",
        gender: "Male"
    },
    {
        id: 5,
        name: "Emma Watson",
        grade: 10,
        age: 16,
        rating: 4.5,
        coins: 845,
        phone: "555-123-4567 x1234",
        email: "emma.watson@school.edu",
        twitter: "@emmawatson",
        linkedin: "linkedin.com/in/emma-watson",
        gender: "Female"
    },
    {
        id: 6,
        name: "Liam Johnson",
        grade: 8,
        age: 14,
        rating: 3.8,
        coins: 623,
        phone: "555-234-5678 x2345",
        email: "liam.johnson@school.edu",
        twitter: "@liamjohnson",
        linkedin: "linkedin.com/in/liam-johnson",
        gender: "Male"
    },
    {
        id: 7,
        name: "Sophia Martinez",
        grade: 5,
        age: 11,
        rating: 4.2,
        coins: 758,
        phone: "555-345-6789 x3456",
        email: "sophia.martinez@school.edu",
        twitter: "@sophiamartinez",
        linkedin: "linkedin.com/in/sophia-martinez",
        gender: "Female"
    },
    {
        id: 8,
        name: "Noah Garcia",
        grade: 9,
        age: 15,
        rating: 3.9,
        coins: 691,
        phone: "555-456-7890 x4567",
        email: "noah.garcia@school.edu",
        twitter: "@noahgarcia",
        linkedin: "linkedin.com/in/noah-garcia",
        gender: "Male"
    },
    {
        id: 9,
        name: "Isabella Rodriguez",
        grade: 4,
        age: 10,
        rating: 4.8,
        coins: 1024,
        phone: "555-567-8901 x5678",
        email: "isabella.rodriguez@school.edu",
        twitter: "@isabellarodriguez",
        linkedin: "linkedin.com/in/isabella-rodriguez",
        gender: "Female"
    },
    {
        id: 10,
        name: "James Brown",
        grade: 12,
        age: 18,
        rating: 3.5,
        coins: 587,
        phone: "555-678-9012 x6789",
        email: "james.brown@school.edu",
        twitter: "@jamesbrown",
        linkedin: "linkedin.com/in/james-brown",
        gender: "Male"
    },
    {
        id: 11,
        name: "Mia Davis",
        grade: 7,
        age: 13,
        rating: 4.1,
        coins: 834,
        phone: "555-789-0123 x7890",
        email: "mia.davis@school.edu",
        twitter: "@miadavis",
        linkedin: "linkedin.com/in/mia-davis",
        gender: "Female"
    },
    {
        id: 12,
        name: "William Wilson",
        grade: 6,
        age: 12,
        rating: 3.7,
        coins: 712,
        phone: "555-890-1234 x8901",
        email: "william.wilson@school.edu",
        twitter: "@williamwilson",
        linkedin: "linkedin.com/in/william-wilson",
        gender: "Male"
    },
    {
        id: 13,
        name: "Charlotte Moore",
        grade: 3,
        age: 9,
        rating: 4.6,
        coins: 945,
        phone: "555-901-2345 x9012",
        email: "charlotte.moore@school.edu",
        twitter: "@charlottemoore",
        linkedin: "linkedin.com/in/charlotte-moore",
        gender: "Female"
    },
    {
        id: 14,
        name: "Benjamin Taylor",
        grade: 11,
        age: 17,
        rating: 3.4,
        coins: 678,
        phone: "555-012-3456 x0123",
        email: "benjamin.taylor@school.edu",
        twitter: "@benjamintaylor",
        linkedin: "linkedin.com/in/benjamin-taylor",
        gender: "Male"
    },
    {
        id: 15,
        name: "Amelia Anderson",
        grade: 8,
        age: 14,
        rating: 4.3,
        coins: 891,
        phone: "555-123-4567 x1234",
        email: "amelia.anderson@school.edu",
        twitter: "@ameliaanderson",
        linkedin: "linkedin.com/in/amelia-anderson",
        gender: "Female"
    },
    {
        id: 16,
        name: "Lucas Thomas",
        grade: 5,
        age: 11,
        rating: 3.6,
        coins: 765,
        phone: "555-234-5678 x2345",
        email: "lucas.thomas@school.edu",
        twitter: "@lucasthomas",
        linkedin: "linkedin.com/in/lucas-thomas",
        gender: "Male"
    },
    {
        id: 17,
        name: "Harper Jackson",
        grade: 9,
        age: 15,
        rating: 4.4,
        coins: 823,
        phone: "555-345-6789 x3456",
        email: "harper.jackson@school.edu",
        twitter: "@harperjackson",
        linkedin: "linkedin.com/in/harper-jackson",
        gender: "Female"
    },
    {
        id: 18,
        name: "Henry White",
        grade: 10,
        age: 16,
        rating: 3.8,
        coins: 734,
        phone: "555-456-7890 x4567",
        email: "henry.white@school.edu",
        twitter: "@henrywhite",
        linkedin: "linkedin.com/in/henry-white",
        gender: "Male"
    },
    {
        id: 19,
        name: "Evelyn Harris",
        grade: 4,
        age: 10,
        rating: 4.7,
        coins: 987,
        phone: "555-567-8901 x5678",
        email: "evelyn.harris@school.edu",
        twitter: "@evelynharris",
        linkedin: "linkedin.com/in/evelyn-harris",
        gender: "Female"
    },
    {
        id: 20,
        name: "Alexander Martin",
        grade: 7,
        age: 13,
        rating: 3.9,
        coins: 856,
        phone: "555-678-9012 x6789",
        email: "alexander.martin@school.edu",
        twitter: "@alexandermartin",
        linkedin: "linkedin.com/in/alexander-martin",
        gender: "Male"
    },
    {
        id: 21,
        name: "Abigail Thompson",
        grade: 6,
        age: 12,
        rating: 4.2,
        coins: 912,
        phone: "555-789-0123 x7890",
        email: "abigail.thompson@school.edu",
        twitter: "@abigailthompson",
        linkedin: "linkedin.com/in/abigail-thompson",
        gender: "Female"
    },
    {
        id: 22,
        name: "Michael Garcia",
        grade: 8,
        age: 14,
        rating: 3.5,
        coins: 645,
        phone: "555-890-1234 x8901",
        email: "michael.garcia@school.edu",
        twitter: "@michaelgarcia",
        linkedin: "linkedin.com/in/michael-garcia",
        gender: "Male"
    },
    {
        id: 23,
        name: "Emily Martinez",
        grade: 5,
        age: 11,
        rating: 4.8,
        coins: 1056,
        phone: "555-901-2345 x9012",
        email: "emily.martinez@school.edu",
        twitter: "@emilymartinez",
        linkedin: "linkedin.com/in/emily-martinez",
        gender: "Female"
    },
    {
        id: 24,
        name: "Daniel Robinson",
        grade: 9,
        age: 15,
        rating: 3.7,
        coins: 723,
        phone: "555-012-3456 x0123",
        email: "daniel.robinson@school.edu",
        twitter: "@danielrobinson",
        linkedin: "linkedin.com/in/daniel-robinson",
        gender: "Male"
    },
    {
        id: 25,
        name: "Elizabeth Clark",
        grade: 11,
        age: 17,
        rating: 4.1,
        coins: 894,
        phone: "555-123-4567 x1234",
        email: "elizabeth.clark@school.edu",
        twitter: "@elizabethclark",
        linkedin: "linkedin.com/in/elizabeth-clark",
        gender: "Female"
    },
    {
        id: 26,
        name: "Matthew Rodriguez",
        grade: 10,
        age: 16,
        rating: 3.6,
        coins: 781,
        phone: "555-234-5678 x2345",
        email: "matthew.rodriguez@school.edu",
        twitter: "@matthewrodriguez",
        linkedin: "linkedin.com/in/matthew-rodriguez",
        gender: "Male"
    },
    {
        id: 27,
        name: "Sofia Lewis",
        grade: 7,
        age: 13,
        rating: 4.5,
        coins: 923,
        phone: "555-345-6789 x3456",
        email: "sofia.lewis@school.edu",
        twitter: "@sofialewis",
        linkedin: "linkedin.com/in/sofia-lewis",
        gender: "Female"
    },
    {
        id: 28,
        name: "David Lee",
        grade: 4,
        age: 10,
        rating: 3.8,
        coins: 667,
        phone: "555-456-7890 x4567",
        email: "david.lee@school.edu",
        twitter: "@davidlee",
        linkedin: "linkedin.com/in/david-lee",
        gender: "Male"
    },
    {
        id: 29,
        name: "Avery Walker",
        grade: 8,
        age: 14,
        rating: 4.3,
        coins: 845,
        phone: "555-567-8901 x5678",
        email: "avery.walker@school.edu",
        twitter: "@averywalker",
        linkedin: "linkedin.com/in/avery-walker",
        gender: "Female"
    },
    {
        id: 30,
        name: "Joseph Hall",
        grade: 6,
        age: 12,
        rating: 3.9,
        coins: 789,
        phone: "555-678-9012 x6789",
        email: "joseph.hall@school.edu",
        twitter: "@josephhall",
        linkedin: "linkedin.com/in/joseph-hall",
        gender: "Male"
    },
    {
        id: 31,
        name: "Ella Allen",
        grade: 5,
        age: 11,
        rating: 4.6,
        coins: 934,
        phone: "555-789-0123 x7890",
        email: "ella.allen@school.edu",
        twitter: "@ellaallen",
        linkedin: "linkedin.com/in/ella-allen",
        gender: "Female"
    },
    {
        id: 32,
        name: "Samuel Young",
        grade: 9,
        age: 15,
        rating: 3.4,
        coins: 712,
        phone: "555-890-1234 x8901",
        email: "samuel.young@school.edu",
        twitter: "@samuelyoung",
        linkedin: "linkedin.com/in/samuel-young",
        gender: "Male"
    },
    {
        id: 33,
        name: "Scarlett King",
        grade: 7,
        age: 13,
        rating: 4.2,
        coins: 876,
        phone: "555-901-2345 x9012",
        email: "scarlett.king@school.edu",
        twitter: "@scarlettking",
        linkedin: "linkedin.com/in/scarlett-king",
        gender: "Female"
    },
    {
        id: 34,
        name: "Andrew Wright",
        grade: 11,
        age: 17,
        rating: 3.7,
        coins: 823,
        phone: "555-012-3456 x0123",
        email: "andrew.wright@school.edu",
        twitter: "@andrewwright",
        linkedin: "linkedin.com/in/andrew-wright",
        gender: "Male"
    },
    {
        id: 35,
        name: "Grace Scott",
        grade: 8,
        age: 14,
        rating: 4.4,
        coins: 945,
        phone: "555-123-4567 x1234",
        email: "grace.scott@school.edu",
        twitter: "@gracescott",
        linkedin: "linkedin.com/in/grace-scott",
        gender: "Female"
    },
    {
        id: 36,
        name: "Joshua Green",
        grade: 6,
        age: 12,
        rating: 3.8,
        coins: 768,
        phone: "555-234-5678 x2345",
        email: "joshua.green@school.edu",
        twitter: "@joshuagreen",
        linkedin: "linkedin.com/in/joshua-green",
        gender: "Male"
    },
    {
        id: 37,
        name: "Chloe Adams",
        grade: 4,
        age: 10,
        rating: 4.7,
        coins: 1012,
        phone: "555-345-6789 x3456",
        email: "chloe.adams@school.edu",
        twitter: "@chloeadams",
        linkedin: "linkedin.com/in/chloe-adams",
        gender: "Female"
    },
    {
        id: 38,
        name: "Christopher Baker",
        grade: 10,
        age: 16,
        rating: 3.5,
        coins: 689,
        phone: "555-456-7890 x4567",
        email: "christopher.baker@school.edu",
        twitter: "@christopherbaker",
        linkedin: "linkedin.com/in/christopher-baker",
        gender: "Male"
    },
    {
        id: 39,
        name: "Victoria Nelson",
        grade: 7,
        age: 13,
        rating: 4.1,
        coins: 834,
        phone: "555-567-8901 x5678",
        email: "victoria.nelson@school.edu",
        twitter: "@victorianelson",
        linkedin: "linkedin.com/in/victoria-nelson",
        gender: "Female"
    },
    {
        id: 40,
        name: "Ryan Carter",
        grade: 9,
        age: 15,
        rating: 3.9,
        coins: 756,
        phone: "555-678-9012 x6789",
        email: "ryan.carter@school.edu",
        twitter: "@ryancarter",
        linkedin: "linkedin.com/in/ryan-carter",
        gender: "Male"
    },
    {
        id: 41,
        name: "Zoe Mitchell",
        grade: 5,
        age: 11,
        rating: 4.5,
        coins: 892,
        phone: "555-789-0123 x7890",
        email: "zoe.mitchell@school.edu",
        twitter: "@zoemitchell",
        linkedin: "linkedin.com/in/zoe-mitchell",
        gender: "Female"
    },
    {
        id: 42,
        name: "Nicholas Perez",
        grade: 8,
        age: 14,
        rating: 3.6,
        coins: 723,
        phone: "555-890-1234 x8901",
        email: "nicholas.perez@school.edu",
        twitter: "@nicholasperez",
        linkedin: "linkedin.com/in/nicholas-perez",
        gender: "Male"
    },
    {
        id: 43,
        name: "Lily Roberts",
        grade: 6,
        age: 12,
        rating: 4.3,
        coins: 867,
        phone: "555-901-2345 x9012",
        email: "lily.roberts@school.edu",
        twitter: "@lilyroberts",
        linkedin: "linkedin.com/in/lily-roberts",
        gender: "Female"
    },
    {
        id: 44,
        name: "Jonathan Turner",
        grade: 11,
        age: 17,
        rating: 3.7,
        coins: 798,
        phone: "555-012-3456 x0123",
        email: "jonathan.turner@school.edu",
        twitter: "@jonathanturner",
        linkedin: "linkedin.com/in/jonathan-turner",
        gender: "Male"
    },
    {
        id: 45,
        name: "Mila Phillips",
        grade: 7,
        age: 13,
        rating: 4.6,
        coins: 934,
        phone: "555-123-4567 x1234",
        email: "mila.phillips@school.edu",
        twitter: "@milaphillips",
        linkedin: "linkedin.com/in/mila-phillips",
        gender: "Female"
    },
    {
        id: 46,
        name: "Kevin Campbell",
        grade: 9,
        age: 15,
        rating: 3.8,
        coins: 812,
        phone: "555-234-5678 x2345",
        email: "kevin.campbell@school.edu",
        twitter: "@kevincampbell",
        linkedin: "linkedin.com/in/kevin-campbell",
        gender: "Male"
    },
    {
        id: 47,
        name: "Penelope Parker",
        grade: 4,
        age: 10,
        rating: 4.4,
        coins: 956,
        phone: "555-345-6789 x3456",
        email: "penelope.parker@school.edu",
        twitter: "@penelopeparker",
        linkedin: "linkedin.com/in/penelope-parker",
        gender: "Female"
    },
    {
        id: 48,
        name: "Thomas Evans",
        grade: 10,
        age: 16,
        rating: 3.9,
        coins: 774,
        phone: "555-456-7890 x4567",
        email: "thomas.evans@school.edu",
        twitter: "@thomasevans",
        linkedin: "linkedin.com/in/thomas-evans",
        gender: "Male"
    },
    {
        id: 49,
        name: "Hannah Edwards",
        grade: 8,
        age: 14,
        rating: 4.2,
        coins: 889,
        phone: "555-567-8901 x5678",
        email: "hannah.edwards@school.edu",
        twitter: "@hannahedwards",
        linkedin: "linkedin.com/in/hannah-edwards",
        gender: "Female"
    },
    {
        id: 50,
        name: "Brandon Collins",
        grade: 6,
        age: 12,
        rating: 3.5,
        coins: 701,
        phone: "555-678-9012 x6789",
        email: "brandon.collins@school.edu",
        twitter: "@brandoncollins",
        linkedin: "linkedin.com/in/brandon-collins",
        gender: "Male"
    }
];


let currentStudentFilters = {
    gender: 'all',
    grade: 'all',
    rating: 'all',
    age: 'all',
    search: ''
};

document.addEventListener("DOMContentLoaded", () => {
    renderStudents(studentsData);
    updateStudentsCount(studentsData.length, studentsData.length);
    initializeStudentFilters();
    setupStudentSearch();
});

function renderStudents(students = studentsData) {
    let container = document.getElementById("studentsContainer");
    if (!container) return;

    container.innerHTML = students.map(student => `
        <div class="student-card flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group">

            <div class="flex flex-col items-center text-center mb-4">
                <span class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-purple-100 dark:ring-purple-900">
                    <div class="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700 rounded-full">
                        ${student.name.split(" ").map(n => n[0]).join("")}
                    </div>
                </span>

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
                    
                    <!-- Rating Progress Bar -->
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-black dark:bg-white h-2 rounded-full transition-all duration-300" 
                             style="width: ${(student.rating / 5) * 100}%">
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
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

        </div>
    `).join("");
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
    const gradeContainer = document.querySelector('.grade-option')?.parentElement;
    if (!gradeContainer) return;
    
    const grades = [...new Set(studentsData.map(student => student.grade))].sort((a, b) => a - b);
    
    grades.forEach(grade => {
        const button = document.createElement('button');
        button.className = 'grade-option w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2';
        button.setAttribute('data-value', grade);
        button.textContent = `Grade ${grade}`;
        gradeContainer.appendChild(button);
    });
}

function setupStudentFilterDropdowns() {
    const filterButtons = document.querySelectorAll('.student-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = button.nextElementSibling;
            const isVisible = dropdown.style.display === 'block';
            
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
            const value = e.target.getAttribute('data-value');
            currentStudentFilters.gender = value;
            updateStudentFilterButton('gender', value, getStudentGenderDisplayText(value));
            applyStudentFilters();
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('grade-option')) {
            const value = e.target.getAttribute('data-value');
            currentStudentFilters.grade = value;
            updateStudentFilterButton('grade', value, getStudentGradeDisplayText(value));
            applyStudentFilters();
        }
    });

    document.querySelectorAll('.student-rating-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            currentStudentFilters.rating = value;
            updateStudentFilterButton('rating', value, getStudentRatingDisplayText(value));
            applyStudentFilters();
        });
    });

    document.querySelectorAll('.student-age-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            currentStudentFilters.age = value;
            updateStudentFilterButton('age', value, getStudentAgeDisplayText(value));
            applyStudentFilters();
        });
    });
}

function updateStudentFilterButton(filterType, value, displayText) {
    const button = document.querySelector(`[data-student-filter="${filterType}"]`);
    if (button) {
        button.textContent = displayText;
        button.setAttribute('data-value', value);
    }
}

function getStudentGenderDisplayText(value) {
    const texts = { all: 'All Gender', male: 'Male Only', female: 'Female Only' };
    return texts[value] || 'All Gender';
}

function getStudentGradeDisplayText(value) {
    return value === 'all' ? 'All Grades' : `Grade ${value}`;
}

function getStudentRatingDisplayText(value) {
    const texts = { all: 'All Rating', highest: 'Highest First', lowest: 'Lowest First' };
    return texts[value] || 'All Rating';
}

function getStudentAgeDisplayText(value) {
    const texts = { 
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
        filteredStudents = filteredStudents.filter(student => 
            student.gender.toLowerCase() === currentStudentFilters.gender
        );
    }

    if (currentStudentFilters.grade !== 'all') {
        filteredStudents = filteredStudents.filter(student => 
            student.grade.toString() === currentStudentFilters.grade
        );
    }

    if (currentStudentFilters.age !== 'all') {
        filteredStudents = filteredStudents.filter(student => {
            const age = student.age;
            switch (currentStudentFilters.age) {
                case '6-10': return age >= 6 && age <= 10;
                case '11-14': return age >= 11 && age <= 14;
                case '15-18': return age >= 15 && age <= 18;
                default: return true;
            }
        });
    }

    if (currentStudentFilters.rating !== 'all') {
        filteredStudents.sort((a, b) => {
            if (currentStudentFilters.rating === 'highest') {
                return b.rating - a.rating;
            } else {
                return a.rating - b.rating;
            }
        });
    }

    renderStudents(filteredStudents);
    updateStudentsCount(filteredStudents.length, studentsData.length);
}