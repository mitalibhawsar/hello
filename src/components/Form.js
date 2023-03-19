// import React from 'react'
import React, {useState} from 'react'

export default function Form(props)
{
  const ToUpperCase = () =>{
    console.log('convert Into to uppercase' + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Upper Case", "Success");
  }

    const ToLoweCase = () =>{
      console.log('convert Into to lowercase' + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Lower Case", "Success");
    }


    const ToClear = () =>{
      let newText = text.slice(text.length);
      setText(newText)
      props.showAlert("text has been cleared", "Success");
    }

    const ToCopy = () => {
      let hello = document.getElementById('exampleFormControlTextarea1');
      hello.select();
      navigator.clipboard.writeText(hello.value);
      props.showAlert("copied text", "Success");
    }

    const trim = () => {
      let TEXT = text.split(/[ ]+/);
      setText(TEXT.join(" "));
      props.showAlert("removed extra spaces", "Success");
    }

    const Capital = () =>{
      console.log('convert Into to uppercase' + text)
      let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      setText(newText)
      props.showAlert("removed extra spaces", "Success");
    }

    const Capitalletter = () =>{
      console.log('convert Into to uppercase' + text)
      let newText = document.getElementById('exampleFormControlTextarea1');
      newText.style.textTransform = "capitalize";
      props.showAlert("Upper Case", "Success");
    }

    const Bold = () =>{
      let bold1 = document.getElementById("exampleFormControlTextarea1");
      bold1.style.fontWeight = "bold";
      props.showAlert("text has been bold", "Success");
      // if(bold1.style.fontWeight === "bold")
      // {
      //   setText('normal');
      // }
      // else
      // {
      //   setText('bold');
      // }


    }

    const Italic = () =>{
      let italic = document.getElementById("exampleFormControlTextarea1");
      italic.style.fontFamily = "italics";
      props.showAlert("text has been italic", "Success");
    }

    // textDecoration: 'line-through

    const Underlines = () =>{
      let underline1 = document.getElementById("exampleFormControlTextarea1");
      underline1.style.textDecorationLine = "underline";
      props.showAlert("Applied Underline", "Success");
    }

  const OnChange = (event) =>{
    console.log('OnChange')
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter your text here');
  // const[weight, setStyle] = useState({
  //   fontWeight:"normal"
  // });
  // const Bold = () =>{
  //   if(weight.fontWeight === "normal")
  //     setStyle({fontWeight: "bold"});
  //   else if(weight.fontWeight === "bold")
  //     setStyle({fontWeight: "normal"});
  // };


    return(
      <>
      <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" 
        style={{backgroundColor: props.mode === 'dark'?'grey':'white',
        color: props.mode === 'dark'?'white':'black'}} value={text} onChange={OnChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-2" onClick={ToUpperCase}>UpperCase</button>
        <button type="submit" className="btn btn-primary" onClick={ToLoweCase}>LowerCase</button>
        <button type="submit" className="btn btn-primary m-2" onClick={ToClear}>Clear Text</button>
        <button type="submit" className="btn btn-primary m-2" onClick={ToCopy}>Copy Text</button>
        <button type="submit" className="btn btn-primary m-2" onClick={trim}>Remove Space</button>
        <button type="submit" className="btn btn-primary m-2" onClick={Capital}>Convert to CapitalLetter</button>
        <button type="submit" className="btn btn-primary m-2" onClick={Bold}>Bold</button>
        <button type="submit" className="btn btn-primary m-2" onClick={Italic}>italic</button>
        <button type="submit" className="btn btn-primary m-2" onClick={Underlines}>Underline</button>
        <button type="submit" className="btn btn-primary m-2" onClick={Capitalletter}>capital</button>
      </div>
      <div className='container my-3' style={{color: props.mode ==='dark'?'white':'black'}}>
        <h3>character</h3>
        <p>{text.length}</p>
        <h3>Words</h3>
        <p>{text.split(" ").length}</p>
        <p>{text.split(" ").length*0.008}</p>
        <h1>Preview</h1>
        <p>{text}</p>
      <h1>word counter</h1>
        <p>{text === '' ? 0 : text.split(' ').length}</p>
      </div>
      </>

    )
}