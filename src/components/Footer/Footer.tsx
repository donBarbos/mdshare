import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}&nbsp;
      <Link href="https://www.dontkillkenny.com">donBarbos</Link>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  flex: 0 0 auto;
  border-top: 1px solid #e2e8f0;
  justify-content: center;
  align-items: center;
  padding 25px;
  margin-top: auto;

  a {
    color: inherit;
  }

  a:hover {
    color: var(--accent-color);
  }
`