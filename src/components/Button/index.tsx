import React from "react"
import { Container } from "./style"

export function Button({ icon: Icon, title }) {
  return (
    <Container type="button">
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  )
}
