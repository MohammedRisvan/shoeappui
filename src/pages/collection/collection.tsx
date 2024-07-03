import { SiWindows } from "react-icons/si";
import "./collection.css";
import { FaRegStar, FaThList } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const Collection=()=>{
    const arr=[1,2,3,4,5]
return(
<div className="MP">
<h1>Shop</h1>
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
<div className="card">
    {arr.map((item,key)=>{
        return(<div className=" detailcard">
            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg" alt="" />
            <h1>Men's Black Running</h1>
            <p>$79.90</p>
            <div>
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
export default Collection;