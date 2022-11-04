Feature: Produto
    Como um usuário
    Eu gostara de buscar produtos
    Para verificar seus detalhes

    @buscarProduto
    Scenario: Busca de produto
        Given o sistema for acessado
        When buscar um produto
        Then devem ser exibidos seus detalhes
