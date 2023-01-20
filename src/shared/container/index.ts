import { container } from 'tsyringe';
import { TravelRepositoryInMemory } from '../../modules/travels/repositories/in-memory/TravelRepositoryInMemory';
import { ITravelRepository } from '../../modules/travels/repositories/ITravelRepository';

container.registerSingleton<ITravelRepository>(
    'TravelsRepository',
    TravelRepositoryInMemory
)