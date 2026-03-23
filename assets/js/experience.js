AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");

const exp = [
  {
    title: "Analyst - Artificial Intelligence & Marketing Strategy",
    cardImage: "assets/images/kalosys.jpeg",
    place: "KALOSYS, LLC • Las Vegas, NV",
    time: "(Dec 2025 - Apr 2026)",
    desp: ``,
  },

  {
    title: "Business Analyst (AI & IT Team)",
    cardImage: "assets/images/raymondjames.jpg",
    place: "RAYMOND JAMES FINANCIAL • St. Petersburg, FL",
    time: "(Jun 2025 - Aug 2025)",
    desp: ``,
  },

  {
    title: "Marketing Strategist & Analyst",
    cardImage: "assets/images/GTO.jpg",
    place: "GREATER THAN ONE • Manhattan, NY",
    time: "(May 2024 - Aug 2024)",
    desp: ``,
  },

  {
    title: "Business Analyst",
    cardImage: "assets/images/Download.jpeg",
    place: "TECH MAHINDRA • Remote",
    time: "(Jan 2022 - Jul 2023)",
    desp: ``,
  },
];

const showCards2 = () => {
  let output = "";

  exp.forEach(({ title, cardImage, place, time, desp }) => {
    output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
    `;
  });

  experiencecards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards2);
