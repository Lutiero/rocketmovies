import { Container, Form } from "./styles.js"
import { Header } from "../../components/Header/index.jsx"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input/index.jsx"
import { Textarea } from "../../components/Textarea/index.jsx"
import { Marquer } from "../../components/Marquer/index.jsx"
import { Button } from "../../components/Button/"
import { Link } from "react-router-dom"

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Form>
        <Link to="/mymovies">
          {" "}
          <FiArrowLeft /> Voltar
        </Link>
        <h1>Novo filme</h1>
        <div className="input-wrapper">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota" />
        </div>
        <Textarea placeholder="Observações" />
        <h5>Marcadores</h5>
        <Marquer $isnewmarquer={true} title="React" />
        <Marquer $isnewmarquer={false} title="Novo marcador" />

        <div className="input-wrapper">
          <Button title="Criar" />
          <Button title="Excluir filme" />
        </div>
      </Form>
    </Container>
  )
}
