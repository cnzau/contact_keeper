import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SETCURRENT,
  CLEAR_CURRENTT,
  UPDATE_CONTACTCT,
  FILTER_CONTACTCT,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ben Mukeku',
        email: 'bmkeku@gmail.com',
        phone: '111-111-111111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Tom Ojienda',
        email: 'toji@gmail.com',
        phone: '111-111-222222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Pedro Mcost',
        email: 'pedim@gmail.com',
        phone: '111-111-333333',
        type: 'personal'
      },
      {
        id: 4,
        name: 'Joy Ray',
        email: 'jray@gmail.com',
        phone: '111-111-444444',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contatct

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
