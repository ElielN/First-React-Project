import P from 'prop-types';

import './styles.css'
export const Button = ({text, onClick, disabled = false}) => (
    <button className='button' onClick={onClick} disabled={disabled}>
        {text}
    </button>
);
// export class Button extends Component {
//     render(){
//         const {text, onClick, disabled} = this.props;

//         return(
//             <button 
//                 className='button' 
//                 onClick={onClick}
//                 disabled={disabled}
//             >
//             {text}
//             </button>
//         );
//     }
// }

//Aplicando validation com prop types
Button.defaultProps = {
    disabled: false,
}

Button.prototype = {
    text: P.string.isRequired,
    onClick: P.func.isRequired,
    disabled: P.bool
}