import { FamButton, FamImage, FamTitle } from "fam-code-ui";
import { html, css } from "iares";
import { AppText } from "@/components/AppText";
import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

const template = () => html`
<div class="wrap-ctx"> 
  <div class="row-ctx">
    <${FamTitle}>
      <slot target="content" ctx="app-costs">
        <h1 class="costs-title-ctx">Get access to your daily cost.</h1>
      </slot>
    </>            
  </div>
  <div class="row-ctx">
    <${AppText}>
      <slot target="content" ctx="app-costs">
        <p class="costs-text-ctx">With lost of unique blocks. you can easily build a page without coding. Build your next website fast.</p>
      </slot>
    </>           
  </div>
  <div class="row-ctx">
    <div class="shadow-ctx">
      <${FamButton}>
        <slot target="content">
          <span type="primary">
            <i>Create a free account</i>
          </span>
        </slot>
      </>
    </div>           
  </div>
</div>  
`;

export const AppCosts = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-costs,
  .wrap-ctx,
  .shadow-ctx,
  .costs-ctx,
  .row-ctx {
    display:flex;
    width:100%;
    flex-wrap:wrap;
  }

  app-costs {
    justify-content: center;
    align-items: center;
  }

  .wrap-ctx {
    max-width:400px;
    background: #fff;
    padding: 1em 1em 3em 1em;
    border-radius:40px;
  }

  .row-ctx {
    width:100%;
  }
  
  .costs-text-ctx {
    text-align: center;
    padding:0 0 1em 0;
  }

  .shadow-ctx{
    box-shadow: 0 10px 30px rgba(255, 113, 57, 0.6);
    background: transparent;
    border-radius: 8px;
    margin:1em auto 0 auto;
    max-width:280px;
  }

`;
