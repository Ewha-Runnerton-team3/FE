import React, { useState } from "react";
import Header from "../../components/layout/Header"
import MenuBar from "../../components/layout/MenuBar"

import SavedRecipe from "./components/SavedRecipe"

const Favorite = () => {
    // 레시피/재료 토글 상태
    const [toggle, setToggle] = useState<number>(0);
    
    return (
        <div>
          <Header/>
          <MenuBar/>

          {/* 조건부 렌더링 */}
          {toggle === 0? (
            <>
              {/** 토글 버튼 */}
              <div className="flex bg-lemon-10 font-semibold text-lg px-[40px] py-2">
                <p className="text-goldbrown-90 mr-10 cursor-pointer"
                   onClick={() => setToggle(0)}>
                  내가 저장한 레시피
                </p>
                <p className="text-grayscale-50 cursor-pointer"
                   onClick={() => setToggle(1)}>
                  내가 저장한 재료
                </p>
              </div>
              
              {/** 렌더링 */}
              <SavedRecipe />
            </>
          ) : (
            <>
              {/** 토글 버튼 */}
              <div className="flex bg-lemon-10 font-semibold text-lg px-[40px] py-2">
                <p className="text-grayscale-50 mr-10 cursor-pointer"
                  onClick={() => setToggle(0)}>
                  내가 저장한 레시피
                </p>
                <p className="text-goldbrown-90 cursor-pointer"
                  onClick={() => setToggle(1)}>
                  내가 저장한 재료
                </p>
              </div>
              
              {/** 렌더링 */}
            </>
          )}
        </div>
    );
}

export default Favorite