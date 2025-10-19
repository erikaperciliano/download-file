import { apiUrl } from "../api";

const downloadUsersCSV = async () => {
    const res = await fetch(`${apiUrl}/user/export`);
    if(!res.ok) throw new Error('Erro ao gerar CSV');
    return await res.blob();
}

export default downloadUsersCSV;