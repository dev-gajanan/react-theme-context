
type StateType = {
    theme: String,
    fontSize: number
}

//Discriminated unions
type ColorActionType = {
    payload: number
}
type SizeeActionType = {
    payload: number
}
type ActionType = ColorActionType | SizeeActionType;

const INITIAL_STATE = {
    theme: "dark",
    fotnSize: 14
}

//Theme context
export const ThemeContext = createContext<{
    state: StateType;
    dispatch: React.Dispath<ActionType>;
}>({
    state: INITIAL_STATE, 
    dispath: () => {}
});

//Reducer
const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_THEME": 
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark"
            };
        case "CHANGE_FONTSIZE":
            return {
                ...state,
                fontSize: action.payload 
            };
        default: 
            return state;
    }
}

//Theme Proivider

export const ThemeProvider = ({children}: {children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    return <ThemeContext.Provider value={state, dispatch}>
        {children}
    </ThemeContext.Provider>
}