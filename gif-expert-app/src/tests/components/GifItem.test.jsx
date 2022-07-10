import {render, screen} from '@testing-library/react';
import {GifItem} from '../../components/GifItem';
describe('pruebas sobre GifItem', () => {
    const  title = 'saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    test('debe de hacer macht con el snapshot', () => { 
       const {container} = render(<GifItem title={title} url={url} />);
       expect (container).toMatchSnapshot();
     });

     test('debe de mostrar la imagen con el url y el alt indicado', () => { 
        const {container} = render(<GifItem title={title} url={url} />);
        //screen.debug();
        // expect (screen.getByRole('img').src).toBe(url);
        // expect (screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect (src).toBe(url);
        expect (alt).toBe(title);
      });

      test('debe motara el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
       })
 });