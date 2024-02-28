import {FamImage, FamTitle } from "fam-code-ui";
import { html, css } from "iares";
import { AppText } from "@/components/AppText";
import { mediaQueries } from "@/services/mediaQueries";

type Props = {
  image?: string;
  imageWidth?: 'full'| string;
  title?: string;
  text?: string;
  position?: 'center'|'left'|'right'|'top'|'bottom'; 
  textAlign?: 'center'|'left'|'right'; 
}

type Params = {
  props: Props;
}

const media = mediaQueries();

const Content = ({props}: Params ) => {

  if(props.image) return html`
    <div 
      class="wrap" 
      position=${props.position || "top"}
      text-align=${props.textAlign || "center"}    
    >
      <div class="image-wrap">
        <${FamImage} 
          src="${props.image}" 
          fallbackSrc="/assets/images/404.png"
          alt="${props.title}" 
          class="${props?.imageWidth === "full" ? "full-width" : ""}"
        />      
      </div>
      <div class="text-wrap">
        <div class="title">
          <${FamTitle}>
            <h3>${props.title}</h3>
          </>      
        </div>
        <div class="text">
          <${AppText}>
            <p>${props.text}</p>
          </>
        </div>   
      </div>    
    </div>
  `
   
  return html`
  <div 
    class="wrap" 
    position=${props.position || "top"}
    text-align=${props.textAlign || "center"}
  >
    <div class="text-wrap">
      <div class="title">
        <${FamTitle}>
          <h3>${props.title}</h3>
        </>      
      </div>
      <div class="text">
        <${AppText}>
          <p>${props.text}</p>
        </>
      </div>  
    </div>   
  </div>
  `
}

const template = ({ props }: Params) => html`
  <div class="card-ctx">
    <${Content} 
      title=${props?.title}
      text=${props?.text}
      image=${props?.image}
      position=${props?.position}
      textAlign=${props?.textAlign}
      imageWidth=${props?.imageWidth}
    />
  </div>
`;

export const AppCard = (props: Props) => {
  return {
    template,
    styles,
    props
  };
};

const styles = ({props}: Params) => css`
  app-card,
  .card-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
  }

  .image-wrap,
  .title, 
  .text {
    display: flex;
    width:100%;
    justify-content:center;
    align-items: center;
    padding:0;
  }
  .image-wrap {
    padding:1.5em 0;
    align-items: flex-start;
  }
  .image-wrap > .full-width div {
    width:100%;
  }

  .card-ctx .title {
    text-align: left;
    font-size: 1.6em;
    padding:1em;
  }

  .card-ctx .text {
    text-align:left;
    font-size: 0.875em;
    padding:0 2em;
  }

  content {
    display: flex;
    width: 100%;
  }

  .wrap {
    display: grid;
    width: 100%;
    padding:1em;
  }

  .wrap[position="top"] {
    grid-template-areas: "image" "text";
  }

  .wrap[position="left"] {
    grid-template-areas: "image text";
  }

  .wrap[position="right"] {
    grid-template-areas: "text image";
  }

  .wrap[position="bottom"] {
    grid-template-areas: "text" "image";
  }

  .wrap[text-align="center"] fam-image {
    justify-content:center;
  }
  .wrap[text-align="center"] fam-title {
    justify-content:center;
    text-align:center;
  }
  .wrap[text-align="center"] app-text > p {
    justify-content:center;
    text-align: center;
  }
  
  .wrap[text-align="left"] fam-image {
    justify-content:left;
  }
  .wrap[text-align="left"] fam-title {
    justify-content:left;
    text-align:left;
    line-height:1.2em;
  }
  .wrap[text-align="left"] app-text > p {
    justify-content:left;
    text-align: left;
  }

  .wrap[text-align="right"] fam-image {
    justify-content:right;
  }
  .wrap[text-align="right"] fam-title {
    justify-content:right;
    text-align:right;
  }
  .wrap[text-align="right"] app-text > p {
    justify-content:right;
    text-align: right;
  }
  
  .wrap > .image {
    grid-area: image;
  }

  .wrap > .text-wrap {
    grid-area: text;
  }
  
`;
