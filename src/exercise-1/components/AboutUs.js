import React from 'react';
import {Link} from 'react-router-dom'

const AboutUs = () => {
    return <div className='webpage'>
        <p>Company: Thoughtworks Local</p>
        <p>Location: Xi'an</p>
        <br/>
        <p>For More Information, please </p>
        <p>view our <Link to='/'>website</Link></p>
    </div>
}

export default AboutUs;