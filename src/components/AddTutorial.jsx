import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTutorial } from "../store/actions";

export default function AddTutorial() {

    const navigate = useNavigate();

  const initialTutorialState = {
    id: '',
    title: "",
    description: "",
  };


  const [tutorial, setTutorial] = useState(initialTutorialState);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = (tutorial) => {
    console.log(tutorial)
    dispatch(createTutorial(tutorial))
    navigate('/');
  };


  return (
    <form>
    <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>


          <button type="button" onClick={()=>{saveTutorial(tutorial)}} className="btn btn-success">
            Submit
          </button>
        </div>
        
    </div>
    </form>
  );
};

