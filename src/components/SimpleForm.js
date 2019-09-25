import React from 'react'

const SimpleForm = () => (
    <form className="form1" action="">
        <label htmlFor="firstName" className="first-name">First Name</label>
        <input id="firstName" type="text"/>

        <label htmlFor="lastName" className="last-name">Last Name</label>
        <input id="lastName" type="text"/>

        <label htmlFor="job">Job</label>
        <input id="job" type="text"/>

        <label htmlFor="age">Age</label>
        <input id="age" type="text"/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>

        <button>Submit</button>
    </form>
);

export default SimpleForm;
