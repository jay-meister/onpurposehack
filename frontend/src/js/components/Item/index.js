import React from 'react'
import { ButtonInput, Image, Input } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Item extends React.Component {
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

        <form onSubmit={'/contact-seller'}>
          <Input
            type='text'
            value={this.state.value}
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

<div>
        <input
        ref={node => {this.input = node}}/>
        <button
        onClick={() => {
          this.props.addTask(this.input.value)
          this.input.value = ''
        }}>
          Add To Do
        </button>
      </div>
