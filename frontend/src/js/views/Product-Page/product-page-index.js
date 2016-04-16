import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ProductComponent from '../../components/Product-Component/index.js'

export default class ProductPage extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <ProductComponent />
          </Col>
        </Row>
      </Grid>
    )
  }
}
