function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <article className="card-curso">
      <h3>{nome}</h3>
      <p>Duração: {duracao}</p>
      <p>Modalidade: {modalidade}</p>
      <p>Nível: {nivel}</p>

      {vagas > 0 ? (
        <p className="vagas disponivel">Vagas disponíveis: {vagas}</p>
      ) : (
        <p className="vagas esgotado">Turma completa</p>
      )}
    </article>
  );
}

export default CardCurso;