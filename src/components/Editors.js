import React  from 'react'
// import {EditorState} from "@codemirror/state"
// import {EditorView, keymap} from "@codemirror/view"
// import {defaultKeymap} from "@codemirror/commands"


const Editors = () => {

  //  React.useEffect=(()=>{
  //       async function init(){
  //           EditorView.fromTextArea(document.getElementById('realtimeEditor'),{
  //           mode:{name:'javascript',json:true}

  //       })};

  //       init();
  //   },[]);

  return (
    <textarea id='realtimeEditor'></textarea>

  )
}

export default Editors