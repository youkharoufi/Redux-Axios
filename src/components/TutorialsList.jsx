import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteAllTutorials, deleteTutorial, findTutorialsByTitle, getAllTutorials } from '../store/actions';
import * as Icon from 'react-bootstrap-icons';
import AddTutorial from './AddTutorial';
import LoadingComponent from './LoadingComponent';



export default function TutorialsList({showAddForm}){

    const {tutorials} = useSelector(state => state.tuto);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchItem, setSearchItem] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(()=>{
        dispatch(getAllTutorials());
        setLoading(false)

      }, 5000);

    
    }, []);
  

    //console.log(Array.isArray(tutorials));

    const [currentTutorial, setCurrentTutorial] = useState(null);


  const removeAllTutorials = () => {
    dispatch(deleteAllTutorials())
  };

  function goToUpdateForm(tutorialId){

        navigate("/tutorial-update/"+tutorialId)

    
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSearchItem({ ...searchItem, [name]: value });
  };

  function launchSearch(searchItem){
    console.log(searchItem);
    setSearchItem(searchItem);
    dispatch(findTutorialsByTitle(searchItem))
  }

    return (
        <>
        <form>
        <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={handleInputChange}
              name="title"
              placeholder="Title"
            />
        <button type="button" onClick={()=>launchSearch(searchItem)} className="btn btn-success">Search</button>
          </div>
        </div>
      </div>

        </form>

    {loading && <LoadingComponent/>}
    
    <div className="container" >
        <div className="row">
        <div className="col">
        {!loading && 
        <div>
        <h4>Tutorials List</h4>

        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li className="list-group-item" key={index} >
                <h2 style={{display:'inline'}}>{tutorial.title}</h2>
                <p>{tutorial.description}</p>
            <div style={{float:'right'}}>
            <button type="button"  style={{position:'center', marginRight:'10px'}} className="btn btn-primary" onClick={()=>dispatch(deleteTutorial(tutorial.id))}>Delete<Icon.Trash/></button>
            <button type="button"  style={{textAlign:'center', marginLeft:'10px'}} className="btn btn-primary" onClick={()=>goToUpdateForm(tutorial.id)}>Edit<Icon.Pencil/></button>
            </div>
            </li>
               
            ))}
        </ul>
        </div>
        }

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={()=>removeAllTutorials()}
        >
          Remove All
        </button>
      </div>

      <div className="col">
      {currentTutorial ? (
        <div>
          <h4>Tutorial</h4>
          <div>
            <label>
              <strong>Title:</strong>
            </label>{" "}
            {currentTutorial.title}
          </div>
          <div>
            <label>
              <strong>Description:</strong>
            </label>{" "}
            {currentTutorial.description}
          </div>

          <Link
            to={"/tutorials/" + currentTutorial.id}
            className="badge badge-warning"
          >
            Edit
          </Link>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
      {showAddForm &&
          <AddTutorial/>

      }
      </div>
      
      
      
      
</div>
      </div>
      </>
    
  );
}
