import React from 'react';
import { CircleArrowDown} from 'lucide-react';
import { Link } from 'react-scroll';
import '../styles/WhiteSpace.css';


const WhiteSpace = () => {
    
  return (
    <div className='white-space'>
        <div className='instruction'>
            <h1 className='instruction-h1'>Swipe down to fill the Form</h1>
            <Link to="form-container" className='down-arrow' smooth={true} duration={500}><CircleArrowDown size={50} color="#ffffff" strokeWidth={1.5} /></Link>
        </div>
    </div>
  )
}

export default WhiteSpace