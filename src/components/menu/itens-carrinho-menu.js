import PropTypes from 'prop-types'
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

function ItensCarrinhoMenu (props) {

    function render () {
        if (props.produtos.length === 0) {
            return (
                <NavDropdown.Item href="" data-testid="itens">
                    <FontAwesomeIcon icon={faSadTear} />
                    &nbsp;
                    Carrinho vazio...
                </NavDropdown.Item>
            );
        }
        const itens = props.produtos.map(p =>
            <NavDropdown.Item href="" key={p.nome} data-testid={p.nome}>
                {p.nome} - {p.quantidade} x {p.preco}
            </NavDropdown.Item>
        );
        return itens;
    }

    return render();
}

ItensCarrinhoMenu.propTypes = {
    produtos: PropTypes.array.isRequired
}

export default ItensCarrinhoMenu;