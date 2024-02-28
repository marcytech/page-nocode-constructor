  import { FamButton } from "fam-code-ui";
  import { html, css } from "iares";

  const template = () => html`
    <slot id="content"></slot>
  `;

  export const AppContainer = () => {
    return {
      template,
      styles,
    };
  };

  const styles = () => css`
    app-container {
      display: flex;
      width:100%;
      justify-content: center;
      align-items: center;
      max-width:1180px;
      padding:1em;
      margin:0 auto;
    }
  `;
