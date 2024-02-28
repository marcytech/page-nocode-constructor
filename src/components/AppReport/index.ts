import { FamImage, FamTitle } from "fam-code-ui";
import { html, css } from "iares";
import { AppText } from "@/components/AppText";
import { mediaQueries } from "@/services/mediaQueries";
import { AppContainer } from "../AppContainer";


const media = mediaQueries();

const template = () => html`
  <div class="report-ctx">
    <slot></slot>     
  </div>    
`;

export const AppReport = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-report,
  .report-ctx,
  .image-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    background: #fff; 
    flex-wrap: wrap;
  }
  .title-ctx {
    text-align: center;
    font-size:2em;
    padding: 1em;
  }
  .text-ctx {
    text-align: center;
    font-size: 0.875em;
    padding:1em;
  }

  .image-ctx {
    padding:0;
    justify-content: center;
  }

  ${media.xxl(css`

  .title-ctx {
    font-size:2.4em;
    padding:1em;
  }
  
  .image-ctx {
    padding:0;
  }
  `)}  

  ${media.xl(css`

  .title-ctx {
    font-size:2.4em;
    padding:1em;
  }
  
  .image-ctx {
    padding:0;
  }
  `)}

  ${media.lg(css`

  .title-ctx {
    font-size:2.2em;
    padding:1em;
  }
  
  .image-ctx {
    padding:0;
  }
  `)}  

  ${media.sm(css`

  .title-ctx {
    padding:1em;
  }
  
  .image-ctx {
    padding:0;
  }
  `)}  

  ${media.xs(css`
 
  .image-ctx {
    padding:0;
  }
  `)}  
`;
