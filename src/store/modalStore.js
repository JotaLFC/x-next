import { create } from 'zustand';

const useModalStore = create((set) => ({
  modalState: false,
  postId: '',
  setModalState: (state) => set({ modalState: state }),
  setPostId: (id) => set({ postId: id }),
}));

export default useModalStore;