  import { FamButton } from "fam-code-ui";
  import { html, css } from "iares";

type DataList = {
  label: string;
  link: string;
}

type Props ={
  data: DataList[];
  title: string;
}

type Params ={
  props: Props;
}

const template = ({props}: Params) => html`
  <div class="wrap-ctx">
    <div class="title-ctx">
      <h3>${props.title}</h3>
    </div>
    <ul class="list-ctx">
      ${
        props.data.map(item => html`
          <li>
            <a href=${item.link}>${item.label}</a>
          </li>          
        `)
      }
    </ul>
  </div>
`;

  export const AppListFooter = ({props}: Params) => {
    return {
      template,
      styles,
      props
    };
  };

  const styles = () => css`
    app-list-footer,
    .wrap-ctx {
      display: flex;
      width: 100%;
      flex-wrap:wrap;
    }
    .title-ctx {
      display:flex;
      width:100%;
      color: #8891a3;
      padding:1em;
    }
    .list-ctx  {
      display: flex;
      width: 100%;
      flex-direction: column;
      font-weight: bold;
      color:#4a5773;
    }
    .list-ctx li,
    .list-ctx a {
      display: flex;
      width: 100%;

    }
    .list-ctx a {
      padding:1em;
    }

  `;
