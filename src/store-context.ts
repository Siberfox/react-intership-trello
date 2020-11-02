import React from 'react';

import { StoreContextInterface } from './interfaces';

export const StoreContext = React.createContext<StoreContextInterface | undefined>(undefined);
