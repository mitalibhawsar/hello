import React from 'react'

function Alert(props) {

    const capital = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capital(props.alert.type)}</strong>  {props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default Alert
