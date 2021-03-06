import React, { PropTypes } from 'react';
import { DevTools } from './utils/index';
import { Header } from './components/index';
import './styles/styles.less';


export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static path = '/';

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <div className='container'>
                    { this.props.children }
                </div>

                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
