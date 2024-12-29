import { axiosService } from "./axios.service";

export const postService = {
    getAll: async () => {
        let response = await axiosService.get("posts");
        return response.data;
    },

    getById: async (id)  => {
        const response = await axiosService.get(`posts/${id}`);
        return response.data;
    },

    getComments: async (id) => {
        const response = await axiosService.get(`posts/${id}/comments`);
        return response.data;
    }
}