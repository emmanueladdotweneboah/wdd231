const courses = [
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 3,
        completed: true
    },
    {
        code: "WDD 131",
        name: "Dynamic Web Fundamentals",
        credits: 3,
        completed: true
    },
    {
        code: "WDD 231",
        name: "Frontend Web Development",
        credits: 3,
        completed: false
    },
    {
        code: "CSE 110",
        name: "Programming Building Blocks",
        credits: 2,
        completed: true
    },
    {
        code: "CSE 111",
        name: "Programming with Functions",
        credits: 2,
        completed: true
    }
];

const courseContainer = document.querySelector("#courses");
const credits = document.querySelector("#credits");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} Credits</p>
    `;

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    credits.textContent = `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.code.includes("WDD"));
    displayCourses(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.code.includes("CSE"));
    displayCourses(cseCourses);
});