import{ default  as Jodit  } from "jodit-react"
import { useRef } from "react"

export default function JoditEditor() {
    const editor = useRef(null)

  return (
    <>
    
    
    
    <div>JoditEditor</div>
    {/*  @ts-ignore */}
    <Jodit  config={{
        iframe:true,
        toolbar:true,
    statusbar:false
      
    }}

    ref={editor}
  
/>
    </>
  )
}
