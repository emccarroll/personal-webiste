import './LandingPage.css';
import MenuItem from '../CustomComponents/MenuItem';
import Menu from '../CustomComponents/Menu';

function LandingPage() {
  return (
    <div className="row">
        <div className="left">
            <h1 className="nameHeader">Eoghan McCarroll</h1>
            <div className="statement">Looking to brighten the lives of others</div>
        </div>  
        <div className="right centerContent">
            <Menu>
                <MenuItem text="Interests"/>
                <MenuItem text="Work Experience"/>
                <MenuItem text="Projects"/>
                <MenuItem text="Future Plans"/>

            </Menu>
            
            
        </div>  
    </div>
  );
}

export default LandingPage;
