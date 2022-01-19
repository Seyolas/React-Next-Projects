import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = store =>{
    const {JobTitleQuery,LocationQuery} = store.searchReducer;
    return { JobTitleQuery,LocationQuery }
  }

//   const mapDispatchToProps = (dispatch) =>{
//     return { 
//       setQueries:(data)=>dispatch({type:'SET_QUERY', payload:data}),
//     //   decrease:(id,amount)=>dispatch({type:'DECREASE', payload:{id,amount}}),
//     }
    
//   }


const JobsList = ({JobTitleQuery,LocationQuery,data}) => {

    let searchResult;

    searchResult = data.filter((item)=>item.job_title.includes(JobTitleQuery) && item.location.includes(LocationQuery))
    
    if (searchResult.length===0) {
        return <h1>No Result Keje</h1>
    }

    return (
        <main>
            <article>
            {searchResult.map((singleJob)=>{
                const {id,company_name,job_title,location,
                    work_type,qualifications_and_requirements} = singleJob
                    return (
                        <div key={id} className="item">
                            <h2>{company_name}</h2>
                            <h3>{job_title}</h3>
                            <h3>{location}</h3> <span>{work_type}</span>
                            <h4>{qualifications_and_requirements.substring(0,150)}</h4>
                        </div>
                    )

            })}
            </article>
        </main>
    )
    
}

export default connect(mapStateToProps,null)(JobsList)

