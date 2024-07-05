import "./product.css"

const AdminProduct=()=>{
    const arr=[1,2,3,4,5]
    return(
        <div className="Ap">
            {arr.map(()=>{
                return(
                    <div className="card">
                        {/* <image src=""/> */}
                    </div>
                )
            })}
        </div>
    )
}

export default AdminProduct