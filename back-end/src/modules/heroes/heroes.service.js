import heroesRepository from "./heroes.repository.js";
import AppError from "../../utils/AppError.js";

class heroesService {
    async listHeroes() {
        const {listHeroes} = await heroesRepository.listHeroes();

        if (!listHeroes) throw new AppError("Não foi encontrado heróis no banco de dados!", 404, {detalhes: "Banco de dados vázio!"});

        return { list_heroes: listHeroes }
    };

    async heroById(heroi_id) {
        const {heroi} = await heroesRepository.searchById(heroi_id);

        if (!heroi) throw new AppError("Não foi encontrado o herói!", 404, {heroi_id: heroi_id});

        return { heroi }
    };

    async topRichHeroes() {
        const { topHeroes } = await heroesRepository.topRichHeroes();

        if (!topHeroes) throw new AppError("Não foi encontrado o top herói ricos!", 404, {detalhes: "Banco de dados vázio!"});

        return { topHeroes }
    };
}

export default new heroesService();