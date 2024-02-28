import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="section"></slot>  
  </div> 
`;

export const AppSection = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-section,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content:flex-start;
    align-items: center;
    flex-wrap:wrap;
    background:#fff;
  }
`;
