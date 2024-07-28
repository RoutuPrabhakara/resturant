import React from 'react'
import './Style.css'

function Nav() {
  const Data=[{
  image:"https://th.bing.com/th/id/OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo?w=240&h=180&c=7&r=0&o=5&pid=1.7",
  para:"poster1",
  ruppes:"&23.92",
  paragraph:"lorem ipsum dolor sit amet, consectet"
  },
  {
    image:"https://th.bing.com/th/id/OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo?w=240&h=180&c=7&r=0&o=5&pid=1.7",
    para:"poster1",
    ruppes:"&23.92",
    paragraph:"lorem ipsum dolor sit amet, consectet"
    },
    {
      image:"https://th.bing.com/th/id/OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo?w=240&h=180&c=7&r=0&o=5&pid=1.7",
      para:"poster1",
      ruppes:"&23.92",
      paragraph:"lorem ipsum dolor sit amet, consectet"
      },
    ]

    const Data1=[{
      img:"https://th.bing.com/th/id/OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo?w=240&h=180&c=7&r=0&o=5&pid=1.7",
      },
      {
        img:"https://th.bing.com/th/id/OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo?w=240&h=180&c=7&r=0&o=5&pid=1.7",
        },
        {
          img:"https://th.bing.com/th/id/OIP.Pq8MPxEGieC4WCJZzGYV2wHaEo?w=240&h=180&c=7&r=0&o=5&pid=1.7",
          }
  
  ]
  const Data3=[{
    para:"lorem ipsum dolor sit amet, consect",
    image:"https://th.bing.com/th?id=OIP.88U_XTsYICEJKNBtXBG9gAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    Name:"jennifier lewis"
  },
  {
    para:"lorem ipsum dolor sit amet, consect",
    image:"https://th.bing.com/th?id=OIP.88U_XTsYICEJKNBtXBG9gAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    Name:"jennifier lewis"
  },
  {
    para:"lorem ipsum dolor sit amet, consect",
    image:"https://th.bing.com/th?id=OIP.88U_XTsYICEJKNBtXBG9gAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    Name:"jennifier lewis"
  }



]


const data7=[{
  image:"https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7",
  Name:"Security payment",
  para:"All our payments our ssl secure"
},
{
  image:"https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7",
  Name:"Deliverd with care",
  para:"All our payments our ssl secure"
},
{
  image:"https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7",
  Name:"excellent service",
  para:"All our payments our ssl secure"
}








]
  return (
    <div>
      <nav>
        <div className="card">
          <div className=" d-flex justify-content-between align-items-center">
          <h2 className='text-primary m-3'>EARTH STORE</h2>
            <ul>
             
              <div className="right-side d-flex gap-3 fs-4 text-primary">
              <a href=""><li>HOME</li></a>
               <a href=""><li>ABOUT</li></a>
                <a href=""><li>SHOP</li></a>
               <a href=""><li>CONTACT</li></a>
              </div>
            </ul>
            
          </div>
        </div>
       
      </nav>
      <div className="container d-flex justify-content-between">
      <div className="Data mb-3 p-3 d-flex gap-5">
        {
          Data.map((item,index)=>{
            return(
              <div className="card1 shadow" key={index}>
              <img src={item.image} alt={item.para} />
              <p>{item.para}</p>
              <p>{item.ruppes}</p>
              <p>{item.paragraph}</p>
              </div>
            )
          })
        }
     
      </div>
      </div>
      <div className="data2 d-flex justify-content-between ">
       {
          Data1.map((item,index)=>{
            return(
             <div className="data1">
              <img src={item.img} alt="" />
              <p>Poster:v1</p>
              <p>&17.99</p>
             </div>
            )
          })
        }
       </div>
       <h3 className='text-center text-primary'>What our customers Say</h3>
       <div className="Data4 d-flex justify-content-between mt-3 p-3  ">
        {
          Data3.map((item,index)=>{
            return(
              <div className="card2 shadow " key={index}>
              <p>{item.para}</p>
              <img src={item.image} alt={item.para} className='' />
              <p>{item.Name}</p>
              </div>
            )
          })
        }
       </div>
       <div className="data5">
        <center>
          <h2 className='text-primary m-3 p-3'>Give the Gift of a  <br />Postcard</h2>
          <p>Give the gift of a memory with gift</p>
          <button style={{backgroundColor:"green " ,color:"red"}}>PURCHASE A POSTCARD</button>
        </center>
       </div>
       <div className="data7 text-center m-3 p-3 ">
        {
          data7.map((item,index)=>{
            return(
              <div className="card3 shadow" key={index}>
              <img src={item.image} alt={item.para} />
              <p>{item.Name}</p>
              <p>{item.para}</p>
              </div>
            )
          })
        }
       </div>
       <center>
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Shop</h5>
        <h5>Contact</h5>
       </center>
       <h2 className='text-center m-3 p-3 '>Earth Store</h2>
       <p className='text-center m-3 p-3'>Copyrights @ 2024 planet Earth Store</p>
    </div>
  )
}

export default Nav