import React from 'react'
import { Thumbnail, Image } from 'react-bootstrap' //eslint-disable-line

export default class ProductComponent extends React.Component {
  render () {
    return (
      <Thumbnail src={this.props.imageURL}>
        <Image src='https://avatars0.githubusercontent.com/u/12462448?v=3&s=460'
          circle
          responsive
        />
      {this.props.hashtags.map(hashtag => <h5>{'#' + hashtag}</h5>)}
      </Thumbnail>
    )
  }
}

ProductComponent.defaultProps = {
  imageURL: 'http://www.sahety.com/wp-content/uploads/2016/01/used-chesterfield-sofas-for-sale.jpg',
  hashtags: [ 'sofa', 'furniture' ]
}
