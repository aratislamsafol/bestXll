import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main";
import { ToastContainer, toast } from 'react-toastify';
import AmountCalculate from "./Components/Utils/AmountCalculate";
function App() {
  const [amounts, setAmount] = useState(0);
  const [loadData, setLoadData] = useState([]);
  const [selected, setSelected] = useState([]);


  useEffect(()=>{
    fetch('data.json')
        .then(response => response.json())
        .then(data => setLoadData(data))
},[]);

  const handleClick = () => {
    toast.success('Money Added');
    setAmount(amounts + 500000);
  }

  const handleSelected = (selecData) => {
    if (selected.length >= 6) {
      toast.warn('You Cannot Added More than 6 players');
      return false;
    }
    if (amounts < AmountCalculate(selecData.price)) {
      toast.error('Amount is Low, Add Money');
      return false;
    }
    
    setSelected([...selected, selecData]);
    setAmount(amounts - AmountCalculate(selecData.price));
    toast.success('Added Successfully');
    return true;
  };
  

  return (
    <div className="regular-font max-w-[1320px] mx-auto px-2 sm:px-3 md:px-5 lg:px-6">
      <ToastContainer />
      <Header amounts = {amounts}></Header>
      <Banner handleClick={handleClick}></Banner>
      <Main loadData={loadData} handleSelected={handleSelected} selected={selected}></Main>
    </div>
  )
}

export default App;
