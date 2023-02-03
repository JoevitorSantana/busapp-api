export const states = [
    {state_id: 1, state_name: "Acre", state_acronim: "AC"},
    {state_id: 2, state_name: "Alagoas", state_acronim: "AL"},
    {state_id: 3, state_name: "Amapá", state_acronim: "AP"},
    {state_id: 4, state_name: "Amazonas", state_acronim: "AM"},
    {state_id: 5, state_name: "Bahia", state_acronim: "BA"},
    {state_id: 6, state_name: "Ceará", state_acronim: "CE"},
    {state_id: 7, state_name: "Distrito Federal", state_acronim: "DF"},
    {state_id: 8, state_name: "Espírito Santo", state_acronim: "ES"},
    {state_id: 9, state_name: "Goiás", state_acronim: "GO"},
    {state_id: 10, state_name: "Maranhão", state_acronim: "MA"},
    {state_id: 11, state_name: "Mato Grosso", state_acronim: "MT"},
    {state_id: 12, state_name: "Mato Grosso do Sul", state_acronim: "MS"},
    {state_id: 13, state_name: "Minas Gerais", state_acronim: "MG"},
    {state_id: 14, state_name: "Pará", state_acronim: "PA"},
    {state_id: 15, state_name: "Paraíba", state_acronim: "PB"},
    {state_id: 16, state_name: "Paraná", state_acronim: "PR"},
    {state_id: 17, state_name: "Pernambuco", state_acronim: "PE"},
    {state_id: 18, state_name: "Piauí", state_acronim: "PI"},
    {state_id: 19, state_name: "Rio de Janeiro", state_acronim: "RJ"},
    {state_id: 20, state_name: "Rio Grande do Norte", state_acronim: "RN"},
    {state_id: 21, state_name: "Rio Grande do Sul", state_acronim: "RS"},
    {state_id: 22, state_name: "Rondônia", state_acronim: "RO"},
    {state_id: 23, state_name: "Roraima", state_acronim: "RR"},
    {state_id: 24, state_name: "Santa Catarina", state_acronim: "SC"},
    {state_id: 25, state_name: "São Paulo", state_acronim: "SP"},
    {state_id: 26, state_name: "Sergipe", state_acronim: "SE"},
    {state_id: 27, state_name: "Tocantins", state_acronim: "TO"}
];

export const cities = [
    {
        city_id: 1,
        city_name: 'Campo Grande',
        city_state: 12,
    },
    {
        city_id: 2,
        city_name: 'Nova Alvorada do Sul',
        city_state: 12,
    },
    {
        city_id: 3,
        city_name: 'Bataguassu',
        city_state: 12,
    },
    {
        city_id: 4,
        city_name: 'Presidente Epitácio',
        city_state: 25,
    },
    {
        city_id: 5,
        city_name: 'Presidente Venceslau',
        city_state: 25,
    },
    {
        city_id: 6,
        city_name: 'Presidente Prudente',
        city_state: 25,
    },
    {
        city_id: 7,
        city_name: 'Assis',
        city_state: 25,
    },
    {
        city_id: 8,
        city_name: 'Ourinhos',
        city_state: 25,
    },
    {
        city_id: 9,
        city_name: 'Sorocaba',
        city_state: 25,
    },
    {
        city_id: 10,
        city_name: 'Campinas',
        city_state: 25,
    },
    {
        city_id: 11,
        city_name: 'São Paulo',
        city_state: 25,
    },
    {
        city_id: 12,
        city_name: 'Rio de Janeiro',
        city_state: 25,
    },
    {
        city_id: 13,
        city_name: 'Porecatu',
        city_state: 16,
    },
    {
        city_id: 14,
        city_name: 'Rolândia',
        city_state: 16,
    },
    {
        city_id: 15,
        city_name: 'Londrina',
        city_state: 16,
    },
    {
        city_id: 16,
        city_name: 'Ponta Grossa',
        city_state: 16,
    },
    {
        city_id: 17,
        city_name: 'Curitiba',
        city_state: 16,
    },
];

export const lines = [
    {
        line_id: 1,
        line_description: 'Campo Grande X Rio de Janeiro'
    },
    {
        line_id: 2,
        line_description: 'Rio de Janeiro X Campo Grande'
    },
    {
        line_id: 3,
        line_description: 'Campo Grande X Londrina'
    },
    {
        line_id: 3,
        line_description: 'Londrina X Campo Grande'
    },
];

