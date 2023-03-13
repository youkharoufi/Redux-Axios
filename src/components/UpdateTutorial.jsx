import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTutorial } from '../store/actions';


export default function UpdateTutorial(){

    const match = useParams();

    const currentTutorial = useSelector(state => state.tuto.tutorials.find(t => t.id === match.id));

    const intitialState = currentTutorial;

    const [tutorial, setTutorial] = useState(intitialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(event){
        const { name, value } = event.target;
        setTutorial({ ...tutorial, [name]: value });
    }

    function saveTutorial(){

      setFormErrors(validate());
      while(formErrors.length > 0){
        return;
      }


        dispatch(updateTutorial(tutorial.id, tutorial));
        navigate('/');

    

      
          
        
    }
    
    function validate(){

      const errors = {};
      const regex = new RegExp(/^(?=.*[!@#&()\-/$=<>?+*%])[a-zA-Z0-9!@#&()\-/$=<>?+*%]+$/);

      if(!tutorial.title){
        errors.title = "Title is required"
      }

      if(!tutorial.description){
        errors.description = "Description is required"
      }

      if(!regex.test(tutorial.description))
        errors.description = "Description must contain at least one special character"

        return errors
    }



    return (
        <>
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
            <span>{formErrors.title}</span>
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
            <span>{formErrors.description}</span>
          </div>


          <button type="button" onClick={()=>{saveTutorial()}} className="btn btn-success">
            Submit
          </button>
        </div>
        
    </div>
    </form>
        </>



    )
}