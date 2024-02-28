import { FamButton } from "fam-code-ui";
import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <ul>
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Service</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Login</a>
      </li>
    </ul>  
  </div>
`;

export const AppMenu = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-menu,
  .wrap-ctx,
  .wrap-ctx > ul,
  .wrap-ctx li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }
  .wrap-ctx > ul {
    justify-content: space-between;
    max-width: 333px;
  }
  .wrap-ctx {
    justify-content:flex-end;
  }  
`;
