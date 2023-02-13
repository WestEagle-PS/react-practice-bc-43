import PropTypes from 'prop-types';

export const Statistics = ({title,data}) => {
    return (
        <div>
            {title &&  <h2>{title}</h2>}
            <ul>
                {data.map(({id,title,total}) => 
                    
                        <li key={id}>
                            <span>{total}</span>
                            <span>{title}</span>
                        </li>
                    
                )  }
                
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired
    }))
}