import { FamButton, FamTextInput } from "fam-code-ui";
import { html, css } from "iares";

type Props = {
  title?: string;
  button: string;
  background: string;
}

type Params = {
  props: Props
}

const template = ({ props }: Params) => html`
  <div class="wrap-ctx">
    <div class="form-input-ctx" >
      <${FamTextInput}  
        type="text"
        label="Your Name"
        handler=${() => console.log("ok")}
        value=""
        debounceTime="500"
      />      
    </div>  
  </div>
`;

export const AppForm = ({props}: Params) => {
  return {
    template,
    styles,
    props
  };
};

const styles = ({ props }: Params) => css`
  app-main,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap:wrap;
  }
  .title-ctx {
    padding:1em;
  }
  .form-button-ctx{
    display: flex;
    width:100%;
    background:${props.background} !important;
  }
`;
