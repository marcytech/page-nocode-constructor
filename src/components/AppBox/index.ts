import { FamImage, FamTagline, FamTitle } from "fam-code-ui";
import { html, css } from "iares";
import { AppText } from "@/components/AppText";

type Props = {
  title: string;
  subTitle: string;
  text: string;
  image?: string;
}

type Params = {
  props: Props;
}

const template = ({ props }: Params) => html`
  <div class="wrap-ctx">
    <div class="box-img-ctx">
      <${FamImage} 
        src=${props.image} 
        fallbackSrc="/assets/images/404.png"
        alt=${props.title} 
      />    
    </div>
    <div class="box-text-ctx">
      <${AppText}>
        <slot target="content" ctx="app-box">
          <span class="text-ctx">${props.text}</span>
        </slot>
      </>      
    </div>
    <div class="box-title-ctx">
      <${FamTitle}>
        <slot target="content" ctx="app-box">
          <div class="wrap-title-ctx">
            <h3 class="title-ctx">${props.title}</h3>
            <${FamTagline}>
              <slot target="content" ctx="app-box">
                <span class="tagline-ctx">${props.subTitle}</span>
              </slot>
            </>           
          </div>         
        </slot>
      </>    
    </div>
  </div>

`;

export const AppBox = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  .box-title-ctx,
  .wrap-title-ctx,
  .box-text-ctx,
  .box-img-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
  }

  .box-text-ctx {
    margin:2em 0 1em 0;
    text-align: center;
    color:#213053 !important; 
  }

  app-box .title-ctx {
    font-size:1.4em;
    font-weight: bold;
    padding:1em 0 0.5em 0;
    color:#213053;
  }

  .text-ctx {
    color:#213053;
    font-size:1em;
  }

  .tagline-ctx {
    font-size: 1em;
    color:#3f4145;
  }
`;
