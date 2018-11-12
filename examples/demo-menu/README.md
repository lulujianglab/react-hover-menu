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

## Compile

```
npm start
```

## Build

```
npm run build
```