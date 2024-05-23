const Cover = () =>{
    return(
      <div className="flex flex-row  h-screen bg-hero-pattern bg-cover bg-center" >
        <div className="basis-1/2 content-center">
          <p className="text-[50px] text-center text-white">welcom to my</p>
          <p className="text-[150px] text-center text-white">Portfolio</p>
        </div>
        <div className="basis-1/2 content-center" >
          <img src="images/man.jpg"></img>
        </div>
      </div>
    )
}

export default Cover;