import { FamButton } from "fam-code-ui";
import { html, css, createState } from "iares";
import { AppListFooter } from "../AppListFooter";
import { AppContainer } from "../AppContainer";
import { AppNewsletter } from "../AppNewsletter";

type Menu = {
  label: string;
  link: string;
}

type State = {
  company: Menu[];
  product: Menu[];
  service: Menu[];
  newsletter: Menu[];
}

type Params = {
  state: State
}

const template = ({state}:Params) => html`
  <div class="wrap-ctx">
    <${AppContainer}>
      <slot target="content">
        <div class="grid grid-cols-12">
          <div class="
            xxl-col-7 
            xl-col-8 
            lg-col-12 
            sm-col-12 
            xs-col-12
          ">
            <div class=" grid grid-cols-12">
              <div class="
                xxl-col-4
                xl-col-4 
                lg-col-4 
                sm-col-4
                xs-col-6
              ">
                <${AppListFooter}
                  data=${state.company}
                  title="Company"
                />          
              </div>
              <div class="
                xxl-col-4
                xl-col-4 
                lg-col-4 
                sm-col-4
                xs-col-6
                ">
                <${AppListFooter}
                data=${state.product}
                title="Product"
                />          
              </div>
              <div class="
                xxl-col-4
                xl-col-4 
                lg-col-4 
                sm-col-4 
                xs-col-6
              ">
                <${AppListFooter}
                  data=${state.service}
                  title="Service"
                />          
              </div>
            </div>
          </div>
          <div class="
            xxl-col-5 
            xl-col-4 
            lg-col-12 
            sm-col-12 
            xs-col-12
          ">
            <${AppListFooter}
              data=${state.newsletter}
              title="Newsletter"
            />
            <${AppNewsletter}/>           
          </div>
        </div>      
      </slot>    
    </>
  </div>
`;

export const AppFooter = () => {
  const store = createState<State>({
    company:[
      {
        label:"About us",
        link: "/about-us"
      },
      {
        label:"Contact us",
        link: "/contact-us"
      },
      {
        label:"Careers",
        link: "/careers"
      },
      {
        label:"Press",
        link: "/press"
      }

    ],
    product:[
      {
        label:"Features",
        link: "/features"
      },
      {
        label:"Pricing",
        link: "/pricing"
      },
      {
        label:"News",
        link: "/news"
      },
      {
        label:"Help desk",
        link: "/help-desk"
      },
      {
        label:"Support",
        link: "/support"
      }

    ],
    service:[
      {
        label:"Digital Marketing",
        link: "/digital-marketing"
      },
      {
        label:"Content Writing",
        link: "/content-writing"
      },
      {
        label:"SEO for Busines",
        link: "/seo-for-business"
      },
      {
        label:"UI Design",
        link: "/ui-design"
      },
    ],
    newsletter:[]
  })
  return {
    template,
    styles,
    store
  };
};

const styles = () => css`
  app-footer,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background:#fff;
    padding:2em 0;
  }
`;
