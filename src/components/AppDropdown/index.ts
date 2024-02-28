import { FamButton, FamIcon, FamTextInput } from "fam-code-ui";
import { html, css, createState } from "iares";
import { AppList } from "@/components/AppDropdown/AppList";

type ListItem = {
  id: string;
  title: string;
}

type Props ={
  data: ListItem;
}

type Params ={
  props: Props;
  state: State;
  actions: Actions;
}

type Actions = {
  toggleList: Function
}

type State = {
  isVisible: boolean;
}



const template = ({props, state, actions}: Params) => html`
  <div class="wrap-ctx">
    <div class="input-ctx">
      <${FamTextInput}  
        type="text"
        label="Company Size"
        handler=${() => console.log("ok")}
        value="Select an option"
        debounceTime="500"
      />     
    </div>
    <div class="icon-ctx" onClick=${actions.toggleList}>
      <${FamIcon}
        name="arrow_drop_down"
        size="2"
      />              
    </div>
    <div class="list-ctx">
      <${AppList} data=${props.data} isVisible=${state.isVisible}/>
    </div>
  </div>
`;

export const AppDropdown = ({props}: Params) => {
  
  const store = createState<State>({isVisible: false })
  
  const toggleList = () => {
    store.setState({
      isVisible: !store.state.isVisible
    })
  }

  const afterRender = (element: HTMLElement) => {
    element.onmouseleave = ({target}) => {
      if(!store.state.isVisible) return    
      toggleList()
    }
  }

  const hooks = {
    afterRender
  }

  const actions = {toggleList}

  return {
    template,
    styles,
    props,
    store,
    actions,
    hooks
  };
};

const styles = () => css`
  app-dropdown,
  .wrap-ctx,
  .input-ctx {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width:100%;
  }
  .wrap-ctx {
    position: relative;
    flex-direction:column;
  }
  .icon-ctx {
    position:absolute;
    top:12px;
    right:calc(1em - 3px);
    cursor: pointer;
  }
  .list-ctx {
    display:flex;
    width:100%;
  }



`;
