import Counter from "./Counter";
import CounterFn from "./CounterFn";
import Header from "./Header";
import Person from "./Person";
import PersonData from '../Data/Person';
import Container from "./Container";
import { useState } from "react";
function App() {

  const headingCss = { backgroundColor: "red", color: "white" }
  const [data, setData] = useState(PersonData);
  const clicked = (index) => {
    console.log(index);
    const newData = data.filter(
      (d, i) => {
        return index != i;
      }
    )
    setData(newData);
  }
  const person = data.map(
    (d, index) => {
      return <Person name={d.name} dec={d.desc} event={() => clicked(index)} key={index} />
    }
  )
  return (
    <>
      <Header />
      <Container content={person} />
      <Container content={
        <>
          <Counter name="Testing"></Counter>
          <CounterFn />
        </>
      } />

    </>
  )
}

export default App;