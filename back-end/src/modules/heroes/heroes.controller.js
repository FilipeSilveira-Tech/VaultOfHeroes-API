import heroesService from './heroes.service.js';

export const listHeroes = async (req, res) => {
    const validResult = await heroesService.listHeroes();

    res.status(201).json({
        message: "Lista de todos os corajosos heróis!",
        ...validResult
    });
};

export const heroById = async (req, res) => {
    console.log("[LOG] Controller: ", req.params.id)
    const validResultHero = await heroesService.heroById(req.params.id);
    const validResultInventory = await heroesService.heroInventory(req.params.id);

    res.status(201).json({
        ...validResultHero,
        ...validResultInventory
    });
};

export const listRichHeroes = async (req, res) => {
    const validResult = await heroesService.topRichHeroes();

    res.status(201).json({
        message: "Aqui estão o top 10 heróis mais ricos!",
        ...validResult
    });
};

export const heroInventory = async (req, res) => {
    const validResult = await heroesService.heroInventory(req.params.id);

    res.status(201).json({
        heroId: Number(req.params.id),
        ...validResult
    })
}