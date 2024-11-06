export const getApiData = async (endpoint, params = {}) => {
    try {
        // Corrigido para usar a classe URL corretamente
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);

        // Adiciona os parâmetros, se houver
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (e) {
        console.error(`catch error: ${e}`);
    }
};
