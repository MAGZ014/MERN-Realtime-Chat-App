import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
  message: [],
  users: [],
  selectedUser: null,
  isUserLoading: false,
  inMessagesLoading: false,

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const res = await axiosInstance.get("/message/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUserLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ inMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/message/${userId}`);
      set({ message: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ inMessagesLoading: false });
    }
  },
}));
