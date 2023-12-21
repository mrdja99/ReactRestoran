import {render, screen, cleanup} from "@testing-library/react"
import Onama from '../Onama'

test('treba da renderuje komponentu O nama', () => {
    render(<Onama/>);
    const onamaElement = screen.getByTestId('onama-test');
    expect(onamaElement).toBeInTheDocument();
    expect(onamaElement).toHaveTextContent('Skadarlije');
})