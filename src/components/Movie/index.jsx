import {Container} from "./styles"
import {FiArrowLeft} from 'react-icons/fi'
import {Tag} from "../Tag"
import PropTypes from "prop-types"
import {UserPostInfo} from "../UserPostInfo/index.jsx";

export function Movie({data, children}) {
    return (
        <Container>
            <div className="navLink">
                <a href="/"><FiArrowLeft/> Voltar</a>
            </div>
            <h1>{data.title}</h1>
            <UserPostInfo data={
                {
                    urlProfile: 'https://github.com/lutiero.png',
                    name: 'Lutiero Pedroso Fabri',
                    date: new Date().toLocaleDateString('pt-BR'),
                }
            }
            />
            {data.tags && (
                <div>
                    {data.tags.map((tag) => (
                        <Tag key={tag.id}
                             title={tag.name}/>
                    ))}
                </div>
            )}
            <p>{children}</p>
        </Container>
    )
}

Movie.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
}
