import React from 'react'
import { ButtonInput, Image, Input } from 'react-bootstrap'
import { Link } from 'react-router'
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
    console.log(e.target)
    this.setState({ formValue: e.target.value })
  }

  render () {
    const thisItem = this.props.items.filter(item => {
      return item.tweetId === this.props.id
    })[0]
    return (
      <div>
        <Image src={thisItem.imgURLs[0]} responsive/>
        {thisItem.date} {thisItem.time}
        {thisItem.description}
        {thisItem.place}
        {thisItem.provider.userName} <Image src={thisItem.provider.profileImage} circle responsive/>

        <form onSubmit={(e) => {
          e.preventDefault()
          const options = {
            text: this.state.formValue,
            tweetId: thisItem.tweetId,
            userName: thisItem.provider.userName
          }
          axios.post('/contact-seller', options).then(data => {
            console.log(data)
          })
        }}
        >
          <Input
            type='text'
            onChange={this.handleChange}
            value={this.state.formValue}
            placeholder={'Send a tweet to ' + thisItem.provider.userName}
            label='Working example with validation'
            help='Validation is based on string length.'
            hasFeedback
            ref='input'
            groupClassName='group-class'
            labelClassName='label-class'
          />
          <ButtonInput type='submit' value='Tweet' />
        </form>
      </div>
    )
  }
}
