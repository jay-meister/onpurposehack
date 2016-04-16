import React from 'react'
import { Thumbnail, Col, Row, Image } from 'react-bootstrap' // eslint-disable-line
import axios from 'axios'

export default class ProductComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
    this.isLoading = this.isLoading.bind(this)
  }

  componentWillMount () {
    axios.get('/items').then(items => {
      this.setState({ items: items.data })
      setTimeout(() => {
        const loading = document.getElementById('loading')
        loading.classList.add('hidden')
      }, 2000)
    })
  }

  isLoading () {
    return (this.state.items.length > 0) ? '' : 'is-loading'
  }

  render () {
    return (
      <div>
        <div id='loading' className={'loading ' + this.isLoading()}>
          <div className={'img-container ' + this.isLoading()}>
            <img src='img/poly-leaf.png' className='loading-leaf' />
            <h3 className='loading-text'>loading items...</h3>
          </div>
        </div>
        <div className='container-flex'>
          {this.state.items.map((item, i) => {
             return (
             <div key={'item-' + i} className='col-flex'>
               <Thumbnail src={item.imgURLs[0]}>
                 <Image src={item.provider.profileImage} circle responsive />
                 {item.hashtags.map(hashtag => <h5 className='hashtags'>{'#' + hashtag}</h5>)}
               </Thumbnail>
             </div>
             )
           })}
        </div>
      </div>
    )
  }
}

ProductComponent.defaultProps = {
  imageURL: 'http://www.sahety.com/wp-content/uploads/2016/01/used-chesterfield-sofas-for-sale.jpg',
  hashtags: [ 'sofa', 'furniture' ]
}
