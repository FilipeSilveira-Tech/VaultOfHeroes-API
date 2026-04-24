import heroesRepository from "./heroes.repository.js";
import AppError from "../../utils/AppError.js";

class heroesService {
    async listHeroes() {
        const listHeroes = await heroesRepository.listHeroes();
        if (!listHeroes) throw new AppError("Não foi encontrado heróis no banco de dados!", 404, {detalhes: "Banco de dados vázio!"});

        return { 
            heroes: listHeroes,
        }
    };

    async heroById(heroi_id) {
        const hero = await heroesRepository.searchById(heroi_id);

        if (!hero) throw new AppError("Não foi encontrado o herói!", 404, {heroi_id: heroi_id});

        return { hero }
    };

    async topRichHeroes() {
        const topHeroes = await heroesRepository.topRichHeroes();

        if (!topHeroes) throw new AppError("Não foi encontrado o top herói ricos!", 404, {detalhes: "Banco de dados vázio!"});

        return { topHeroes }
    };

    async heroInventory(heroi_id) {
        const items = await heroesRepository.heroInventory(heroi_id)

        if (!items) return "[]";

        return { items }
    };

    async listAllHeroesWithItems() {
        try {
            const data = await this.listHeroes();
            const heroes = data.heroes;

            const itemsNested = await Promise.all(
                heroes.map(hero => this.heroInventory(hero.id))
            );

            const itemsMap = new Map();

            heroes.forEach((hero, index) => {
                itemsMap.set(hero.id, itemsNested[index]);
            });

            const heroesWithItems = heroes.map(hero => ({
                ...hero,
                items: itemsMap.get(hero.id) || []
            }));

            return { heroes: heroesWithItems }
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
            throw new AppError("Erro interno do servidor", 500);
        }
    }
}

export default new heroesService();