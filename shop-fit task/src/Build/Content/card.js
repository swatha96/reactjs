import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux_/productActions"

export default function Card({openCart,setopenCart,userCart,showHistory,setShowHistory,history}){

    const {message} =useSelector(
        (state)=>({
            message:state.product.message
        }),shallowEqual
    );

    const products=[
        {id:1,name:"Shoes",price:"600",pic:"https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI="},
        {id:2,name:"Sarees",price:"800",pic:"https://m.media-amazon.com/images/I/61-DqpiHxgS._UL1500_.jpg"},
        {id:3,name:"Bags",price:"700",pic:"https://5.imimg.com/data5/CM/SE/MY-13891787/fancy-hand-bag-500x500.jpg"},
        {id:4,name:"Shirts",price:"900",pic:"https://sc01.alicdn.com/kf/Hdb163d614a9e49d297557b776842adb6O/238989452/Hdb163d614a9e49d297557b776842adb6O.jpg_.webp"}
    ]

    const dispatch = useDispatch();
    const[openView, setOpenView] =useState(false);
    const[viewProduct,setViewProduct] = useState();
    const[popup,setPopUp] = useState(false);

    const fetchProduct=(product)=>{
        setOpenView(true)
        setViewProduct(product)
    }

    const addCart=(viewProduct)=>{
        dispatch(actions.createCart(viewProduct));
        setOpenView(false)
        setPopUp(true);
    }

    const productDelete=(productId)=>{
        dispatch(actions.deleteCart(productId));
    }

    const closePopup=()=>{
        setPopUp(false)
    }

    const cartClose=()=>{
        setopenCart(false);
    }

    const historyClose=()=>{
        setShowHistory(false)
    }

    const closeView=()=>{
        setOpenView(false)
    }
    return(
        <>
        {popup?<div className="row">
            <div className="popup row">
                <div className="col-md-9">
                    {message}
                </div>
                <div className="col-md-1" onClick={()=>closePopup()}>
                    x
                </div>
            </div>
        </div>:
        <></>}
        <div className="row">
            {!openView&&!openCart&&!showHistory?products.map((product,index)=>(
                <>
                <div key={product.id} className="col-sm-3" >
                    <div key={product.name} className=" product card" onClick={()=>fetchProduct(product)}>
                        <div key={product.price} className="card-body" >
                            <img key={product.id} className="card-img-top" style={{height:"290px"}} src={product.pic} alt={product.name} />
                            <h5 key={product.pic} className="card-title" >{product.name}</h5>
                        </div>
                        <div key={index} className="card-footer">
                            RS {product.price}/-
                        </div>
                    </div>
                </div>
                <br/>
                 </>
            )):<></>}
        </div>
        {!openCart&&!showHistory&&openView&&viewProduct&&viewProduct&&<div className="row">
            <div className="col-sm-6" >
                <div className=" product card">
                    <div  className="card-body" >
                        <img className="card-img-top" style={{height:"400px"}} src={viewProduct.pic} alt={viewProduct.name} />
                    </div>
                </div>
            </div>
            <div className="col-sm-6" >
                <div className=" product card">
                    <div  className="card-body">
                        <h5  className="card-title" >{viewProduct.name}</h5>
                        <h5 > Just RS {viewProduct.price}/- only</h5>
                        <br/>
                        <h4>Limited Offer!!!</h4>
                        <div className="card-footer">
                            20% offer on this product
                        </div>
                        <br/>
                        <div className="card-footer" style={{backgroundColor:"whitesmoke", textAlign:"center"}} type="submit" onClick={()=>closeView()}>
                        close
                        </div>
                    </div>
                    <div className="user-menu button" type="submit" onClick={()=>closeView()}>Buy Now!!!</div>
                    <div className="user-menu button" type="submit" onClick={()=>addCart(viewProduct)}>Add Cart</div>
                </div>
            </div>
        </div>}
        {openCart?
            <>
            <div className="row myCart">
                <div className="col-md-8">
                    <h3 style={{color:"blue"}}>My Cart</h3>
                </div>
                <div className="col-md-2">
                    <div className="user-button button" type="submit" onClick={()=>cartClose()}>Buy now</div>
                </div>
                <div className="col-md-1">
                    <div className="user-button button" type="submit" onClick={()=>cartClose()}>close</div>
                </div>
            </div>
                { userCart&&userCart.entities.map((product,index)=>(
                        <div key={product.productId}className="row">
                            <div key={product.productId} className="col-lg-2">
                                <div key={product.productId} className="card-body">
                                    <img key={product.productId} className="card-img-top" style={{height:"100px",width:"100px"}} src={product.pic} alt={product.name} />
                                </div>
                            <br/>
                            </div>
                            <div style={{color:"white"}} className="col-md-3">
                                <div key={product.productId} className="card-body">
                                    <h3>{product.name}</h3>
                                    <h4 >Price:{product.price}/- only</h4>
                                </div>
                            </div> 
                            <div style={{color:"blue"}} className="col-md-3">
                                <div className=" product" style={{marginTop:"30px",height:"60px",width:"350px" }}>                            
                                    <div key={product.productId} className="card-body"  >
                                        <div className="user-view button" >View More {product.name}</div>
                                    </div>
                                </div>
                            </div> 
                            <div style={{color:"red"}} className="col-md-3">
                                <div className=" product " style={{marginTop:"30px",height:"60px",width:"90px"}}>                            
                                    <div key={product.productId} onClick={()=>productDelete(product.productId)} className="card-body" >
                                        <div className="user-delete button">Delete</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                ))}
            </>:
            <>{showHistory?<>
                <div className="row myCart">
                    <div className="col-md-10">
                        <h3>My History</h3>
                    </div>
                    <div className="col-md-1">
                        <div className="user-menu button" type="submit" onClick={()=>historyClose()}>close</div>
                    </div>
                </div>
                {history&&history.transactions.map((product,index)=>(<div style={{height:"200px"}}className="row">
                    <div className="col-sm-4" >
                        <div  className=" product card">
                            <div  className="card-body" >
                                <img className="card-img-top" style={{height:"150px",width:"200px"}} src={product.pic} alt={product.name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7" >
                        <div className=" product card">
                            <div  className="card-body">
                                <h5  className="card-title" >{product.name}</h5>
                                <h5 > RS {product.price}/-</h5>
                                <h5>Delivered on 3rd feb</h5>
                            </div>
                            <div className="user-view button" type="submit" onClick={()=>closeView()}>Successfully Delivered</div>
                        </div>
                    </div>
                </div>))}
            </>:<></>}
            
            </>}
            
        </>
    )
}