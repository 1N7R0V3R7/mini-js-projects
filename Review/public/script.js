const reviews = [
    {
        id: 1,
        name: "peter jones",
        designation: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 2,
        name: "bill anderson",
        designation: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id: 3,
        name: "susan smith",
        designation: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 4,
        name: "anna johnson",
        designation: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    }
];
let name = document.getElementById("name");
let image = document.getElementById("image");
let designation = document.getElementById("designation");
let review = document.getElementById("review");
let index = 0;
function renderReview() {
    image.setAttribute("src", reviews[index].img)
    name.textContent = reviews[index].name;
    designation.textContent = reviews[index].designation;
    review.textContent = reviews[index].review;
}
function nextReview() {
    index++;
    if(index === reviews.length) {
        index = 0;
    }
    renderReview(index);
}
function prevReview() {
    index--;
    if(index === -1) {
        index = reviews.length - 1;
    }
    renderReview(index);
}
function getRandomReview() {
    let randomIndex = Math.floor(Math.random()*4);
    index = randomIndex;
    renderReview(randomIndex);
}