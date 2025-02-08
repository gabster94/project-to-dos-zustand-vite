import { useThemeStore } from "../stores/themeStore"

export const ThemeSwitch = () => {
    const { themeColor, updateThemeColor } = useThemeStore() //destructure
    //const themeColor = useStore(state => state.themeColor) //normal way
    return (
        <section className={themeColor}>
            <h2>Theme Switch Buttons</h2>
            <button onClick={() => updateThemeColor("light")}>Light Theme</button>
            <button onClick={() => updateThemeColor("dark")}>Dark Theme</button>
        </section>
    )
}