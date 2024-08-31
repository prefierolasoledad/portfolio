import React,{useState} from "react";
import './GetInTouchForm.css'

const GetInTouchForm=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    return(
    <section id="get-in-touch-form-section">
        <form id="get-in-touch-form">
            <h2 id="get-in-touch-heading">
                Get In Touch !
            </h2>
            <div id="name-email">
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                />
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                />
            </div>
            <div id="phone-number">
                <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                />
            </div>
            <div id="message-tosend">
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                />
            </div>
            <button type="submit" id="submit-get-un-touch-form">Send It !</button>
        </form>
    </section>
    );
}

export default GetInTouchForm;