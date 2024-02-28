import { FamButton, FamTextInput } from "fam-code-ui";
import { html, css, createState } from "iares";
import { AppCustomerTitle } from "@/components/AppCustomerTitle";
import { AppContainer } from "@/components/AppContainer";
import { AppDropdown } from "@/components/AppDropdown";


type Params = {
  state: State
}

type DataItem = {
  id: string;
  title: string;
}

type Companies = DataItem[];
type Budgets = DataItem[];

type State = {
  companies: Companies;
  budgets: Budgets;
}


const template = ({state}:Params) => html`
  <${AppContainer}> 
    <slot target="content" ctx="app-form-section">
      <div class="contact-ctx">
        <div class="wrap-header-ctx">
          <${AppCustomerTitle}
            title="Get a Demo"
            text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
          />
        </div>
        <div class="wrap-form-ctx">
          <div class="grid grid-cols-12">

            <div class="xxl-col-12 xl-col-12 lg-col-12 sm-col-12 xs-col-12">
              <${FamTextInput}  
                type="text"
                label="Your Name"
                handler=${() => console.log("ok")}
                value="Type your name"
                debounceTime="500"
              />  
            </div>

            <div class="xxl-col-12 xl-col-12 lg-col-12 sm-col-12 xs-col-12">
              <${FamTextInput}  
                type="text"
                label="Email Andress"
                handler=${() => console.log("ok")}
                value="Enter you email"
                debounceTime="500"
              />  
            </div>
            <div class="xxl-col-12 xl-col-12 lg-col-12 sm-col-12 xs-col-12">
                <${AppDropdown}
                  data=${state.companies}
                />              
            </div>
            <div class="xxl-col-12 xl-col-12 lg-col-12 sm-col-12 xs-col-12">
                <${AppDropdown}
                  data=${state.budgets}
                />
            </div>
            <div class="xxl-col-12 xl-col-12 lg-col-12 sm-col-12 xs-col-12">
              <${FamButton}>
                <slot target="content">
                  <span type="primary">
                    <i>Get a free demo</i>
                  </span>
                </slot>
              </>         
            </div>
          </div>
        </div>    
      </div>    
    </slot>
  </>    
`;



export const AppFormSection = () => {

  const store = createState<State>({
    companies: [
      {
        id:"1",
        title:"item 1"
      },
      {
        id:"2",
        title:"item 2"
      },
      {
        id:"3",
        title:"item 3"
      },
    ],
    budgets: [
      {
        id:"4",
        title:"item 4"
      },
      {
        id:"5",
        title:"item 5"
      },
      {
        id:"6",
        title:"item 6"
      },
    ],
  })

  return {
    template,
    styles,
    store
  };
};

const styles = () => css`
  app-form-section,
  .contact-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#1d273c;
    padding: 1em 0 3em 0;
  } 

  .wrap-form-ctx,
  .wrap-header-ctx {
    width:100%;
    max-width:480px;
    margin:0 auto;
  }
  
  .wrap-header-ctx {
    padding: 1em 0 4em 0;
  }


`;
