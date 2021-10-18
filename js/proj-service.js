'use strict';

var gProjs = [{
        id: "books-shop",
        name: "Books Shop",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/books-shop",
        gitUrl: "https://korenlevi.github.io/books",
        img: "img/portfolio/01-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "safe-content",
        name: "Safe Content",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/safe-content",
        gitUrl: 'https://korenlevi.github.io/SafeContent',
        img: "img/portfolio/02-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "mine-sweeper",
        name: "Mine Sweeper",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/Mine Sweeper",
        gitUrl: 'https://korenlevi.github.io/Mine-Sweeper-new',
        img: "img/portfolio/03-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "GuessMe",
        name: "Guess Me",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/GuessMe",
        img: "img/portfolio/04-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    }
]

var gModals = [];
// renderProj()

// console.log(loc);
function init() {
    // const $el = setModal(gProjs[0]);
    // console.log($el);
    // $('.new-modal').append($el)
    // $('#page-top').append($el).after('#contact')
    //    html($el)
    // $('#contact').after($el)
    renderProj()
}

function renderProj() {

    let loc = '#contact';
    for (var i = 0; i < gProjs.length; i++) {
        console.log(loc);
        var $el = setModal(gProjs[i],i+1);
        console.log('$el',$el);
        $(loc).after($el)
        
        loc = '#portfolioModal' + (i + 1);

    }

}








// <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="close-modal" data-dismiss="modal">
//           <div class="lr">
//             <div class="rl"></div>
//           </div>
//         </div>
//         <div class="container">
//           <div class="row">
//             <div class="col-lg-8 mx-auto">
//               <div class="modal-body">
//                 <!-- Project Details Go Here -->
//                 <h2>Project Name</h2>
//                 <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//                 <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
//                 <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
//                   blanditiis
//                   dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
//                   cupiditate,
//                   maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//                 <ul class="list-inline">
//                   <li>Date: January 2017</li>
//                   <li>Client: Threads</li>
//                   <li>Category: Illustration</li>
//                 </ul>
//                 <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>