import React from 'react'
import { Thumbnail, Image } from 'react-bootstrap' //eslint-disable-line
import axios from 'axios'

export default class ProductComponent extends React.Component {

  constructor () {
    super()
    this.state = {
      items: []
    }
  }

  componentWillMount () {
    axios.get('/items').then(data => {
      this.setState({ items: data.data })
    })
  }

  render () {
    return (
      <div>
        {this.state.items.map(item => {
          return (
            <Thumbnail src={item.imgURLs[0]}>
              <Image src={item.provider.profileImage}
                circle
                responsive
              />
              {item.hashtags.map(hashtag => <h5>{'#' + hashtag}</h5>)}
            </Thumbnail>
          )
        })}
      </div>
    )
  }
}

ProductComponent.defaultProps = {
  imageURL: 'http://www.sahety.com/wp-content/uploads/2016/01/used-chesterfield-sofas-for-sale.jpg',
  hashtags: [ 'sofa', 'furniture' ]
}
