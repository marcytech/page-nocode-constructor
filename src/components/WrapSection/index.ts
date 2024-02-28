import { FamButton } from "fam-code-ui";
import { html, css } from "iares";

type Props = {
  background: string;
}
type Params = {
  props: Props
}

const template = () => html`
  <div class="wrap-ctx">
    <slot id="section"></slot>  
  </div>
`;

export const WrapSection = ({props}: Params) => {
  return {
    template,
    styles,
    props
  };
};

const styles = ({props}:Params) => css`
  wrap-section,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    background:${props.background || "#fff"};
    
  }
  .wrap-ctx {
    display: flex;
    padding:4em 0 0 0;
  }
`;