export const line_city = [
    // Campo Grande ao Rio
    {
        line_city_id: 1,
        line: 1,
        city: 1,
        line_ordenation: 1
    },
    {
        line_city_id: 2,
        line: 1,
        city: 2,
        line_ordenation: 2
    },
    {
        line_city_id: 3,
        line: 1,
        city: 3,
        line_ordenation: 3
    },
    {
        line_city_id: 4,
        line: 1,
        city: 4,
        line_ordenation: 4
    },
    {
        line_city_id: 5,
        line: 1,
        city: 5,
        line_ordenation: 5
    },
    {
        line_city_id: 6,
        line: 1,
        city: 6,
        line_ordenation: 6
    },
    {
        line_city_id: 7,
        line: 1,
        city: 7,
        line_ordenation: 7
    },
    {
        line_city_id: 8,
        line: 1,
        city: 8,
        line_ordenation: 8
    },
    {
        line_city_id: 9,
        line: 1,
        city: 9,
        line_ordenation: 9
    },
    {
        line_city_id: 10,
        line: 1,
        city: 10,
        line_ordenation: 10
    },
    {
        line_city_id: 11,
        line: 1,
        city: 11,
        line_ordenation: 11
    },
    {
        line_city_id: 12,
        line: 1,
        city: 12,
        line_ordenation: 12
    },
    // Rio a Campo Grande 
    {
        line_city_id: 13,
        line: 2,
        city: 12,
        line_ordenation: 1
    },
    {
        line_city_id: 14,
        line: 2,
        city: 11,
        line_ordenation: 2
    },
    {
        line_city_id: 15,
        line: 2,
        city: 10,
        line_ordenation: 3
    },
    {
        line_city_id: 16,
        line: 2,
        city: 9,
        line_ordenation: 4
    },
    {
        line_city_id: 17,
        line: 2,
        city: 8,
        line_ordenation: 5
    },
    {
        line_city_id: 18,
        line: 2,
        city: 7,
        line_ordenation: 6
    },
    {
        line_city_id: 19,
        line: 2,
        city: 6,
        line_ordenation: 7
    },
    {
        line_city_id: 20,
        line: 2,
        city: 5,
        line_ordenation: 8
    },
    {
        line_city_id: 21,
        line: 2,
        city: 4,
        line_ordenation: 9
    },
    {
        line_city_id: 22,
        line: 2,
        city: 3,
        line_ordenation: 10
    },
    {
        line_city_id: 23,
        line: 2,
        city: 2,
        line_ordenation: 11
    },
    {
        line_city_id: 24,
        line: 2,
        city: 1,
        line_ordenation: 12
    },
];

export const trajectories = [
    {
        trajectory_id: 1,
        initial_line_city: 1,
        final_line_city: 2
    },
    {
        trajectory_id: 2,
        initial_line_city: 2,
        final_line_city: 3
    },
    {
        trajectory_id: 3,
        initial_line_city: 3,
        final_line_city: 4
    },
    {
        trajectory_id: 4,
        initial_line_city: 4,
        final_line_city: 5
    },
    {
        trajectory_id: 5,
        initial_line_city: 5,
        final_line_city: 6
    },
    {
        trajectory_id: 6,
        initial_line_city: 6,
        final_line_city: 7
    },
    {
        trajectory_id: 7,
        initial_line_city: 7,
        final_line_city: 8
    },
    {
        trajectory_id: 8,
        initial_line_city: 8,
        final_line_city: 9
    },
    {
        trajectory_id: 9,
        initial_line_city: 9,
        final_line_city: 10
    },
    {
        trajectory_id: 10,
        initial_line_city: 10,
        final_line_city: 11
    },
    {
        trajectory_id: 11,
        initial_line_city: 11,
        final_line_city: 12
    },
    {
        trajectory_id: 13,
        initial_line_city: 13,
        final_line_city: 14
    },
    {
        trajectory_id: 14,
        initial_line_city: 15,
        final_line_city: 16
    },
    {
        trajectory_id: 15,
        initial_line_city: 17,
        final_line_city: 18
    },
    {
        trajectory_id: 16,
        initial_line_city: 19,
        final_line_city: 20
    },
    {
        trajectory_id: 17,
        initial_line_city: 21,
        final_line_city: 22
    },
    {
        trajectory_id: 18,
        initial_line_city: 23,
        final_line_city: 24
    },
];

export const trips = [
    {
        trip_id: 1,
        line: 1,
        date: '2023-01-22',
        hour: '22:00:00',
    },
    {
        trip_id: 1,
        line: 2,
        date: '2023-01-22',
        hour: '22:00:00',
    },
];

export const ticket = {
    passenger_id: 1,
    trip: 1,
    from: 'Campo Grande',
    to: 'Presidente Prudente'
};

export const trajectory_seats: any[] = [];

let counter = 1;

function populate () {
    for(let i = 1; i <= trajectories.length; i++) {
        for(let s = 1; s <= 50; s++) {
            const seat = {
                trajectory_seat_id: counter,
                trajectory_id: i,
                seat: s,
                status: 'Disponível'
            };
            counter++;
            trajectory_seats.push(seat);
        };
    };
}

populate();

/*
    TENHO LINHA
    TENHO LINHA_CIDADE QUE VINCULA CIDADE À LINHA
    
    QUERO CRIAR TRAJETORIAS ENTRE AS CIDADES QUE COMPOEM A LINHA

    enquanto(var contador = 1; contador < numero de cidades da linha(12); contador++){
        selecionar a primeira cidade da linha (valor do contador pela ordenacao);
            vai pegar seu id e definir com initial_line_city
        selecionar a proxima cidade da linha (valor do contador + 1);
            vai pegar seu id e definir com final_line_city
        ordenacao = contador;
    }
*/