const HardSkil = ({img_icon,name_icon})=>{
    return(<div className="w-28 h-full">
        <img src={img_icon} className="h-28 w-28"/>
        <div className="text-center">{name_icon}</div>
    </div>)
}

export default HardSkil