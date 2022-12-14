import { useFormik } from 'formik'
import React, { useState } from 'react'
// import { date } from 'yup/lib/locale'
import "./Forms.css"
 
export default function Forms() {
    const [records, setRecords] = useState([])
    const [flag, setFlag] = useState(false)
    const [SearchText, setSearchText] = useState("")
    const formik = useFormik({
        initialValues: {
            name: "",
            DOB: "",
            sex: "",
            mobile: "",
            GovtID: "",
        },
        validate: values=>{
            let error={};

            if(!values.name)
            {
                error.name="Required"
            }
            if(!values.DOB)
            {
                error.DOB="Required"
            }
            if(!values.sex)
            {
                error.sex="Required"
            }
            return error;
        },
        onSubmit: values => {
            const newrecord = { ...values, Id: new Date().getTime().toString() }
            setRecords([...records, newrecord]);
        }
    })
    const clickHandlerSubmit=()=>{

        console.log(records);
        setFlag(true);
    }
    const clickHandlerCancel=()=>{

        setFlag(false);
    }
    const Searchhandler=(e)=>{
        setSearchText(e.target.value);
        console.log(SearchText);
        console.log(records);
    }

    const Searched = records.filter((item) => {
        return ((item.name.toLowerCase()).includes(SearchText.toLowerCase()));
      })
    
    return (
        records &&
        <div className="containerForms">

           
            <div className="formFeilds">

                <form onSubmit={formik.handleSubmit}>
                    <div className="row" id="PersonalDetails" >
                        <h3><u>Personal Details</u></h3>
                        <div className='InputFeilds' >


                            <div >

                                <label htmlFor="name" style={{display: "flex"}}>Name <span style={{color:"red"}}>*</span></label>
                                <input type="text" placeholder='Enter Name' name='name' id='name' value={formik.values.name} onChange={formik.handleChange} />
                                <span id='errror'>{formik.errors.name?formik.errors.name:null}</span>
                            </div>

                            <div >

                                <label htmlFor="DOB" style={{display: "flex", }}>Date Of Birth or Age <span style={{color:"red",marginTop: "21px"}}>*</span></label>
                                <input type="text" placeholder='DD/MM/YYYY 0r Age In Years' name='DOB' value={formik.values.DOB} onChange={formik.handleChange} />
                                <span id='errror'>{formik.errors.DOB?formik.errors.DOB:null}</span>
                            </div>

                            <div >

                                <label htmlFor="sex" style={{display: "flex"}}>Sex <span style={{color:"red"}}>*</span></label>
                                <select name="sex" className='Sex' id="sex" placeholder='Enter Sex' value={formik.values.sex} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                <span id='errror'>{formik.errors.sex?formik.errors.sex:null}</span>
                            </div>

                            <div >

                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" placeholder='Enter Mobile' name='mobile' id='mobile' value={formik.values.mobile} onChange={formik.handleChange} />
                            </div>


                            <div >

                                <label htmlFor="GovtId">Govt Issued ID</label>
                                <select name="IDtype" id="IDType" placeholder='ID Type' value={formik.values.IDtype} onChange={formik.handleChange}>
                                    <option value="" disabled selected>ID Type</option>
                                    <option value="Aadhar">Aadhar</option>
                                    <option value="PAN">PAN</option>
                                    <option value="Driving Licence">Driving Licence</option>
                                </select>

                                <input type="number" placeholder='Enter Govt ID' name='GovtID' value={formik.values.GovtID} onChange={formik.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row" id="ContactDetails" >
                        <h3><u>Contact Details</u></h3>
                        <div className='InputFeilds' >


                            <div >

                                <label htmlFor="Guardian">Guardian Details</label>
                                <select name="GuardianLabel" id="GuardianLabel" placeholder='Enter Label' value={formik.values.GuardianLabel} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter Label</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Uncle">Uncle</option>
                                </select>
                                <input type="text" placeholder='Enter Guardian Name' name='Guardian' id='Guardian' value={formik.values.Guardian} onChange={formik.handleChange} />
                            </div>

                            <div >

                                <label htmlFor="Email">Email</label>
                                <input type="email" placeholder='Enter Email' name='Email' id="Email" value={formik.values.Email} onChange={formik.handleChange} />
                            </div>

                            <div >

                                <label htmlFor="EmergencyMobile">Emergency Contact Number</label>
                                <input type="number" placeholder='Enter Emergency Mobile' name='EmergencyMobile' id='EmergencyMobile' value={formik.values.EmergencyMobile} onChange={formik.handleChange} />
                            </div>

                        </div>
                    </div>
                    <div className="row" id="AddressDetails" >
                        <h3><u>Address Details</u></h3>
                        <div className='InputFeilds' >
                            <div >
                                <label htmlFor="Address">Address</label>
                                <input type="text" placeholder='Enter Address' name='Address' id='Address' value={formik.values.Address} onChange={formik.handleChange} />
                            </div>

                            <div >

                                <label htmlFor="State">State</label>
                                <select name="State" className='State' id="State" placeholder='Enter State' value={formik.values.State} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter State</option>
                                    <option value="UP">UP</option>
                                    <option value="MP">MP</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>
                            <div >

                                <label htmlFor="City">City</label>
                                <select name="City" className='City' id="City" placeholder='Enter City' value={formik.values.City} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter City</option>
                                    <option value="Allahabad">allahabad</option>
                                    <option value="Lucknow">Lucknow</option>
                                    <option value="Pune">Pune</option>
                                </select>
                            </div>
                            <div >

                                <label htmlFor="Country">Country</label>
                                <select name="Country" className='Country' id="Country" placeholder='Enter Country' value={formik.values.Country} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter Country</option>
                                    <option value="India">India</option>
                                    <option value="China">China</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>

                            <div >

                                <label htmlFor="Pincode">Pincode</label>
                                <input type="number" placeholder='Enter Pincode' name='Pincode' id='Pincode' value={formik.values.Pincode} onChange={formik.handleChange} />
                            </div>

                        </div>
                    </div>
                    <div className="row" id="OtherDetails" >
                        <h3><u>Other Details</u></h3>
                        <div className='InputFeilds' >
                            <div >
                                <label htmlFor="Occupation">Occupation</label>
                                <input type="text" placeholder='Enter Occupation' name='Occupation' id='Occupation' value={formik.values.Occupation} onChange={formik.handleChange} />
                            </div>

                            <div >

                                <label htmlFor="Religion">Religion</label>
                                <select name="Religion" className='Religion' id="Religion" placeholder='Enter Religion' value={formik.values.Religion} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter Religion</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                    <option value="Sikh">Sikh</option>
                                </select>
                            </div>
                            <div >

                                <label htmlFor="MaritalStatus">Marital Status</label>
                                <select name="MaritalStatus" className='MaritalStatus' id="MaritalStatus" placeholder='Enter MaritalStatus' value={formik.values.MaritalStatus} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter MaritalStatus</option>
                                    <option value="Married">Married</option>
                                    <option value="Single">Single</option>
                                    <option value="Complicated">Complicated</option>
                                </select>
                            </div>
                            <div >

                                <label htmlFor="BloodGroup">Blood Group</label>
                                <select name="BloodGroup" className='BloodGroup' id="BloodGroup" placeholder='Enter BloodGroup' value={formik.values.BloodGroup} onChange={formik.handleChange}>
                                    <option value="" disabled selected>Enter BloodGroup</option>
                                    <option value="A+">A+</option>
                                    <option value="Ab+">AB+</option>
                                    {/* <option value="USA">USA</option> */}
                                </select>
                            </div>

                            <div >

                                <label htmlFor="Nationality">Nationality</label>
                                <input type="text" placeholder='Enter Nationality' name='Nationality' id='Nationality' value={formik.values.Nationality} onChange={formik.handleChange} />
                            </div>

                        </div>
                    </div>

                    <div className="ButtonsDiv">
                        <button id="CancelBtn" onClick={clickHandlerCancel}> <span>CANCEL</span> <span style={{ fontSize: "10px" }}> <br /> <u>(ESC)</u></span> </button>
                        <button type='submit' id="SubmitBtn" onClick={clickHandlerSubmit}><span>SUBMIT</span> <span style={{ fontSize: "10px" }}> <br /> <u>(<img style={{
                            height: "16px",
                            margin: "-4px 0px",
                        }} src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFFFF/external-cmd-essential-ui-v2-creatype-outline-colourcreatype.png" alt='icon not found'/>S)</u></span></button>
                    </div>

                </form>
                <hr style={{
                    margin: " 50px 0"
                }} />
            </div>
            {flag &&
            <div className="tableFeilds">

<div className="searchContainer">
                <input type="text" placeholder='Search By Name' value={SearchText} onChange={Searchhandler} />
              
            </div>

                <table >
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Sex</th>
                            <th>Mobile</th>
                            <th>Govt ID Type</th>
                            <th>Govt ID</th>
                            <th>Guardian</th>
                            <th>Email</th>
                            <th>Emergency</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Pincode</th>
                            <th>Occupation</th>
                            <th>Religion</th>
                            <th>Marital Status</th>
                            <th>Blood Group</th>
                            <th>Nationality</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Searched.map((item) => {
                                return (
                                    <tr key={item.Id} className="dataCellRow">
                                        <td>{item.Id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.DOB}</td>
                                        <td>{item.sex}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.IDtype}</td>
                                        <td>{item.GovtID}</td>
                                        <td>{item.Guardian}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Emergency}</td>
                                        <td>{item.Address}</td>
                                        <td>{item.State}</td>
                                        <td>{item.City}</td>
                                        <td>{item.Country}</td>
                                        <td>{item.Pincode}</td>
                                        <td>{item.Occupation}</td>
                                        <td>{item.Religion}</td>
                                        <td>{item.MaritalStatus}</td>
                                        <td>{item.BloodGroup}</td>
                                        <td>{item.Nationality}</td>

                                    </tr>
                                )
                            })}
                    </tbody>

                </table>

            </div>
            }

        </div>

    )
}
