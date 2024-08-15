import {AxiosInstance} from "axios";
import {defaultInstance} from "./Api.ts";

type Grocery = {
    id: number;
    name: string;
    region: string;
    description: string;
    price: number;
}

const GroceryService = (api: AxiosInstance = defaultInstance) => ({
    getGroceryData: async () => {
        try {
            const response = await api.get("grocery")
            return response["data"];
        } catch (error) {
            console.error("Error accured");
        }
    },

    getGroceryById: async (data: Grocery) => {
        try {
            const response = await api.get(`grocery/${data.id}`);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }
    },

    createGrocery: async (data: Grocery) => {
        try {

            const response = await api.post("grocery", data);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }

    },

    updateGrocery: async (data: Grocery) => {
        try {
            const response = await api.put(`grocery/${data.id}`, data);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }
    },

    deleteGrocery: async (data: Grocery) => {
        try {
            const response = await api.delete(`grocery/${data.id}`);
            return response.data;
        } catch (error) {
            console.error("Error accured");
        }
    }
})
export default GroceryService;