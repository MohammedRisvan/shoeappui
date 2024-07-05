import "./users.css"

const Users=()=>{
    const arr=[1,2,3,4,5,6]
    return(
    <div className="ADUs">
        {arr.map(()=>{
            return(
                <div className="userdata">
                    <div className="userids">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"/>
                    <div className="userNE">
                    <h3>User</h3>
                    <span>example@gmail.com</span>
                    </div>
                    </div>
                    <div className="userbutton">
                    <button>Add admin</button>
                    <button className="userblock">Block</button>
                    </div>
                </div>
            )
        })}
    </div>
)
}
export default Users