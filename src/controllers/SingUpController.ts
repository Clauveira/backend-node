import { Request, Response } from 'express';

const singUp = (rec: Request, res: Response) => {
    return res.send('Hello world!');
}

export const SingUpController = {
    singUp,
}


