
import { Fragment } from "react";
import { FunctionSample } from "./components/FunctionSample";
import { OneOFSample } from "./components/OneOFSample";
import { MultitypeComponent } from "./components/MultitypeComponent";
import { Header } from "./components/Header";
// import { firstComponent } from "./components/firstComponent";
import "./App.css";
import { Student } from "./components/Student";
import { Child } from "./components/Child";
import { ArraySample } from "./components/ArraySample";







function App() {

  const handleClick = () =>{
    alert("button clicked!");

  }
  

  const items = [
    {id:1,name:"item 1"},
    {id:2,name:"item 2"},
    {id:3,name:"item 3"}
  ];
  
  return (
    <Fragment>

      
      <Student Name= "balaji" Age={25} Married={false}/>
      <Student Name= "arun" Age={67} Married={true}/>
      <Student Name= "anand" Age={25} Married={true}/>
      <Student/>

      
      <Child>
        <p>this is p1</p>
        <p>this is p2</p>
        <p>this is p1</p>
      </Child>

     
      <ArraySample items={items} />


     
      <OneOFSample color ="blue"/>
      

      <MultitypeComponent value = "hello"/>
      <MultitypeComponent value = {25} />
      <MultitypeComponent value = {true}/>

      <FunctionSample handleClick= {handleClick}/>

      


      
    </Fragment>
  
  );
 
    
  
}

export default App;
