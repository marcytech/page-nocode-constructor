import { FamButton, FamTextInput } from "fam-code-ui";
import { html, css } from "iares";
import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <div class="title-ctx">
      <h1>Get monthly updates on your inbox</h1>    
    </div>
    <div class="form-ctx">
      <input type="text" value="Enter your email"/>
      <div class="buttom-ctx">
        <${FamButton}>
            <slot target="content">
              <span type="primary">
                <i>subscribe</i>
              </span>
            </slot>
          </>      
      </div>
    </div>
    <div class="text-ctx">
      <span>Lorem ipsum dolor sit amet.!</span>
    </div>    
  </div>
`;

export const AppNewsletter = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-newsletter,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    border-radius:26px;
    border:#fff;
    padding:1em;
  }

  .wrap-ctx {
    padding:2em;
    position: relative;
    background:#e6eaf4;
    margin-top:1em;
  }

  .title-ctx,
  .form-ctx,
  .text-ctx {
    display: flex;
    width: 100%;
  }

  .title-ctx {
    color: #2a395b;
    font-weight:bold;
    padding-bottom: 1em;
  }

  .form-ctx {
    padding:1em 0;
    position: relative;
  }

  .form-ctx input {
    display: flex;
    font-size:1em;
    width:100%;
    border-radius:11px;
    border:0;
    padding: 1.2em 135px 1.2em 1em;
    color:#a5acba;
  }

  .buttom-ctx {
    display: flex;
    width:120px;
    position: absolute;
    right: 7px;
    top: 22px;
  }

  .text-ctx {
    display: flex;
    justify-content: center;
    width:100%;
    color: #2a395b;
    padding-top:1em;
  }

  ${media.xl(css`
    .buttom-ctx {
      position: absolute;
      right: 7px;
      top:23px;
    }
  `)}  

  ${media.lg(css`
    .buttom-ctx {
      position: absolute;
      right: 7px;
      top:19.2px;
    }
  `)}  

  ${media.sm(css`
    .buttom-ctx {
      position: absolute;
      right: 7px;
      top: 16px;
    }
  `)}

  ${media.xs(css`
    .buttom-ctx {
      position: absolute;
      right: 7px;
      top: 16px;
    }
  `)} 
   
`;
