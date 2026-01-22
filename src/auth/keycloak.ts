import Keycloak from "keycloak-js"
const keycloak = new Keycloak({
    url: "http://192.168.100.91:8084",
    realm: "meu-realm",
    clientId: "react-vite-app",
})
export default keycloak;