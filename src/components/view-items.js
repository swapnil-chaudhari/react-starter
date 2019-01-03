import React from 'react';

export default class ViewItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoices: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/invoices')
        .then(res => res.json())
        .then(res => {
            this.setState({
                invoices: res
            });
        });
    }

    render() {
        console.log(this.state.invoices);
        return(
            <div>
                <h2>View Items</h2>
            </div>
        );
    }
}
