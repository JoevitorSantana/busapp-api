export class Line {
    line_description: string;
};

export class LineCity {
    line_city_id?: number | any;
    city: string;
    ordenation: number;
};

export class Trajectory {
    from: number;
    to: number;
}