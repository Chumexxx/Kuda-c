import Clear from "../Components/Home/Clear";
import Freedom from "../Components/Home/Freedom";
import Happy from "../Components/Home/Happy";
import Hero from "../Components/Home/Hero"
import Info from "../Components/Home/Info";
import Manage from "../Components/Home/Manage";
import More from "../Components/Home/More";
import Safety from "../Components/Home/Safety";
import Save from "../Components/Home/Save";
import Simpler from "../Components/Home/Simpler";
import Testimonials from "../Components/Home//Testimonials";



const Personal = ({ toggle }) => {
    if (toggle) return null; 
    
    return (
        <div>
            <Hero />
            <Info />
            <Simpler />
            <Manage />
            <Save />
            <Safety />
            <Happy />
            <Clear />
            <Testimonials />
            <Freedom />
            <More />
        </div>
    );
};
export default Personal;