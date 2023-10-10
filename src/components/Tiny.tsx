import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Tiny() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
        // @ts-ignore
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
    TinyMce Editor
      <Editor 
       // @ts-ignore
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
            branding:false,
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount','visualblocks','pagebreak', 'paste','print','iframeEmbed',



          ],
          toolbar:` 'undo redo | blocks | insertfile' 
            'bold italic forecolor | alignleft aligncenter ' 
            'alignright alignjustify | bullist numlist outdent indent | ' 
            'removeformat | help' | image | table | paste pastetext iframeEmbed | advlist | autolink | lists | link  | charmap | preview |
            anchor | searchreplace | visualblocks | code | fullscreen | pagebreak  |
            insertdatetime | media |   file | help | wordcount`,
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

        
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}