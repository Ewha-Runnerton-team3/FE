import React, { useState } from "react";
import { Recipe } from "../../../api/RecipeApiType.ts";

interface Props {
    totalItems: Recipe[]; // 부모로부터 받은 totalItems
}

const RecommendResult: React.FC<Props> = ({ totalItems }) => {
    return (
        <div>
          <div className="flex bg-lemon-10 text-goldbrown-90 font-semibold text-lg px-[40px] py-2">
            추천 결과
          </div>

          {/** 추천 레시피 결과 */}
          <div className="p-10 space-y-10">
            {totalItems.map((recipe, index) => (
              <div key={index} className="flex p-10 w-full h-[150px] rounded-lg bg-yellow-30">
                <p className="flex font-semibold text-lg p-5 space-x-10">
                  {/* 인덱스 출력 */}
                  {index}

                  {/* 레시피 이름 출력 */}
                  {recipe.name}

                  <div>
                    <div>
                      <p>조리 예상 시간</p>
                      {recipe.totalTime}
                    </div>
                    <div>
                      <p>조리 난이도</p>
                      {recipe.difficulty}
                    </div>
                    <div>
                      <p>조리 스코어</p>
                      {recipe.difficultyScore}
                    </div>
                  </div>
                </p>
              </div>
            ))}
          </div>
          
        </div>
    );
}

export default RecommendResult