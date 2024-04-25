import {Container, Form} from "./styles.js";
import {Header} from "../../components/Header/index.jsx";
import {FiArrowLeft, FiX} from "react-icons/fi";
import {Input} from "../../components/Input/index.jsx";
import {Textarea} from "../../components/Textarea/index.jsx";
import {Marquer} from "../../components/Marquer/index.jsx";
import {Button} from "../../components/Button/";

export function NewMovie() {
    return (
        <Container>
            <Header/>
            <Form>
                <a href='/'> <FiArrowLeft/> Voltar</a>
                <h1>Novo Aluno</h1>
                <div className="input-wrapper">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota"/>
                </div>
                <Textarea placeholder="Observações"/>
                <h5>Marcadores</h5>
                <Marquer title="React"/>
                <Marquer title="React"/>

                <div className="input-wrapper">
                    <Button title="Criar"/>
                    <Button title="Excluir filme"/>
                </div>
            </Form>
        </Container>
    )

}