import logServices from "./logs.service.js"

export const getAllLogs = async (req, res) => {
    const validResult = await logServices.listAllLogs();

    res.status(201).json({
        ...validResult
    });
}