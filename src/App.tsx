import './App.css'

import CkEditor from './components/CkEditor';
import EditorJsEditor from './components/EditorJsEditor';
import JoditEditor from './components/JoditEditor';
import Tiny from './components/Tiny';


function App() {

  return (
    <>

 <main>
  Ck Editor
<CkEditor/>
Editor js block editor
<EditorJsEditor/>
<JoditEditor/>

      <Tiny/>
 </main>
    </>
  )
}

export default App



