function addAnimation() {
  let title1 = document.querySelector('.title2');
  let text1 = document.querySelector('.section-set2');
 
title1.innerHTML = title1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

text1.innerHTML = text1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
anime.timeline({loop: true})
    .add({
      targets: '.title2 .letter' + '.section-set2 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 40,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.title2' + '.section-set2',
      opacity: 0,
      duration: 750,
      easing: "easeOutExpo",
      delay: 0
    });
}

addAnimation()








// const sec12 = document.querySelector("#1")
// const sec12 = document.querySelector("#2")
// const sec12 = document.querySelector("#3")
// const sec12 = document.querySelector("#4")
// const sec12 = document.querySelector("#5")
// const sec12 = document.querySelector("#6")

// function vis() {
    
// }

// sec12.onclick = vis

