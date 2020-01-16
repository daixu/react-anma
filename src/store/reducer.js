import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    inputValue: '',
    list: [],
    dataObj: {
        cardata: [],
        heavydata: [],
        choicedata: [],
        recdata: [],
        hotdata: [],
        searchdata: [],
        completedata: [],
        classdata: [],
        subdata: [],
        clickdata: [],
        collectdata: [],
    },
    dataMore:{
        pagedata:[]
    },
    dataBanner: {
        picdata:[]
    },
    dataDetail: {
        detailsdata:{},
        likedata: []
    },
    dataDirectory: {
        pagedata:[]
    },
    dataComment: {
        sumreplycount: 0,
        comdata:[]
    },
    dataUserInfo: {
    },
    dataBookStackBoy: {

    },
    dataBookStackGirl: {

    },
    index: 0,
});

export default (state = defaultState, action) => {
    if (action.type === constants.GET_BANNER) {
        return state.set('dataBanner', action.data);
    }

    if (action.type === constants.INIT_LIST) {
        return state.set('dataObj', action.data);
    }

    if (action.type === constants.GET_MORE_LIST) {
        return state.set('dataMore', action.data);
    }

    if (action.type === constants.GET_DETAIL) {
        return state.set('dataDetail', action.data);
    }

    if (action.type === constants.GET_COMMENT) {
        return state.set('dataComment', action.data);
    }

    if (action.type === constants.GET_DIRECTORY) {
        return state.set('dataDirectory', action.data);
    }

    if (action.type === constants.GET_USER_INFO) {
        return state.set('dataUserInfo', action.data);
    }

    if (action.type === constants.GET_BOOK_STACK_BOY) {
        return state.set('dataBookStackBoy', action.data);
    }

    if (action.type === constants.GET_BOOK_STACK_GIRL) {
        return state.set('dataBookStackGirl', action.data);
    }
    return state;
}
