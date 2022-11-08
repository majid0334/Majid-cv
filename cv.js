let url = "./data.json";

async function getSometing() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    console.log(data);
    let resume = data.cv;
    console.log(resume);
    // nu styla i css
    // Hämta data vald (objekt, array)
    const li = document.createElement("li");
    li.classList.add("json-style");
    li.innerHTML = `<p class="prf-name-first-cv">${resume.aboutMe.firstName}</p>
                    <p class="prf-name-last-cv">${resume.aboutMe.lastName}</p>
                    <h2 class="edu-item1-cv">${resume.aboutMe.tittle}</h2>
                    <p class="description-cv">${resume.aboutMe.passion}</p>
                    <h2 class="tittle1-cv">${resume.highesteducation.name}</h2>
                    <p class="json-highest">${resume.highesteducation.infoUniversity}</p>
                    <h2 class="tittle1-cv">${resume.infoHighschool.highSchool}</h2>
                    <p class="edu-item2-cv">${resume.infoHighschool.city}</p>
                    <p class="edu-item2-cv">${resume.infoHighschool.name}</p>
                    <p class="edu-item2-cv">${resume.infoHighschool.courses}</p>
                    <h2 class="tittle1-cv">${resume.work.name}</h2>
                    <p class="edu-item2-cv">${resume.work.infoWork}</p>
                    <p class="tittle1-cv">${resume.adress}</p>
                    
 
                      `;
    /*  const html = 
 
<li class="hero-stat"><p class="prf-name-first-cv">${resume.aboutMe.firstName}</p></li>
 
; */

    // Lägg till i Domen efter preferesner
    /*  stats.forEach((heroStat) => {
       const markup = `<li> ${heroStat} </li>`;
     }); */
    /*  document.querySelector("ul").insertAdjacentHTML("beforeend", html); */
    document.querySelector("ul").appendChild(li);
  } else {
    console.log("HTTP-Error" + response.status);
  }
}

getSometing();
