import {Container, Form} from "./styles.js";
import {FiArrowLeft, FiUser, FiMail, FiLock} from "react-icons/fi";
import {Input} from "../../components/Input/index.jsx";


export function Profile({data}) {
    return (
        <Container>
            <header>
                <a href='/'><FiArrowLeft/> Voltar</a>
            </header>
            <Form>
                <img src="https://github.com/lutiero.png"
                     alt='Foto de Usuário'/>
                <main>
                <Input type="text"
                       value="Lutiero Pedroso Fabri"
                       icon={FiUser}
                       readonly
                />
                <Input type="email"
                       value="Lutiero@gmail.com"
                       icon={FiMail}
                        readonly
                />
                <Input type="password"
                       placeholder="Senha atual"
                       icon={FiLock}/>
                <Input type="password"
                       placeholder="Nova senha"
                       icon={FiLock}/>
                </main>
            </Form>

        </Container>
    )
}