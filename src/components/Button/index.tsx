import React from "react"
import { Container } from "./style"
// @ts-ignore
import PropTypes from "prop-types"

export function Button({ icon: Icon, title }) {
  return (
    <Container type="button">
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
