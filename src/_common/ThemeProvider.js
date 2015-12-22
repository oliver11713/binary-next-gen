import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({ theme: state.settings.get('theme') }))
export default class ThemeProvider extends React.Component {
    static propTypes = {
        theme: React.PropTypes.string,
        children: React.PropTypes.object,
    };

    render() {
        const theme = this.props.theme;
        return <div style={{ height: '100%', width: '100%' }} className={(theme === 'dark') ? 'inverse' : ''}>{this.props.children}</div>;
    }
}