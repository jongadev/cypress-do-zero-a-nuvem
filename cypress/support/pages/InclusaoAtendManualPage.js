/**
 * Mapeamento dos elementos da página
 */
const el = {
  atendimentomanualButton: '#b7-l1-66_0-Fav_Favorito',
  tituloatendmanual: '.page-title-box-text',
  nomepaciente: '#Input_NomePaciente',
  preenchecpf: '#Input_Cpf',
  preenchedatanascimento: '#Input_DataNascimento',
  cliquefora: '#b4-MainContent',
  cliquesexo: '#Cmb_Sexo',
  preenchersexo: '#Cmb_Sexo > option:nth-child(2)',
  semsolicitante: '#Chk_SemSolicitante',
  exame: '#Input_ExamePerfil',
  cadastrarpaciente: '#Btn_CadastrarPaciente',
  qtdexamessucesso: '.info-exames-sucesso',
  titlepedidoscadastrados: '.title-form-obrigatorio',





}
  
     /**
    * Classe AtendimentoManualPage 
    * Contém métodos para interagir com a página de Atendimento Manual
    */
  class AtendimentoManualPage {
        
      /**
     * Acessa a pagina de colaboradores
     */
    visit() {
      cy.visit('/IncluirAtendimentoManual');
    }
  
     /**
     * Clicar no botão de Inclusão de Atendimento Manual
     */
        clicaratendimentomanual() {
    cy.contains( 'Incluir Atendimento').click();
    }
        verificarTituloAtendManual(texto) {
      cy.get(el.tituloatendmanual, { timeout: 30000 }).should('contain', texto)
}

    

/**
   * Cadastrar Atendimento Manual - Sem formulário
   */


Preenchernomepaciente(nomepaciente) {
  cy.get(el.nomepaciente).type(nomepaciente);
}

  Preenchercpf(cpf) {
  cy.get(el.preenchecpf).type(cpf);
}

  Preencherdatanascimento(datanascimento) {
  cy.get(el.preenchedatanascimento).type(datanascimento);
}

  Cliquefora() {
  cy.get(el.cliquefora).click();
}
  Preenchersexo() {
  cy.get(el.cliquesexo).select('Feminino');

}
  
  Marcarflagsemsolicitante() {
  cy.get(el.semsolicitante).click();
}

  Pesquisarexame() {
cy.get('#Input_ExamePerfil').type('tsh{enter}');
}

  Selecionarexame() {
    cy.contains('.reactive-autocomplete-list-container div', 'TSH').click();
}

Cliquecadastrarpaciente() {
  cy.get(el.cadastrarpaciente).click()

}
Mensagemsucesso(texto) {
      cy.get(el.titlepedidoscadastrados, { timeout: 10000 }).should('contain', texto)

}

}
  

export default new AtendimentoManualPage()
  
  
  
  