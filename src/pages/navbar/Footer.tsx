import "./footer.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer=()=>{
    return(        <div className="footer">
    <div className="foioterfirst">
        <div className="footermain">
            <div className="footercard">
                <h1>PLASHOE</h1>
                <span>Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur</span>
            </div>
            <div className="footercard">
                <h1>Shop</h1>
                <p>Shop Men</p>
                <p>Shop Women</p>
                <p>LookBook</p>
                <p>Gift Card</p>
                <p>Sale</p>
            </div>
            <div className="footercard">
                <h1>About</h1>
                <p>Our Story</p>
                <p>Our Materials</p>
                <p>Our Value</p>
                <p>Sustainability</p>
                <p>Manuefacture</p>
            </div>
            <div className="footercard">
                <h1>Need Help?</h1>
                <p>FAQs</p>
                <p>Shopping & Rerurns</p>
                <p>Shoe Care</p>
                <p>Size Chart</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div className="footerIcons">
        <FiInstagram />
        <FaYoutube/>
        <FaFacebook/>
        <FaTwitter/>
        </div>
    </div>
    <div className="footerlast">
        <p>© 2024 Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
            <img src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png" alt="" />
    </div>
</div>)
};

export default Footer;