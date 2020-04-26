import styled from '@emotion/styled';

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const HitsWrapper = styled.div`
  display: ${(props) => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 56px;
  width: 82vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: 4px;
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid #333333;
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid #666666;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: black;
    background: yellow;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: gray;
      padding: 0.1em 0.4em;
      border-radius: 4px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`;
