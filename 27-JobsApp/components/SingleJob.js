import React from 'react';
import { FaRegHeart} from "react-icons/fa";
import ReactCanvasConfetti from "react-canvas-confetti";
import { connect } from 'react-redux'

const mapStateToProps = store =>{
    const {selectedItemId, selectedItem} = store.searchReducer;
    return {selectedItem,selectedItemId }
  }

//   const mapDispatchToProps = (dispatch) =>{
//     return { 
//       setQueries:(data)=>dispatch({type:'SET_QUERY', payload:data}),
//       setSelectedItem:(id,qualifications_and_requirements)=>dispatch({type:'SET_SELECTED_ITEM', payload:{id,qualifications_and_requirements}}),
//     }
    
//   }

const SingleJob = ({selectedItem,selectedItemId,}) => {
    const array = selectedItem.split('.');
    console.log(array);
  return(

        <aside>
          <ul>
              {array.map((item)=>{
                 return <li>{item}</li>
              })}
          </ul>





        <style jsx>{`
            aside{
                width:40%;
                max-width:40%;
                height:400px;
                border:solid 1px black;
                margin:1rem 0;
                position:fixed;
                right:180px;

            }            
            
            `}

        </style>
        </aside>
  )
};

export default connect(mapStateToProps,null)(SingleJob)

