import { FamButton } from "fam-code-ui";
import { html, css, createState } from "iares";
import { AppContainer } from "@/components/AppContainer";
import { AppBox } from "@/components/AppBox";

type Review = {
  title: string;
  subTitle: string;
  text:string;
  image: string
} 

type Reviews = {
  reviews: Review[]
}

type Params = {
  state: Reviews
}

export const AppCustomerReview = () => {

const store = createState<Reviews>({
  reviews:[
    {
      title: "Leandro Ribeiro Rocha",
      subTitle: "Project Manager",
      text:"''Lorem ipsum dolor conse umquam odio,lorem  consequuntur nobis ea dolore dignissimos numquam animi.''",
      image: "/assets/images/depoiment1.png"   
    },   
    {
      title: "Pedro Alves Silva",
      subTitle: "Professor",
      text:"''Lorem ipsum voluptate dignissimos numquam,conse umquam animi odio, lorem algum ipisum id ab eius.''",
      image: "/assets/images/depoiment2.png"   
    },   
    {
      title: "Marciely Ribeiro Santos",
      subTitle: "Programer",
      text:"''Lorem ipsum dolor sit adipisicing consequuntur nobis dignissimos numquam animi odio, id ab eius.''",
      image: "/assets/images/depoiment3.png"   
    },   
  ]
})

  return {
    template,
    styles,
    store
  };
};

const template = ({state}: Params) => html`
  <div class="wrap-ctx">
    <${AppContainer}>
      <slot>
        <div class="grid grid-cols-12">
          ${state.reviews.map((review) => html`
            <div class="
              xxl-col-4
              xl-col-4
              lg-col-4
              sm-col-12
              xs-col-12
              ">
              <${AppBox}
                image=${review.image}
                title=${review.title}
                subTitle=${review.subTitle}
                text=${review.text}
              />
            </div>        
          `)}
        </div>      
      </slot>    
    </>  
  </div>
`;

const styles = () => css`
  app-customer-review,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
  }
  .wrap-ctx {
    padding:4em 0
  }
`;
