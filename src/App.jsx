import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Students from './Students.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

function App() {

  const fruits = [{id: 1, name: "Apple", calories: 95},
                {id: 2, name: "oragne", calories: 120},
                {id: 3, name: "banana", calories: 24}, 
                  {id: 4, name: "coconut", calories: 4334},
                  {id: 5, name: "furit 5", calories: 434}];



  return(
    <>
    <List items={fruits} category="Fruits"></List>
    {/* <UserGreeting  ></UserGreeting> */}
    {/* <Students name="Spongebob"  age="30" isStudents={true}></Students>
    <Students name="Patrick" age={24} isStudents={false} ></Students>
    <Students name="Ayush" age={22} isStudents={true}></Students>
    <Students name = "Sandy" age={27} isStudents={true}></Students>
    <Students name ="Larry "/> */}

    {/* <Button></Button> */}
    {/* <Header></Header> */}
    {/* <Card></Card> */}
    {/* <Card></Card> */}
    {/* <Food></Food> */}
    {/* <Footer></Footer> */}

    </>
  );

}

export default App
