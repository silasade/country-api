import logo from './logo.svg';
import data from './components/data.json'
import {Countries} from './components/Countries';
import icon from './components/moon.svg'
import icon1 from './components/moon-fill.svg'
import {  useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Country from './components/Country';
import Input from './components/Input';
import Header from './components/Header';
function App() {
  var [continents, setContinents]=useState([])
  const [datas, setDatas] = useState([]);
  const [show,setshow]=useState(false);
  
  var [truth, setTruth]=useState(true)
  var sty={
    "display":show==true?"none":"flex",
    "flexDirection":"column"
  }
    var logo= truth==true? icon:icon1
    var mode=truth==true? "Dark mode": "Light mode"
    var styles3 = 
    {
      backgroundColor: truth === false ? "hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)"

    };
    var styles=
    {
            backgroundColor:truth==false?"hsl(207, 26%, 17%)":"hsl(0, 0%, 98%)",
            "color":truth==false?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)",
            "fontSize":"14px",
            "padding":"2%"
          }
          
      var styles1={
        backgroundColor:truth==false?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)",
            "color":truth==false?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)",
            "fontSize":"14px",
            "boxShadow": "1px 6px 5px 0px rgba(0,0,0,0.75)",
        
            
      }
      var styles2={
        
        "backgroundColor":truth==false?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)",
            "color":truth==false?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)",
            "::placeholder":{
              "color":truth==false?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)",
            }
          }
    useEffect(()=>{
      const updatedDatas = data.map(items => (
        <Countries 
          className="ma"
          key={items.name} 
          png={items.flags.png} 
          name={items.name} 
          population={items.population} 
          region={items.region} 
          capital={items.capital}
          style={styles3}
          onClick={() => details(items.name)}
        />
      ));
      setDatas(continents.length > 0 ? updatedDatas.filter(country => country.props.region === continents) : updatedDatas);
    }, [continents, data, truth]);
    function details(event){
      console.log(event)
      setshow(item=>{return true})
      console.log(show)
      const updatedDatas = data && data.map(items => {
        return(
        <Country 
          

          key={items.name} 
          png={items.flags.png} 
          name={items.name} 
          population={items.population} 
          region={items.region} 
          subregion={items.subregion}
          nativename={items.nativeName}
          topLevel={items.topLevelDomain}
          
          capital={items.capital}
          currency={items.currencies && items.currencies.map(item=>{return (<p key={items.name}>{item.name} &nbsp;</p>)})}
          languages={items.languages && items.languages.map(item=>{return (<p key={items.name}>{item.name} &nbsp;</p>)})}
          style={styles}
        />
        )
        });
      setDatas(event.length > 0 ? updatedDatas.filter(country => country.props.name === event) : null);
    }
    const [inputValue, setInputValue] = useState('');

    function handleClick(){
        setTruth(item=>{return !item})
    }
    
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // Handle Enter key press
        console.log(inputValue);
        
          const updatedDatas = data.map(items => (
            <Country 
              key={items.name} 
              png={items.flags.png} 
              name={items.name} 
              population={items.population} 
              region={items.region} 
              subregion={items.subregion}
              nativename={items.nativeName}
              topLevel={items.topLevelDomain}
              style={styles}
              capital={items.capital}
              currency={items.currencies && items.currencies.map(item=>{return (<p key={items.name}>{item.name} &nbsp;</p> )})}
          languages={items.languages && items.languages.map(item=>{return (<p key={items.name}>{item.name} &nbsp;</p>)})}
            />
          ));
          setDatas(inputValue.length > 0 ? updatedDatas.filter(country => country.props.name === inputValue) : updatedDatas);
      }
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    return (
      <body height="100%">
    <div className="App" >
        
        
        <Input
          sty={sty}
          style1={styles1}
          onClick={handleClick}
          src={logo}
          mode={mode}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={styles2}
          onClick2={()=>  setContinents("Africa")}
          onClick3={()=> setContinents("Americas")}
          onClick4={()=> setContinents("Asia")}
          onClick5={()=> setContinents("Europe")}
          onClick6={()=> setContinents("Oceania")}
          style2={styles}
        />      
        <div style={styles}>
            
        
        
        <div className="main1" >
      {datas}
      </div>
      </div>
      
    </div>
    </body>
  );
}

export default App;
