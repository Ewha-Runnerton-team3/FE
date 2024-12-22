import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // useAuth 훅 임포트

const LoginPage = () => {
    const { setUserId } = useAuth(); // useAuth 훅을 사용하여 setUserId 가져오기
    const [inputUserId, setInputUserId] = useState<number>(0);
    
    const handleLogin = () => {
        // 로그인 성공 후 userId를 setUserId로 설정
        if (typeof inputUserId === 'number') {
        setUserId(inputUserId); // 실제 로그인 로직을 사용하여 userId 설정
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="number"
                value={inputUserId}
                onChange={(e) => setInputUserId(Number(e.target.value))}
                placeholder="Enter user ID"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
