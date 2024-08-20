function setup() {
    createCanvas(600,600);
  }
  
  function draw() {
    background("white");
  
    stroke("blue");
    fill("red");
  
    console.log(mouseIsPressed) 
    rect(mouseX, mouseY, 100, 150);
  }
  
  function setup() {
    // cria uma tela de 400px de largura por 400px de altura
    createCanvas(600,600);
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }