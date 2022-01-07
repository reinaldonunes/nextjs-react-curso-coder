import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import Door from "../model/door"

export default function Home() {
  const [p1, setP1] = useState(new Door(1))
  //const p2 = new Door(2)
  //const p3 = new Door(3)

  return (
    <div className="wrapDoors">
      <Porta value={p1}/>
    </div>
  )
}