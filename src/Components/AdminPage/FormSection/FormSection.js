import React, { useState } from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormSection = () => {
    const [file, setFile] = useState(null);
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        if (!file) {
            console.error('File not uploaded');
            return;
        }

        const newData = {
            id: '22',
            image: file.secure_url,
            title: data.title,
            description: data.description,
            price: data.price,
        };

        axios
            .post('https://657ca608853beeefdb99c62f.mockapi.io/nba', newData)
            .then(({ data }) => console.log(data))
            .catch((error) => console.error('Error uploading data:', error));
    };

    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'gallery');
        formData.append('cloud_name', 'dolbxwcvv');

        axios
            .post('https://api.cloudinary.com/v1_1/dolbxwcvv/image/upload', formData)
            .then(({ data }) => setFile(data))
            .catch((error) => console.error('Error uploading file:', error));
    };

    return (
        <section className="form-section">
            <div className="container">
                <div className="form-section-wrapper">
                    <form className="form-section__form" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <input type="file" name="image" placeholder="Image" onChange={handleUpload} />
                        <input type="text" name="title" placeholder="Title" {...register("title")}/>
                        <input type="text" name="description" placeholder="Description" {...register("description")}/>
                        <input type="text" name="price" placeholder="Price" {...register("price")}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
