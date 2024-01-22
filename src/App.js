import "./App.css";
import { useState } from "react";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit}, `;
    });
    tempResult = tempResult.slice(0, -2);
    setResult(tempResult);
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    //원본배열의 가공복제: 원본배열을 복제해서 나타낸다.
    const mapList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mapList);
  };

  const handleReduce = () => {
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc},${cur}`;
    });
    setResult(reducedList);
  };
  {
    /* push & pop */
  }
  const handlePush = () => {
    if (!query) {
      alert("no input");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    const sliceList = array.slice(0, 3);
    setResult(sliceList.join(", "));
  };

  const handleSplice = () => {
    const spliceList = array.splice(2, 2, "kiwi", "lime");
    setResult(array.join(", "));
  };

  const handleindexOf = () => {
    const indexList = array.map(function (fruit) {
      return fruit.indexOf(query);
    });
    console.log(indexList);
    setResult(indexList.join(", "));
  };
  const handleIncludes = () => {
    const includedList = array.map(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(includedList);
  };
  const handleFind = () => {
    const findList = array.find((fruit) => fruit.includes(query));
    console.log(findList);
    if (findList) {
      setResult(findList);
    } else {
      setResult("Not Found");
    }
  };
  const handleSome = () => {
    const someList = array.some((fruit) => fruit.includes(query));
    console.log(someList);
    setResult(someList.toString());
  };
  const handleEvery = () => {
    const everyList = array.every((fruit) => fruit.length > 5);
    console.log(everyList);
    setResult(everyList.toString());
  };
  const handleSort = () => {
    const sortList = array.sort().reverse();
    console.log(sortList);
    setResult(sortList.join(", "));
  };
  const handleJoin = () => {};

  return (
    <div className="container">
      <h1>배열에 대한 함수들 API</h1>
      <div>
        <input
          placeholder="Enter text"
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        ></input>
      </div>
      <div className="button">
        {/* inline방식 */}
        <button onClick={handleForEach}>ForEach</button>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleMap}>Map</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleindexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div className="originalArray">
        <strong>원본배열: </strong> {array.join(", ")}
      </div>
      <div className="changedArray">
        <strong>결과물: </strong> {result}
      </div>
    </div>
  );
}

export default App;
