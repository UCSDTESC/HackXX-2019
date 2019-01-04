import React from 'react';

class Layout extends React.Component {

    render() {
        return (
            <>
                {React.cloneElement(this.props.children, {...this.props})}
            </>
        )
    }
}

export default Layout;

