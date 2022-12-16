/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let allSections=document.querySelectorAll("section") //returns nodeList
let listOfNavbar=document.querySelector("#navbar__list");
let frag=document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
function NavigationBar() {
    allSections.forEach((section)=>{
        let li=document.createElement("li");
        let anchor=document.createElement("a");
        let anchorSection=section.getAttribute("id");
        let titleOfSection=section.getAttribute("data-nav");
        anchor.setAttribute("href",`#${anchorSection}`)
        anchor.innerText=titleOfSection;
        anchor.classList.add("menu__link")
        anchor.addEventListener("click",(e)=>{
            e.preventDefault();
            section.scrollIntoView({
                behavior:"smooth", //Smooth scroll
                
            } );
        

            
        })
    
        li.appendChild(anchor);
        frag.appendChild(li);
    })
    
        // Building list of nav 
        
       



  
    listOfNavbar.appendChild(frag);
    
}
console.log(listOfNavbar)
// window.addEventListener("load",NavigationBar)
NavigationBar();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
// // Scroll to section on link click


const all_anchors=document.querySelectorAll("a.menu__link");
console.log(all_anchors)
function sectionHighlight(){
  allSections.forEach((element) => {
      let top_dimension_section=element.getBoundingClientRect().top;
      let title_of_section=element.getAttribute("data-nav")
      if(top_dimension_section>0 && top_dimension_section < 250){
        //adding classes
          element.classList.add("your-active-class");
          all_anchors.forEach((link)=>
          {
            // Set sections as active
            if(link.innerText=== title_of_section){
                link.classList.add("actived")
            }else{
                link.classList.remove("actived")
            }

          })
        

       
      }else{
        element.classList.remove("your-active-class");
      }
      

    
    

    })
}


window.addEventListener("scroll",sectionHighlight)
// allSections.forEach((section)=>{
//     let sectionTitle = section.getAttribute("data-nav");
//     section.addEventListener("click",(e)=>{
//        all_anchors.forEach((link)=>{
//         if(link.textContent === sectionTitle){
//             link.classList.add("actived");

//         }else{
//             link.classList.remove("actived")
//         }

       
//        })

//     })
// })




