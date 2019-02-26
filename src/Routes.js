import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HackXXLayout from './2019/2019Layout';
import HackXX2019Page from './2019';
import Live2019 from './2019/live';
class Routes extends React.Component {

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
                <Route path="/live" exact component={this.with2019Layout(Live2019)} />
            </Switch>
        )
    }
}

export default Routes;