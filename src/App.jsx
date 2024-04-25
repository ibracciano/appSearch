import { useState } from "react"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import data from "./data/data"


const App = () => {

  const [input, setInput] = useState('');
  const [val, setVal] = useState('all');
  const [datas, setDatas] = useState(data);
  const [color, setColor] = useState('all');
  const [price, setPrice] = useState('all');
  const [value, setValue] = useState('All')


  function handleSneakers() {
    setVal('sneakers');
    setDatas(data.filter((item) => item.category === "sneakers"));
    setPrice('all');
    setColor('all');
    setValue('All');

  }
  function handleFlats() {
    setVal('flats');
    setDatas(data.filter((item) => item.category === "flats"));
    setPrice('all');
    setColor('all');
    setValue('All');
  }
  function handleSandals() {
    setVal('sandals');
    setDatas(data.filter((item) => item.category === "sandals"));
    setPrice('all');
    setColor('all');
    setValue('All');
  }
  function handleHeels() {
    setVal('heels');
    setDatas(data.filter((item) => item.category === "heels"));
    setPrice('all');
    setColor('all');
    setValue('All');
  }
  function handleAll() {
    setVal('all');
    setDatas(data);
    setPrice('all');
    setColor('all');
    setValue('All');
  }

  function colorAll() {
    setColor('all');
    setDatas(data);
    setVal('all');
    setPrice('all');
    setValue('All');
  }
  function colorRed() {
    setColor('red');
    setDatas(data.filter((item) => item.color === "red"));
    setVal('all');
    setPrice('all');
    setValue('All');
  }
  function colorBlue() {
    setColor('blue');
    setDatas(data.filter((item) => item.color === "blue"));
    setVal('all');
    setPrice('all');
    setValue('All');
  }
  function colorGreen() {
    setColor('green');
    setDatas(data.filter((item) => item.color === "green"));
    setVal('all');
    setPrice('all');
    setValue('All');
  }
  function colorBlack() {
    setColor('black');
    setDatas(data.filter((item) => item.color === "black"));
    setVal('all');
    setPrice('all');
    setValue('All');
  }
  function colorWhite() {
    setColor('white');
    setDatas(data.filter((item) => item.color === "white"));
    setVal('all');
    setPrice('all');
    setValue('All');
  }

  function priceAll() {
    setPrice('all');
    setDatas(data);
    setVal('all');
    setColor('all');
    setValue('All');
  }
  function priceOne() {
    setPrice('one');
    setDatas(data.filter((item) => parseInt(item.newPrice) <= 50));
    setVal('all');
    setColor('all');
    setValue('All');
  }
  function priceTwo() {
    setPrice('two');
    setDatas(data.filter((item) => parseInt(item.newPrice) > 50 && parseInt(item.newPrice) <= 100))
    setVal('all');
    setColor('all');
    setValue('All');
  }
  function priceThree() {
    setPrice('three');
    setDatas(data.filter((item) => parseInt(item.newPrice) > 100 && parseInt(item.newPrice) <= 150));
    setVal('all');
    setColor('all');
    setValue('All');
  }
  function priceFor() {
    setPrice('for');
    setDatas(data.filter((item) => parseInt(item.newPrice) > 150));
    setVal('all');
    setColor('all');
    setValue('All');
  }


  function All() {
    setValue('All')
    setDatas(data)
    setVal('all')
    setPrice('all')
    setColor('all')
  }

  function Nike() {
    setValue('Nike')
    setDatas(data.filter(item => item.company.includes('Nike')))
    setVal('all')
    setPrice('all')
    setColor('all')
  }

  function Adidas() {
    setValue('Adidas')
    setDatas(data.filter(item => item.company.includes('Adidas')))
    setVal('all')
    setPrice('all')
    setColor('all')
  }

  function Puma() {
    setValue('Puma')
    setDatas(data.filter(item => item.company.includes('Puma')))
    setVal('all')
    setPrice('all')
    setColor('all')
  }

  function Vans() {
    setValue('Vans')
    setDatas(data.filter(item => item.company.includes('Vans')))
    setVal('all')
    setPrice('all')
    setColor('all')
  }

  return (
    <div className="flex">
      <Sidebar handleSneakers={handleSneakers} handleFlats={handleFlats} handleSandals={handleSandals} handleHeels={handleHeels} handleAll={handleAll} val={val} setVal={setVal} colorAll={colorAll} colorBlack={colorBlack} colorBlue={colorBlue} colorGreen={colorGreen} colorRed={colorRed} colorWhite={colorWhite} color={color} price={price} priceOne={priceOne} priceTwo={priceTwo} priceThree={priceThree} priceFor={priceFor} priceAll={priceAll} />

      <Main input={input} setInput={setInput} datas={datas} setDatas={setDatas} setColor={setColor} setPrice={setPrice} setVal={setVal} All={All} Nike={Nike} Adidas={Adidas} Puma={Puma} Vans={Vans} value={value} />
    </div>
  )
}

export default App
