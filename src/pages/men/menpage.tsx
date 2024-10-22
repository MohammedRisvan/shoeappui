import { SiWindows } from "react-icons/si";
import "./men.css";
import { FaRegStar, FaThList } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const MenPage=()=>{
    const arr=[1,2,3,4,5]
return(
<div className="MP">
<h1>Men</h1>
<div className="MP2c">
    <div>
    <button className="MP2cfbtn">{true?<BsList />:<IoCloseOutline />}FILTER SHOES</button>
    <button className="MP2csbtn">showing all 8 results</button>
    </div>
    <div>
        <select className="MP2ctbtn">
            <option value="defaultsorting">Default sorting</option>
            <option value="sortbypopularity">sort by popularity</option>
            <option value="sortbyaveragererating">Sort by average rating</option>
            <option value="sortbylatest">Sort by latest</option>
            <option value="pricelowtohigh">Sort by Price:Low to High</option>
            <option value="Pricehightolow">Sort by Price:High to Low</option>
        </select>
        <SiWindows />
        <FaThList />
    </div>
</div>
<div className="cards">
    {arr.map((item,key)=>{
    const [hover,setHover]=useState<boolean>(false)
        return(<div className=" detailcard" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <div className="imagediv">
            <img className={`${hover?"hoverimage":"image"}`} src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg" alt="" />
            <button className="imagebutton">Quick View</button>
            </div>
            <h1>Men's Black Running</h1>
            <p>$79.90</p>
            <div className="rating">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            </div>
            <p></p>
        </div>)})}
</div>
</div>
)
};
export default MenPage;