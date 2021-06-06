import styled from 'styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(56, 52, 30, 0.6);

  .modal-main {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`
