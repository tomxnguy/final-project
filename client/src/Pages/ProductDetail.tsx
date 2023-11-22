import './ProductDetail.css';
import { add30 } from '../Components/add30.tsx';
import { PiPlusCircleBold } from 'react-icons/pi';
import { PiMinusCircleBold } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toDollars } from '../Components/to-dollars.tsx';

type Product = {
  productItemId: number;
  name: string;
  imageUrl: string;
  price: number;
  desc: string;
};

async function fetchProduct(productItemId: number): Promise<Product> {
  const response = await fetch(`/api/detail/${productItemId}`);
  const productItem = await response.json();
  return productItem;
}
console.log(fetchProduct(12));

export default function ProductDetail() {
  const { productItemId } = useParams();
  const [item, setItem] = useState<Product>();

  useEffect(() => {
    async function loadProduct(productItemId: number) {
      try {
        const product = await fetchProduct(productItemId);
        setItem(product);
      } catch (error) {
        console.error(error);
      }
    }
    if (productItemId) {
      loadProduct(+productItemId);
    }
  }, [productItemId]);
  console.log({ item });
  if (!item) {
    return null;
  }
  return (
    <div className="detail-wrapper w-full justify-center">
      <div className="detail-background flex justify-center w-full h-screen bg-yellow-100">
        <div className="w-11/12 flex my-9 h-11/12 bg-white">
          <div className="image-div flex justify-center items-center w-2/4 h-auto">
            <div className="w-11/12 h-11/12 flex justify-center items-center">
              <img
                className="image w-auto h-auto align-middle"
                src={item.imageUrl}
              />
            </div>
          </div>
          <div className="details-div flex items-center w-2/4 pl-12">
            <div className="text-div w-auto h-auto">
              <h1 className="detail-brand w-fit">{item.name}</h1>
              <p className="detail-desc">{item.desc}</p>
              <div>
                <div className="price-weights-div">
                  <div className="og-price-div flex">
                    <p className="og-price line-through mt-9">
                      {add30(item.price)}
                    </p>
                    <p className="og-price text-slate-600 px-2 bg-red-400 mt-9 ml-2">
                      -30%
                    </p>
                  </div>
                  <p className="detail-price bg-green-300 w-fit px-1 mt-2">
                    {toDollars(item.price)}
                  </p>
                </div>
              </div>
              <div className="flex column-2">
                <div>
                  <div>
                    <div>
                      <p className="detail-select mt-12">Select a Size:</p>
                      <div className="sizes flex mt-2">
                        <SizeButton />
                        <SizeButton />
                        <SizeButton />
                      </div>
                    </div>
                    <div>
                      <p className="detail-quantity mt-5">Quantity:</p>
                      <div className="quantity-div flex mt-2">
                        <div className="plus-button flex justify-center">
                          <PiPlusCircleBold />
                        </div>
                        <div className="quantity-shown bg-slate-300 flex justify-center mx-2">
                          1
                        </div>
                        <div className="minus-button flex justify-center">
                          <PiMinusCircleBold />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="weight-box flex border border-solid border-black ml-8 mt-10">
                  <div className="weight-text flex flex-col w-full  h-full justify-around py-2">
                    <p>S: 2lbs 7oz</p>
                    <p>S: 2lbs 7oz</p>
                    <p>S: 2lbs 7oz</p>
                  </div>
                </div>
              </div>
              <div className="add-to-cart-div flex justify-center">
                <div className="add-to-cart flex justify-center mt-8 mb-6">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SizeButton() {
  return (
    <div className="size-select bg-slate-300 flex justify-center mr-4">S</div>
  );
}
