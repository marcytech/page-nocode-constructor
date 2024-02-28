import { html, css } from "iares";

type ListItem = {
  id: string;
  title: string;
}

type Props ={
  data: ListItem;
}

type Params ={
  props: Props
}

const template = ({props}: Params) => html`
  <li class="list-item-ctx">
    ${props.data.title}
  </li>
`;

export const AppListItem = ({props}: Params) => {
  return {
    template,
    styles,
    props
  };
};

const styles = () => css`
  app-list-item {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
  }
  .list-item-ctx {
    display: flex;
    width:100%;
    padding-bottom: 1em;
  }
`;
