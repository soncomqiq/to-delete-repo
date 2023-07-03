import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StudentItem from "./components/StudentItem";

function App() {
    const studentList = [
        { name: "Tom", surname: "Cruise", age: 60 },
        { name: "Johny", surname: "Depp", age: 59 },
        { name: "Keanu", surname: "Reeves", age: 58 },
        { name: "Samuel", surname: "Jackson", age: 73 },
    ];

    return (
        <div className="App">
            <h5>React App</h5>
            <StudentItem
                name={studentList[0].name}
                surname={studentList[0].surname}
                age={studentList[0].age}
            ></StudentItem>
            <StudentItem
                name={studentList[1].name}
                surname={studentList[1].surname}
                age={studentList[1].age}
            ></StudentItem>
            <StudentItem
                name={studentList[2].name}
                surname={studentList[2].surname}
                age={studentList[2].age}
            ></StudentItem>
            <StudentItem
                name={studentList[3].name}
                surname={studentList[3].surname}
                age={studentList[3].age}
            ></StudentItem>
        </div>
    );
}

export default App;
