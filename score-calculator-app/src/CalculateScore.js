function CalculateScore(){

    return(
        <form className='form' >
            <div className='row'>
                <div className='col-sm-4'>
                    <label>First Name:</label> 
                    <input type="text" name="first_name" className="form-control text-input-field" 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Last Name:</label> 
                    <input type="text" name="last_name" className="form-control text-input-field" 
                     />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Score 1:</label> 
                    <input type="number" name="score1" className="form-control number-input-field"
                     />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Score 2:</label> 
                    <input type="number" name="score2" className="form-control number-input-field"
                     />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <label>Score 3:</label> 
                    <input type="number" name="score3" className="form-control number-input-field"
                    />
                </div>
            </div>
            <input type="submit">Submit</input>
            <div ></div>
        </form>
    )
   
}

export default CalculateScore