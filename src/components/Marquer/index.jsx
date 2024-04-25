import {Container} from "./styles"
import PropTypes from "prop-types"

export function Marquer({title, ...rest}) {
    return <Container {...rest}>

        {title}

    </Container>
}

Marquer.propTypes = {
    title: PropTypes.string.isRequired,
}
