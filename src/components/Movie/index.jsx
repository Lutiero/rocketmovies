import { Container } from "./styles"
import { Tag } from "../Tag"
import PropTypes from "prop-types"

export function Movie({ data, children }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <p>usuario que postou</p>
      {data.tags && (
        <div>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
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
