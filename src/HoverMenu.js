import React, { PureComponent } from 'react'
import 'antd/dist/antd.less'
import { Tabs, Card } from 'antd'
import styles from './HoverMenu.less'

const { TabPane } = Tabs

class Hovermenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      currentIndex: null,
      currentApplicationIndex: null,
      currentTabIndex: null,
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleTabMouseOut = this.handleTabMouseOut.bind(this)
    this.setcurrentIndex = this.setcurrentIndex.bind(this)
    this.setoverSvg = this.setoverSvg.bind(this)
    this.setleaveSvg = this.setleaveSvg.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDataMenu = this.handleDataMenu.bind(this)
  }

  componentDidMount () {
  }

  handleMouseOver(e) { 
    this.setState({
      currentApplicationIndex: parseInt(e.currentTarget.getAttribute('index'), 10),
      currentTabIndex: parseInt(e.currentTarget.getAttribute('index'), 10)
    })
  }

  handleTabMouseOut() {
    this.setState({
      currentTabIndex : null,
      currentApplicationIndex: null
    })
  }

  setcurrentIndex(e) {
    this.setState({
      currentIndex : parseInt(e.currentTarget.getAttribute('index'), 10)
    })
  }

  setoverSvg() {
    this.setState({
      show : false
    })
  }

  setleaveSvg() {
    this.setState({
      show : true
    })
  }

  handleClick() {
    this.setState({
      currentIndex : null
    })
  }

  // 处理菜单数据 将第三级菜单抽象成JSX
  handleDataMenu(arr) {
    const { currentIndex } = this.state
    return (
      <ul className={styles.card}>
        {
          arr.map((item,index) => {
            return (
              <a href='#' target="_blank" className={styles.text} key={item.name}>
                <li key={item.name} className={`${styles.item} ${currentIndex === index? styles.active : ''}`} index={index} onClick={this.setcurrentIndex} onMouseOver={this.setoverSvg} onMouseLeave={this.setleaveSvg} onFocus={() => 0}>
                  {item.name}
                </li>
              </a>
            )
          })
        }
      </ul>
    )
  }

  render () {
    const { currentTabIndex, currentApplicationIndex } = this.state
    const menuData = this.props.menu
    const title = this.props.title ? this.props.title  : '下拉菜单'
    const { trigger }= this.props
    // 一级菜单name
    const applicationArr = menuData.map(item => {
      return item.name
    })

    // 二级三级菜单数组
    const tabArr = menuData.map(item => {
      return item.children
    })

    // 一级菜单JSX
    const applicationList = (
      applicationArr.map((item,index) => {
        if ( trigger === 'click' ) {
          return (
            <div key={item} className={`${styles.item} ${currentApplicationIndex === index? styles.active : ''}`} index={index} onClick={this.handleMouseOver} onFocus={() => 0}>
              <div className={styles.title}>{item}</div>
            </div>
          )
        } else {
          return (
            <div key={item} className={`${styles.item} ${currentApplicationIndex === index? styles.active : ''}`} index={index} onMouseOver={this.handleMouseOver} onFocus={() => 0}>
              <div className={styles.title}>{item}</div>
            </div>
          )
        }
      })
    )

    // 二三级菜单分层处理
    const tabList = (
      tabArr.map((item,index) => {
        return (
          <div key={item[0].id} className={`${styles.item} ${currentTabIndex === index? styles.layer : styles.hidden}`} index={index} onMouseOver={this.handleMouseOver} onMouseOut={this.handleTabMouseOut} onClick={this.handleClick} onFocus={() => 0} onBlur={() => 0}>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              {
                item.map((element) => {
                  return <TabPane key={element.id} tab={element.name}>{this.handleDataMenu(element.children)}</TabPane>
                })
              }
            </Tabs>
          </div>
        )
      })
    )

    return (
      <Card title={title} bordered={false} className={styles.main}>
        <div className={styles.content}>
        {applicationList}
        </div>
        {tabList}
      </Card>
    )
  }
}

export default Hovermenu