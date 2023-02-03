import { container } from 'tsyringe';
import { ICitiesRepository } from '../../modules/travels/repositories/ICitiesRepository';
import { CitiesRepositoryMySQL } from '../../modules/travels/repositories/implementations/CitiesRepositoryMySQL';
import { TravelsRepositoryMongo } from '../../modules/travels/repositories/implementations/TravelsRepositoryMongo';
import { TravelRepositoryMySQL } from '../../modules/travels/repositories/implementations/TravelsRepositoryMySQL';
import { ITravelRepository } from '../../modules/travels/repositories/ITravelRepository';
import { UsersRepositoryMongo } from '../../modules/users/repositories/implementations/UsersRepositoryMongo';
import { UsersRepositoryMySQL } from '../../modules/users/repositories/implementations/UsersRepositoryMySQL';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { HashProviderInMemory } from './HashProvider/in-memory/HashProvider';
import { IHashProvider } from './HashProvider/models/IHashProvider';

container.registerSingleton<ITravelRepository>(
    'TravelsRepository',
    TravelRepositoryMySQL
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepositoryMySQL
);

container.registerSingleton<IHashProvider>(
    'HashProvider',
    HashProviderInMemory
);

container.registerSingleton<ICitiesRepository>(
    'CitiesRepository',
    CitiesRepositoryMySQL
);