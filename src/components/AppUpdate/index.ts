import { FamButton } from "fam-code-ui";
import { html, css } from "iares";
import { AppCard } from "../AppCard";
import { AppCosts } from "../AppCosts";
import { mediaQueries } from "@/services/mediaQueries";
import { AppArticle } from "../AppArticle";
import { AppContainer } from "../AppContainer";

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <${AppContainer}>
      <div class="grid grid-cols-12">
        <div class="
        xxl-col-6
        xl-col-6
        lg-col-6
        sm-col-12
        xs-col-12
        ">
          <${AppArticle}/>
          <${AppCard}
            image="/assets/images/card01.png"
            title="Design centrado no usuário "
            text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
            position="left"
            textAlign="left"
            />
          <${AppCard}
            image="/assets/images/card02.png"
            title="Get latest updates"
            text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
            position="left"
            textAlign="left"
          />      
        </div>
        <div class="
          xxl-col-6
          xl-col-6
          lg-col-6
          sm-col-12
          xs-col-12
        ">
          <${AppCard}
            image="/assets/images/image10.png"
            imageWidth="full"
          />         
        </div>
      </div>    
    </>
  </div>
`;

export const AppUpdate = () => {      
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-update,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    background:#fff;
    width:100%;
  }
`;
