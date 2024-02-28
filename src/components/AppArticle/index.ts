import { html, css } from "iares";
import { FamTitle } from "fam-code-ui";
import { mediaQueries } from "@/services/mediaQueries";
import { AppText } from "@/components/AppText";
import { HTMType } from 'iares';

type Props = {
  image: string;
  title: string;
  text: string;
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
  <div class="grid grid-cols-12">
    <div class="
        xxl-col-12
        xl-col-12
        lg-col-12 
        sm-col-12
        sm-row-start-2
        xs-col-12
        xs-row-start-2
    ">
      <${FamTitle}>
        <slot target="content" ctx="app-article">
          <h1 class="article-title-ctx">We create value to your business.</h1>
        </slot>
      </>  
      
        <${AppText}>
          <slot target="content" ctx="app-article">
            <p class="article-text-ctx">With lost of unique blocks. you can easily build a page without coding. Build your next website fast.</p>
          </slot>
        </> 
    </div>
  </div>
`;

export const AppArticle = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-article {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    padding:0 1em;
  }

   h1 > .article-title-ctx {
    font-size: 2.3em !important;
    text-align: center !important;
    padding:0 0 0 2em;
    line-height: 1.3em !important;
  }
  
  ${media.xxl(css`
  
    app-article {
      padding: 4em 1em 0;
    }
    
    .article-title-ctx {
      font-size:2.7em;
      padding:0 !important;
    }
    
    .article-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0 2em 2em;;
    }
  `)}
  
  ${media.xl(css`
    app-article {
      padding: 4em 1em 0;
    }
    
    .article-title-ctx {
      font-size:2.5em !important;
      padding:0 !important;
    }
    .article-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0 !important;
    }
  `)}
  
  ${media.lg(css`
    app-article {
      padding: 4em 1em 0;
    }
  
    .article-title-ctx {
      width:100%;
      font-size:2.6em !important;
      padding:0 !important;
    } 

    .article-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0 0 !important;
    }
  `)}
  
  ${media.xs(css`
  
    .article-title-ctx {
      padding:0 !important;
    }
  
    .article-text-ctx {
      width:100%;
      font-size: 0.875em;
      padding:2em 0 2em 2em;
    }
  `)}  
  
  ${media.sm(css`
  
  .article-title-ctx {
    padding:0 2em !importa;
  }
  
  .article-text-ctx {
    width: 100%;
    font-size: 0.875em;
    padding: 0 2em;
  }
  `)}  
  `;
  