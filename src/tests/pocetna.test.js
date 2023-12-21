import {render, screen, cleanup} from "@testing-library/react"
import Pocetna from '../Pocetna'

test('treba da renderuje komponentu pocetna', () => {
    render(<Pocetna/>);
    const pocetnaElement = screen.getByTestId('pocetna-test');
    expect(pocetnaElement).toBeInTheDocument();
    expect(pocetnaElement).toHaveTextContent('Specijaliteti');
})