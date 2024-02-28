import { AppContainer } from "@/components/AppContainer";
import { AppLogo } from "@/components/AppLogo";
import { AppMenu } from "@/components/AppMenu";
import { mediaQueries } from "@/services/mediaQueries";
import { FamButton } from "fam-code-ui";
import { html, css } from "iares";

const media = mediaQueries();

const template = () => html`
<${AppContainer}>
  <slot target="content" ctx="app-header">
    <div class="grid grid-cols-12">
      <div class="
        xxl-col-2 
        xl-col-2 
        lg-col-2 
        sm-col-3 
        xs-col-4
      ">
        <div class="logo-ctx">
          <${AppLogo}/>          
        </div>
      </div>
      <div class="
        xxl-col-8 
        xl-col-8 
        lg-col-7
      ">
       <div class="menu-ctx"><${AppMenu}/></div>
      </div>
      <div class="
        xxl-col-2 
        xl-col-2 
        lg-col-3
      ">
        <div class="button-ctx">
          <${FamButton}>
            <slot target="content">
              <span type="primary">
                <i>Get Started</i>
              </span>
            </slot>
          </>         
        </div>       
      </div>      
    </div>
  </slot>
</>
`;

export const AppHeader = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-header,
  .menu-ctx,
  .logo-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }
  .menu-ctx,
  .logo-ctx {
    height:50px;
  }

  ${media.sm(css`
    .menu-ctx {
      display: none;
    }
    .button-ctx {
      display: none;
    }
  `)}

  ${media.xs(css`
    .menu-ctx {
      display: none;
    }
    .button-ctx {
      display: none;
    }    
  `)}

`;
