import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // useAuth 훅 임포트
import Header from "../../components/layout/Header"
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import
import { PATHS } from '../../constants/paths';

import { postLogin } from "../../api/LoginApiService";



const LoginPage = () => {
    // useAuth 훅을 사용하여 전역변수수 setUserId 가져오기
    const { setUserId } = useAuth();

    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    
    const handleLogin = async () => {
        // API 요청
        try {
            const loginData = await postLogin(
              { loginId:id, password:pwd },
              {}
            );
            

            // 로그인 성공 시 처리
            const { user, token } = loginData;

            // 로컬 스토리지에 로그인 정보 저장
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // 로그인 성공 후 전역 AuthContext에 userId 저장
            setUserId(user.id);
            
            // 로그인 성공 후 메인홈 페이지로 리디렉션
            navigate(PATHS.HOME);


        } catch (err) {
            // 에러 발생 시 처리
            console.error('로그인 실패:', err);
        }
    };
    
    const navigate = useNavigate();
    const handleKakaoLogin = () => {
        // 이동 (리디렉션)
        navigate("/auth/kakao");
        
        // 로그인 성공 후 userId를 받기?
        //setUserId();
    };

    return (
        <div>
            <Header/>
            <div className="bg-yellow-50">
                <h2>서비스 아이콘</h2>

                <p>아이디</p>
                <input
                    type="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디를 입력해주세요"
                />
                
                <p>비밀번호</p>
                <input
                    type="pwd"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="비밀번호를 입력해주세요"
                />

                <div
                    className="bg-grayscale-90 text-grayscale-0"
                    onClick={handleLogin}>
                    로그인
                </div>


                <div
                    className="bg-lemon-50 text-goldbrown-80"
                    onClick={handleKakaoLogin}>
                    카카오 로그인
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
