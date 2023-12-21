import {render, screen, cleanup} from "@testing-library/react"
import Jelovnik from '../Jelovnik'

test('treba da renderuje komponentu jelovnik', () => {
    render(<Jelovnik/>);
    const jelovnikElement = screen.getByTestId('jelovnik-test');
    expect(jelovnikElement).toBeInTheDocument();
    expect(jelovnikElement).toHaveTextContent('Gurmanska');
})