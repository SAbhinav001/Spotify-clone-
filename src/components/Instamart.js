import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";


const Element = ({ title, discription , isVisible, setIsVisisble}) => {

  

  //const [isVisible, setIsVisisble] = useState(false);

  return (
    <div style={{ border: "1px solid black", padding: "5px", margin: "5px" }}>
      <h1>{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisisble("")}>Hide</button>
      ) : (
        <button onClick={() => setIsVisisble(title)}>Show</button>
      )}

      {isVisible && <p>{discription}</p>}
    </div>
  );
};

// const Instamart = () => {
//     const [config, setConfig] = useState({
//         element1 : false,
//         element2 : false,
//         element3 : false,
//     })
//   return (
//     <div>
//       <Element
//         title={"Element1"}
//         discription={
//           "ldjhbvahjvcahgvcahgdcvashbcasjhcbajhscbvaksjhgcvbasjhdbvcajhcvahgdcvashgcvahsjcvashgcvshgcvahsgdvcakhsgsdcvas"
//         }
//         isVisible={config.element1}
//         setIsVisisble={()=>setConfig({
//             element1 : true,
//             element2 : false,
//             element3 : false,
//         })}
//       />
//       <Element
//         title={"Element2"}
//         discription={
//           "ldjhbvahjvcahgvcahgdcvashbcasjhcbajhscbvaksjhgcvbasjhdbvcajhcvahgdcvashgcvahsjcvashgcvshgcvahsgdvcakhsgsdcvas"
//         }
//         isVisible={config.element2}
//         setIsVisisble={()=>setConfig({
//             element1 : false,
//             element2 : true,
//             element3 : false,
//         })}

//       />
//       <Element
//         title={"Element3"}
//         discription={
//           "ldjhbvahjvcahgvcahgdcvashbcasjhcbajhscbvaksjhgcvbasjhdbvcajhcvahgdcvashgcvahsjcvashgcvshgcvahsgdvcakhsgsdcvas"
//         }
//         isVisible={config.element3}
//         setIsVisisble={()=>setConfig({
//             element1 : false,
//             element2 : false,
//             element3 : true,
//         })}
//       />
//     </div>
//   );
// };

const Instamart = () => {

  const cardItems = useSelector((store) => store.cart.itmes)

  
    const [config, setConfig] = useState(null)
    const setFun = (xyz)=> setConfig(xyz)
  return (
    <div>
      <Element
        title={"Element1"}
        discription={
          "ldjhbvahjvcahgvcahgdcvashbcasjhcbajhscbvaksjhgcvbasjhdbvcajhcvahgdcvashgcvahsjcvashgcvshgcvahsgdvcakhsgsdcvas"
        }
        isVisible={config == "Element1"}
           //setIsVisisble={(xyz)=>setConfig(xyz)}
        setIsVisisble={setFun}
      />
      <Element
        title={"Element2"}
        discription={
          "ldjhbvahjvcahgvcahgdcvashbcasjhcbajhscbvaksjhgcvbasjhdbvcajhcvahgdcvashgcvahsjcvashgcvshgcvahsgdvcakhsgsdcvas"
        }
        isVisible={config == "Element2"}
        //setIsVisisble={(xyz)=>setConfig(xyz)}
        setIsVisisble={setFun}

      />
      <Element
        title={"Element3"}
        discription={
          "ldjhbvahjvcahgvcahgdcvashbcasjhcbajhscbvaksjhgcvbasjhdbvcajhcvahgdcvashgcvahsjcvashgcvshgcvahsgdvcakhsgsdcvas"
        }
        isVisible={config == "Element3"}
       // setIsVisisble={(xyz)=>setConfig(xyz)}
       setIsVisisble={setFun}
      />

      <div>
        {cardItems.map((obj)=> <h1>{obj}</h1>)}
      </div>

    
    </div>
  );
};

export default Instamart;
