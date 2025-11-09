import React from 'react'
import { styles } from './styles'
import { myMsg } from './constants';
import { getNoteMax } from '../../utils/getNotesStudents.utility';


export const MyButton = () => {
    const MyAlert = () => {
        Alert("El campo es invalido!");
        getNoteMax();
    }
    const MyAlert2 = () => {
        Alert("El campo es invalido!");
    }
    const MyAlert3 = () => {
        Alert("El campo es invalido!");
    }
  return (
    <div style={styles.div}>MyButton</div>
  )
}

