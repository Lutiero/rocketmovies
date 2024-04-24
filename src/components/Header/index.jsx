import { Container, Form } from "./styles"
import { Input } from "../Input"
import { Avatar } from "../Avatar"

export function Header() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <Input type="text" placeholder="Pesquisar pelo títulos" />
        <Avatar />
      </Form>
    </Container>
  )
}
