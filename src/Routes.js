import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HackXXLayout from './2019/2019Layout';
import HackXX2019Page from './2019';

class DecafRoutes extends React.Component {

    with2019Layout(Child) {
        return () =>
            (<HackXXLayout>
                <Child />
            </HackXXLayout>)
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={this.with2019Layout(HackXX2019Page)}/>
            </Switch>
        )
    }
}

export default DecafRoutes;