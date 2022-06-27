import { PropagateLoader } from 'react-spinners';
import "./loader.css";
export default function Loader({isLoading}) {
    // let [loading, setLoading] = useState(true);
 
    return (
        <div className="relative w-screen h-screen bg-slate-200">
            <div className="loader relative">
                <PropagateLoader color='#9f0078' loading={isLoading} size={40} margin={2}  />
            </div>
        </div>
    )
}