
import './style.css'
function Country(props){
    function back(){
      window.location.reload();


    }
    return(
      
        
        <div className='country' style={props.style}>
          <div className='back'>
          <button className="back" onClick={back} style={props.style}>Back</button>
          </div>
            
            <div>
            <img className='may' src={props.png} alt="image not found"/>
            </div>
            <div className='name'>
            
              <h2>Name: {props.name}</h2>
              
            
             
            
            
            <h5>Native Name: {props.nativename}</h5>
            <h5>Population: {props.population}</h5>
                <h5>Region: {props.region}</h5>
                <h5>sub Region: {props.subregion}</h5>
                <h5>Capital: {props.capital}</h5>
                
            </div>
            <div className='oo'>
              <h5>Top Level Domain: {props.topLevel}</h5>
              
              <h5 className='lang'>Languages: &nbsp; {props.languages}</h5>
              
            <h5 className='curr'>Currency: &nbsp; {props.currency}</h5>
              
            </div>
        </div>
        
    )
}
export default Country