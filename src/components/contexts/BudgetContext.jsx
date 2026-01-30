// 

import { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {

    //var di stato 

    const [budgetMode, setBudgetMode] = useState(false)

    return (
        <BudgetContext.Provider
            value={{
                budgetMode,
                setBudgetMode
            }}>
            {children}
        </BudgetContext.Provider>

    );
}

//hook per il contesto

function useBudget() {
    const context = useContext(BudgetContext)
    return context;
}

export { BudgetProvider, useBudget }