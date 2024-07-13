import IconData from "../data/IconData"
import HardSkil from "./HardSkil"

const AllHeardSkill = ()=>{
    return(<div className="flex">{IconData.map((data,index)=>{
        return(<HardSkil key={index} {...data}/>)
      })}</div>)
}

export default AllHeardSkill