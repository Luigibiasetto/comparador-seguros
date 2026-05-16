import React, { useState } from 'react';
import '../styles/styles.css';

const BuscaSeguros = ({ setSeguros }) => {
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [form, setForm] = useState({
    origem: "Brasil",
    destino: [],
    dataIda: "",
    dataVolta: "",
    passageiros: [{ idade: "" }],
    email: "",
    telefone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddPassageiro = () => {
    setForm({ ...form, passageiros: [...form.passageiros, { idade: "" }] });
  };

  const handleChangePassageiro = (index, e) => {
    const passageiros = [...form.passageiros];
    passageiros[index].idade = e.target.value;
    setForm({ ...form, passageiros });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErro(null);
    try {
      const response = await fetch("/api/buscar-seguros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSeguros(data.segurosDisponiveis || []);
    } catch (error) {
      console.error("Erro ao buscar seguros:", error);
      setErro("Não foi possível buscar os seguros. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Busque um Seguro de Viagem</h2>
      <form onSubmit={handleSubmit}>
        <label>Origem:</label>
        <select name="origem" onChange={handleChange}>
          <option value="Brasil">Brasil</option>
          <option value="Estrangeiro">Estrangeiro vindo ao Brasil</option>
        </select>

        <label>Destino:</label>
        <input type="text" name="destino" placeholder="Digite os países" onChange={handleChange} />

        <label>Data de Ida:</label>
        <input type="date" name="dataIda" onChange={handleChange} />

        <label>Data de Volta:</label>
        <input type="date" name="dataVolta" onChange={handleChange} />

        <label>Passageiros:</label>
        {form.passageiros.map((passageiro, index) => (
          <input key={index} type="number" placeholder="Idade" value={passageiro.idade} onChange={(e) => handleChangePassageiro(index, e)} />
        ))}
        <button type="button" onClick={handleAddPassageiro}>+ Adicionar Passageiro</button>

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Telefone:</label>
        <input type="tel" name="telefone" onChange={handleChange} />

        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar Seguro'}
        </button>
        {erro && <p style={{ color: 'red', marginTop: '8px' }}>{erro}</p>}
      </form>
    </div>
  );
};

export default BuscaSeguros;
