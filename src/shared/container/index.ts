import { container } from 'tsyringe';
import { TravelRepositoryInMemory } from '../../modules/travels/repositories/in-memory/TravelRepositoryInMemory';
import { ITravelRepository } from '../../modules/travels/repositories/ITravelRepository';
import { UsersRepositoryInMemory } from '../../modules/users/repositories/in-memory/UsersRepositoryInMemory';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { HashProviderInMemory } from './HashProvider/in-memory/HashProvider';
import { IHashProvider } from './HashProvider/models/IHashProvider';

container.registerSingleton<ITravelRepository>(
    'TravelsRepository',
    TravelRepositoryInMemory
)

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepositoryInMemory
)

container.registerSingleton<IHashProvider>(
    'HashProvider',
    HashProviderInMemory
)