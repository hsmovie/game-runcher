import React, { Component } from 'react'
import svgImg from '../static/earth.svg'

class Map extends Component {
  componentWillMount() {
    this.myRef = React.createRef()
  }

  componentDidMount() {
    const maps = window.daum.maps
    const container = this.myRef.current

    const mapOption = {
      center: new maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 2 // 지도의 확대 레벨
    }

    const dump = new maps.Map(container, mapOption)
    dump.setZoomable(false)
    // dump.setDraggable(false)

    const tileset = new maps.Tileset({
      width: 256,
      height: 256,
      getTile: (x, y, z) => {
        if ((x === 1781 && y === 4000) || (x === 1781 && y === 3999) || (x === 1782 && y === 4000) || (x === 1782 && y === 3999)) {
          const img = window.document.createElement('img')
          img.src = svgImg
          return img
        } else {
          const div = window.document.createElement('div')
          div.style.backgroundColor = '#000'
          return div
        }
      }
    })

    maps.Tileset.add('TEST', tileset)
    dump.addOverlayMapTypeId(maps.MapTypeId.TEST)

    const markerPosition = new maps.LatLng(37.566826, 126.9786567)
    const marker = new maps.Marker({
      position: markerPosition
    })

    marker.setMap(dump)

    maps.event.addListener(dump, 'center_changed', () => {
      const latlng = dump.getCenter()
      let moveLatLonBoolen = false
      // let lat = latlng.getLat()
      // let lng = latlng.getLng()

    if (latlng.getLng() > 126.9817365) {
      console.log('im in rightside')
      moveLatLonBoolen = true
    }

    if (latlng.getLng() < 126.97669385) {
      console.log('im in leftside')
      moveLatLonBoolen = true
    }

    if(moveLatLonBoolen === true){
      var moveLatLon = new maps.LatLng(37.56750891314853, 126.97839738231046)
      dump.panTo(moveLatLon)
    }

    })
  }

  render() {
    return (
      <div ref={this.myRef} style={styles.container}>
      </div>
    )
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
  }
}

export default Map