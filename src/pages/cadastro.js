import React from 'react';
import { CadastroForms } from '../components/cadastroForms';
import styles from '../styles/pages/cadastro.module.css';

function Cadastro() {
  return (
    <div className={styles.cadastroContainer}>
      <CadastroForms />
    </div>
  );
}

export default Cadastro;
