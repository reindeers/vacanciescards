import React from 'react';

import './vacancyItem.css';

class vacancyItem extends React.Component {
    render() {
        const { title, description } = this.props;
        return (
            <div>
              <p>{title}</p>
              <p>{description}</p>
            </div>
        )
    }
}

vacancyItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
};

export default vacancyItem;
