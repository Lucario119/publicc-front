import React, { useState } from 'react';
import CreditCardIcon from '../assets/credit-card-svgrepo-com.svg';
import BarcodeIcon from '../assets/barcode-svgrepo-com.svg';
import CVVIcon from '../assets/card-cvv.svg';
import Image from 'next/image';
import styles from '../styles/components/forms.module.css';
export function Forms() {
  const [isCreditCardSelected, setIsCreditCardSelected] = useState(true);
  const [isBoletoSelected, setIsBoletoSelected] = useState(false);
  function selectButton() {
    !isCreditCardSelected
      ? setIsCreditCardSelected(true)
      : setIsCreditCardSelected(false);
    !isBoletoSelected ? setIsBoletoSelected(true) : setIsBoletoSelected(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.formsContainer}>
      <section className={styles.formsContent}>
        <div className={styles.formsHeader}>
          <button
            onClick={selectButton}
            className={isCreditCardSelected ? styles.active : ''}
          >
            Cartão de crédito
            <Image
              src={CreditCardIcon}
              alt="creditcard"
              width={20}
              height={20}
            />
          </button>

          <button
            onClick={selectButton}
            className={isBoletoSelected ? styles.active : ''}
          >
            Boleto
            <Image src={BarcodeIcon} alt="barcode" width={20} height={20} />
          </button>
        </div>
        {isCreditCardSelected ? (
          <form onSubmit={handleSubmit} className={styles.creditCardForm}>
            <fieldset>
              <label htmlFor="">NÚMERO DO CARTÃO *</label>
              <input type="number" name="" placeholder="0000 0000 0000 0000" />
            </fieldset>
            <fieldset>
              <label htmlFor="">NOME IMPRESSO NO CARTÃO *</label>
              <input type="text" name="" />
            </fieldset>
            <div className={styles.dateCVV}>
              <div>
                <label htmlFor="">MÊS E ANO DO VENCIMENTO *</label>
                <input type="text" name="" placeholder="MM/AA" />
              </div>
              <div>
                <label htmlFor="">CÓDIGO DE SEGURANÇA (CVV) *</label>
                <input type="number" name="" placeholder="000" />
              </div>
              <Image src={CVVIcon} alt="cvv" width={35} height={35} />
            </div>
            <div className={styles.priceCard}>
              <h1>R$ 99,90</h1>
              <span>BRL</span>
            </div>
            <div className={styles.termsBox}>
              <button></button>
              <span>
                <strong>Importante:</strong> Estou de acordo com os{' '}
                <a>termos de adesão</a>
              </span>
            </div>
            <button className={styles.confirmButton}>Realizar Pagamento</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className={styles.boletoForm}>
            <div>
              <fieldset>
                <label htmlFor="">NOME COMPLETO (SEM ACENTOS) *</label>
                <input type="text" name="" placeholder="Nome e sobrenome" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label htmlFor="">CPF *</label>
                <input type="number" name="" placeholder="000.000.000-00" />
              </fieldset>
              <fieldset>
                <label htmlFor="">CELULAR(COM DDD)</label>
                <input type="number" name="" placeholder="21-99999999" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label htmlFor="">ENDEREÇO *</label>
                <input type="text" name="" />
              </fieldset>
              <fieldset>
                <label htmlFor="">NÚMERO *</label>
                <input type="number" name="" />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <label htmlFor="">COMPLEMENTO</label>
                <input type="text" name="" />
              </fieldset>
              <fieldset>
                <label htmlFor="">BAIRRO *</label>
                <input type="text" name="" />
              </fieldset>
              <fieldset>
                <label htmlFor="">CEP *</label>
                <input type="number" name="" placeholder="00000-000" />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <label htmlFor="">CIDADE *</label>
                <input type="text" name="" />
              </fieldset>{' '}
              <fieldset>
                <label htmlFor="">ESTADO *</label>
                <select name="" id="">
                  <option selected disabled value="UF">
                    UF
                  </option>
                </select>
              </fieldset>
            </div>
            <div className={styles.termsBox}>
              <button></button>
              <span>
                <strong>Importante:</strong> Ao realizar o pagamento eu concordo
                com os <a>termos de adesão</a>
              </span>
            </div>
            <button className={styles.confirmButton}>Realizar Pagamento</button>
          </form>
        )}
      </section>
    </div>
  );
}
