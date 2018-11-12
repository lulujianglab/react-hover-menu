**Create a three-level menu component of front-end React to support mouse hover and mouse click expiration menu**

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

