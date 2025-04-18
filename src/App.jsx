import { useState } from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main";
function App() {
  const [amounts, setAmount] = useState(0);

  const handleClick = () => {
    setAmount(amounts + 500000);
  }
  return (
    <div className="regular-font max-w-[1320px] mx-auto px-2 sm:px-3 md:px-5 lg:px-6">
      <Header amounts = {amounts}></Header>
      <Banner handleClick={handleClick}></Banner>
      <Main></Main>
    </div>
  )
}

export default App;
