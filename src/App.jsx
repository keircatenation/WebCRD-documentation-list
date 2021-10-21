import { useState } from 'react'
import './App.css'
import Filters from './components/Filters'
import Table from './components/Table'

function App() {
  const [column, setColumn] = useState("category");
  const [direction, setDirection] = useState(true);
  const [filterColumn, setFilterColumn] = useState("");
  const [filterName, setFilterName] = useState("")

  return (
    <>
      <Filters
        column={column}
        setColumn={setColumn}
        direction={direction}
        setDirection={setDirection}
        filterColumn={filterColumn}
        setFilterColumn={setFilterColumn}
        filterName={filterName}
        setFilterName={setFilterName}
      />
      <Table
        column={column}
        setColumn={setColumn}
        direction={direction}
        setDirection={setDirection}
        filterColumn={filterColumn}
        filterName={filterName}
      />
    </>
  )
}

export default App
