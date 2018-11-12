import React, { Component } from 'react';
import menuData from './menuData.json'
import './App.css'

import HoverMenu from 'react-hover-menu'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HoverMenu title={'悬浮呼出菜单'} menu={menuData}></HoverMenu>
          <HoverMenu title={'点击呼出菜单'} menu={menuData} trigger={'click'}></HoverMenu>
      </div>
    )
  }
}

export default App
