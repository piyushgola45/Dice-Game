function Layout({item,selectednumber})
{
    return <>
        <div className="col">
            <button className="btn btn-success" onClick={()=>{
                selectednumber(item)
            }}>
                {item}
            </button>
        </div>
    </>
}
export default Layout;