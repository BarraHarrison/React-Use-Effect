import PropTypes from 'prop-types';

function Hello(props) {
    return (
        <>
            <h1>Hello {props.name} the {props.career}</h1>
            {props.children}
        </>

    )
}

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Hello;