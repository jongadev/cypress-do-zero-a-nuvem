/**
 * Mapeamento dos elementos da página
 */
const el = {
  solicitante: '#Input_SSol_UsernameVal',
  avancar: '#b8-Button > button',
  cpf: '#Input_UsernameVal',
  senhaField: '#Input_PasswordVal',
  fazerlogin: '#b10-Button > button',
  pageEsperada: '#b3-b2-Root',
  msgErro: '#b7-Content > .link-white > span',
  recuperarSenhaButton: '#b2-Input_CPF',
  avancarrecuperarSenhaButton: '#b2-Form1 > div > div.footer-seguranca-blk.display-flex.align-items-center.gap-xxl > button.btn.btn-primary.ThemeGrid_MarginGutter',
  checkboxrecuperacaosenha: '#b3-CheckboxEmail',
  confirmarrecuperacaosenha: '.btn-primary',
  //linkEnviado: '#root > div > div > div > p.sc-cmaqmh.edkbNU',
  usuarioNaoCadastrado: '#b2-Form1 > div > div.content-seguranca-blk > div.cpf-mask-seguranca > div.ThemeGrid_Width6 > span.input-validation-message-custom',
}

/**
 * Classe LoginPage
 * Contém métodos para interagir com a página de Login
 */
class LoginPage {

    /**
   * Preenche o campo serviço solicitante
   */

  preencherSolicitante(solicitante) {
    cy.get(el.solicitante).type(solicitante)

  }

      /**
   * Clicar em Avançar
   */

  clicaravancar() {
    cy.get(el.avancar).click()

  }
  /**
   * Preenche o campo Usuário ou CPF
   */
  preencherCpf(cpf) {
    cy.get(el.cpf).type('09135988959')
  }

  /**
  * Preenche o campo senha
  */
  preencherSenha(senha) {
    cy.get(el.senhaField).type('1QAZ2WSX')
  }


/**
  * Clica no botão Fazer Login
  */
  clicarFazerlogin() {
    cy.get(el.fazerlogin).click()
  }
  
    /**
  * Preenche com senha inválida
  */
  preencherSenhainvalida(senha) {
    cy.get(el.senhaField).type('1234')
  }

/**
  * Valida o nome da convênio após o login
  */
  validarLogin(texto) {
    cy.get(el.pageEsperada, { timeout: 50000 }).should('contain', texto)
  }

/**
  * Valida a mensagem esperada quando o login for inválido
  */
  ValidarLoginInvalido(msgErro) {
    cy.get(el.msgErro).should('contain', msgErro)
  }

/**
  * Clica no botão Esqueci minha senha
  */
  clicarEsqueciMinhaSenha() {
    cy.contains('a', 'Esqueci minha Senha').click();

  }

/**
  * Clica no Botão Usuário/CPF
  */
  DadosRecuperarSenha(cpfsenha) {
    cy.get(el.recuperarSenhaButton).type('957.247.680-70')
  }

/**
  * Clica no Botão Avançar da recuperação de senha
  */
  RecuperarSenha() {
    cy.get(el.avancarrecuperarSenhaButton).click()
  }
  
/**
  * Marcar qual a forma de recuperação de senha
  */
  Enviarporemail() {
    cy.get(el.checkboxrecuperacaosenha).click()
  }
/**
  * Confirmar recuperação de senha
  */
  Confirmarecuperacaosenha() {
    cy.get(el.confirmarrecuperacaosenha).click()
  }


/**
  * CPF inválido
  */
  DadosRecuperarSenha(cpfinvalido) {
    cy.get(el.recuperarSenhaButton).type(cpfinvalido)
  }  

/**
  * Valida mensagem esperada quando o usuário utiliza um e-mail não cadastrado
  */
  ValidarEsqueciMinhaSenhaUsuarioNaoCadastrado(texto) {
    cy.get(el.usuarioNaoCadastrado,).should('contain', texto)
  }

}
export default new LoginPage()

