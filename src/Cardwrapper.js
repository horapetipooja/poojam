import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import './Cardwrapper.css';

function Cardwrapper(){
    return(
        <div className="card-wrapper">
            <Card/>
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
    )
}

export default Cardwrapper;