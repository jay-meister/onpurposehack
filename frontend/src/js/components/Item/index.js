import React from 'react'
import { ButtonInput, Image, Input } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import axios from 'axios'

export default class Item extends React.Component {
  constructor () {
    super()
    this.state = {
      formValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ formValue: e.target.value })
  }

  render () {
    const thisItem = this.props.items.filter(item => {
      return item.tweetId === this.props.id
    })[0]
    return (
      <div>
        <Image src={thisItem.imgURLs[0]} responsive/>
        <div className='item-date'>
          Posted on {thisItem.date} at {thisItem.time}
        </div>
        <div className='item-description'>
          <span className='item-username'>
            {thisItem.provider.userName + ': '}
          </span>
          {thisItem.description}
        </div>
        <div className='item-place'>Located in {thisItem.place}</div>
        <div className='item-provider-image'>
          <Image src={thisItem.provider.profileImage} circle responsive/>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          const options = {
            text: this.state.formValue,
            tweetId: thisItem.tweetId,
            userName: thisItem.provider.userName
          }
          axios.post('/contact-seller', options).then(() => {
            browserHistory.push('/product-page')
          })
        }}
        >
          <Input
            type='text'
            onChange={this.handleChange}
            value={this.state.formValue}
            placeholder={'@' + thisItem.provider.userName}
            label={'Send a tweet to ' + thisItem.provider.userName}
            help='Maximum of 140 characters'
            hasFeedback
            ref='input'
          />
          <ButtonInput className='contact-button' type='submit' value='Tweet'/>
        </form>
      </div>
    )
  }
}
