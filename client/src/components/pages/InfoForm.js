import React, {useState} from "react";

function InfoForm(){

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    street: "",
    zip: "",
    city: ""
  });

  const onSubmit = function(event){
    event.preventDefault();

    //Add this to database and redirect
    alert("To do: Add this info to database, redirect to next page.");

  }

  const onChange = function(event){
    event.preventDefault();

    const { name, value } = event.target;

    setInfo({
      ...info,
      [name]: value
    });
  }

  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Add some more information to complete your account</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        value={info.name}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Enter your lastname name"
                        value={info.phone}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Street Address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="street"
                        placeholder="Enter email"
                        value={info.street}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        name="zip"
                        placeholder="Password"
                        value={info.zip}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">City</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="Password"
                        value={info.city}
                        onChange={onChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                >
                    Register!
                </button>
            </form>
        </div>
      </div>
    </div>
  );
} 

export default InfoForm;
