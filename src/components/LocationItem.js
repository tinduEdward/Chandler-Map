import React from 'react';

class LocationItem extends React.Component {
    /**
     * Render function of LocationItem
     */
    render() {
        return (
            <li className="box" tabIndex="0" 
            onKeyPress={this.props.openInfoWindow.bind(this, this.props.data.marker, this.props.data.location_name, this.props.data.location_type)} 
            onClick={this.props.openInfoWindow.bind(this, this.props.data.marker, this.props.data.location_name, this.props.data.location_type)} 
            aria-labelledby="locations">
                {this.props.data.longname}</li>
        );
    }
}

export default LocationItem;