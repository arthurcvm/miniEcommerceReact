import { render } from '@testing-library/react'
import ListarProdutos from './listar-produtos'

describe('Teste do componente de listagem de produtos', () => {
    it('deve exibir os nomes dos produtos nos cards', () => {
        const { getByTestId } = render(
            <ListarProdutos
                exibirMensagem={() => false}
                adicionarProduto={() => false} />
        );
        expect(getByTestId('card1')).toHaveTextContent('Aprenda Java');
        expect(getByTestId('card2')).toHaveTextContent('Javascript em 24 horas');
    })

    it('deve exibir as descrições dos produtos nos cards', () => {
        const { getByTestId } = render(
            <ListarProdutos
                exibirMensagem={() => false}
                adicionarProduto={() => false} />
        );
        expect(getByTestId('card1')).toHaveTextContent('Descrição do produto aqui...');
        expect(getByTestId('card2')).toHaveTextContent('Descrição do produto aqui...');
    })

    it('deve exibir os preços dos produtos nos botões de comprar', () => {
        const { getByTestId } = render(
            <ListarProdutos
                exibirMensagem={() => false}
                adicionarProduto={() => false} />
        );
        expect(getByTestId('card1')).toHaveTextContent('Comprar (R$59,99)');
        expect(getByTestId('card2')).toHaveTextContent('Comprar (R$19,99)');
    })
})