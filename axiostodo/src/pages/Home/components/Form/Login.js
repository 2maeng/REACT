import { Button } from 'components/Button/Style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import * as S from './Style';
import useInput from 'hooks/useInput';
import useInputs from 'hooks/useInputs';
import axios from 'axios';
import AuthApi from 'apis/authApi';
import TokenService from 'repository/TokenService';
import { useAuth } from 'contexts/auth';

function LoginForm() {
  const navigate = useNavigate();
  // const [email, onChangeEmail, setEmail] = useInput('');
  // const [password, onChangePassword, setPassword] = useInput('');
  const auth = useAuth();
  const { state } = useLocation();

  const [{ email, password }, onChangeForm] = useInputs({
    email: '',
    password: '',
  });

  // react-hook-form, zod
  // const email = useRef();
  // const password = useRef();

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: response } = await AuthApi.login(email, password);
      auth.login(response.token);
      // token == access_token
      // token 값을 저장할 것, token 값이 있다면 로그인이 된 것
      // 프론트 엔드의 로그인 유무 판단
      /**
       * 1. 웹 스토리지 (로컬, 세션스토리지)
       * 2. state (redux-persist)
       * 3. refreshToken
       *    access_token은 어디에 저장하든 탈취 위험
       *    따라서 access_token이 탈취되어도 이 토큰에 기간을 설정해서
       *    해커한테 제어권이 넘어가는 시간을 최소화
       *
       *    access_token => 만료 => 사용자는 접근 권환 x => 프론트엔드 로그아웃 처리를 해야함
       *    사용자가 불편해요 안해요
       *
       *    요청할 때 access_token --> refresh --> access_token 만료 (error)
       *    프론트엔드 --> access_token 재발급 --> 다시 http request에 실어서 재요청
       */
    } catch (err) {
      console.error(err);
      alert('아이디와 비밀번호를 확인해주세요');
    }
  };

  /** access_token이 있다면 페이지 접근을 막고 메인 페이지로 이동 */
  useEffect(() => {
    if(auth.accessToken) return navigate('/todo');
  }, []);

  /** 해당 로직은 필수가 아니라 어떻게 로그아웃 후 처리를 할 건지 설계에 따라 달라짐 */
  useEffect(() => {
    if(!auth.accessToken) return;
    if(!state) return navigate("/todo");
    navigate(state.from);
  }, [auth]);

  /**
   * 1. 관심사분리 axios를 하나의 service 파일로 만들 것
   * 2. axios.interceptor access_token을 넣어줄 것 (header)
   * 3. locked access_token이 없으면 todo 요청 불가
   * 4. 관심사분리 localstorage --> 하나의 service 파일로 만들 것
   * 5. error handling , error boundary
   * 6. eslint, prettier
   * 7. suspense ==> skeleton UI
   */

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name="email" onChange={onChangeForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" name="password" onChange={onChangeForm} />
        <span>비밀번호</span>
      </S.InputBox>
      <Button variant={'primary'} size={'full'}>
        로그인
      </Button>
    </S.Form>
  );
}
export default LoginForm;
