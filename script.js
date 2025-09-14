// Sample courses
const courses = [
  { name: "Computer Science", duration: "4 years", fee: "₹1,20,000 / year" },
  { name: "Mechanical Engineering", duration: "4 years", fee: "₹1,00,000 / year" },
  { name: "Business Management", duration: "3 years", fee: "₹90,000 / year" }
];

// Sample institutes
const institutes = [
  { name: "IIT Delhi", location: "Delhi", rating: "⭐⭐⭐⭐⭐" },
  { name: "NIT Rourkela", location: "Odisha", rating: "⭐⭐⭐⭐" },
  { name: "IIM Bangalore", location: "Bangalore", rating: "⭐⭐⭐⭐⭐" }
];

// Load courses
const courseList = document.getElementById("course-list");
courses.forEach(c => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<h3>${c.name}</h3><p>Duration: ${c.duration}</p><p>Fee: ${c.fee}</p>`;
  courseList.appendChild(div);
});

// Load institutes
const instituteList = document.getElementById("institute-list");
institutes.forEach(i => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<h3>${i.name}</h3><p>Location: ${i.location}</p><p>Rating: ${i.rating}</p>`;
  instituteList.appendChild(div);
});

// Handle contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
  e.target.reset();
});
