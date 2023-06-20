const shimmer = () => {
     
    const array = new Array(20);
    array.fill("");

    return (
        <div className="Restraunt-list">
            
        {
            
             array.map((e, index) => <div className='shimmer-card' key={index}></div>)
        }
            
       
                   
                    
        </div>
    )
}

export default shimmer;
