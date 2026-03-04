AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Business Analyst",
    cardImage: "assets/images/Download.jpeg",
    place: "Tech Mahindra",
    time: "(Jan 2022 - Aug 2023)",
    desp: `
      <li>Conducted thorough data analysis on diverse datasets using SQL queries to extract actionable insights, supporting strategic decision-making, and enhancing quality assurance efforts by 30%.</li>
      <li>Designed and developed interactive Business Intelligence (BI) dashboards using Power BI, improving visual appeal and user experience by 25%.</li>
      <li>Created analytical reports for HR datasets (Attrition, Headcount, Joining) containing 2,000,000 rows. Used DAX queries and interactive charts to improve usability by 20%.</li>
    `,
  },

  {
    title: "Analytics & Strategy Intern",
    cardImage: "assets/images/gto.jpeg",
    place: "Greater Than One",
    time: "(May 2024 - Aug 2024)",
    desp: `
      <li>Analyzed multi-channel marketing campaign data across multiple platforms to evaluate campaign performance and improve ROI.</li>
      <li>Developed data-driven insights using Excel and BI tools to optimize marketing strategy and budget allocation.</li>
      <li>Built performance reports tracking key KPIs and campaign metrics to support strategic decision-making.</li>
    `,
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
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
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


