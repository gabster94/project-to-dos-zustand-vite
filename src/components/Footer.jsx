import { useThemeStore } from "../stores/themeStore"

export const Footer = () => {
    const { themeColor } = useThemeStore()
    return (
        <footer className={themeColor}>
            <p>Theme: {themeColor}</p>
        </footer>
    )
}