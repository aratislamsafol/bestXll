import { useState } from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
function App() {
  const [amounts, setAmount] = useState(0);

  const handleClick = () => {
    setAmount(amounts + 500000);
  }
  return (
    <div className="regular-font max-w-[1320px] mx-auto px-2 sm:px-3 md:px-5 lg:px-6">
      <Header amounts = {amounts}></Header>
      <Banner handleClick={handleClick}></Banner>
    </div>
  )
}

export default App;
