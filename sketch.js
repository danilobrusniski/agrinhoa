let sunX; // Posição horizontal do sol
let sunsetProgress = 0; // Progresso do pôr do sol (0 a 1)

function setup() {
  createCanvas(800, 600);
  sunX = width / 2;
}

function draw() {
  // Fundo que muda de cor para simular o pôr do sol
  let skyColor = lerpColor(color(135, 206, 235), color(25, 25, 112), sunsetProgress);
  background(skyColor);
  
  // Desenho do sol em movimento
  fill(255, 204, 0);
  noStroke();
  let sunY = map(sunsetProgress, 0, 1, height * 0.2, height * 0.8);
  ellipse(sunX, sunY, 80, 80);
  
  // Desenho da cidade com edifícios
  drawCity();
  
  // Atualiza o progresso do pôr do sol
  if (sunsetProgress < 1) {
    sunsetProgress += 0.001; // controla a velocidade do pôr do sol
  }
}

// Função para desenhar os edifícios
function drawCity() {
  let buildingCount = 10;
  let buildingWidth = width / buildingCount;
  
  for (let i = 0; i < buildingCount; i++) {
    let x = i * buildingWidth;
    // Altura aleatória para cada edifício
    let buildingHeight = random(height * 0.2, height * 0.6);
    // Cor das edificações
    fill(50 + i * 20, 50, 50);
    rect(x, height - buildingHeight, buildingWidth - 2, buildingHeight);
  }
}
