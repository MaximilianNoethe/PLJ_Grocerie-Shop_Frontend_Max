import {AxiosInstance} from "axios";
import {defaultInstance} from "./Api.ts";

const GroceryService = (api: AxiosInstance = defaultInstance) => ({
    getGroceryData: async () => {
        try {
            const response = await api.get("grocery")
            return response["data"];
        } catch (error) {
            console.error("Error accured");
        }
    },

    getGroceryById: async (groceryId) => {
        try {
            const response = await api.get(`grocery/${groceryId}`);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }
    },

    createGrocery: async (Name, Region, Description, Price) => {
        try {
            const data = {Name, Region, Description, Price};

            const response = await api.post("grocery", data);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }

    },

    updateGrocery: async (groceryId, Name, Region, Description, Price) => {
        try {
            const data = {Name, Region, Description, Price};

            const response = await api.put(`grocery/${groceryId}`, data);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }
    },

    deleteGrocery: async (groceryId) => {
        try {
            const response = await api.delete(`grocery/${groceryId}`);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }
    }
})
export default GroceryService;