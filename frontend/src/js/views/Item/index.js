import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Item from '../../components/Item/index.js'
import { contactSeller } from '../../actions/index.js'

class ItemView extends React.Component {

  componentWillMount () {
    // check for empty state.items??? reload if empty?
    // ie on refresh
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col mdOffset={1} md={10} xs={12}>
            <Item
              items={this.props.items}
              id={this.props.params.id}
              contactSeller={this.props.contactSeller}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { contactSeller })(ItemView)
