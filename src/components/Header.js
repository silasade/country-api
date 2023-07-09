
function Header(props){
    return(
        <header className='header' style={props.style}>
            <h3>Where in the world</h3>
            <div onClick={props.onClick} className='theme'>
                <img src={props.src} href="image not fount"/>
                <h4>{props.mode}</h4>
            </div>
            
        </header>
    )
}
export default Header