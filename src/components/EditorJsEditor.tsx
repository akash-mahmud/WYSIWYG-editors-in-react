// @ts-nocheck
// import {Editor} from 'ckeditor5-custom-build/build/ckeditor';
import * as sanitize from 'sanitize-html';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import EditorJS from "@editorjs/editorjs";
export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: {
    class: Embed,
    inlineToolbar: true

  },
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}
import { createReactEditorJS } from 'react-editor-js'
import { useEffect, useRef } from 'react'


export default function EditorJsEditor() {
    const ejInstance = useRef();

    const initEditor = () => {
       const editor = new EditorJS({
          holder: 'editorjs',
          onReady: () => {
            ejInstance.current = editor;
          },
          autofocus: true,
          data: '',
          onChange: async () => {
            let content = await editor.saver.save();
  
            console.log(content);
          },
          tools: EDITOR_JS_TOOLS
        });
      };
  
      // This will run only once
  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }
  
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);
  return (

<div id='editorjs'></div>

    )
}
