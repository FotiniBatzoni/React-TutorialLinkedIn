import React, {useState, useEffect,useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Building blocks
//1
// ReactDOM.render(
//   React.createElement("h1", {
//     style: {
//       color: 'blue'
//     }
//   }, "Hello!"),
//   document.getElementById('root')
// );

//2
// ReactDOM.render(
//   React.createElement("div", {
//       style: {
//         color: 'blue'
//       }
//     },
//     React.createElement("h1", null, "Hi!")),
//   document.getElementById('root')
// );

//3
// ReactDOM.render(
//      <ul>
//        <li>Hot Dogs</li>
//        <li>Hamburgers</li>
//        <li>Pizza</li>
//      </ul>,
//   document.getElementById('root')
// );

//4
// let city ="Madrid";

// ReactDOM.render(
//   <h1>Hello from {city}</h1>,
//   document.getElementById('root')
//  );

// //5
// let city ={
//   name: "Madrid",
//   country: "Spain"
// };

// ReactDOM.render(
//   <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>,
//   document.getElementById('root')
//  );

//COMPONENTS

//1
// function Hello(){
//   return <h1>Welcome to React!</h1>;
// }

//2
// function Hello(){
//   return(
//     <div>
//       <h1>Welcome to React!</h1>
//       <p>Let's build something cool!</p>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Hello />,
//   document.getElementById('root')
//  );

//PROPS

//  function Hello(props){
//    //we conslole log the keys of the props object
//    console.log(Object.keys(props));
//   return(
//     <div>
//       <h1>Welcome to {props.library}</h1>
//       <p>Let's build something cool!</p>
//       <p>{props.message}</p>
//       <p>{props.number} Props total</p>
//       <p>{Object.keys(props).length} Total</p>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Hello library="React Framework"
//           message="Have Fun!!!"
//           number={3}/>,
//   document.getElementById('root')
//  );

//2

//instead of passing the entire object
// // we can reference proprerties
// function Hello({library, message, number}){
//  return(
//    <div>
//      <h1>Welcome to {library}</h1>
//      <p>Let's build something cool!</p>
//      <p>{message}</p>
//      <p>{number} Props total</p>
//    </div>
//  )
// }

// ReactDOM.render(
//  <Hello library="React Framework"
//          message="Have Fun!!!"
//          number={3}/>,
//  document.getElementById('root')
// );

// function Lake(name) {
//   return(
//     <h1>{name}</h1>
//   )
// }

// //THis is the parent component of 3 Lake components
// //all of them have a name property
// function App() {
//   return (
//   <div >
//     <Lake name ="Lake Tahoe"/>
//     <Lake name ="Angora Lake"/>
//     <Lake name ="Shirley Lake"/>
//     < /div>
//     );
// };

// ReactDOM.render(
//   <App / > ,
//   document.getElementById("root")
// );

// const lakeList = ['Echo Lake', 'Maud Lake', 'Cascade Lake'];

// function App({ lakes }) {
// 	return (
// 		<ul>
// 			{lakes.map((lake) => (
// 				<li> {lake} </li>
// 			))}
// 		</ul>
// 	);
// }

// ReactDOM.render(<App lakes={lakeList} />, document.getElementById('root'));


// const lakeList = [
//   {id:"1", name: "Echo", trailhead:"Echo"},
//   {id:"2", name: "Maud", trailhead:"Wrights"},
//   {id:"3", name: "Velma", trailhead:"Bayview"}
// ];

// function App({ lakes }) {
// 	return (
// 	<div key={lake.id}>
//     {lakes.map(lake =>(
//       <div key={lake.id}>
//         <h2>{lake.name}</h2>
//         <p>Accessed by : {lake.trailhead} </p>
//         </div>
//     ))}
//   </div>
// 	);
// }

// ReactDOM.render(
//   <App lakes={lakeList} />, 
//   document.getElementById('root')
// );


// const list=[1,2,3,4,5];


// function App({ items }) {
// 	return (
// 	<ul>
//     {items.map((item, i) => (
//       <li key={item.toString()}>{item}</li>
//     ))}
//   </ul>
// 	);
// }

// ReactDOM.render(
//   <App items={list} />, 
//   document.getElementById('root')
// );




// function Lake(name) {
//   return (<
//     div >
//     <
//     h1 > Visit {name}! < /h1> < /
//     div >
//   )
// }

// function SkiResort(name) {
//   return ( <
//     div >
//         <
//     h1 > Visit {name}! < /h1> < /
//     div >
//   )
// }


// function App(props) {
//   <div>
//   if (props.seasson === "summer") {
//     return <Lake name="Jenny Lake"/>
//   } else if (props.seasson === "winter") {
//     return <SkiResort name="Jackson Hole Mountain Resort"/>
//   }
  

//   //or
//   // {props.seasson==="summer" ? 
//   //   (<Lake name="Jenny Lake"/>) 
//   //   : props.seasson==="winter" ?
//   //   <SkiResort name="Jackson Hole Mountain Resort"/>
//   //   : (<h1>
//   //     Come back on winter or summer
//   //   </h1>)
//   // }

//   </div>
// };

// ReactDOM.render( <
//             App  seasson = "winter" /> ,
//        document.getElementById("root")
//     );





// function Lake() {
//   return (
//     <h1 > Lake! < /h1> 
//   )
// }

// function SkiResort() {
//   return ( 
//         <h1 > Ski Resort! < /h1> 
//   )
// }


//  function App() {
//   return (
//     <React.Fragment>
//       <Lake />
//       <SkiResort />
//     </React.Fragment>
//   );
// }

//  ReactDOM.render( <
//              App  /> ,
//         document.getElementById("root")
//    );



// const [first,second,third] = [ "popcorn" , "pretzels" , "pineapple"];

// console.log(first); //pineapple
// console.log(second); //pretzels
// console.log(third); //pineapple



// //useState

//  function App() {
//    const [year,setYear] = useState(2050);
//    const [manager,setManager] = useState("Alex");
//    const [status, setStatus] = useState("Open");
//   return (
//     <React.Fragment>
//       <div>
//         <h1>{year}</h1>
//         <button onClick={() => setYear(year +1)}>New Year!</button>
//       </div>
//     <div>
//       <h1>Manager on Duty: {manager}</h1>
//       <button onClick={() => setManager("Rachel")}>New Manager</button>
//     </div>
//     <div>
//       <h1>Status : {status}</h1>
//       <button onClick={() => setStatus("Open")}>Open</button>
//       <button onClick={() => setStatus("Back in 5")}>Break</button>
//       <button onClick={() => setStatus("Closed")}>Closed</button>
//     </div>
//     </React.Fragment>
//   );
// }

//  ReactDOM.render( <
//              App  /> ,
//         document.getElementById("root")
//    );

  //   //useEffect
  //  function Checkbox(){
  //    const [checked, setChecked] =useState(false);

  //    useEffect(() =>{
  //     alert(`checked: ${checked.toString()}`);
  //    });

  //     return (
  //       <>
  //       <input type="checkbox" 
  //               value={checked}
  //               onChange = { () => 
  //                   setChecked(checked =>!checked)} />
  //       {checked ? "checked" : "not checked"} 
  //       </>
  //     )
//   //  }

//   ReactDOM.render( 
//     <Checkbox  /> ,
//  document.getElementById("root")
 //);
 



//   //depedency array 
//   function App(){
//     const [val,setVal]= useState("");
//     const [val2,setVal2]= useState("");

//     useEffect(() => {
//       console.log(`field 1: ${val}`);
//     }, [val]);

//     useEffect(() => {
//       console.log(`field 2: ${val2}`);
//     },[val2]);

//     return(
//       <>
//         <label>
//           Favorite Phrase:
//           <input value={val} 
//                   onChange = {e => setVal(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Second Favorite Phrase:
//           <input value={val2}
//                   onChange = {e => setVal2(e.target.value) } />
//         </label>
//       </>
//     )
//   }


//  ReactDOM.render( 
//    <App /> ,
//     document.getElementById("root")
// );




//   //Fetching Data with use Effect

//   function GitHubUser({login}){
//     const [data, setData] = useState(null);
//     useEffect(() => {
//       fetch(`https://api.github.com/users/${login}`)
//         .then(response => response.json())
//         .then(setData)
//         .catch(console.error);
//     },[] );

//     if (data){
//       return(
//         <div>
//           <h1>{data.login}</h1>
//           <img src={data.avatar_url} width={100} />
//         </div>
//       );
//     }
//     return(null);
//   }

//   function App(){
//     return <GitHubUser login ="moonhighway"/>
//   }


//  ReactDOM.render( 
//    <App /> ,
//     document.getElementById("root")
// );




//useReducer

function Checkbox(){
  const [checked, toggle] = useReducer(checked =>!checked,false);

  return(
    <>
      <input type="checkbox" 
              value={checked}
              onChange={toggle}
              />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render( 
  <Checkbox /> ,
   document.getElementById("root")
);
