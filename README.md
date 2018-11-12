## 创建一个前端React的三级菜单组件，支持鼠标悬浮呼出菜单和鼠标点击呼出菜单

## Install

```
npm i react-hover-menu
```

## Usage

```
import HoverMenu from 'react-hover-menu'

render() {
  return (
    <div className="App">
        <HoverMenu title={'悬浮呼出菜单'} menu={menuData}></HoverMenu>
        <HoverMenu title={'点击呼出菜单'} menu={menuData} trigger={'click'}></HoverMenu>
    </div>
  )
}

```

