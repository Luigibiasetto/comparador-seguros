const segurosMock = [
  {
    seguradora: "Porto Seguro Viagens",
    plano: "Essencial Internacional",
    coberturaMediaca: "USD 30.000",
    validade: "Até 30 dias",
    preco: "189.90"
  },
  {
    seguradora: "Assistência 24h Brasil",
    plano: "Viajante Plus",
    coberturaMediaca: "USD 50.000",
    validade: "Até 60 dias",
    preco: "275.50"
  },
  {
    seguradora: "GlobeTravel Seguros",
    plano: "Premium Global",
    coberturaMediaca: "USD 100.000",
    validade: "Até 90 dias",
    preco: "420.00"
  },
  {
    seguradora: "TravelSafe",
    plano: "Básico Europa",
    coberturaMediaca: "EUR 30.000",
    validade: "Até 15 dias",
    preco: "145.00"
  }
];

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { origem, destino, dataIda, dataVolta, passageiros, email, telefone } = req.body;

  if (!origem || !destino || !dataIda || !dataVolta) {
    return res.status(400).json({ error: 'Campos obrigatórios não informados.' });
  }

  // Simula um pequeno delay de processamento
  setTimeout(() => {
    res.status(200).json({ segurosDisponiveis: segurosMock });
  }, 500);
}
