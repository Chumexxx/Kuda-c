import Clear from "../Components/Home/Clear";
import Happy from "../Components/Home/Happy";
import Hero from "../Components/Home/Hero"
import Info from "../Components/Home/Info";
import Manage from "../Components/Home/Manage";
import Safety from "../Components/Home/Safety";
import Save from "../Components/Home/Save";
import Simpler from "../Components/Home/Simpler";



const Personal = () => {
    return(
        <div>
            <Hero/>
            <Info/>
            <Simpler/>
            <Manage/>
            <Save/>
            <Safety/>
            <Happy/>
            <Clear/>
        </div>
    )
}

export default Personal;