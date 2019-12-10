import React from 'react';
import arrow from "../static/arrow.png";

class ChoiceMore extends React.Component {

    render() {
        return (
            <div>
                <div className="recommend">
                    <div className="recommend-title">
                        <a href="http://www.baidu.com" className="recommend-a">
                            <p>大家都在看</p>
                            <span className="arrow">
                                <img src={arrow} alt="next"/>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="recommend-list">
                    <div className="recommend-list-content">
                        <ul className="book-ul">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="book-li">
                                            <a href="https://www.baidu.com">
                                                <div className="book-info">
                                                    <img src={item.get('bookcover')} className="book-cover" alt=""/>

                                                    <div className="book-content">
                                                        <p className="book-title">{item.get('bookname')}</p>
                                                        <span className="author-cont">
                                                            <span className="author">{item.get('author')}&nbsp;著</span>
                                                            <span className="book-rand-a">{item.get('synopsis')}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }

                            <div className="layout-flow-more">
                                <a href="https://www.baidu.com">
                                    <cite>加载更多</cite>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChoiceMore;
