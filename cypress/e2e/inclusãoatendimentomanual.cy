///<reference types="cypress" />

// Importação das páginas
//import ColaboradoresRhPage from '../../support/pages/ColaboradoresRhPage.js';
import InclusaoManualPage from '../../support/pages/InclusaoAtendManualPage.js';
import loginPage from '../../support/pages/LoginRhPage.js';
import massaDadosFactory from '../../factories/MassaDadosFactory.js';
import {genericsUtils} from "../../support/Globais/Utils";

/**
 * Testes Colaboradores do Portal RH
 */
describe('colaboradoresPortalRH', () => {
  var dados = massaDadosFactory.massaDados();

    /**
     * Antes de cada teste, visita a URL configurada e faz login
     */


    before(() => {
        cy.visit(Cypress.config('url'))

      
    });
    
    /**
     * Clique no Menu Incluir Atendimento
     */
      
    // Parâmetros (Arrange)
               const expectedPage = "IncluirAtendimentoManual"
               const expectedTextDetalhes = "Pedidos Cadastrados"


        
        it.only('Incluir Atendimento Manual pelo acesso rápido', () => {
        cy.wait(4000);
        //Dado que o usuário clique em Incluir Atendimento na Home do Portal
        InclusaoManualPage.clicaratendimentomanual()
        cy.wait(4000);

         const titulo = "Incluir Atendimento"
         InclusaoManualPage.verificarTituloAtendManual(titulo);
         cy.wait(2000)
         //E preencha todos os campos obrigatórios
         InclusaoManualPage.Preenchernomepaciente(dados.nome.nomePaciente)
         InclusaoManualPage.Preenchercpf(dados.dadosPessoais.cpf)
         InclusaoManualPage.Preencherdatanascimento('21/12/2000')
         InclusaoManualPage.Cliquefora()
         InclusaoManualPage.Preenchersexo()
         InclusaoManualPage.Marcarflagsemsolicitante()
         cy.wait(2000)
         InclusaoManualPage.Pesquisarexame()
         InclusaoManualPage.Selecionarexame()
         cy.wait(2000)
         //Quando clicar em Cadastrar Paciente
         InclusaoManualPage.Cliquecadastrarpaciente()
         cy.wait(4000)
         //Então abrir um modal
         InclusaoManualPage.Mensagemsucesso(expectedTextDetalhes)

})

})
