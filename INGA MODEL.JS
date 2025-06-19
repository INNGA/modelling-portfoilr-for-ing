
        document.addEventListener('DOMContentLoaded', () => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            const modal = document.getElementById('galleryModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const closeModalBtn = document.getElementById('closeModal');

            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const imgSrc = item.dataset.imgSrc;
                    const imgTitle = item.dataset.title;
                    modalImage.src = imgSrc;
                    modalImage.alt = imgTitle;
                    modalTitle.textContent = imgTitle;
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                });
            });

            const closeModal = () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                modalImage.src = '';
            };

            closeModalBtn.addEventListener('click', closeModal);

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    closeModal();
                }
            });
        });
    