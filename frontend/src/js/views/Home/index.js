import React from 'react'
import { Grid, Row, Col, Input, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => {
  return (
    <Grid>
      <Row className='home-title'>
        <Col xs={4} xsOffset={4}>
          <form>
            <h1>PostCode</h1>
            <Input type='text' placeholder='Where would you like to search?' required />
            <Link to='/product-page'>
              <Button bsStyle='info' type='submit'>Go</Button>
            </Link>
            <a href='/twitterauth'>login with twitter</a>
          </form>
        </Col>
      </Row>
    </Grid>
  )
}
