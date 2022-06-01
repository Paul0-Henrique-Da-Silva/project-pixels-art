 //let corpoB = document.getElementsByName('corpoB')

  //const elementHeader = document.createElement( 'header' );
  //elementMain.className = 'color-palette';
  //corpoB.appendChild(elementMain)
  //document.body.appendChild(elementMain);
  //elementHeader.id = 'color-palette'
//loopdascor
/*
for (let indexDiv = 0; indexDiv <= 3; indexDiv += 1){
  let divs = document.createElement( 'div ' )
  divs.className = 'color'
  elementHeader.appendChild(divs)
}*/
//let unarioprimeiro = document.getElementsByTagName('div')[0]
//unarioprimeiro.classList.add('selected')


//let unariosegundo = document.getElementsByClassName('color')[1]
//let unarioterceiro = document.getElementsByClassName('color')[2]
//let unarioquarto = document.getElementsByClassName('color')[3]



let blockDiv1 = document.querySelectorAll( 'div' )[ 0 ]
blockDiv1.classList.add( 'selected' )
let blockDiv2 = document.querySelectorAll( 'div' )[ 1 ]
let blockDiv3 = document.querySelectorAll( 'div' )[ 2 ]
let blockDiv4 = document.querySelectorAll( 'div' )[ 3 ]

blockDiv1.id = "black"
blockDiv2.id = "blue"
blockDiv3.id = "red"
blockDiv4.id = "green" 


blockDiv1.addEventListener( 'click', function(){
  blockDiv2.classList.remove( 'selected' )
  blockDiv1.classList.add( 'selected' )
  blockDiv3.classList.remove( 'selected' ) 
  blockDiv4.classList.remove( 'selected' ) 
})

 blockDiv2.addEventListener( 'click', function(){
   blockDiv2.classList.add( 'selected' )
   blockDiv1.classList.remove( 'selected' )
   blockDiv3.classList.remove( 'selected' ) 
   blockDiv4.classList.remove( 'selected' ) 
})

blockDiv3.addEventListener( 'click', function(){
  blockDiv2.classList.remove( 'selected' )
  blockDiv1.classList.remove( 'selected' )
  blockDiv3.classList.add( 'selected' )
  blockDiv4.classList.remove( 'selected' ) 
})

blockDiv4.addEventListener( 'click', function(){
  blockDiv2.classList.remove( 'selected' )
  blockDiv1.classList.remove( 'selected' )
  blockDiv3.classList.remove( 'selected' )
  blockDiv4.classList.add( 'selected' ) 
})

/*
function seletorCor (color1,color2,color3,color4){
  elementMain.firstElementChild.style.backgroundColor = color1
  elementMain.firstElementChild.nextElementSibling.style.backgroundColor = color2
  elementMain.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = color3
  elementMain.lastElementChild.style.backgroundColor = color4
}
*/

//coloque cor em strings
//seletorCor( 'black', 'blue','red','green' )


//const quadroPai = document.createElement( 'section' );
//quadroPai.id = "pixel-board"
//document.body.appendChild(quadroPai)
//corpoB.appendChild(quadroPai)


//  for (let index = 0; index < 25; index += 1){
//  let divsfilhos = document.createElement( 'div' )
//  divsfilhos.className = 'pixel'
//  pixelQuadro.appendChild(divsfilhos)    
//

const pixelQuadro = document.querySelectorAll( 'section' )[ 1 ]

//REFERENCIAS
// https://www.youtube.com/watch?v=ikCjfkOuIuw&feature=youtu.be
// sobre o target 
// restante foi conceitos ensinado no course(trybe)


  
pixelQuadro.addEventListener( 'click', seletorDecores )

function seletorDecores ( e ) {

if ( black.classList == 'color selected' ) {
 e.target.style.backgroundColor = 'black'  
} 
else if ( red.classList == 'color selected' ) {
  e.target.style.backgroundColor = 'red'
} 
else if ( blue.classList == 'color selected' ) {
  e.target.style.backgroundColor = 'blue'
 } 
 else if ( green.classList == 'color selected' ) {
  e.target.style.backgroundColor = 'green'
 }
}



let btn = document.querySelector( '#clear-board' )
let pix = document.getElementsByClassName( 'pixel' )

btn.addEventListener( 'click', limpador )

function limpador( event ){
  for ( let i = 0; i < 25; i += 1 ) {
  pix[ i ].style.backgroundColor = 'white'
  }
}
