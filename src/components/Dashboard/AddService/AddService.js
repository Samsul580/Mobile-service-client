import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState([]);
    const [file, setFile] = useState([]);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);

        fetch('https://agile-woodland-49427.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 m-4">
                        <h1>Add Service</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Service name</label>
                                <input onBlur={handleBlur} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                                <input onBlur={handleBlur} name="price" type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label">Image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="file" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;