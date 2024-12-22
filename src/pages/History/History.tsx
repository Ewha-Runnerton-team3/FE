import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header"
import MenuBar from "../../components/layout/MenuBar"

const History = () => {
    // 페이지 상태 관리
    const itemsPerPage = 3; // 한 페이지에 보여줄 항목 수
    const [currentItems, setCurrentItems] = useState<string[]>([]); // 현재 페이지에 표시할 아이템들
    //const [totalItems, setTotalItems] = useState<string[]>([]);     // 전체 아이템들
    const [totalItems, setTotalItems] = useState<string[]>(["블라블라", "블라블라", "블라블라", "블라블라"]);     // 전체 아이템들, 임시1, 임시2
    const [currentPage, setCurrentPage] = useState(1);    // 아이템 페이지 상태 관리
    const [totalPages, setTotalPages] = useState(1);      // 전체 페이지 상태 관리


    // 페이지 변경에 따라 표시할 데이터와 총 페이지 수 계산
    useEffect(() => {
      // 전체 페이지 수 계산
      setTotalPages(Math.ceil(totalItems.length / itemsPerPage));

      // 현재 페이지에 보여줄 아이템들 설정
      const startIndex = (currentPage - 1) * itemsPerPage;
      setCurrentItems(totalItems.slice(startIndex, startIndex + itemsPerPage));
    }, [currentPage, totalItems]); // currentPage 또는 totalItems가 변경될 때마다 실행


    // 페이지 변경 함수
    const movePage = (page: number) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };


    return (
        <div>
          <Header/>
          <MenuBar/>

          {/** 데이터 배치 순서 */}
          <div className="flex justify-end bg-lemon-10 text-goldbrown-90 font-semibold text-lg px-[40px] py-2">
            최신순
          </div>

          {/** 현재 페이지에 해당하는 데이터 */}
          <div className="p-10 flex space-x-10">
            {currentItems.map((item, index) => (
              <div key={index} className="w-[300px] h-[300px] rounded-lg bg-yellow-30">
                <div className="h-[230px]"></div>
                <p className="flex font-semibold text-lg p-5">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/** 페이지네이션 */}
          <div className="px-10">
            <button
              className="px-4 py-2 bg-grayscale-30 rounded-md"
              onClick={() => movePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            
            {/** 번호 */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-yellow-70 text-white"
                    : "bg-grayscale-20"
                }`}
                onClick={() => movePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}


            <button
              className="px-4 py-2 bg-grayscale-30 rounded-md"
              onClick={() => movePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
    );
}

export default History