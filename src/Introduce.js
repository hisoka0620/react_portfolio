import React from 'react';
import Contents from './Contents';
import html_original_wordmark_logo from './img/html_original_wordmark_logo_icon_146478.png'
import css_original_wordmark_logo from './img/css_original_wordmark_logo_icon_146576.png'
import javascript_original_logo from './img/javascript_original_logo_icon_146455.png'
import jquery_original_wordmark_logo from './img/jquery_original_wordmark_logo_icon_146447.png'
import mysql_original_wordmark_logo from './img/mysql_original_wordmark_logo_icon_146417.png'
import nodejs_original_wordmark_logo from './img/nodejs_original_wordmark_logo_icon_146412.png'
import react_original_wordmark_logo from './img/react_original_wordmark_logo_icon_146375.png'
import github_original_wordmark_logo from './img/github_original_wordmark_logo_icon_146506.png'

class Introduce extends React.Component{
    render(){
        const languages = [
            {
                // HTML
                image: html_original_wordmark_logo
            },
            {
                // CSS
                image: css_original_wordmark_logo
            },
            {
                // JavaScript
                image: javascript_original_logo
            },
            {
                // jQuery
                image: jquery_original_wordmark_logo
            },
            {
                // mySQL
                image: mysql_original_wordmark_logo
            },
            {
                // nodejs
                image: nodejs_original_wordmark_logo
            },
            {
                // React
                image: react_original_wordmark_logo
            },
            {
                // GitHub
                image: github_original_wordmark_logo
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