export const createCartUi = ({id,price,image,title}) => {
    const cart = document.createElement("div");
    cart.classList.add("cart-items");
  cart.innerHTML = `
    
    <div class=" mb-5">
    <img
      class="h-[80px] mb-[-40px] ps-4"
      src="${image}"
      alt=""
    />
    <div
      class="border shadow p-4 pt-12 border-neutral-500 text-neutral-700"
    >
      <p class="font-bold mb-3 line-clamp-1">${title}</p>
      <div class="flex justify-between">
        <p class="text-neutral-500">$ <span>${price}</span></p>
        <div
          class="flex w-[110px] bg-neutral-200 justify-between items-center"
        >
          <!-- minus -->
          <button class="px-2 py-1 bg-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 12H6"
              />
            </svg>
          </button>

          <p class="flex-grow text-center">1</p>

          <!-- plus -->
          <button class="px-2 py-1 bg-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
    
    `;
  return cart;
};
