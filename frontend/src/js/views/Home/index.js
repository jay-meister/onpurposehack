import React from 'react'
import { Grid, Row, Col, Input } from 'react-bootstrap'

export default () => {
  return (
    <Grid>
      <Row className='home-title'>
        <Col xs={4} xsOffset={4}>
          <h1>PostCode</h1>
          <Input type='text' placeholder='Where would you like to search?' />
        </Col>
      </Row>
    </Grid>
  )
}
