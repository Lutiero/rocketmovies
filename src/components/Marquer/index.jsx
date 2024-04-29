import { Container } from "./styles"
import PropTypes from "prop-types"

export function Marquer({ title, isNewMarquer = false, ...rest }) {


  return (
    <Container $isnewmarquer={isNewMarquer.toString()} {...rest}>
      {title}
    </Container>
  )
}

Marquer.propTypes = {
  title: PropTypes.string.isRequired,
  isNewMarquer: PropTypes.bool,
}
