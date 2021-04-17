import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [info, setInfo] = useState([]);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    console.log(info);
    const handleSubmit = () => {
        const reviewInfo = {...info};
        fetch('http://localhost:5055/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewInfo)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        console.log(reviewInfo);
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 m-4">
                        <h1>Add review</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your name</label>
                                <input onBlur={handleBlur} type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="designation" className="form-label">Your designation</label>
                                <input onBlur={handleBlur} name="designation" type="text" className="form-control" id="designation" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input onBlur={handleBlur} name="description" type="text" className="form-control" id="description" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;