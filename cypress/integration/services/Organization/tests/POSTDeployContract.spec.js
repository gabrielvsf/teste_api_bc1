import * as POSTDeployContract from '../requests/POSTDeployContract.request';

context('POST Deploy Contract', () => {
    it('Adicionar novo contrato', () => {
        POSTDeployContract.criarContrato().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.result.returnCode).to.eq("success");
            expect(response.body.result.result.idContract).not.null;
            expect(response.body.result.result.ABI).not.null;
            expect(response.body.result.result.bytecode).not.null;            
        })
    });
    it('Adicionar novo contrato com token inválido', () => {
        POSTDeployContract.criarContratoComTokenInvalido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");          
        })
    });
    it('Adicionar novo contrato com model vazio', () => {
        POSTDeployContract.criarContratoComModeloVazio().should((response) => {
            //expect(response.status).to.eq(401);
            expect(response.body.response.returnCode).to.eq("failure");
            expect(response.body.response.code).to.eq("MODEL_INEXISTENTE");
            expect(response.body.response.message).to.eq("O model requisitado é inexistente!");
        })
    });
    it('Adicionar novo contrato com blockchain vazio', () => {
        POSTDeployContract.criarContratoComBlockchainVazio().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.response.returnCode).to.eq("failure");
            expect(response.body.response.code).to.eq("BLOCKCHAIN_INEXISTENTE");
            expect(response.body.response.message).to.eq("Selecione uma blockchain válida!");
        })
    });
    it('Adicionar novo contrato sem parametros', () => {
        POSTDeployContract.criarContratoSemParemetro().should((response) => {
            //expect(response.status).to.eq(401);
            //expect(response.body.response.returnCode).to.eq("failure");
            //expect(response.body.response.code).to.eq("BLOCKCHAIN_INEXISTENTE E MODEL_INEXISTENTE");
            //expect(response.body.response.message).to.eq("Selecione uma blockchain válida! e um model existente!");
        })
    });
});
