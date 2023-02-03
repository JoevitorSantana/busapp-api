import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { app } from "./app";
import { cities, lines, line_city, states, trajectories, trajectory_seats } from './seed';

app.get('/', (request, response) => {
    return response.json({message: 'Servidor Rodando'});
})

const PORT = process.env.PORT || 3333;

// const cities = [
//     {
//         id: 1,
//         city_name: 'Londrina'
//     },
//     {
//         id: 2,
//         city_name: 'Rolândia'
//     },
//     {
//         id: 3,
//         city_name: 'Porecatu'
//     },
//     {
//         id: 4,
//         city_name: 'Presidente Prudente'
//     },
//     {
//         id: 5,
//         city_name: 'Presidente Venceslau'
//     },
//     {
//         id: 6,
//         city_name: 'Presidente Epitacio'
//     },
//     {
//         id: 7,
//         city_name: 'Bataguassu'
//     },
//     {
//         id: 8,
//         city_name: 'Nova Alvorada do Sul'
//     },
//     {
//         id: 9,
//         city_name: 'Campo Grande'
//     }
// ];

// let trajects: any = [];

// function createTrajects(actualCity: number, nextCity: number){
//     if (nextCity >= cities.length) {
//         return;
//     }
//     let seatsArray: any = [];

//     for(let numberOfSeats = 1; numberOfSeats <= 20; numberOfSeats++) {
//         const seatStatus = {
//             seat: numberOfSeats,
//             status: 'Disponível'
//         }
//         seatsArray.push(seatStatus);
//     }

//     const traject = {
//         id: actualCity,
//         from: cities[actualCity].city_name,
//         to: cities[nextCity].city_name,
//         seats: seatsArray
//     }

//     trajects.push(traject);
// }

// for(let i = 0; i <= cities.length; i++) {
//     createTrajects(i, i+1);
// }

// type Traject = {
//     from: string;
//     to: string;
//     seats: string[];
// }

// function buyTicket(from: string, to: string, seat: number) {
//     const traject = trajects.find((traject: Traject) =>
//         traject.from === from
//     );
//     const toTraject = trajects.find((traject: Traject) =>
//         traject.to === to
//     );

//     for(let initialCity = traject.id; initialCity <= toTraject.id; initialCity++) {
//         let poltronas = trajects[initialCity].seats;
//         const selectedPoltrona = poltronas.find((poltrona: any) =>
//             poltrona.seat === seat - 1
//         );

//         trajects[initialCity].seats[selectedPoltrona.seat].status = 'Ocupado';
//         // console.log(trajects[initialCity].seats[selectedPoltrona.seat])
//         // const {from, to} = trajects[initialCity];

//         // console.log({
//         //     from, to,
//         //     poltronas
//         // });
//     }

//     trajects.map((traject: Traject) => {
//         const {from, to, seats} = traject;

//         console.log({
//             from, to, seats
//         })
//     });
// }

// buyTicket('Presidente Prudente', 'Campo Grande', 2);
// buyTicket('Bataguassu', 'Campo Grande', 3);


app.get('/states', (request: Request, response: Response) => {
    response.json({
        states
    });
});

interface ICityView {
    id: number,
    name: string,
    state_name: string | undefined
}

app.get('/cities', (request: Request, response: Response) => {
    let prettyCities: ICityView[] = [];
    cities.map(city => {
        const prettyCity = {
            id: city.city_id,
            name: city.city_name,
            state_name: states.find(state => state.state_id === city.city_state)?.state_acronim,
        }
        prettyCities.push(prettyCity);
    });

    response.json(prettyCities)
});

let dataLake: any[] = [];

app.get('/lines', (request: Request, response: Response) => {
    let prettyLines: any[] = [];
    lines.map(line => {

        let prettyCities: any[] = [];
        let prettyTrajectories: any[] = [];

        const line_cities = line_city.filter(line_city => line_city.line === line.line_id);
        
        line_cities.map(lineCityInfo => {
            const prettyCityInfo = {
                city: cities.find(city => city.city_id === lineCityInfo.city)?.city_name,
                ordenation: lineCityInfo.line_ordenation,
            }

            const trajectoryName = trajectories.find(trajectory => 
                trajectory.initial_line_city === lineCityInfo.line_city_id
            );

            if (trajectoryName) {
                let cityPrettier: string | undefined = '';
                let finalCityPrettier: string | undefined = '';
            
                const initial_line_city_id = line_city.find(lineCityInfo => 
                    lineCityInfo.line_city_id === trajectoryName?.initial_line_city
                );
                const final_line_city_id = line_city.find(lineCityInfo => 
                    lineCityInfo.line_city_id === trajectoryName?.final_line_city
                );
                cityPrettier = cities.find(cityInfo => 
                    cityInfo.city_id === initial_line_city_id?.city
                )?.city_name;
            
                finalCityPrettier = cities.find(cityInfo => 
                    cityInfo.city_id === final_line_city_id?.city
                )?.city_name;
            
                if (cityPrettier !== '') {
                    const seats = trajectory_seats.filter(trajectorySeat => 
                        trajectorySeat.trajectory_id === trajectoryName.trajectory_id
                    );

                    const trajectoryPrettier = {
                        id: trajectoryName?.trajectory_id,
                        de: cityPrettier,
                        para: finalCityPrettier,
                        poltronas: seats
                    };
                    
                    prettyTrajectories.push(trajectoryPrettier);
                }
            }

            prettyCities.push(prettyCityInfo);
        });

        const prettyLine = {
            id: line.line_id,
            descricao: line.line_description,
            cidades: prettyCities,
            pontos_de_parada: prettyTrajectories
        }

        prettyLines.push(prettyLine);
    });

    dataLake.push(prettyLines);

    response.json(prettyLines);
});

app.post('/buy', (request: Request, response: Response) => {
    const { de, para } = request.body;

    dataLake.map(data => {
        console.log(data[0].descricao);
    });

    return response.status(200).json({
        dataLake
    });
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError){
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        })
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));