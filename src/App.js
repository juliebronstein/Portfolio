import React from "react";
import { ColorTemContainer } from "./context/TemColorContext";

import { Home } from "./Home";
import FloatingNav from "./Components/FloatingNav/FloatingNav";




function App() {

  return (  
  <ColorTemContainer>
    
<Home/>
   
 </ColorTemContainer>
  );
}

export default App;
