import { FamButton } from "fam-code-ui";
import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="accessibility"></slot>  
  </div> 
`;

export const AppAccessibility = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-accessibility,
  .wrap-ctx {
  display: flex;
  width:100%;
  justify-content:flex-start;
  align-items: center;
  flex-wrap:wrap;
  background:#fff;
  padding:4em 0;
}
`;
