import React from 'react';
import arrow from "../../static/arrow.png";
import './index.css';
import {Link} from "react-router-dom";

class NewBook extends React.Component {
    render() {
        return (
            <div>
                <div className="new-book-recommend">
                    <div className="new-book-title">
                        <a href="http://www.baidu.com" className="next">
                            <p>新书上架</p>
                            <span className="arrow">
                            <img src={arrow} alt=""/>
                        </span>
                        </a>
                    </div>
                </div>

                <div className="new-book">
                    <div className="new-book-content">
                        <ul className="new-book-list page current">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li key={item.get('bookid')} className="book-content">
                                            <Link to={'/detail/' + item.get('bookid')} className="strong-list-a">
                                                    <img src={item.get('bookcover')} className="img-new-book" alt=""/>

                                                <p className="story-title">{item.get('bookname')}</p>
                                                <p className="story-name">{item.get('author')}&nbsp;著</p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewBook;
