import { FamTitle } from "fam-code-ui";
import { html, css, HTMType } from "iares";
import { AppText } from "@/components/AppText";
import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

type Props = {
  title: string;
  text: string;
  color:string; 
}

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <div class="wrap-ctx">
    <${FamTitle}>
      <slot target="content" ctx="app-customer-title">
        <h1 class="title-ctx">${props.title}</h1>
      </slot>
    </>
    <div class="text-wrap-ctx">
      <${AppText}>
        <slot target="content" ctx="app-customer-title">
          <p class="text-ctx">${props.text}</p>        
        </slot>
      </>
    </div>         
  </div>
`;

export const AppCustomerTitle = ({props}: Params) => {
  return {
    template,
    styles,
    props
  };
};

const styles = ({props}: Params) => {
  return css`
  app-customer-title,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .title-ctx,
  .text-wrap-ctx {
    display: flex;
    width: 100%;
    text-align: center;
    color: ${props.color} !important;
  }
   .text-ctx {
    color: ${props.color} !important;
  }

  ${media.xxl(css`
    .text-ctx {
     padding: 0 0 2em 0;
     text-align: center;
    }
  `)}

  ${media.xl(css`
    .text-ctx {
     padding: 0 0 2em 0;
     text-align: center;
    }
  `)}

  ${media.lg(css`
    .text-ctx {
     padding: 0 0 2em 0;
     text-align: center;
    }
  `)}

  ${media.sm(css`
    .text-ctx {
     ppadding: 0 0 2em 0;
     text-align: center;
    }
  `)}

  ${media.xs(css`
    .text-ctx {
     ppadding: 0 0 2em 0;
     text-align: center;
    }
  `)}


`;
}
