import React from 'react'
import {connect}  from 'react-redux'
import * as actions from '../actions/index'

const Loading = ({dots}) => (
  <h1>Loading{dots}</h1>
)

const mapDispatchToProps = (dispatch) => {
  return {
    setText: (text) => {
      dispatch(actions.setText(text))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loadText: state.loadText,
    loadSpeed: state.loadSpeed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
