import Img from './../img/xinwentupian.jpg'


function Content(props){
    return(
    <div className="content">
       <div><span>啦啦啦啦</span><div id="divimg"><img src={Img}/></div></div>
       <div><img src={Img}/><span>哈哈哈哈</span></div>
    </div>
        )
}
export default Content;