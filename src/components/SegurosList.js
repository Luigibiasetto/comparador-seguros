import React from 'react';
import '../styles/styles.css';

const SegurosList = ({ seguros }) => {
  if (!seguros || seguros.length === 0) {
    return null;
  }

  return (
    <div className="seguros-list">
      <h2>Seguros Disponíveis ({seguros.length} opções)</h2>
      {seguros.map((seguro, index) => (
        <div key={index} className="seguro-card">
          <div className="seguro-info">
            <h3>{seguro.seguradora}</h3>
            <p><strong>Plano:</strong> {seguro.plano}</p>
            <p><strong>Cobertura médica:</strong> {seguro.coberturaMediaca}</p>
            <p><strong>Validade:</strong> {seguro.validade}</p>
          </div>
          <div className="seguro-preco">
            <div className="preco">R$ {Number(seguro.preco).toFixed(2)}</div>
            <div className="moeda">por viagem</div>
            <button className="btn-contratar">Contratar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SegurosList;
