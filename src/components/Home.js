import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { incrementCount, setTest } from '../actions'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const PlusButton = styled(FaPlus)`
  cursor: pointer;
`

const CountDisplay = styled.div`
  display: inline-block;
  margin-left: 10px;
  user-select: none;
`

export class Home extends Component {
  static propTypes = {
    count: PropTypes.number,
    test: PropTypes.string,
  }
  submit = () => {
    const { setTest } = this.props
    setTest(this.test.value)
  }
  render() {
    const { count, test, incrementCount } = this.props
    return (
      <Container>
        <Section>Home</Section>
        <Section>
          <Row>
            <PlusButton size="2em" onClick={incrementCount} />
            <CountDisplay>Count: {count}</CountDisplay>
          </Row>
        </Section>
        <Section>
          <Row>Test Value: {test}</Row>
          <Row>
            <input type="text" ref={el => (this.test = el)} />
            <button onClick={this.submit}>Submit</button>
          </Row>
        </Section>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  test: state.test,
})

const mapDispatchToProps = {
  incrementCount,
  setTest,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
