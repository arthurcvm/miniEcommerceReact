import { render, screen } from '@testing-library/react';
import axiosMock from 'axios';
import ListarCidades from './listar-cidades';

describe('Teste do componente de listagem de cidades.', () => {
    it('deve gerar uma listagem de cidades', async () => {
        axiosMock.get.mockResolvedValueOnce({data: ['São Paulo', 'São Pedro']})
        const { getByTestId } = render(<ListarCidades estado="SP" />);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(await screen.findByTestId('São Paulo')).toHaveTextContent('São Paulo');
        expect(await screen.findByTestId('São Pedro')).toHaveTextContent('São Pedro');
    })
})