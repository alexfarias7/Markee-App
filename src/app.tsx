import StyledComponent, { css } from 'styled-components/macro'

function App () {
  return (
    <Title arroz='a'>APP</Title>
  )
}
type TitleProps ={
  arroz:string
}
const Title = StyledComponent.h1<TitleProps>`
${({ theme }) => css`
background: ${theme.colors.black};
color: ${theme.colors.primary};
`}`

export { App }
