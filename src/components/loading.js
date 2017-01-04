import React from 'react'
import {connect}  from 'react-redux'
import * as actions from '../actions/index'

const Loading = ({dots}) => (
  <h1>Loading{dots}</h1>
)

// class Loading extends Component {
//   componentDidMount(props) {
//     console.log(props.loadText)
//     const stopper = props.loadText + '...'
//     // let myText = this.props.loadText
//     const originalText = props.loadText
//     setInterval(function(props) {
//       console.log(props)
//       if(this.props.loadText === stopper) {
//         this.props.setText(originalText)
//       } else {
//         this.props.setText(this.props.loadText + '.')
//       }
//     }, this.props.loadSpeed)
//   }
//
//   // componentWillUnmount() {
//   //   clearInterval(this.interval)
//   // }
//
//   render() {
//     const {loadText, setText, loadSpeed} = this.props
//     return (
//       <div className="loading-text">
//         <p className="loading-text">{this.props.loadText}</p>
//       </div>
//     )
//   }
// }

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
