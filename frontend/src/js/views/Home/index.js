import React from 'react'
import { Grid, Row, Col, Input, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => {
  return (
    <Grid>
      <Row className='home-title'>
        <Col xs={6} xsOffset={3}>
          <form>
          <h1>ReuseApp</h1>
          <p>give your old stuff a new life</p>
            <Input type='text' placeholder='Search an area' required />
            <Link to='/product-page'>
              <Button bsStyle='success' type='submit'>Go</Button>
            </Link>
          </form>
          <a href='/twitterauth'>login with twitter</a>
        </Col>
      </Row>
    </Grid>
  )
}
