import React from 'react'
import { Thumbnail, Col, Row, Image } from 'react-bootstrap' //eslint-disable-line
import axios from 'axios'
import R from 'ramda'

export default class ProductComponent extends React.Component {

  constructor () {
    super()
    this.state = {
      items: []
    }
  }

  componentWillMount () {
    axios.get('/items').then(data => {
      const newData = R.splitEvery(3, data.data)
      this.setState({ items: newData })
    })
  }

  render () {
    return (
      <div>
        {this.state.items.map(row => {
          return (
            <div>
              {row.map(item => {
                return (
                  <Col xs={6} md={4}>
                    <Thumbnail src={item.imgURLs[0]}>
                      <Image src={item.provider.profileImage}
                        circle
                        responsive
                      />
                    {item.hashtags.map(hashtag => <h5>{'#' + hashtag}</h5>)}
                    </Thumbnail>
                  </Col>
                )
              })}
            </div>
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
