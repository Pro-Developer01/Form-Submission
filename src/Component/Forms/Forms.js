import { useFormik } from 'formik'
import React, { useState } from 'react'
// import { date } from 'yup/lib/locale'

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
    console.log(records);
    return (
        records &&
        <div className="FormFields">
            <form onSubmit={formik.handleSubmit}>
                <div className="row1">
                    <input type="text" placeholder='Enter Name' name='name' value={formik.values.name} onChange={formik.handleChange} />
                </div>
                <div className="row1">
                    <input type="text" placeholder='DD/MM/YYYY 0r Age In Years' name='DOB' value={formik.values.DOB} onChange={formik.handleChange} />

                    <select name="sex" className='Sex' placeholder='Enter Sex' value={formik.values.sex} onChange={formik.handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>

                </div>
                <div className="row1">
                    <input type="text" placeholder='Enter Mobile' name='mobile' value={formik.values.mobile} onChange={formik.handleChange} />
                    <input type="number" placeholder='Enter Govt ID' name='GovtID' value={formik.values.GovtID} onChange={formik.handleChange} />
                    <button type='submit'>Submit</button>
                </div>

            </form>
            

        </div>

    )
}
