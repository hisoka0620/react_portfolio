import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleClass: false}; 
    }
    toggleClass(){
         this.setState({isToggleClass: ! this.state.isToggleClass});   
    }
    
    render(){
        const header_icon = "https://www.illust-ai.com/datas/00000074.png?2";
        
        return(
            <div className="header-wrapper">
                <div className="container">
                    <div className="header-parts-wrapper">
                        <a href="#">
                            <img src={header_icon} alt="header-icon"/>   
                        </a>
                        {/* classNameに空白を入れないと追加されたclassが認識されない */}
                        <div className={"navArea " + (this.state.isToggleClass ? "open" : "")}>
                            <nav>
                                <div className="inner">
                                <ul>
                                    <li><a href="#">トップ</a></li>
                                    <li><a href="#">自己紹介</a></li>
                                    <li><a href="#">学習した言語・知識</a></li>
                                    <li><a href="#">趣味</a></li>
                                    <li><a href="＃">これからの目標</a></li>
                                </ul>
                                </div>
                            </nav>

                            <div className="toggle_btn" onClick = {() => {this.toggleClass()}}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="mask" onClick={()=>{this.toggleClass()}}></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;