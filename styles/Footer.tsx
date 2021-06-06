import styled from 'styled-components'

export default styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: .85rem;

  span {
    font-weight: 300;
    line-height: 1.5;
    &.year {

    }

    &.copyrght {
      font-style: italic;
    }
  }
`