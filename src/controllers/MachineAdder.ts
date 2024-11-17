import express, { Request, Response, NextFunction } from 'express';
import { createMachine } from '../models/MachineSchema';
import { RequestHandler } from 'express';

export const adder: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { machineName, owner, parm1, parm2, parm3, parm4 } = req.body;

        if (!machineName || !owner || !parm1 || !parm2 || !parm3 || !parm4) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        const machine = await createMachine({
            machineName,
            owner,
            parm1,
            parm2,
            parm3,
            parm4,
        });
        res.status(201).json(machine);
    } catch (error) {
        console.error('Error in adder:', error);
        next(error); 
    }
};
