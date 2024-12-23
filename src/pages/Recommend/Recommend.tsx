import React, { useState } from "react";
import Header from "../../components/layout/Header"
import MenuBar from "../../components/layout/MenuBar"

import Input from "./components/Input"
import Result from "./components/Result"
import { Recipe } from "../../api/RecipeApiType.ts";

const Recommend = () => {
    // 제출 여부를 위한 상태
    const [submitted, setSubmitted] = useState(false);
    // 레시피 리스트
    const [recipeList, setRecipeList] = useState<Recipe[]>([]);
    
    // 전송 버튼 클릭 시 실행되는 함수
    const handleSubmit = () => {
      // 입력 상태를 'submitted'로 변경
      setSubmitted(true);

      // API 호출

      // Recipe 리스트 업데이트
      //setRecipeList()
    };
    

    return (
        <div>
          <Header/>
          <MenuBar/>

          {/* 조건부 렌더링 */}
          {!submitted ? (
            <Input
              handleSubmit={handleSubmit}
            />
          ) : (
            <Result totalItems={recipeList}/>
          )}
        </div>
    );
}

export default Recommend