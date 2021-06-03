import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onHendlerChenge }) => {
    return (
        <div>
            <h2 className={styles.title}>Find contact by name</h2>
            <input
                type="text"
                className={styles.input}
                name="filter"
                value={filter}
                onChange={onHendlerChenge}
            />
        </div>
    )
};

Filter.propTypes = {
    filter: PropTypes.string,
    onHendlerChenge: PropTypes.func,
};

export default Filter;