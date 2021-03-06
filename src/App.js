import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/main';
import Detail from './components/detail';
import Directory from './components/directory';
import Login from './components/login';
import Register from './components/register/index';
import RegisterNext from './components/register/registerNext';
import BookStack from './components/bookstack';
import BookList from './components/booklist';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <Provider store={store}/>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Main} />
                        <Route path='/index' exact component={Main} />
                        <Route path='/bookStack' exact component={BookStack} />
                        <Route path='/detail/:id' exact component={Detail}/>
                        <Route path='/directory/:id' exact component={Directory}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/register' exact component={Register}/>
                        <Route path='/registerNext' exact component={RegisterNext}/>
                        <Route path='/bookList' exact component={BookList}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
