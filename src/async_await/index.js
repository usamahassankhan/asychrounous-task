import React, { useState, useEffect } from "react";
import axios from "axios";




function Index() {
  const [users1, setUsers] = useState([]);
  const [users2, setUsers1] = useState([]);
  const [users3, setUsers3] = useState([]);

  useEffect(() => {
    fetchUsersPromise();
    fetchUsersAsync();
    fetchUsersAsync1();
  }, []);

  const fetchUsersPromise = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        setUsers(result.data);
      })
      .catch(e => console.log(e));
  };

  const fetchUsersAsync = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers1(result.data);
    } catch (e) {
      console.log(e); // You can figure out of error handling
    }
  };
  const fetchUsersAsync1 = async () => {
   
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users")
    
      setUsers3(result.data);
    } 
  


  console.log(users1,"sas");
  console.log(users2,"QS");
  console.log(users3,"gS");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {users1.map((a)=> <p>{a.name}</p>


      )}
    </div>
  );
}
export default Index


