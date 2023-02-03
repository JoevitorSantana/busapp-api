import { Request, Response } from "express";
import { container } from "tsyringe";
import { TripService } from "./TripService";

export class TripController{
    /**
     * # TASKS
     * - Adicionar coluna Motorista
     * - Adicionar Tabela tipos de viagem
     * - Adicionar coluna tipo de viagem(Executivo, Convencional, Leito)
     * - A criação só pode ser feita por um usuário administrador
     */
    public async create(request: Request, response: Response): Promise<Response>{
        const {trip_line, trip_date, trip_hour, trip_bus} = request.body;
        const tripService = container.resolve(TripService);
        await tripService.create({
            trip_line, trip_date, trip_hour, trip_bus
        });
        return response.status(200).send();
    };

    /**
     * # TASKS
     * - A listagem só pode ser feita por admins
     */
    public async list(request: Request, response: Response): Promise<Response> {
        const tripService = container.resolve(TripService);
        const trips = await tripService.list();
        return response.json(trips);
    };

    /**
     * # TASKS
     * - Não pode ser feita buscas anteriores a data atual
     */
    public async search(request: Request, response: Response): Promise<Response> {
        const { from, to } = request.params;
        const date: any = request.query;
        const tripService = container.resolve(TripService);
        const trips = await tripService.search(date, parseInt(from), parseInt(to));
        return response.json(trips);
    };

    /**
     * # TASKS
     * - Usuário deve estar autenticado,
     * - Usuário deve ter dados cadastrais completos
     */
    public async buy(request: Request, response: Response): Promise<Response> {
        const {
            ticket_trip,
            ticket_initialTrajectory,
            ticket_finalTrajectory,
            ticket_seat,
            ticket_user
        } = request.body;

        const tripService = container.resolve(TripService);

        const trip = await tripService.buyTicket({
            ticket_trip,
            ticket_initialTrajectory,
            ticket_finalTrajectory,
            ticket_seat,
            ticket_user
        });

        return response.json(trip).send();
    };
};