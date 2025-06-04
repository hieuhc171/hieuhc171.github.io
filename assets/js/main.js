document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const experienceData = [
  {
    title: "AvePoint",
    description: "Software Developer",
    date: "Jan 2025",
    image: "images/avpt-icon.jpg"
  },
  {
    title: "FPT Software",
    description: ".Net Developer",
    date: "Jan 2024",
    image: "images/fsoft-icon.png"
  },
  {
    title: "Falcon Game Studio",
    description: "Server Developer (Internship)",
    date: "Aug 2023",
    image: "images/fgs-icon.png"
  }
];


const container = document.getElementById("timelineContainer");

experienceData.forEach((item, index) => {
  const side = index % 2 === 0 ? "left" : "right";

  const html = `
    <div class="timeline-item ${side}">
      <div class="timeline-icon w3-white">
        <img src="${item.image}" alt="${item.title}-icon" class="w3-circle w3-large w-100"/>
      </div>
      <div class="timeline-content w3-white">
        <h3 class="w3-text-blue">${item.title}</h3>
        <p>${item.description}</p>
        <span class="timeline-date">${item.date}</span>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", html);
});
