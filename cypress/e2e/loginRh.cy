///<reference types="cypress"/>

// Importação de Páginas
import loginPage from '../../support/pages/LoginRhPage.js';

/**
 * Testes login e esqueci minha senha do portal RH
 */
describe('loginPortalRH', () => {
    
    /**
     * Antes de cada teste, visita a URL configurada
     */
    beforeEach(() => {
        cy.visit(Cypress.config('url'));  
    });

    /**
     * Teste para verificar o login com sucesso
     */
    it('Realizar login - sucesso (SKU-TC-766)', () => {
        // Parâmetros (Arrange)
        const solicitante = Cypress.config('solicitante');
        //const senha = Cypress.config('senha');
        const expectedText = "27976 - URA POUSO ALEGRE";

        // Ações (Act)
        loginPage.preencherSolicitante(solicitante);
        //loginPage.preencherSenha(senha);
        //loginPage.clicarLogar();
 

        // Ações (act)
        loginPage.clicaravancar();
        cy.wait(2000);

        // Ações (act)
        loginPage.preencherCpf();

       // Ações (act)
        loginPage.preencherSenha();

        // Ações (act)
        loginPage.clicarFazerlogin();

        // Validação (Assert)
        loginPage.validarLogin(expectedText);  
    });

    /**
     * Teste para validar login Inválido
     */
    const senhas = [1234];
    senhas.forEach(senha => {
        it(`RealizarLoginInvalido - DataDriven ${senha}`, function() {
            // Parâmetros (Arrange)
            const cpf = Cypress.config('cpf');
            const solicitante = 'c27976';
            const msgErro = 'Dados de acesso inválidos';

            
            // Ações (Act)
            loginPage.preencherSolicitante(solicitante);
            loginPage.clicaravancar();
            loginPage.preencherCpf(cpf);
            loginPage.preencherSenhainvalida('1234');
            loginPage.clicarFazerlogin();
    
            // Validação (Assert)
            loginPage.ValidarLoginInvalido(msgErro);
        });
    });

    /**
     * Teste para validar esqueci minha senha cenário de sucesso
     */
    it('EsqueciMinhaSenhaSucesso', () => {
        // Parâmetros (Arrange)
        const cpf = Cypress.config('cpf');
        //const expectedText = "Link enviado";
        const solicitante = "c27976";


        // Ações (Act)
        loginPage.preencherSolicitante(solicitante);
        loginPage.clicaravancar()
        cy.wait(2000)
        loginPage.clicarEsqueciMinhaSenha();
        cy.wait(2000)
        loginPage.DadosRecuperarSenha('957.247.680-70');
        loginPage.RecuperarSenha()
        loginPage.Enviarporemail()
        loginPage.Confirmarecuperacaosenha()

  
    });

    /**
     * Teste para validar esqueci minha senha com e-mail não cadastrado
     */
    it('EsqueciMinhaSenhaUsuarioNaoCadastrado', () => {
        // Parâmetros (Arrange)
        const solicitante = Cypress.config('solicitante');
        const email = Cypress.config('cpfinvalido');
        const expectedText = "Usuário / CPF incorreto. Tente novamente.";
        

        // Ações (Act)
        loginPage.preencherSolicitante(solicitante);
        loginPage.clicaravancar()
        cy.wait(2000)
        loginPage.clicarEsqueciMinhaSenha();
        cy.wait(2000)
        loginPage.DadosRecuperarSenha('000.001.002-03');
        loginPage.Confirmarecuperacaosenha()
        // Validação (Assert)
        loginPage.ValidarEsqueciMinhaSenhaUsuarioNaoCadastrado(expectedText);
    });
});
