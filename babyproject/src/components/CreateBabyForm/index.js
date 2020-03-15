import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/baby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button} from 'react-bootstrap';

const CreateBabyForm = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (

        <Fragment>
            <div className='container'>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={value1}
                    onChange={e => changeValue1(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    value={value2}
                    onChange={e => changeValue2(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={() => 
                        onSubmit(value1,value2)
                    }>
                        {'Añadir'}
                </button>
            </div>

            
        </Fragment>
    );
};

export default connect(
    undefined,
    dispatch => ({
        onSubmit(value1,value2) {
            dispatch(actions.addBaby(uuidv4(), value1,value2))
        }
    })
)(CreateBabyForm);
