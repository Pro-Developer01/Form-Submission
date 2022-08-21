import { useFormik } from 'formik'
import React, { useState } from 'react'
// import { date } from 'yup/lib/locale'
import "./Forms.css"

export default function Forms() {
    const [records, setRecords] = useState([])
    const formik = useFormik({
        initialValues: {
            name: "",
            DOB: "",
            sex: "",
            mobile: "",
            GovtID: "",
        },
        onSubmit: values => {
            const newrecord = { ...values, Id: new Date().getTime().toString() }
            setRecords([...records, newrecord]);
        }
    })
    return (
        records &&
        <div className="containerForms">
            <div className="formFeilds">
                
            <form onSubmit={formik.handleSubmit}>
                <div className="row" id="Personal Details" >
                    <h3><u>Personal Details</u></h3>
                    <div className='InputFeilds' >
                    
                    
                    <div >

                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Name' name='name' id='name' value={formik.values.name} onChange={formik.handleChange} />
                    </div>
                    
                    <div >

                    <label htmlFor="DOB">Date Of Birth or Age</label>
                    <input type="text" placeholder='DD/MM/YYYY 0r Age In Years' name='DOB' value={formik.values.DOB} onChange={formik.handleChange} />
                    </div>
                    
                    <div >

                    <label htmlFor="sex">Sex</label>
                    <select name="sex" className='Sex' id="sex"placeholder='Enter Sex' value={formik.values.sex} onChange={formik.handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    </div>
                    
                    <div >

                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" placeholder='Enter Mobile' name='mobile' id='mobile' value={formik.values.mobile} onChange={formik.handleChange} />
                    </div>

                    
                    <div >

                    <label htmlFor="GovtId">Govt Issued ID</label>
                    <select name="IDtype" id="IDType" placeholder='ID Type' value={formik.values.IDtype} onChange={formik.handleChange}>
                        <option value="Aadhar">Aadhar</option>
                        <option value="PAN">PAN</option>
                        <option value="Driving Licence">Driving Licence</option>
                    </select>

                    <input type="number" placeholder='Enter Govt ID' name='GovtID' value={formik.values.GovtID} onChange={formik.handleChange} />
                    </div>
                    </div>
                </div>
               
                <div className="row1">
                    <button type='submit'>Submit</button>
                </div>

            </form>
            </div>
            <div className="tableFeilds">
                <table >
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Dob</th>
                            <th>sex</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            records.map((item) => {
                                return (
                                    <tr key={item.Id}>
                                        <td>{item.Id}</td>
                                        <td>{item.DOB}</td>
                                        <td>{item.sex}</td>
                                        <td>{item.mobile}</td>
                                    </tr>
                                )
                            })}
                    </tbody>

                </table>

            </div>

        </div>

    )
}
