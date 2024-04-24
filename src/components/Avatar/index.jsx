import { Container } from "./styles"

export function Avatar() {
  return (
    <Container>
      <div>
        <p>Lutiero Pedroso Fabri</p>
        <a href="/signin">sair</a>
      </div>
      <img src="https://github.com/lutiero.png" alt="Foto do usuário" />
    </Container>
  )
}
