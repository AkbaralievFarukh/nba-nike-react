import React from 'react';
import './style.scss'
import {useForm} from "react-hook-form";
import axios from "axios";

const FormSection = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => console.log(data);
    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'gallery');
        formData.append('cloud_name', 'dolbxwcvv');
        axios.post('https://api.cloudinary.com/v1_1/dolbxwcvv/image/upload', formData)
            .then(({data}) => console.log(data))
    };


    return (
        <section className="form-section">
            <div className="container">
                <div className="form-section-wrapper">
                    <form className="form-section__form" onSubmit={handleSubmit(onSubmit)} >
                        <input type="file" name="image" placeholder="Image" onChange={handleUpload} />
                        <input type="text" name="title" placeholder="Title" />
                        <input type="text" name="description" placeholder="Description" />
                        <input type="text" name="price" placeholder="Price" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormSection;