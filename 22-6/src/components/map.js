function Map(){
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
    
        return(
            <div>
            <h2>Map</h2>
             <table class="table">
             <thead>
               <tr>
                 <th scope="col">id</th>
                 <th scope="col">name</th>
                 <th scope="col">color</th>
               </tr>
             </thead>
             <tbody>
               
                {Fruits.map(item=>
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                </tr>
                )} 
               
             </tbody>
           </table>
</div>
        );
         
}
export default Map;