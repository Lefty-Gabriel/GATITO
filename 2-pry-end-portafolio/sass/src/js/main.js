
// document.addEventListener('DOMContentLoaded',function(){
//   iniciarApp();
// });

// function iniciarApp(){
//   scrollNav();
  
// }

// window.addEventListener("scroll", (event) => {
//     const scrolltonto = this.scrollY;
    
//     console.log(scrolltonto);
    
// });



//inicio de observador
 
const proyect1 = document.getElementById('proyect1');
const proyect2 = document.getElementById('proyect2');
const proyect3 = document.getElementById('proyect3');


const cargarImagen = (entradas, observador) => {


	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('folder-view');
		} else {
			 entrada.target.classList.remove('folder-view');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(proyect1);
observador.observe(proyect2);
observador.observe(proyect3);



// 2

const skills = document.getElementById('skills-obvs');

const cargarskills = (entradas, observador) => {


	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('folder-view');
		} else {
			 entrada.target.classList.remove('folder-view');
		}
	});
}

const observador2 = new IntersectionObserver(cargarskills, {
	root: null,
	rootMargin: '500px 0px 400px 0px',
	threshold: 1.0
});


observador2.observe(skills);

//fin de observador

//inicio menu fijo
window.addEventListener("scroll", function(){
    const nav = document.querySelector (".links"); 
    nav.classList.toggle("abajo",window.scrollY>700);
})


//fin menu fijo

//scroll behavior 
function scrollNav(){
  const enlaces = document.querySelectorAll('.links-nav a');
  enlaces.forEach(enlace=>{
      enlace.addEventListener('click',function(e){
          e.preventDefault();
          const secroll=e.target.attributes.href.value;
          const seccion=document.querySelector(secroll);
          seccion.scrollIntoView({behavior:"smooth"});
      });

  });
}
scrollNav();

       


//efecto maquina de escribir

const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = '"Hello world!";';
            }, 0);
            setTimeout(() => {
                text.textContent = '"Welcome on';
            }, 6200);
            setTimeout(() => {
                text.textContent = '"Mi name is ';
              }, 12200);
            setTimeout(() => {
                text.textContent = '"I am front-end';  
                
            }, 18000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 24000);

        const text2 = document.querySelector(".end-text");

        const textLoad2 = () => {
            setTimeout(() => {
                text2.textContent = '';
            }, 0);
            setTimeout(() => {   
            text2.textContent = 'board!";';
        }, 6200);
        setTimeout(() => {
            text2.textContent = 'Josue"; ';
          }, 12200);
        setTimeout(() => {
            text2.textContent = 'developer";';  
            
        }, 18000); //1s = 1000 milliseconds
    }
           
                
           //1s = 1000 milliseconds
        

        textLoad2();
        setInterval(textLoad2, 24000);
       //fin efecto maquina de escribir


        //inicio preloader
        const preload = document.querySelector(".preload");
        const preloadby = document.body;
        setTimeout(() => {
        preload.classList.add("close-preload");
        preloadby.classList.remove("preloadbody");
        }   , 2500);

        const pre2 = document.getElementById('pre2');
        
        setTimeout(() => {
        pre2.classList.remove('preload2');
        
        
        
        }   , 2700);

     //fin preloader


    //particulas
    particlesJS(
        {
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#FFF"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 4,
                  "size_min": 0.3,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 600
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 250,
                  "size": 0,
                  "duration": 2,
                  "opacity": 0,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
    );



//menu 


const menu = document.querySelector("#menu");
menu.addEventListener("click", function(){
menu.classList.toggle("menu-desplegado")

});



