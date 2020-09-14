import React, { Component } from 'react'

export default class Countries extends Component {
    render() {
        const {country} = this.props;
        return (
            <tr>
                <td>{country.Country}</td>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalRecovered}</td>
                <td>{country.TotalDeaths}</td>
               
            </tr>
        )
    }
}
