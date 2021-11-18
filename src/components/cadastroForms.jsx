import React, { useState } from 'react';
import Image from 'next/image';
import GoogleIcon from '../assets/google-svgrepo-com.svg';
import FacebookIcon from '../assets/facebook-svgrepo-com.svg';
import styles from '../styles/components/cadastroForms.module.css';

export function CadastroForms() {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const [isSignUpSelected, setIsSignUpSelected] = useState(false);
  function selectButton() {
    !isLoginSelected ? setIsLoginSelected(true) : setIsLoginSelected(false);
    !isSignUpSelected ? setIsSignUpSelected(true) : setIsSignUpSelected(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.cadastroFormsContainer}>
      <div className={styles.cadastroFormsHeader}>
        <button
          onClick={selectButton}
          className={isLoginSelected ? styles.active : ''}
        >
          Entrar
        </button>
        <button
          onClick={selectButton}
          className={isSignUpSelected ? styles.active : ''}
        >
          Cadastrar
        </button>
      </div>
      {isLoginSelected ? (
        <form onSubmit={handleSubmit} className={styles.loginFormContent}>
          <div className={styles.loginWithContainer}>
            <button>
              <Image
                src={FacebookIcon}
                alt="login_facebook"
                width={28}
                height={28}
              />
              Entrar com Facebook
            </button>
            <button>
              <Image
                src={GoogleIcon}
                alt="login_google"
                width={32}
                height={32}
              />
              Entrar com Google
            </button>
          </div>
          <div className={styles.separator}>ou conecte-se com seu email</div>
          <fieldset>
            <div>
              <input type="text" placeholder="Email ou Usuário" />
              <input type="text" placeholder="Senha" />
              <button>Entrar</button>
            </div>
            <span>Esqueceu a senha?</span>
          </fieldset>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className={styles.signUpFormContent}>
          <div className={styles.loginWithContainer}>
            <button>
              <Image
                src={FacebookIcon}
                alt="login_facebook"
                width={28}
                height={28}
              />
              Cadastre-se pelo Facebook
            </button>
            <button>
              <Image
                src={GoogleIcon}
                alt="login_google"
                width={32}
                height={32}
              />
              Cadastre-se pelo Google
            </button>
          </div>
          <div className={styles.separator}>ou cadastre-se com seu email</div>
          <fieldset>
            <div className={styles.inputsNbuttons}>
              <input type="text" placeholder="Nome e sobrenome" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Senha - Mínimo 8 dígitos" />
              <div className={styles.checkBoxes}>
                <div>
                  <button></button> Estou de acordo com os <p>Termos de Uso</p>
                </div>

                <div>
                  <button></button> Estou de acordo com as{' '}
                  <p>Políticas de privacidade</p>
                </div>
              </div>
              <button>Criar uma conta agora</button>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
}
