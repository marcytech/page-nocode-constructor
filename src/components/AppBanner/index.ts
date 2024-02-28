import { html, css } from "iares";
import { AppContainer } from "@/components/AppContainer";
import { FamButton, FamImage, FamTitle } from "fam-code-ui";
import { AppText } from "@/components/AppText";
import { HTMType } from 'iares';
import { mediaQueries } from "@/services/mediaQueries";

type Props = {
  image: string;
  title: string;
  text: string;
  reverse: boolean;
};

type Component = {
  template: () => HTMType | HTMType[];
  styles: () => string;
  props: Props;
};

type Params = {
  props: Props;
};

type ComponentFactory = {
  (params: Params): Component;
};

const media = mediaQueries();

const template = ({ props }: Params) => html`
<${AppContainer}>
  <slot target="content" ctx="app-banner">
    <div class="grid grid-cols-12">
      <div class="
          xxl-col-start-1 xxl-col-end-6
          xl-col-start-1 xl-col-end-6
          lg-col-start-1 lg-col-end-6 
          sm-col-start-3 sm-col-end-11
          sm-row-start-2
          xs-col-12
          xs-row-start-2
      ">
        <${FamTitle}>
          <slot target="content" ctx="app-banner">
            <h1 class="banner-title-ctx">Get started your business.</h1>
          </slot>
        </>  
        
          <${AppText}>
            <slot target="content" ctx="app-banner">
              <p class="banner-text-ctx">With lost of unique blocks. you can easily build a page without coding. Build your next website fast.</p>
            </slot>
          </> 

          <div class="shadow-ctx">
            <${FamButton}>
              <slot target="content">
                <span type="primary">
                  <i>Create a free account</i>
                </span>
              </slot>
            </>            
          </div> 
          
          <${AppText}>
            <slot target="content" ctx="app-banner">
              <p class="banner-text-ctx">No Cred Card Necessary.</p>
            </slot>
          </>                           
      </div>
      <div class="
        xxl-col-start-8 xxl-col-end-12  
        xl-col-start-6 xl-col-end-12
        lg-col-start-6 lg-col-end-12 
        sm-col-12
        sm-row-start-1 
        xs-col-12
        xs-row-start-1
      ">
        <${FamImage} 
          src="/assets/images/person.png" 
          fallbackSrc="/assets/images/404.png"
          alt="person" 
        />      
        </div>
    </div>
  </slot>
</>
`;

export const AppBanner = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-banner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:100%;
  }

  .banner-title-ctx {
    padding:0;
    font-size: 3.5em !important;
  }

  .shadow-ctx {
    box-shadow: 0 10px 30px rgba(255, 113, 57, 0.6);
    background: transparent;
    border-radius: 8px;
  }

  ${media.xxl(css`

    app-banner {
      padding: 4em 0;
    }

    .banner-title-ctx {
      text-align: left !important;
      padding:0 !important;
    }

    .banner-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0!important;
      text-align: left !important;
    }

    .image-ctx {
      padding: 3em 0;
    }

    .shadow-ctx {
      max-width:250px;
    }
  `)}

  ${media.xl(css`
    app-banner {
      padding: 4em 0;
    }

    .banner-title-ctx {
      text-align: left !important;
      padding:0 !important;
    }
    .banner-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0 !important;
      text-align: left !important;
      
    }
    .shadow-ctx {
      max-width:250px;
    }    

  `)}

  ${media.lg(css`
    app-banner {
      padding: 4em 0;
    }

    .banner-title-ctx {
      font-size:2.6em !important;
      text-align: left !important;
      padding:0 !important;
    }
    .banner-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0 !important;
      text-align: left !important;
    }
    .shadow-ctx {
      max-width:250px;
    }
  `)}

  ${media.xs(css`

    .banner-title-ctx {
      padding:0 !important;
    }
    .banner-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em;
      text-align: center;
    }
  `)}  

  ${media.sm(css`

    .banner-title-ctx {
      padding:0 !important;

    }
    .banner-text-ctx {
      width: 100%;
      font-size: 0.875em;
      padding:2em;
      text-align:center;
    } 
  `)}  
`;
