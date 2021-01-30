import React from 'react';

class Challenge extends React.Component{
    render(){
        return(
            <div className="challenge-wrapper">
                <div className="container">
                    <h1>これからの目標</h1>
                    <ul>
                        <li>・現在、フロントエンド(HTML,CSS,JavaScript,React)の勉強を中心的に行っていますが、将来的にはバックエンドの知識も身につけていきたい。</li>
                        <li>・正直、勉強していて分からないことが多すぎるので優先順位をつけて作業していきたい。</li>
                        <li>・一つ一つの課題と向き合い対処できる能力を鍛えていきたい。</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Challenge;