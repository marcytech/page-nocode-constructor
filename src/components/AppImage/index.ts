import { FamButton, FamImage } from "fam-code-ui";
import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <${FamImage} 
      src="/assets/images/person.png" 
      fallbackSrc="/assets/images/404.png"
      alt="relógio branco" 
    />     
  </div>
`;

export const AppImage = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-image,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
