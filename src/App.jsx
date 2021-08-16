import React from 'react';
import { ListOfGoods } from './components/ListOfGoods';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

import goodsFromServer from './api/goods.json';
import logo from './images/logo.jpg';

import 'bulma';
import './App.scss';

import './components/Header/Header.scss';

export class App extends React.Component {
  state = {
    isCatalogVisible: false,
    goods: goodsFromServer,
  }

  remoteAllGoods = () => {
    this.setState({
      goods: [],
    });
  }

  // remoteGood = (good) => {
  //   this.setState({});
  // }

  render() {
    const { goods, isCatalogVisible } = this.state;
    const { remoteAllGoods } = this;

    return (
      <>
        <Header logo={logo} />
        {!isCatalogVisible
          ? (
            <div className="App__main-empty">
              Avocado catalog
            </div>
          )
          : (
            <div className="App__main">
              <ListOfGoods goods={goods} />
              <SideBar
                goods={goods}
                onClick={remoteAllGoods}
              />
            </div>
          )
        }
      </>
    );
  }
}
