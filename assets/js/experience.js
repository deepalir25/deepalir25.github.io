AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Business Analyst",
    cardImage: "assets/images/Download.jpeg",
    place: "Tech Mahindra",
    time: "(Jan 2022 - Aug 2023)",
    desp: "<li>Conducted thorough data analysis on diverse datasets using SQL queries to extract actionable insights, supporting strategic decision-making, and enhancing quality assurance efforts by 30%. </li> <li>Designed and developed interactive Business Intelligence (BI) dashboards, employing modern themes and layouts that improved visual appeal and user experience for analytical reports using Power BI by 25%. </li> <li>Created detailed analytical reports for three HR datasets—Attrition, Headcount, and Joining—comprising 2,000,000 rows. Analyzed the data and utilized DAX queries to create custom columns for report generation, enhancing the user interface with clickable call-to-action buttons and analytical charts, resulting in a 20% increase in report usability.</li>",
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


