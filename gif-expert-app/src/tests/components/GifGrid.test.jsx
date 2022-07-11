import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebaas GifGrid', () => { 
    
    const category = 'One Punch'

    test('debe mostrar el loading inicialmente ', () => {
        
        useFetchGifs.mockReturnValue({
            images : [],
            isLoading : true
        });
        
        render( <GifGrid category={category}/>);
        expect(screen.getByText('Cargando ..........'));
        expect(screen.getByText(category));

     });

     test('debe de mostrar items cuando se cargan las imagenes useFech', () => { 
        
        const gifs = [
        {
            id: 'ABC',
            title : 'Saitama',
            url : 'https//localhost/saitama.jpg'
        },
        {
            id: '123',
            title : 'Goku',
            url : 'https//localhost/goku.jpg'
        }
    ]

        useFetchGifs.mockReturnValue({
            images : gifs,
            isLoading : false
        });

        render( <GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);


      });
 })