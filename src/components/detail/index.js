import React from 'react';

import './index.css';
import default_book_cover from './../../static/default_bookcover.jpg';
import {connect} from 'react-redux';
import {loadDetail} from './../../store/actionCreators.js';
import {Button} from "antd-mobile";
import img_back from './../../static/img_back.png';
import {Link} from "react-router-dom";
import arrow from "../../static/arrow.png";

class Detail extends React.Component {

    render() {
        const detailsData = this.props.dataDetail.get('detailsdata');
        console.log(this.props.dataDetail.get('detailsdata').get('bookid'));
        return (
            <div>
                <div className="nav-cont">
                        <span className="nav-back">
                            <Link to={'/index'}>
                                <img src={img_back} alt="back"/>
                            </Link>
                        </span>
                    <span className="nav-text">书籍详情</span>
                </div>

                <div className="book-detail-info">
                    <div className="book-img">
                        <img src={detailsData.get('bookcover') || default_book_cover} alt=""
                             className="book-cover"/>
                        <div className="book-info">
                            <p className="book-title">{detailsData.get('bookname')}</p>
                            <p className="book-author">作者: {detailsData.get('author')}</p>
                            <p className="book-author">类别: {detailsData.get('classname')}</p>
                            <p className="book-author">字数: {detailsData.get('wordnumbers')} | {detailsData.get('serstatus')}</p>
                            <p className="book-author">点击: {detailsData.get('clicknumber')}</p>
                        </div>
                    </div>
                </div>

                <div className="book-detail-content">
                    <div className="detail-button">
                        <Button type="warning" inline style={{width: '48%'}}>开始阅读</Button>
                        <Button type="primary" inline style={{
                            width: '48%',
                            float: 'right',
                            background: '#f5f5f5',
                            color: '#2d2d2d'
                        }}>加入书架</Button>
                    </div>

                    <div className="detail-book-synopsis">
                        <div className="detail-book-synopsis-content">内容简介:{detailsData.get('synopsis')}</div>
                    </div>

                    <div className="book-detail-catalog">
                        <Link to={'/directory/' + detailsData.get('bookid')} className="book-detail-catalog-a">
                            <span>目录</span>
                            <span className="book-detail-arrow">
                                    <img src={arrow} alt="next"/>
                                </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const bookId = this.props.match.params.id;
        this.props.initDetail(bookId);
    }
}

const mapStateToProps = (state) => {
    return {
        dataDetail: state.get('dataDetail'),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initDetail(bookId) {
            const action = loadDetail(28519, bookId);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
