import './button.css'
import PropTypes from 'prop-types'

export function Button({ variant = "primary", ...rest}) {
    return <button className={`container--button ${variant}`} {...rest} />
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary'])
}