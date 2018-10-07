import React, {Component} from 'react'
import Input from '../Input/Input.js'
import Select from '../Select/Select.js'
import Button from '../Button/Button.js';
import FileUploader from '../FileUploader/FileUploader.js'
import './Forms.css'

class ApplicationForm extends Component{
  constructor(props){
    super(props);
    this.state={
      applicant: {
        id:'',
        name:'',
        surname:'',
        job:{
          jobTitle:'' , 
          jobID:''
        },
        dateOfBirth:'',
        email:'',
        sex:'',
        address:{
          address:'', 
          houseNo:'', 
          zipCode:''},
        attachment:''
    },
    sexOptions:[ 'female', 'male', 'other'],
    fileTypes: ".doc, .docx, .pdf",
    uploadTypes:['PC', 'Dropbox']
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let applicantData = this.state.applicant;
    
    // sending data to the server and routing to the result page on success
    console.log(JSON.stringify(applicantData))
  }

  handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(previusState => ({
      applicant: {...previusState.applicant, [name]: value}
    }));
  }
  handleBlur(e){
    const target = e.target;
    //const value = target.type === 'select' ? target.value : target.value;
    const value = target.value;
    if (value === undefined || value === null || value ==='') console.log("this is a required field");
  }

  render(){
    return(
    <form className="container" onSubmit={this.handleSubmit}>
    <h3>Personal details *</h3>
      {/* Applicant Name */}
      <Input type={'text'}
                name= {'name'}
                value={this.state.applicant.name || ''} 
                placeholder = {'Enter your first name'}
                handleChange = {this.handleChange}
                handleBlur = {this.handleBlur}
                /> 

      {/* Applicant Family Name */}
      <Input type={'text'}
                name= {'surname'}
                value={this.state.applicant.surname || ''} 
                placeholder = {'Enter your family name'}
                handleChange = {this.handleChange}
                handleBlur = {this.handleBlur}
                /> 
      <Input type={'email'}
                name= {'email'}
                value={this.state.applicant.email || ''} 
                placeholder = {'Enter your email'}
                handleChange = {this.handleChange}
                handleBlur = {this.handleBlur}
                />
      <Input type={'date'}
                name= {'dateOfBirth'}
                value={this.state.applicant.dateOfBirth || ''} 
                placeholder = {'Date of Birth'}
                handleChange = {this.handleChange}
                handleBlur = {this.handleBlur}
                />
      <Select
        name={'sex'}
        type={'select'}
        options = {this.state.sexOptions} 
        value = {this.state.applicant.sex}
        placeholder = {'Select Sex'}
        handleChange = {this.handleChange}
        handleBlur = {this.handleBlur}
      />
      <h3>Attach your documents <span style={{fontSize:' 0.8rem'}}>(pdf, doc(x), jpg max. 4Mb)</span></h3>
      <FileUploader
        label={'Resume*'} 
        name= {'attachment'}
        value={this.state.applicant.attachment || ''}
        handleChange = {this.state.handleChange}
        accept ={this.state.fileTypes}
        uploadTypes={this.state.uploadTypes}
      />
      
      <br />
      <a href="job.html"> &#60; back to job description </a>
      <Button
      title={"Apply For This Job"}
      onClick={this.onSubmit}
      />
  </form>
  )
}
}
export default ApplicationForm