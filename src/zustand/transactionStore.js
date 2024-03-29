import { create } from "zustand";
import axios from "axios";

const useTransactionStore = create((set, get) => ({
  name: "",
  amount: "",
  partner: "",
  category: "",
  message: "",

  setName: (neuerName) => set({ name: neuerName }),
  setAmount: (neuerAmount) => set({ amount: neuerAmount }),
  setPartner: (neuerPartner) => set({ partner: neuerPartner }),
  setCategory: (neueCategory) => set({ category: neueCategory }),
  setMessage: (neuerMessage) => set({ message: neuerMessage }),

  deleteData: () => set({ amount: "", message: "" }),

  sendTransaction: async () => {
    try {
      const { name, amount, partner, category, message } = get();
      await axios.post("http://localhost:3000/api/transaction", {
        name,
        amount,
        partner,
        category,
        message,
      });
      get().deleteData();
    } catch (error) {
      console.error("Fehler beim senden der Transaktion", error);
    }
  },
}));

export default useTransactionStore;
