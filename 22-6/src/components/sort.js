function Sort(){
    const arr=['z', 'A', 'Q', 'B', 'C', 'Y', 'S', 'W' ]
    const arr2= arr.sort();
    return(
        <h2>
            The sorted array is: 
            <br></br>{arr2.join(", ")} 
        </h2>
    )
}
export default Sort;