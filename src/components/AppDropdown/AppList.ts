import { FamButton } from "fam-code-ui";
import { html, css } from "iares";
import { AppListItem } from "@/components/AppDropdown/AppListItem";
import { AppDropdown } from './index';

type ListItem = {
  id: string;
  title: string;
}

type Props ={
  data: ListItem[];
  isVisible: boolean;
}

type Params ={
  props: Props
}

const ListItems = ({props}: Params) => {

  if(!props.isVisible) return html``

    return html`
    <ul class="list-ctx">
      ${props.data.map(item => html`<${AppListItem} data=${item}/>`)}
    </ul> 
  `

}

const template = ({props}: Params) => html`
  <div class="wrap-ctx">
    <${ListItems} data=${props.data} isVisible=${props.isVisible}/>
  </div>
`;

export const AppList = ({props}: Params) => {
  return {
    template,
    styles,
    props
  };
};

const styles = () => css`
  app-list,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
  }

  .wrap-ctx {
    background: #fff;
    overflow:hidden;
    border-radius: 8px;
  }


  .wrap-ctx > list-items,
  .wrap-ctx > list-items > ul{
    display: flex;
    width:100%;
  }
  .wrap-ctx > list-items > ul{ 
    flex-wrap: wrap;
    padding:1em;
  }
  .wrap-ctx > list-items  app-list-item:last-of-type > li {
    padding-bottom:0 !important;
  } 
 
  .list-ctx > list-item, 
  .list-ctx > list-item > div {
    display: flex;
    width:100%;
  }
`;
