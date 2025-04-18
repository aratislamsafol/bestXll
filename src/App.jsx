import { useState } from "react";
import Header from "./Components/Header/Header";
function App() {
  const [amounts, setAmount] = useState(0);

  const handleClick = () => {
    setAmount(5000000);
  }
  return (
    <div className="regular-font max-w-[1320px] mx-auto px-2 sm:px-3 md:px-5 lg:px-6">
      <Header amounts = {amounts}></Header>
    </div>
  )
}

export default App;
