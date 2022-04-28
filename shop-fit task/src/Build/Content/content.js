import React from "react";
import "../../_Styles_/content.scss"
import Card from "./card";
import { shallowEqual, useSelector } from "react-redux";

export default function Content({openCart,setopenCart,showHistory,setShowHistory}){

    const {entities} = useSelector(
        (state)=> ({       
            entities:state.product,
        }),
        shallowEqual
    )

    const {transactions} = useSelector(
        ({auth})=> ({       
            transactions:auth.user,
        }),
        shallowEqual
    )

    return(
        <div className="product-body">
            <div className="content-area">
                <><Card openCart={openCart} setopenCart={setopenCart} showHistory={showHistory} setShowHistory={setShowHistory} userCart={entities} history={transactions}/></>
                <br/>
                <br/>
                {/* <ShowMore/> */}
            </div>
        </div>
    )
}