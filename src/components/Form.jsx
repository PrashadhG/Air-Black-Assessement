import React, { useState } from 'react';
import icon from '../assets/certificate-logo.svg';
import tick from '../assets/tick.svg';
import star from '../assets/star.svg';
import '../styles/Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsappNumber: '',
        countryCode: '+91',
        profession: '',
        goal: '',
        city: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Required**';
        }

        if (!formData.whatsappNumber) {
            newErrors.whatsappNumber = 'Required**';
        } else if (!/^\d{10}$/.test(formData.whatsappNumber)) {
            newErrors.whatsappNumber = 'Number must be 10 digits';
        }

        if (!formData.profession) {
            newErrors.profession = 'Required**';
        }

        if (!formData.goal) {
            newErrors.goal = 'Required**';
        }

        if (!formData.city) {
            newErrors.city = 'Required**';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            // Set red border on all empty fields
            for (const key in validationErrors) {
                document.getElementById(key).style.borderColor = 'red';
            }
        } else {
            // Handle form submission
            console.log('Form data submitted:', formData);
            // Reset border color to normal after successful submission
            for (const key in formData) {
                document.getElementById(key).style.borderColor = 'input';
            }
        }
    };

    return (
        <div className='form-container' id='form-container'>
            <div className='form-left'>
                <div className='form-header'>
                    <h2>Profession Online</h2>
                    <h2>Makeup Course</h2>
                </div>
                <div className='form-certification'>
                    <div className='certificate-text'>
                        <img src={icon} alt="icon" />
                        <span>Certification programme</span>
                    </div>
                    <div className='rating'>
                        <img src={star} alt="star" />
                        <span className='rating-text'>Rated 4.85/5</span>
                    </div>
                </div>
                <div className='specification'>
                    <div className='form-content'>
                        <img src={tick} alt='.'/>
                        <span>India's No.1 Online Makeup Course</span>
                    </div>
                    <div className='form-content'>
                        <img src={tick} alt='.' />
                        <span>Learn by LIVE Do-it-Together Classes</span>
                    </div>
                    <div className='form-content'>
                        <img src={tick} alt='.'/>
                        <span>Unlimited practise Session to master skills</span>
                    </div>
                </div>
            </div>
            <div className='form-section'>
                <div className='form-head'>
                    <p>FILL THE FORM BELOW TO ENQUIRE</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-data'>
                        <div className='form-input'>
                            <p className='form-title'>* Enter your name</p>
                            <input
                                type='text'
                                name='name'
                                placeholder='Eg. Aneesha Mehra'
                                value={formData.name}
                                style={{ borderColor: errors.name ? 'red' : 'input' }}
                                onChange={handleChange}
                            />
                            {errors.name && <p className='error'>{errors.name}</p>}
                        </div>
                        <div className='form-number'>
                            <div className='form-input'>
                                <p className='form-title'>* Enter your WhatsApp Number</p>
                                <div className='number-child'>
                                    <select
                                        id="country-prefix-select"
                                        className='mobile-number-prefix'
                                        name='countryCode'
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                    >
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44 </option>
                                        <option value="+61">+61 </option>
                                        <option value="+49">+49 </option>
                                        <option value="+33">+33 </option>
                                        <option value="+81">+81 </option>
                                        <option value="+86">+86 </option>
                                        <option value="+39">+39 </option>
                                        <option value="+34">+34 </option>
                                        <option value="+55">+55 </option>
                                        <option value="+7">+7 </option>
                                        <option value="+82">+82 </option>
                                        <option value="+31">+31 </option>
                                        <option value="+46">+46 </option>
                                        <option value="+41">+41 </option>
                                        <option value="+32">+32 </option>
                                        <option value="+27">+27 </option>
                                        <option value="+52">+52 </option>
                                    </select>
                                    <input
                                        type='number'
                                        name='whatsappNumber'
                                        placeholder='Eg. 0000000000'
                                        style={{ borderColor: errors.whatsappNumber ? 'red' : 'input' }}
                                        value={formData.whatsappNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.whatsappNumber && <p className='error'>{errors.whatsappNumber}</p>}
                            </div>
                        </div>
                        <div className='form-input'>
                            <p className='form-title'>*Select your profession</p>
                            <select
                                id="profession"
                                name="profession"
                                className='select'
                                style={{ borderColor: errors.profession ? 'red' : 'input' }}
                                value={formData.profession}
                                onChange={handleChange}
                            >
                                <option value="">Choose the most relevant option</option>
                                <option value="hairstylist">Hairstylist</option>
                                <option value="makeup-artist">Makeup Artist</option>
                                <option value="nail-technician">Nail Technician</option>
                                <option value="esthetician">Esthetician</option>
                                <option value="beauty-consultant">Beauty Consultant</option>
                                <option value="cosmetologist">Cosmetologist</option>
                                <option value="massage-therapist">Massage Therapist</option>
                                <option value="salon-owner">Salon Owner</option>
                                <option value="beauty-instructor">Beauty Instructor</option>
                                <option value="freelance-artist">Freelance Artist</option>
                            </select>
                            {errors.profession && <p className='error'>{errors.profession}</p>}
                        </div>
                        <div className='form-input'>
                            <p className='form-title'>*Select your goal</p>
                            <select
                                id="goal"
                                name="goal"
                                className='select'
                                style={{ borderColor: errors.goal ? 'red' : 'input' }}
                                value={formData.goal}
                                onChange={handleChange}
                            >
                                <option value="">Choose the most relevant option</option>
                                <option value="start-own-business">Start Own Business</option>
                                <option value="improve-skills">Improve Skills</option>
                                <option value="career-change">Career Change</option>
                                <option value="get-certified">Get Certified</option>
                                <option value="expand-services">Expand Services</option>
                                <option value="gain-experience">Gain Experience</option>
                                <option value="networking">Networking</option>
                                <option value="job-placement">Job Placement</option>
                                <option value="build-portfolio">Build Portfolio</option>
                                <option value="personal-development">Personal Development</option>
                            </select>
                            {errors.goal && <p className='error'>{errors.goal}</p>}
                        </div>
                        <div className='form-input'>
                            <p className='form-title'>*Select your city</p>
                            <select
                                id="city"
                                name="city"
                                className='select'
                                style={{ borderColor: errors.city ? 'red' : 'input' }}
                                value={formData.city}
                                onChange={handleChange}
                            >
                                <option value="">Choose the most relevant option</option>
                                <option value="chennai">Chennai</option>
                                <option value="coimbatore">Coimbatore</option>
                                <option value="madurai">Madurai</option>
                                <option value="tiruchirappalli">Tiruchirappalli</option>
                                <option value="salem">Salem</option>
                                <option value="tirunelveli">Tirunelveli</option>
                                <option value="vellore">Vellore</option>
                                <option value="erode">Erode</option>
                                <option value="thoothukudi">Thoothukudi</option>
                                <option value="thanjavur">Thanjavur</option>
                                <option value="dindigul">Dindigul</option>
                                <option value="theni">Theni</option>
                                <option value="karur">Karur</option>
                                <option value="sivakasi">Sivakasi</option>
                                <option value="cuddalore">Cuddalore</option>
                                <option value="kanyakumari">Kanyakumari</option>
                                <option value="nagapattinam">Nagapattinam</option>
                                <option value="tiruvannamalai">Tiruvannamalai</option>
                                <option value="kumbakonam">Kumbakonam</option>
                                <option value="namakkal">Namakkal</option>
                            </select>
                            {errors.city && <p className='error'>{errors.city}</p>}
                        </div>
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
