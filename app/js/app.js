function openLink() {
	window.open("http://criticalthinking.rethinkproject.eu/", '_blank');
  }
  
function openFacebook() {
	window.open("https://facebook.com/ikketaaltforgodfisk")
  }

function openInstagram() {
	window.open("https://www.instagram.com/ikketaaltforgodfisk/")
  }

function addAnimation() {
  
	let title1 = document.querySelector('.so-me');
	 
	title1.innerHTML = title1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	 
	anime.timeline({loop: true})
	.add({
	  targets: '.so-me .letter',
	  translateY: [100,0],
	  translateZ: 0,
	  opacity: [0,1],
	  easing: "easeOutExpo",
	  duration: 1400,
	  delay: (el, i) => 300 + 30 * i
	}).add({
	  targets: '.so-me .letter',
	  translateY: [0,-100],
	  opacity: [1,0],
	  easing: "easeInExpo",
	  duration: 1200,
	  delay: (el, i) => 100 + 30 * i
	});
  }
	
	addAnimation()

function addAnimation1() {
  
	let text1 = document.querySelector('.story-text-1');
		 
	text1.innerHTML = text1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
		 
	anime.timeline({loop: true})
	.add({
		targets: '.story-text-1 .letter',
		translateY: [100,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
		}).add({
		targets: '.story-text-1 .letter',
		translateY: [0,-100],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});
	}
		
	addAnimation1()


function addAnimation2() {
  
	let text2 = document.querySelector('.story-text-2');
			 
	text2.innerHTML = text2.textContent.replace(/\S/g, "<span class='letter-dark'>$&</span>");
			 
	anime.timeline({loop: true})
		.add({
			targets: '.story-text-2 .letter',
			translateY: [100,0],
			translateZ: 0,
			opacity: [0,1],
			easing: "easeOutExpo",
			duration: 1400,
			delay: (el, i) => 300 + 30 * i
			}).add({
			targets: '.story-text-2 .letter',
			translateY: [0,-100],
			opacity: [1,0],
			easing: "easeInExpo",
			duration: 1200,
			delay: (el, i) => 100 + 30 * i
		});
		}
			
	addAnimation2()

function addAnimation3() {
  
	let text3 = document.querySelector('.story-text-3');
				 
	text3.innerHTML = text3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
				 
	anime.timeline({loop: true})
			.add({
				targets: '.story-text-3 .letter',
				translateY: [100,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 1400,
				delay: (el, i) => 300 + 30 * i
				}).add({
				targets: '.story-text-3 .letter',
				translateY: [0,-100],
				opacity: [1,0],
				easing: "easeInExpo",
				duration: 1200,
				delay: (el, i) => 100 + 30 * i
		});
		}
				
addAnimation3()

	function addAnimation4() {
  
	let text4 = document.querySelector('.story-text-4');
					 
	text4.innerHTML = text4.textContent.replace(/\S/g, "<span class='letter-dark'>$&</span>");
					 
	anime.timeline({loop: true})
				.add({
					targets: '.story-text-4 .letter',
					translateY: [100,0],
					translateZ: 0,
					opacity: [0,1],
					easing: "easeOutExpo",
					duration: 1400,
					delay: (el, i) => 300 + 30 * i
					}).add({
					targets: '.story-text-4 .letter',
					translateY: [0,-100],
					opacity: [1,0],
					easing: "easeInExpo",
					duration: 1200,
					delay: (el, i) => 100 + 30 * i
		});
		}
					
	addAnimation4()
	