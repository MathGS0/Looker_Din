const dscc = require('@google/dscc');

const drawViz = (data) => {
  // Limpa o gráfico existente
  document.body.innerHTML = '';

  // Extrai dados
  const dim1 = data.tables.DEFAULT[0].dim1;
  const metric1 = data.tables.DEFAULT[0].metric1;
  const metric2 = data.tables.DEFAULT[0].metric2;
  const metric3 = data.tables.DEFAULT[0].metric3;

  // Criação do gráfico customizado (Exemplo básico)
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';

  const chartTitle = document.createElement('h2');
  chartTitle.innerText = 'Título do Gráfico';
  container.appendChild(chartTitle);

  // Adiciona colunas
  const column1 = document.createElement('div');
  column1.style.height = `${metric1}px`;
  column1.style.width = '50px';
  column1.style.backgroundColor = 'orange';
  container.appendChild(column1);

  const column2 = document.createElement('div');
  column2.style.height = `${metric2}px`;
  column2.style.width = '50px';
  column2.style.backgroundColor = 'blue';
  container.appendChild(column2);

  const diffText = document.createElement('div');
  diffText.innerText = `Diferença: ${metric3}`;
  container.appendChild(diffText);

  document.body.appendChild(container);
};

// Subscrição para atualização dos dados
dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
