export const getIconFromServer = (iconPath) => {
    return `${import.meta.env.VITE_SERVER_URL}${iconPath}`

}