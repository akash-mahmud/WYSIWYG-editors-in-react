// @ts-ignore
import {Editor } from 'ckeditor5-custom-build'
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function CkEditor() {
  return (
    <div>
         <CKEditor config={
  {
    htmlEmbed: {
      showPreviews: true,
      sanitizeHtml: ( inputHtml ) => {
          // Strip unsafe elements and attributes, e.g.:
          // the `<script>` elements and `on*` attributes.
          //? we will integrate sanityfy here later
          // const outputHtml = sanitize( inputHtml , {
          //   allowedAttributes: {
          //     iframe: [
          //       {
          //         name: 'sandbox',
          //         multiple: true,
          //         values: ['allow-popups', 'allow-same-origin', 'allow-scripts']
          //       }
          //     ]
          //   },
          //   allowedIframeHostnames: ['www.youtube.com']

          // });

          return {
              html: inputHtml,
              // true or false depending on whether the sanitizer stripped anything.
              hasChanged: true
          };
      }
  }
  }
 }
                    editor={ Editor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        // @ts-ignore

                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( _event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( _event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
    </div>
  )
}
