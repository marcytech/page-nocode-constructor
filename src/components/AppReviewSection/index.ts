import { html, css } from "iares";
import { AppCustomerReview } from "@/components/AppCustomerReview";
import { AppCustomerTitle } from "@/components/AppCustomerTitle";
import { AppContainer } from "../AppContainer";

const template = () => html`
  <div class="wrap-ctx">
      <div class="wrap-header-ctx">
        <div class="header-ctx">
          <${AppCustomerTitle}
            title="Customers are loving it"
            text="With lost of unique blocks. you can easily build a page without coding. Build your next website within few minutes."
            color="#fff"
          />
        </div>      
      </div>
      <div class="wrap-content-ctx">
        <${AppCustomerReview}/>
      </div>        

  </div>
`;

export const AppReviewSection = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-review-section,
  .wrap-ctx,
  .wrap-header-ctx {
    display: flex;
    justify-content: center;
    width:100%;
    align-items: center;
    flex-wrap: wrap;
    background: #ebf5ff;
  }

  .header-ctx {
    width:500px;
    padding-top:4em;  
  }
`;
