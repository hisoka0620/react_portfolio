import React from 'react';
import Contents from './Contents';

class Introduce extends React.Component{
    render(){
        const languages = [
            {
                // HTML
                image: './img/html_original_wordmark_logo_icon_146478.png'
            },
            {
                // CSS
                image: './img/css_original_wordmark_logo_icon_146576.png'
            },
            {
                // JavaScript
                image: './img/javascript_original_logo_icon_146455.png'
            },
            {
                // jQuery
                image: './img/jquery_original_wordmark_logo_icon_146447.png'
            },
            {
                // mySQL
                image: './img/mysql_original_wordmark_logo_icon_146417.png'
            },
            {
                // nodejs
                image: './img/nodejs_original_wordmark_logo_icon_146412.png'
            },
            {
                // React
                image: './img/react_original_wordmark_logo_icon_146375.png'
            },
            {
                // GitHub
                image: './img/github_original_wordmark_logo_icon_146506.png'
            },
        ];   
        return(
            <div className="introduce-wrapper">
                <div className="container">
                    <h1>自己紹介</h1>
                    <ul className="introduce-parts">
                        <li>私の名前は上野健太です。</li>
                        <li>学生時代にはC言語、Java、VB、SQLを勉強していました。</li>
                        <li>現在25歳で、日々プログラミングに励んでいます。</li>
                    </ul>
                    <div className="programming-language-wrapper">
                        <h2>学習した言語と知識</h2>
                        <div className="languages-wrapper">
                            {languages.map((item) => {
                                return(
                                    <Contents 
                                        image = {item.image}
                                    />
                                )   
                            })}
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Introduce; 