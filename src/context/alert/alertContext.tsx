import { createContext } from 'react';

export interface IAlertContextProps {

        msg: string;
        type: string;

    setAlert(msg: string, type: string): any
}

const alertContext = createContext({} as IAlertContextProps);

export default alertContext;