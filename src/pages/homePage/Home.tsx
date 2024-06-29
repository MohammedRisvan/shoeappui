import { FaFacebook, FaLock, FaTruck, FaTwitter, FaYoutube } from "react-icons/fa";
import "./home.css";
import { GiCycle } from "react-icons/gi";
import { FiInstagram } from "react-icons/fi";
const Home=()=>{
    return(
        <div>
            <div className="Theme">
                <h1>Love the Planet<br/>we walk on</h1>
                <p>Bibendum fermentum, aenean donec pretium aliquam blandit <br/>
                tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                <div>
                    <button id="themebutton">SHOP MEN</button>
                    <button id="themebutton">SHOP WOMEN</button>
                </div>
            </div>
            <div className="logos">
                <h6>As seen in:</h6>
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg" alt="" className="logo" />
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg" alt="" className="logo" />
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg" alt="" className="logo" />
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg" alt="" className="logo" />
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg" alt="" className="logo" />
            </div>
            <div className="secondTheme">
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"/>
                <div>
                    <span>About Us</span>
                    
                    <h1>
                        Selected materials <br/>
                        designed for comfort<br/>
                        and sustainability
                    </h1>
                    <p>Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
                    <button>READ MORE</button>
                </div>
                </div>
                <div className="thirdTheme">
                    <div className="thirdThemeheader">
                    <h1>See how your Shoes are made</h1>
                    <p>Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer<br/> risus leo volutpat nulla enim ultrices</p>
                    </div>
                    <div className="thirdThemebody">
                    <div className="thirdThemebodylefttext">
                    <div>
                        <span>01.</span>
                        <h1>Pet canvas</h1>
                        <p>Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus</p>
                    </div>
                    <div>
                        <span>02.</span>
                        <h1>Algae foam + vegan glue</h1>
                        <p>Enim tincidunt donec vulputate magna pharetra mattis in</p>
                    </div>
                    </div>
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"/>
                    <div className="thirdThemebodyrighttext">
                        <div>
                            <span>03.</span>
                            <h1>Organic cotton</h1>
                            <p>A vel ipsum, sed dignissim elementum ultrices amet</p>
                        </div>
                        <div>
                            <span>04.</span>
                            <h1>Upcycled plastic bottles</h1>
                            <p>Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est</p>
                        </div>
                    </div>
                </div>
                    </div>


        <div className="forthTheme">
        <div className="forthThemeMen">
            <p>Men</p>
            <button>SHOP MEN</button>
            </div>
        <div className="forthThemeWomen">
            <p>Women</p>
            <button>SHOP WOMEN</button>
        </div>
        </div>

        <div className="fifthTheme">
            <div>
                <p>Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis, est, vulputate morbi massa mauris vestibulum dui odio.</p>
                <div className="fifthThemelogos">
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg" alt="" />
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg" alt="" />
                    <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg" alt="" />
                </div>
            </div>
                <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg" alt="" />
        </div>
        {/* <div className="hcustomrtspeakes">
            <h1>Our Customers speak for us</h1>
            <div className="hcustomrtspeakesreview">

            </div>
        </div> */}
        <div className="sixthThmecover">
        <div className="sixthTheme">
            <h1>Better for people & the Planet</h1>
            <p>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulptate</p>
            <div>
                <button className="sixthThemebtn">SHOP MEN</button>
                <button className="sixthThemebtn">SHOP WOMEN</button>
            </div>
        </div>
        <div className="sixthThemlastbar">
            <h2><FaLock /> Secure Payment</h2>
            <h2><FaTruck />Express Shipping</h2>
            <h2><GiCycle />Free Return</h2>
        </div>
        </div>
        <div className="footer">
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
        </div>
        </div>
    )
};
export default Home;