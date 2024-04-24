import { FiStar } from "react-icons/fi"
import { Container } from "./stykes"
import { Tag } from "../Tag"
import PropTypes from "prop-types"

export function MovieItem({ data, children }) {
  const renderStars = () => {
    const starIcons = []

    for (let i = 0; i < data.stars; i++) {
      starIcons.push(<FiStar className="starFilled" key={i} />)
    }

    switch (starIcons.length) {
      case 4:
        starIcons.push(<FiStar />)
        break
      case 3:
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        break
      case 2:
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        break
      case 1:
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        break
      case 0:
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        starIcons.push(<FiStar />)
        break

      default:
        break
    }

    return starIcons
  }

  const limitedText = (text, limit) => {
    const shortText =
      text.length > limit ? `${text.substring(0, limit)}...` : text

    return <p>{shortText}</p>
  }

  return (
    <Container>
      <h3>{data.title}</h3>
      <span>{renderStars()}</span>
      <p>{limitedText(children, 200)}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}

MovieItem.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}
