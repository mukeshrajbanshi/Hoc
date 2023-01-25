import React from "react";

const withIncrement = (OriginalComponent) => {
    class updatedComponent extends React.Component {
        state= {count : 0}
        increment = () => {
            this.setState(prevState => {
                return {Count : prevState.count + 1}
            })
        }
        // componentDidMount () {
        // }
        render () {
            return (
            <OriginalComponent Count ={this.state.count} increment = {this.increment} />
            )
        }
        
    }
    return updatedComponent
}
export default withIncrement;