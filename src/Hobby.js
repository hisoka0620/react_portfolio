import React from 'react';

class Hobby extends React.Component{
    constructor(props){
        super(props);
        this.state = {isModalOpen: false};
    }
        handleClickOpen(){
            this.setState({isModalOpen: true});
        }
        handleClickOpen2(){
            this.setState({isModal2Open: true});
        }
        handleClickClose(){
            this.setState({isModalOpen: false});
        }
        handleClickClose2(){
            this.setState({isModal2Open: false});
        }
  render(){
      const game_images = [
          {image:'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg',
           text: 'EAによって作られた日本で大人気なバトルロワイヤル。大人から子供まで幅広い層に人気がある。'},
          {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Osu%21Logo_%282015%29.svg/1200px-Osu%21Logo_%282015%29.svg.png',
           text: '海外で人気がある音ゲー。日本ではあまり流行ってはいない模様。'},
          {image: 'https://prtimes.jp/i/24470/122/resize/d24470-122-689890-1.png',
           text: 'Riotによって作られた5vs5のタクティカルシューターゲーム。現在、日本でも盛り上がりを見せている。幅広い層に人気のゲーム。'}
      ];
      const anime_images = [
        {
            image: 'https://gakkougurashi-movie.jp/wp-content/uploads/2020/12/anime-jujutsukaisen.png',
            text: '人間の負の感情から生まれる化け物・呪霊を呪術を使って祓う呪術師の闘いを描いた、ダークファンタジー・バトル漫画'
        },
        {
            image: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/21/23/8/21238_1_1.png?1551269802000',
            text: '異世界からの侵略者・ネイバーと防衛組織・ボーダーの戦いを描くSFアクション'
        },
        {
            image: 'https://gakkougurashi-movie.jp/wp-content/uploads/2021/01/anime-re-zero-2nd.png',
            text: '異世界に召喚された引きこもりの少年・ナツキスバルが、唯一与えられた能力「死に戻り」の力を使って、終わりのない死の運命に抗い続ける物語。'
        }
      ];
        let modal1;
      if(this.state.isModalOpen){
          modal1 = (
            <div className="modal-wrapper">
                <h1>好きなゲーム</h1>
                {game_images.map((item) => {
                    return(
                    <div className="modal-contents">
                        <img src={item.image}/>
                        <p>{item.text}</p>
                    </div>
                    )
                })}
                <button className="modal-close-button" onClick={() => {this.handleClickClose()}}>閉じる</button>
            </div>
          )
        }
        let modal2;
        if(this.state.isModal2Open){
            modal2 = (
                <div className="modal-wrapper2">
                    <h1>好きなアニメ</h1>
                    {anime_images.map((item) => {
                        return(
                        <div className="modal-contents">
                            <img src={item.image}/>
                            <p>{item.text}</p>
                        </div>
                        )
                    })}
                    <button className="modal-close-button" onClick={() => {this.handleClickClose2()}}>閉じる</button>
                </div>
              )
        }
    return(
        <div className="hobby-wrapper">
            <div className="container">
                <h1>趣味</h1>
                <div className="hobby-sub-wrapper">
                    <div className="game-image-wrapper">
                        <div className="game-image-part">
                            <img className="game-image" src="./img/PCgame.png" />
                            <p>PCゲーム</p>    
                            <span>＊ほどほどに..</span>
                        </div>
                        <button className="hobby-common-btn" onClick = {() => {this.handleClickOpen()}}>もっと詳しく</button>
                        {modal1}
                    </div>
                    <div className="anime-image-wrapper">
                        <div className="anime-image-part">
                            <img className="anime-image" src="./img/jujutsukaisen.jpg" />
                            <p>アニメ鑑賞</p>
                        </div>
                        <button className="hobby-common-btn" onClick = {() => {this.handleClickOpen2()}}>もっと詳しく</button>
                        {modal2}
                    </div>
                </div>
                
            </div>      
        </div>
    )
  }
}

export default Hobby;