import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

import { incrementCount, setText } from '../actions'
import { derivedCountAndTextSelector } from '../selectors'

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

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const CountDisplay = styled.div`
  display: inline-block;
  margin-left: 10px;
  user-select: none;
`

const Input = styled.input`
  margin-right: 5px;
`

export class Home extends Component {
  static propTypes = {
    count: PropTypes.number,
    text: PropTypes.string,
  }
  submit = () => {
    const { setText } = this.props
    setText(this.text.value)
  }
  render() {
    const { count, text, derived, incrementCount } = this.props
    return (
      <Container>
        <Section>
          <Title>Home</Title>
        </Section>
        <Section>
          <Row>
            <Button
              size="sm"
              style={{ lineHeight: '1em' }}
              onClick={incrementCount}
            >
              <FaPlus />
            </Button>
            <CountDisplay>Count: {count}</CountDisplay>
          </Row>
        </Section>
        <Section>
          <Row>Text Value: {text}</Row>
          <Row>
            <Input ref={el => (this.text = el)} />
            <Button onClick={this.submit}>Submit</Button>
          </Row>
        </Section>
        <Section>
          <Row>Selector</Row>
          <Row>{derived}</Row>
        </Section>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  text: state.text,
  derived: derivedCountAndTextSelector(state),
})

const mapDispatchToProps = {
  incrementCount,
  setText,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
