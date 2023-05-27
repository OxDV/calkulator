import "./App.css";
import Main from "./components/Main";

function App() {
  const items = [
    {
      id: 0,
      value: "0",
    },
    {
      id: 1,
      value: "1",
    },
    {
      id: 2,
      value: "2",
    },
    {
      id: 3,
      value: "3",
    },
    {
      id: 4,
      value: "4",
    },
    {
      id: 5,
      value: "5",
    },
    {
      id: 6,
      value: "6",
    },
    {
      id: 7,
      value: "7",
    },
    {
      id: 8,
      value: "8",
    },
    {
      id: 9,
      value: "9",
    },
    {
      id: 10,
      value: "+",
    },
    {
      id: 11,
      value: "-",
    },
    {
      id: 12,
      value: "*",
    },
    {
      id: 13,
      value: "/",
    },
    {
      id: 14,
      value: "=",
    },
    {
      id: 15,
      value: "Del",
    },
    {
      id: 16,
      value: "C",
    },
  ];

  return (
    <div className="App">
      <Main items={items} />
    </div>
  );
}
export default App;
