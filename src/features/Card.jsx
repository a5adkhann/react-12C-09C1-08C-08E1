import React from 'react'

const Card = () => {

    const cardData = [
        {
            id: 1,
            title: "Product 1",
            detail: "Detail 1",
            img: "./product.jpg"
        },
        {
            id: 2,
            title: "Product 2",
            detail: "Detail 2",
            img: "./product1.jpg"
        },
        {
            id: 3,
            title: "Product 3",
            detail: "Detail 3",
            img: "./product2.jpg"
        },
        {
            id: 4,
            title: "Product 4",
            detail: "Detail 4",
            img: "./product3.jpg"
        }
    ]




  return (
    <>
        <div className="cards grid grid-cols-3 place-items-center py-20">

            {cardData.map((c) => (
            <div className="card border border-gray-300 shadow-md w-[300px]">
                <div className="card-img">
                    <img src={c.img} className='w-[100%]' alt="" />
                </div>
                <div className="card-content p-3">
                    <p>{c.title}</p>
                    <p>{c.detail}</p>
                </div>
            </div>
            ))}

        </div>
    </>
  )
}

export default Card
