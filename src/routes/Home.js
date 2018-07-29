import React, { Component } from 'react'
import img from '../static/test.png'
import svgImg from '../static/earth.svg'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  componentWillMount() {
    this.myRef = React.createRef()
  }

  componentDidMount() {
    // var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    // mapOption = { 
    //     center: new window.daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    //     level: 3 // 지도의 확대 레벨
    // }
    // var map = new window.daum.maps.Map(mapContainer, mapOption)
    const maps = window.daum.maps

    const tileSet = new maps.Tileset(
      1000,
      1000,
      (x, y, z) => svgImg,
      [],
      false,
      1,
      1
    )

    maps.Tileset.add('TEST', tileSet)

    const node = this.myRef.current
    const map = new maps.Map(
      node,
      {
        projectionId: null,
        mapTypeId: maps.MapTypeId.TEST,
        $scale: false,
        center: new maps.Coords( 650, -550 ),
        level: 0
      }
    )
  }

  test(arg) {
    console.log(arg)
  }
  // <img src={svgImg} alt="" style={styles.img} ref={this.myRef} />
  render() {
    return (
      <div className="home-wrapper">
        <div id="map" style={styles.img} ref={this.myRef}></div>
      </div>
    )
  }
}

const styles = {
  img: {
    height: '100%',
    width: '100%',
  }
}

export default Home
