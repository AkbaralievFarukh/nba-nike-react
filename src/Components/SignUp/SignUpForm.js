import React from 'react';

const SignUpForm = () => {
    return (
        <section className="sign-up-section">
            <div className="container">
                <div className="sign-up-section-wrapper">
                    <form className="sign-up-section__form" onSubmit={handleSubmit(onSubmit)} >
                        <input type="text" placeholder="Name" {...register("name")}/>
                        <input type="text" placeholder="Email" {...register("email")}/>
                        <input type="text" placeholder="Password" {...register("password")}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;