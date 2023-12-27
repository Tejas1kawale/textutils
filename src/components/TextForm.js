import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLowClick=()=>{
      
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
      
        setText(event.target.value)
    }
    const handleClearClick=(event)=>{
        

        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg)
       
    }
    const [text,setText]=useState('');
    return (
    <>
        <div className="" style={{backgroundColor:props.mode==='dark'?props.backgroundColor:'white',color:props.mode==='light'?'black':'white',position:'fixed',margin:'0px',width:'100%',height:'100%',left:'0',right:'0'}}>
            <div className='container' >    
            
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea value={text} className="form-control" id="mybox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>clear Text</button>
            </div>
            <div className="container my-2">

                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} mins to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    </>    
  )
}
