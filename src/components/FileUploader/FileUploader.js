import React from 'react'
import './FileUploader.css'

function FileUploader(props){
  return(
<div className={'uploader-wrapper'}>
  <span>{props.label}</span>
  {props.uploadTypes.map((type) => (
  <label key={type}>{type}
    <input 
    type={'file'}
    name= {props.name}
    value={props.attachment} 
    onChange = {props.onChange}
    accept ={props.fileTypes}
  />
  </label>
  )
  )}
</div>)
}
export default FileUploader