import React from "react";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "35",
      title:
        '"No Bones About It", an Ebook by scifiguy3553 nochehombre@yahoo.com',
      summary:
        "Marcus Odwan is a young, archeologist student teacher in New York City.  On the side, he is a tour guide at the American Museum of Natural History.  Marcus is not the type to give credence to conspiracy theories.  Not even the one about his own profession...unless he is proven wrong!",
      thumbnail:
        "https://dwtr67e3ikfml.cloudfront.net/bookCovers/8097bdf6aab09ba48a5445b9b1a30bded7581018-thumb",
      author: "scifiguy3553 nochehombre@yahoo.com",
      published: "2013-09-12",
    },
    {
      id: "40",
      title:
        '"The Pre-Existents:  Number 2", an Ebook by scifiguy3553 nochehombre@yahoo.com',
      summary:
        "Jaimie Manuel is now part of the Awakened movement.  His new handler, David, introduces him to the other members of the San Antonio cell.\nDuring the meeting, the small group comes to fateful conclusion about the role of America’s Pre-Existents…",
      thumbnail:
        "https://dwtr67e3ikfml.cloudfront.net/bookCovers/4c33235a43b5b63e74be0caab032f90d56450dff-thumb",
      author: "scifiguy3553 nochehombre@yahoo.com",
      published: "2017-05-11",
    },
    {
      id: "29",
      title:
        "'Twas the Chihuahua Before Christmas, an Ebook by Esri Allbritten",
      summary:
        "Charlotte Baskerville, designer of small dog clothing, is asked if her Russian dog trainer will play Santa at the last minute. As she struggles to get him ready, an elf costume and other Chihuahua couture disappear from her workshop. This is a stand-alone story that features characters from the full-length mystery, 'Chihuahua of the Baskervilles,' published by St. Martin's Press.",
      thumbnail:
        "https://dwtr67e3ikfml.cloudfront.net/bookCovers/6cde9de57d239be567da53b18865f80c8f9c20b1-thumb",
      author: "Esri Allbritten",
      published: "2011-12-05",
    },
    {
      id: "30",
      title: '"Cousin Josh", an Ebook by scifiguy3553 nochehombre@yahoo.com',
      summary:
        "Avery Snider is a high school jock, and his family had just lost a close cousin.  His other set of cousins ask Avery to watch over their son, Josh, while the families go out of state to attend the funeral.\nAvery and a friend both learn that autistic traits could actually serve as a doorway to the Paranormal…",
      thumbnail:
        "https://dwtr67e3ikfml.cloudfront.net/bookCovers/68e3705d4d34d7a05d228eb71098e7435a6e9bad-thumb",
      author: "scifiguy3553 nochehombre@yahoo.com",
      published: "2016-09-11",
    },
  ]);
  return (
    <div className="flex flex-wrap min-h-[80vh] p-4 space-x-4">
      <div className="border-2 border-gray-500 p-4 w-[60vw] mx-auto">
        <div className="font-bold mb-2 text-2xl">Shopping Cart items</div>
        <hr />
        <div className="flex justify-between mt-2">
          <div className="w-[40vw]">
            <div>Product</div>
            <div className="mt-5">
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <div className="py-2 flex flex-row">
                      <img
                        className="mr-2 h-[200px] w-[150px] "
                        src={item.thumbnail}
                        alt=""
                      />
                      <div>
                        <div className="px-2 font-semibold">{item.title}</div>
                        <div className="px-2 mt-2 text-sm text-gray-600">
                          {item.author}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <div className="mb-5">Quantity</div>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div class="flex h-[218px]">
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex mt-4 justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="w-[6vw]">
            <div className="mb-5">Price</div>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div class="flex h-[218px]">
                    <div>Rs 275</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* <div className="border-2 border-gray-500 p-4"></div> */}
    </div>
  );
};

export default Cart;
