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

## 基本原理

### 事件机制

在事件机制中，主要利用鼠标的一些事件来监听，具体如下：

利用onClick（鼠标点击），onMouseOver（鼠标进入），onMouseLeave（鼠标离开）来监听鼠标的变化，同时在state状态机中定义控制菜单出现或消失的状态标识，然后通过这些鼠标事件来改变相应的状态值

### 样式设置

除了事件机制控制状态变化外，我们还需要在样式中设置父类和子类的position值，父类值为relative，子类值为absolute，同时为使悬浮菜单在最前端显示，菜单的css中需要加入层级控制z-index(数值越大，越靠前端)

同时需要注意的是，在hover判断时，需要在其中通过控制display来控制显示与否
