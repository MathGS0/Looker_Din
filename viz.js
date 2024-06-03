const dscc = require('@google/dscc');
const local = require('./localMessage.js');

// Verifica se estamos em desenvolvimento local
export const LOCAL = false;

function drawViz(data) {
  // Lógica para desenhar a visualização
  const div = document.createElement('div');
  div.textContent = JSON.stringify(data);
  document.body.appendChild(div);
}

// Chama a função drawViz com os dados apropriados
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
