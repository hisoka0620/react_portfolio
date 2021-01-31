import React from 'react';

class Contents extends React.Component {
    render(){
        return(
            <div className="language-part">
                <img src={this.props.image} alt="languages"/>
            </div>
        )
    }
}
export default Contents;