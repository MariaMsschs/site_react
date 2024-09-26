function Alunos(props) {
    return(
        <ul>
            <li>{props.lista}</li>
        </ul>
    )
}

<ul>
    {Alunos.map((aluno) => (
        <li>{aluno}</li>
    ))}
</ul>

export default Alunos;